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
