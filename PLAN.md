# Fix the Room join and chat panel — OpenSpec Plan


---

# Proposal

# Fix Room Join and Live Chat Functionality

## Motivation

Users can successfully create rooms and generate shareable links/codes, but when other users attempt to join using these credentials, they encounter errors claiming the room is either full or doesn't exist—even though the room was just created and has capacity. Additionally, the live chat panel is non-functional: users can type messages and click send, but messages are never transmitted or received by other participants. These critical failures prevent the core collaborative functionality of the application from working, rendering rooms unusable for their intended purpose of small-group real-time communication.

## Proposed Change

This feature will fix two interconnected systems: room join validation and WebSocket-based chat delivery. For room joining, we will repair the validation logic that checks invite links/codes against the database, ensure room capacity (up to 10 users) is correctly enforced, verify room active status (not expired within 24 hours of inactivity), and fix the error handling that incorrectly reports rooms as full or non-existent. For live chat, we will restore WebSocket message transmission so that when users send messages they are broadcast to all connected room participants, ensure message history is persisted and visible to new joiners, and implement typing indicators. Both fixes will address issues in the server-side validation, database query logic, and WebSocket connection management.

## Success Criteria

1. **Room Join Success Rate**: Users with valid invite links/codes can successfully join rooms that exist, are active, and have available capacity (< 10 users) with 100% success rate
2. **Chat Message Delivery**: Messages sent by any user in a room are received and displayed by all other connected users within 2 seconds with zero message loss
3. **Message Persistence**: New users joining an existing room can view the complete chat history from before they joined
4. **Error Accuracy**: Room join errors correctly distinguish between "room full" (≥10 users), "room expired" (inactive >24 hours or deleted), and "room not found" (invalid link/code)
5. **Typing Indicators**: When a user is typing, other participants see a real-time typing indicator within 500ms
6. **Room Lifecycle**: Rooms automatically expire after 24 hours of inactivity or when all users leave, and creators can manually delete rooms

## Out of Scope

1. Rich media messages (images, files, emojis) — text-only messaging as specified
2. Read receipts or message delivery confirmations beyond basic delivery
3. User authentication system improvements or invite link security enhancements
4. Room capacity expansion beyond 10 users
5. Mobile-specific optimizations or responsive design improvements

---

# Spec

# Spec — Fix Room Join and Live Chat Functionality

## Behaviors

- When a user receives a room link or code and attempts to join, the system validates that the room exists in the database, is active (not expired), and has capacity available (fewer than 10 users).
- Room join errors display specific, accurate messages distinguishing between "room full" (10+ users already joined), "room expired" (inactive for 24+ hours or manually deleted), and "room not found" (invalid link/code).
- When a user types a message in the chat input and clicks send, the message is transmitted via WebSocket to all connected participants in the room within 2 seconds.
- New users joining an existing room can view the complete message history from before they joined the room.
- When a user is actively typing in the chat input, other participants in the room see a typing indicator within 500ms.
- Rooms automatically expire and become inactive after 24 hours of no user activity or when all users leave the room.
- Room creators can manually delete their rooms, which immediately sets the room status to inactive and prevents new joins.
- All chat messages are persisted to the database and associated with the correct room, user, and timestamp.

## APIs / Data Changes

### WebSocket Events (Socket.IO)

**Client → Server:**
- `join-room` — payload: `{ roomId: string, username: string, roomCode?: string }`
  - Response events: `joined` (success) or `room-error` (failure with reason)
- `send-message` — payload: `{ roomId: string, userId: string, username: string, message: string }`
  - Broadcasts `receive-message` to all room participants
- `typing-start` — payload: `{ roomId: string, userId: string, username: string }`
  - Broadcasts `user-typing` to other room participants
- `typing-stop` — payload: `{ roomId: string, userId: string }`
  - Broadcasts `user-stopped-typing` to other room participants

**Server → Client:**
- `joined` — payload: `{ roomId: string, users: Map<string, string>, messageHistory: Message[] }`
- `room-error` — payload: `{ reason: 'full' | 'expired' | 'not-found', message: string }`
- `receive-message` — payload: `{ userId: string, username: string, message: string, timestamp: Date }`
- `user-typing` — payload: `{ userId: string, username: string }`
- `user-stopped-typing` — payload: `{ userId: string }`
- `message-history` — payload: `{ messages: Message[] }` (sent on room join)

### Database Schema Changes

