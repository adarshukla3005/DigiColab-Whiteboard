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
