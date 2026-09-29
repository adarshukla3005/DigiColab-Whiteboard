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