**Room Model** (existing, modifications):
```typescript
{
  roomId: string (indexed, unique)
  createdAt: Date
  lastActivity: Date // NEW FIELD — track inactivity for expiration
  users: Map<string, string> // socketId → username
  usersMoves: Record<string, any[]>
  drawed: any[]
  isActive: boolean
  maxCapacity: number // NEW FIELD — default 10
  inviteCode?: string // NEW FIELD — optional invite code for validation
  creatorId: string // NEW FIELD — track room creator for deletion rights
}
```

**Message Model** (existing, no changes needed):
```typescript
{
  roomId: string (indexed)
  userId: string
  username: string
  message: string
  timestamp: Date
}
```

### Server-Side Functions/Methods

**Room Validation:**
- `validateRoomJoin(roomId: string, inviteCode?: string): Promise<{ valid: boolean, reason?: string }>` — checks room existence, active status, capacity, and invite code match
- `checkRoomCapacity(roomId: string): Promise<{ isFull: boolean, currentCount: number }>` — verifies current user count against max capacity (10)
- `checkRoomExpiration(roomId: string): Promise<boolean>` — checks if lastActivity is >24 hours ago
- `expireInactiveRooms(): Promise<void>` — background task to mark expired rooms as inactive

**Message Operations:**
- `saveMessage(roomId: string, userId: string, username: string, message: string): Promise<Message>` — persist message to database
- `getMessageHistory(roomId: string, limit?: number): Promise<Message[]>` — retrieve messages ordered by timestamp
- `broadcastMessage(roomId: string, message: Message): void` — emit message to all room sockets

**Room Lifecycle:**
- `updateRoomActivity(roomId: string): Promise<void>` — update lastActivity timestamp
- `deleteRoom(roomId: string, userId: string): Promise<{ success: boolean, error?: string }>` — validate creator and set isActive to false

## Acceptance Criteria

### AC1: Valid Room Join with Available Capacity

**Given** a room exists with roomId "abc123", is active, has 5 users connected (below the 10-user limit), and the user has a valid invite link/code  
**When** the user submits the room join request with the correct roomId and optional invite code  
**Then** the system validates the room exists, checks capacity (5 < 10), verifies the room is active, emits a `joined` event with the room details and message history, adds the user to the room's users map, broadcasts the new user's presence to existing participants, and the user can see the chat interface

### AC2: Room Join Failure — Room Full

**Given** a room exists with roomId "xyz789", is active, and already has 10 users connected  
**When** an 11th user attempts to join the room  
**Then** the system validates the room, detects that the current user count equals the max capacity (10), emits a `room-error` event with reason "full" and message "This room is full (maximum 10 users)", and does not add the user to the room

### AC3: Room Join Failure — Room Expired

**Given** a room exists with roomId "old456" but its lastActivity timestamp is more than 24 hours in the past  
**When** a user attempts to join the room  
**Then** the system detects the room has expired, emits a `room-error` event with reason "expired" and message "This room has expired due to inactivity", and does not add the user to the room

### AC4: Room Join Failure — Room Not Found

**Given** a user has a room link with roomId "invalid999" that does not exist in the database  
**When** the user attempts to join the room  
**Then** the system queries the database and finds no matching room, emits a `room-error` event with reason "not-found" and message "This room does not exist or has been deleted", and does not proceed with the join

### AC5: Chat Message Send and Delivery

**Given** a user is successfully connected to room "abc123" with 3 other active participants  
**When** the user types "Hello everyone" and clicks send  
**Then** the client emits a `send-message` event with the message payload, the server receives the event, saves the message to the database with the correct roomId, userId, username, and timestamp, broadcasts a `receive-message` event to all connected sockets in the room (including the sender), and all 4 users see the message appear in their chat panel within 2 seconds

### AC6: Message History for New Joiners

**Given** room "chat789" has 15 existing messages in the database from previous chat activity  
**When** a new user successfully joins the room  
**Then** the server retrieves the message history for roomId "chat789" ordered by timestamp ascending, includes the message history in the `joined` event payload, and the new user's chat panel displays all 15 previous messages in chronological order

### AC7: Typing Indicators

**Given** users Alice and Bob are both connected to room "collab123"  
**When** Alice starts typing in the chat input field (triggering a `typing-start` event)  
**Then** the server receives the event, broadcasts a `user-typing` event with Alice's userId and username to other participants, Bob's client receives the event within 500ms and displays "Alice is typing..." below the chat input  
**When** Alice stops typing for 2 seconds or sends the message (triggering a `typing-stop` event)  
**Then** the server broadcasts `user-stopped-typing` and Bob's UI removes the typing indicator

### AC8: Room Expiration After Inactivity

