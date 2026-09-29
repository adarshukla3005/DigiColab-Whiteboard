# Design — Fix Room Join and Live Chat Functionality

## Architecture Overview

This feature fixes two interconnected subsystems within the existing Next.js + Socket.IO + MongoDB architecture. The room join validation logic resides in `server/index.ts` within the Socket.IO connection handler and interacts with the `Room` MongoDB model (`server/db/models/Room.ts`) to validate invites, check capacity, and enforce expiration rules. The live chat system uses Socket.IO events (`new_msg`, `send_msg`) between the client-side `Chat.tsx` component and the server's WebSocket handlers, with message persistence via the existing `Message` model (`server/db/models/Message.ts`). Both fixes will be implemented primarily in `server/index.ts`, with schema extensions to the Room model and minor client-side adjustments to handle new error states and typing indicators.

## Key Decisions

1. **Extend Room schema in-place** — Add `lastActivity`, `maxCapacity`, `inviteCode`, and `creatorId` fields to the existing `server/db/models/Room.ts` schema rather than creating a new model, because the Room model is already the single source of truth for room state.

2. **Validate on socket `join-room` event** — Implement validation logic in the existing `server/index.ts` Socket.IO connection handler before allowing socket.join(roomId), because this is where room membership is already managed and where we can block invalid joins before state corruption occurs.

3. **Use Socket.IO rooms for message broadcasting** — Continue using Socket.IO's built-in rooms (`io.to(roomId).emit`) for chat delivery rather than manual client tracking, because it provides reliable broadcast semantics and automatic cleanup on disconnect.

4. **Persist messages on send, not on receive** — Save messages to MongoDB immediately when `send_msg` is received on the server before broadcasting, because this ensures message history is always complete even if clients disconnect during broadcast.

5. **Implement typing indicators with debounced events** — Use `typing-start` and `typing-stop` events with client-side debouncing (500ms) to avoid event spam, because typing indicators are high-frequency UI updates that don't require persistence.

6. **Background job for room expiration** — Add a setInterval task in `server/index.ts` that runs every 5 minutes to mark inactive rooms (lastActivity > 24 hours) as `isActive: false`, because active polling is simpler than event-driven TTL in MongoDB and matches the existing server architecture.

## Module Boundaries

### Modified Existing Modules

- **`server/db/models/Room.ts`** — Add new schema fields: `lastActivity: Date`, `maxCapacity: Number` (default 10), `inviteCode: String`, `creatorId: String`, update indexes
- **`server/db/models/Message.ts`** — No changes needed, schema already sufficient
- **`server/index.ts`** — Add room validation functions (`validateRoomJoin`, `checkRoomCapacity`, `checkRoomExpiration`), modify socket `join-room` handler to perform validation and emit specific errors, add `send_msg` handler to persist messages to MongoDB before broadcast, add typing event handlers (`typing-start`, `typing-stop`), add background expiration job, update `lastActivity` on room activity
- **`modules/room/components/chat/Chat.tsx`** — Add listeners for `receive-message`, `user-typing`, `user-stopped-typing` events, add state for typing users, request message history on mount via new `request-history` event
- **`modules/room/components/chat/ChatInput.tsx`** — Modify to emit `send-message` event with full payload (roomId, userId, username, message), add typing detection to emit `typing-start`/`typing-stop`
- **`modules/room/components/Room.tsx`** — Add error handling for `room-error` event, display specific error modals for "full", "expired", "not-found" reasons
- **`pages/[roomId].tsx`** — Pass roomId and user context to Room component for join validation

### New Modules

- **`server/db/operations/messageOperations.ts`** — New file with functions: `saveMessage(roomId, userId, username, message)`, `getMessageHistory(roomId, limit?)` to encapsulate Message model operations and keep server/index.ts clean
- **`server/utils/roomValidation.ts`** — New file with validation helpers: `validateRoomJoin`, `checkRoomCapacity`, `checkRoomExpiration`, `expireInactiveRooms` to separate concerns from main socket handler
- **`modules/room/modals/RoomErrorModal.tsx`** — New modal component to display room join errors with specific messages for "full", "expired", "not-found" states

## External Dependencies

- **socket.io** (existing, ^4.x) — WebSocket server for real-time chat and typing indicators
- **socket.io-client** (existing, ^4.x) — Client-side WebSocket connection
- **mongoose** (existing, ^6.x or ^7.x) — MongoDB ODM for Room and Message models
- **mongodb** (existing, peer dependency of mongoose) — Database for persistent storage

No new external dependencies required. All functionality can be implemented with existing libraries.

## Trade-offs & Risks

**Risk: Race conditions on room capacity checks** — If multiple users join simultaneously, the capacity check (read user count, then add user) could allow >10 users. We mitigate this by performing the capacity check inside a MongoDB transaction or by using atomic `$inc` operations on a `currentUserCount` field, though the initial design uses a simpler read-then-write approach acceptable for the 10-user scale. **Risk: Message delivery failures if MongoDB is down** — If message persistence fails but broadcast succeeds, message history will be incomplete for new joiners. We mitigate by wrapping persistence in try-catch and emitting a `message-failed` event back to the sender on error, allowing client-side retry. **Trade-off: Client-side vs server-side typing debounce** — We chose client-side debouncing to reduce network traffic, but this means typing indicators won't work if clients implement it incorrectly; server-side debouncing would be more reliable but increase server load. **Trade-off: Polling for expiration vs MongoDB TTL** — We use a setInterval background job rather than MongoDB TTL indexes because it gives us more control over expiration logic (e.g., "all users left" condition) and fits the existing server architecture, but it won't scale beyond a few thousand rooms without moving to a job queue system.
