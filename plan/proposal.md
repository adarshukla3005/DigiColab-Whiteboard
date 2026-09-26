# Voice & Video Chat

## Title
Add real-time, in-room voice and video communication to DigiColab so collaborators can talk while they work on the shared whiteboard — no external tool required.

## Motivation
Today, DigiColab users who want to discuss their whiteboard in real time must switch to an external conferencing tool (Zoom, Google Meet, etc.), breaking their flow and splitting attention across two applications. Because all room participants are already connected through the existing Socket.IO session, the infrastructure is in place to coordinate a peer-to-peer media channel without a separate login or service. Adding voice and video directly inside the room eliminates context switching for groups of up to 20 participants and keeps all collaboration — visual and verbal — in one place.

## Proposed Change

### New capabilities
- **Call toolbar button** — a single "Join Call" button added to the existing room toolbar launches the voice/video session using WebRTC (peer-to-peer mesh, suitable for up to ~6 simultaneous video streams; graceful audio-only fallback beyond that or on capability failure).
- **Floating video tiles** — each participant's camera feed renders as a small, draggable overlay tile positioned outside the canvas coordinate space; tiles collapse to an audio-only avatar when the camera is off or the connection falls back to audio-only.
- **Standard call controls** — mute/unmute microphone, enable/disable camera, push-to-talk mode, switch input/output device, and leave call.
- **Active-speaker indicator** — the current loudest speaker's tile is highlighted with a visible ring; their cursor on the whiteboard also receives a matching ring.
- **Screen sharing** — a participant may share their screen; the shared stream is embedded as a resizable, canvas-native frame directly on the whiteboard so all collaborators can see and annotate around it.
- **Host moderation** — room hosts (as defined by existing role data) can remotely mute or remove any participant from the call.
- **Recording** — hosts can start/stop a call recording; the recorded file (audio + active video tiles) is made available for download at the end of the session.

### Modifications to existing code
- `common/lib/socket.ts` — extend Socket.IO signalling events to carry WebRTC offer/answer/ICE-candidate messages and call-state events (join, leave, mute, kick, recording start/stop).
- `common/recoil/room/` — add call-state atoms (participants list, local media state, recording status).
- Room toolbar component — add the Join Call button and device-picker modal.
- Whiteboard canvas — add the screen-share frame element type to the existing shape/move model.

### New modules
- `modules/call/` — WebRTC peer manager, media hooks, tile layout component, call controls bar, active-speaker detector, and recording orchestrator.

## Success Criteria
1. **One-click join** — a user can join the voice/video call from the room toolbar in ≤ 2 seconds (measured from button click to first local audio stream active) on a standard broadband connection.
2. **Mesh stability for target group size** — calls with up to 6 simultaneous video-on participants maintain a connection without server-side media relay; groups of 7–20 automatically fall back to audio-only with avatar tiles and display a clear status indicator.
3. **Full control parity** — mute, camera toggle, push-to-talk, device switching, and leave-call controls all function correctly and reflect state changes to all other participants within 1 second.
4. **Host moderation** — a host can mute or remove any participant from the call, with the action taking effect on the target client within 2 seconds.
5. **Screen share on canvas** — a shared screen appears as a resizable, repositionable frame on the whiteboard canvas, visible and annotatable by all room participants, within 3 seconds of the sharer initiating the share.
6. **Recording delivery** — when a host stops a recording, a downloadable file containing the audio and video of the session is available within 30 seconds of the call ending.

## Out of Scope
1. **Server-side media relay (SFU/MCU)** — a Selective Forwarding Unit or media server to support full-quality video beyond 6 participants is deferred; the mesh architecture is the v1 solution.
2. **Persistent recording storage** — cloud upload, playback inside the app, or long-term storage of recordings; v1 delivers only a local/browser-initiated download.
3. **Breakout rooms** — splitting a room's participants into separate sub-calls is not included in this release.
4. **Mobile / native app support** — call functionality is scoped to desktop browsers supporting the WebRTC and `getUserMedia` APIs; mobile-specific UI and Safari PWA edge cases are deferred.
5. **End-to-end encryption (E2EE)** — insertable-streams–based E2EE for media is deferred pending broader browser support and key-management design.