**Given** room "inactive555" was created with the last user activity at timestamp T  
**When** 24 hours pass with no user activity (no joins, no messages, no drawing moves) and a background expiration check runs  
**Then** the system detects lastActivity is >24 hours old, updates the room's isActive field to false, and subsequent join attempts receive a "room expired" error

### AC9: Manual Room Deletion by Creator

**Given** user "creator123" created room "myroom999" and is designated as the creatorId  
**When** the creator initiates a delete room action for roomId "myroom999"  
**Then** the system validates that the requesting userId matches the room's creatorId, sets the room's isActive field to false, disconnects all currently connected users with a notification, and subsequent join attempts receive a "room expired" or "not found" error

## Non-Functional Requirements

### Performance
- Chat message delivery latency must be ≤2 seconds from send to receipt for all participants under normal network conditions
- Typing indicator events must propagate to all room participants within 500ms
- Room join validation (database queries + capacity check) must complete within 1 second
- Message history retrieval must support up to 300 messages per room without significant delay (≤2 seconds)

### Scalability
- The system must support up to 20 concurrent active rooms without performance degradation
- WebSocket connections must be efficiently managed to handle up to 300 simultaneous connected users across all rooms

### Reliability
- Zero message loss: all sent messages must be persisted to the database before broadcasting
- WebSocket reconnection handling: if a connection drops temporarily, message history should be retrievable on reconnect
- Database operations must include appropriate error handling and retry logic for transient failures

### Security
- Room invite codes (if provided) must be validated server-side before granting access
- Users cannot join rooms they don't have valid credentials for
- Room deletion can only be performed by the room creator
- All WebSocket events must validate roomId and userId to prevent unauthorized actions

### Monitoring & Logging
- Log all room join attempts (success and failure) with timestamp, roomId, userId, and reason
- Log all message send/receive events for debugging and audit purposes
- Track WebSocket connection/disconnection events per room for capacity monitoring
- Log room expiration events when background cleanup runs

---

# Design

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

---

# Technical

# Technical Tasks — Fix Room Join and Live Chat Functionality

## Implementation Tasks

### Database Schema Updates

1. **Extend Room schema in `server/db/models/Room.ts`** — Add fields `lastActivity: Date`, `maxCapacity: Number` (default 10), `inviteCode: String`, and `creatorId: String` to the RoomSchema interface and schema definition with appropriate indexes.

2. **Update Room model interface in `server/models/Room.ts`** — Add the same new fields (`lastActivity`, `maxCapacity`, `inviteCode`, `creatorId`) to the in-memory Room type definition to match the MongoDB schema.

### Server-Side Room Validation

3. **Create room validation operations in `server/db/operations/roomOperations.ts`** — Add functions `validateRoomJoin(roomId, inviteCode?)`, `checkRoomCapacity(roomId)`, `checkRoomExpiration(roomId)`, and `updateRoomActivity(roomId)` that query the Room model and return validation results.

4. **Create message persistence operations in `server/db/operations/messageOperations.ts`** (new file) — Add functions `saveMessage(roomId, userId, username, message)` and `getMessageHistory(roomId, limit?)` that interact with the Message model for chat persistence.

5. **Add room expiration background job in `server/index.ts`** — Insert a `setInterval` (every 5 minutes) after MongoDB connection that calls a function to find rooms where `lastActivity < Date.now() - 24 hours` and sets `isActive: false`.

### Socket.IO Event Handlers - Room Join

6. **Modify `join-room` event handler in `server/index.ts`** — Replace the current room join logic to call `validateRoomJoin()`, `checkRoomCapacity()`, and `checkRoomExpiration()` before allowing `socket.join(roomId)`, emit `room-error` with specific reasons ('full', 'expired', 'not-found') on failure, or emit `joined` with message history on success.

7. **Update room activity on user actions in `server/index.ts`** — Call `updateRoomActivity(roomId)` in the `join-room`, `mouse_move`, `draw`, and `send-message` event handlers to update the `lastActivity` timestamp and prevent premature expiration.

8. **Modify room creation logic in `server/index.ts`** — When creating a new room (in `create-room` or first join), populate `maxCapacity: 10`, `creatorId: userId`, `inviteCode: generateCode()`, and `lastActivity: Date.now()` in both the in-memory Map and MongoDB Room document.

### Socket.IO Event Handlers - Chat

9. **Replace `send_msg` event handler in `server/index.ts`** — Rename to `send-message`, update payload to include `{ roomId, userId, username, message }`, call `saveMessage()` to persist to MongoDB, then broadcast `receive-message` event with `{ userId, username, message, timestamp }` to `io.to(roomId)`.

10. **Add message history on room join in `server/index.ts`** — In the `join-room` success path, call `getMessageHistory(roomId)` and include the result in the `joined` event payload as `messageHistory: Message[]`.

11. **Add typing indicator event handlers in `server/index.ts`** — Create handlers for `typing-start` (payload: `{ roomId, userId, username }`) that broadcasts `user-typing` to other room members, and `typing-stop` (payload: `{ roomId, userId }`) that broadcasts `user-stopped-typing`.

### Client-Side Chat Component Updates

12. **Update Chat component in `modules/room/components/chat/Chat.tsx`** — Replace `new_msg` listener with `receive-message` listener that parses `{ userId, username, message, timestamp }` payload, add listeners for `user-typing` and `user-stopped-typing` to display typing indicators, and emit `request-history` or read from `joined` event payload to populate message history on mount.

13. **Update ChatInput component in `modules/room/components/chat/ChatInput.tsx`** — Change `send_msg` emit to `send-message` with full payload `{ roomId, userId, username, message }`, add input change handler that emits `typing-start` (debounced 500ms) and `typing-stop` on blur or submit.

14. **Add typing indicators UI in `modules/room/components/chat/Chat.tsx`** — Create state `typingUsers: Set<string>` to track users currently typing, display "User1, User2 are typing..." text below the message list when set is non-empty, update set based on `user-typing` and `user-stopped-typing` events.

### Client-Side Room Join Error Handling

15. **Add room error handler in `modules/room/components/Room.tsx`** — Add listener for `room-error` event that receives `{ reason, message }` payload and displays a modal with specific error text for 'full', 'expired', or 'not-found' reasons, with a "Back to Home" button.

16. **Create RoomErrorModal component in `modules/room/modals/RoomErrorModal.tsx`** (new file) — Build a modal component that accepts `reason` and `message` props and displays user-friendly error text ("Room is full (10/10 users)", "Room has expired or been deleted", "Room not found") with appropriate styling.

17. **Pass room context to join validation in `pages/[roomId].tsx`** — Extract roomId from router query, pass it to Room component, and ensure the socket emits `join-room` with `{ roomId, username, roomCode? }` including any invite code from URL query params.

### API Endpoint Updates

18. **Update room creation endpoint in `pages/api/rooms/[roomId].ts`** — If this endpoint exists, ensure it creates rooms with the new schema fields (`maxCapacity: 10`, `lastActivity: Date.now()`, `isActive: true`, `creatorId`, `inviteCode`).

### Utility Functions

19. **Add invite code generation in `server/index.ts` or new `server/utils/generateCode.ts`** — Create a function `generateInviteCode()` that returns a 6-8 character alphanumeric code for room invites, to be stored in Room.inviteCode field.

20. **Add room deletion handler in `server/index.ts`** — Create socket event `delete-room` (payload: `{ roomId, userId }`) that verifies userId matches Room.creatorId, sets `isActive: false` in MongoDB, broadcasts `room-deleted` to all room members, and removes room from in-memory Map.

## Tests to Add

### Unit Tests

- **Room validation functions** (`server/db/operations/roomOperations.test.ts`):
  - `validateRoomJoin()` returns `{ valid: false, reason: 'not-found' }` when roomId doesn't exist
  - `validateRoomJoin()` returns `{ valid: false, reason: 'expired' }` when room.isActive is false
  - `validateRoomJoin()` returns `{ valid: false, reason: 'expired' }` when lastActivity > 24 hours
  - `checkRoomCapacity()` returns `{ isFull: true }` when users.size >= 10
  - `checkRoomCapacity()` returns `{ isFull: false }` when users.size < 10

- **Message operations** (`server/db/operations/messageOperations.test.ts`):
  - `saveMessage()` persists message with correct roomId, userId, username, timestamp
  - `getMessageHistory()` returns messages ordered by timestamp ascending
  - `getMessageHistory()` respects limit parameter when provided

- **Invite code generation** (`server/utils/generateCode.test.ts`):
  - `generateInviteCode()` returns unique codes for multiple calls
  - Generated codes are 6-8 characters alphanumeric

### Integration Tests

- **Room join validation** (`tests/integration/roomJoin.test.ts`):
  - Socket connection with valid roomId and capacity < 10 emits `joined` event with messageHistory
  - Socket connection to non-existent roomId emits `room-error` with reason 'not-found'
  - Socket connection to room with 10 users already joined emits `room-error` with reason 'full'
  - Socket connection to inactive room emits `room-error` with reason 'expired'
  - Successfully joined user receives message history from before they joined

- **Chat message delivery** (`tests/integration/chat.test.ts`):
  - Message sent via `send-message` is persisted to MongoDB within 500ms
  - Message sent by user A is received by user B via `receive-message` within 2 seconds
  - Message includes correct userId, username, message, and timestamp fields
  - New user joining room receives complete message history in `joined` event

- **Typing indicators** (`tests/integration/typing.test.ts`):
  - `typing-start` event from user A triggers `user-typing` broadcast to user B within 500ms
  - `typing-stop` event from user A triggers `user-stopped-typing` broadcast to user B
  - Typing indicator not sent to the user who is typing

- **Room expiration** (`tests/integration/roomExpiration.test.ts`):
  - Room with lastActivity > 24 hours is marked inactive by background job
  - Inactive room rejects new join attempts with 'expired' reason
  - Room activity updates (lastActivity) on message send, draw, or mouse move

### End-to-End Tests

- **Complete room join flow** (`tests/e2e/roomJoin.e2e.ts`):
  - User A creates room, shares link, User B joins via link successfully
  - User B sees "Room not found" error when joining with invalid roomId
  - User K sees "Room is full" error when trying to join room with 10 users
  - User sees "Room expired" error when joining room inactive for 24+ hours

- **Complete chat flow** (`tests/e2e/chat.e2e.ts`):
  - User A sends message "Hello", User B sees "Hello" appear in chat within 2 seconds
  - User C joins room and sees previous messages from User A and B in history
  - User A types, User B sees "User A is typing..." indicator within 500ms
  - User A stops typing, typing indicator disappears for User B

## Deployment Notes

### Environment Variables

No new environment variables required. Existing MongoDB connection string (`MONGODB_URI`) and Socket.IO configuration are sufficient.

### Database Migration

**Required migration script** (`server/scripts/migrateRooms.ts`):
```javascript
// Add new fields to existing Room documents
await Room.updateMany(
  { maxCapacity: { $exists: false } },
  { 
    $set: { 
      maxCapacity: 10,
      lastActivity: new Date(),
      isActive: true,
      inviteCode: generateInviteCode()
    } 
  }
);
```

Run migration with: `npx ts-node server/scripts/migrateRooms.ts` before deploying the new server code.

### Feature Flags

No feature flags required. Changes are backward-compatible for room creation; existing rooms will be migrated.

### Configuration Changes

- **Socket.IO event names**: The `send_msg` event is renamed to `send-message` and `new_msg` to `receive-message`. Clients must update listeners to match.
- **Room validation**: Rooms now enforce a 10-user capacity limit and 24-hour expiration, which may impact existing long-running rooms.

### Deployment Order

1. Deploy database migration script to add new fields to existing rooms
2. Deploy server code with new Socket.IO handlers and validation logic
3. Deploy client code with updated event listeners and error handling
4. Verify room join and chat functionality in staging environment
5. Roll out to production with monitoring on `room-error` event frequency

### Monitoring

- Track `room-error` event emissions by reason type to identify validation issues
- Monitor message persistence latency (time from `send-message` to MongoDB write)
- Alert if room expiration job fails or takes longer than 1 minute
- Track socket connection/disconnection rates for anomalies during rollout

## Rollback Plan

If the deployment causes issues (e.g., users unable to join rooms, chat messages not delivering):

1. **Immediate**: Revert client code to previous version (restores `send_msg`/`new_msg` event names) — this allows existing sessions to continue functioning with old flow.

2. **Within 15 minutes**: Revert server code to previous version — this removes room validation logic and capacity enforcement, allowing all joins to succeed as before.

3. **Database state**: No rollback needed for Room schema changes; new fields (`maxCapacity`, `lastActivity`, etc.) are additive and don't break old code. If full rollback required, run:
   ```javascript
   await Room.updateMany({}, { $unset: { maxCapacity: "", lastActivity: "", inviteCode: "", creatorId: "" } });
   ```

4. **Message data**: Messages persisted during the new deployment remain in MongoDB and will be invisible to old client code (which doesn't request history), but won't cause errors. No deletion needed unless requested.

5. **Validation**: After rollback, verify that:
   - Users can join rooms without validation errors
   - Chat messages send/receive using old event names
   - No background jobs are running (expiration job stops with server rollback)

6. **Post-mortem**: Review logs for specific `room-error` reasons, message delivery failures, or MongoDB query errors to identify root cause before re-attempting deployment.
