#  Voice & Video Chat — OpenSpec Plan


---

# Proposal

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

---

# Spec

# Spec — Voice & Video Chat

## Behaviors

- A **"Join Call" button** is added to the existing room toolbar; clicking it opens the in-room voice/video call without leaving the whiteboard.
- The system establishes **peer-to-peer WebRTC mesh connections** between all call participants using the existing Socket.IO session as the signalling channel — no separate login is required.
- Each participant's camera feed is displayed as a **small, floating, draggable video tile** overlaid on the whiteboard UI (outside the canvas coordinate space).
- When a participant's camera is off, or when the connection automatically falls back to audio-only, their tile **collapses to an audio-only avatar placeholder** tile.
- For calls where more than 6 participants have video enabled, the system **silently falls back to audio-only** for all participants beyond the 6-stream mesh limit and displays a visible status indicator explaining the audio-only state.
- A **call controls bar** is always visible while in a call, providing: mute/unmute microphone, enable/disable camera, push-to-talk mode, switch input/output device, leave call, and start/stop screen share.
- The **active speaker** (loudest current talker) is highlighted with a visible ring on their video tile and a matching ring rendered around their cursor on the whiteboard canvas.
- A participant can **share their screen**; the shared stream is embedded as a **resizable, repositionable canvas-native frame** directly on the whiteboard so all room participants can view and annotate around it.
- **Push-to-talk mode** keeps the microphone muted by default and unmutes only while the designated key is held down.
- **Room hosts** (as defined by the existing role model) can remotely **mute any participant** in the call; the target participant's microphone is silenced and their muted state is reflected in all tiles.
- **Room hosts** can **remove (kick) any participant** from the call; the removed participant's media streams are torn down and they are returned to the whiteboard-only state.
- Hosts can **start and stop a call recording**; the recorded file (combined audio track + active video tiles) is made available for download at the end of the recording session.
- A **device-picker modal** lets participants select their preferred camera, microphone, and audio output device before or during a call.
- All call-state changes (join, leave, mute, camera toggle, kick, recording status) are **propagated to every connected room participant** within 1 second via Socket.IO signalling events.
- Participants who join a room while a call is already in progress see the **active call state** (participant list, recording indicator) and can join with one click.

---

## APIs / Data Changes

### Socket.IO — New Signalling Events

All new events are namespaced within the existing Socket.IO room session. No new HTTP endpoints are required for signalling.

#### Client → Server

| Event | Payload | Description |
|---|---|---|
| `call:join` | `{ roomId: string, userId: string }` | Participant requests to join the active call. |
| `call:leave` | `{ roomId: string, userId: string }` | Participant leaves the call. |
| `call:offer` | `{ roomId: string, toUserId: string, sdp: RTCSessionDescriptionInit }` | Forward WebRTC offer to a specific peer. |
| `call:answer` | `{ roomId: string, toUserId: string, sdp: RTCSessionDescriptionInit }` | Forward WebRTC answer to a specific peer. |
| `call:ice-candidate` | `{ roomId: string, toUserId: string, candidate: RTCIceCandidateInit }` | Forward ICE candidate to a specific peer. |
| `call:mute` | `{ roomId: string, userId: string, kind: "audio" \| "video", muted: boolean }` | Broadcast own mute/camera state change. |
| `call:host-mute` | `{ roomId: string, targetUserId: string }` | Host mutes a specific participant (host only). |
| `call:host-kick` | `{ roomId: string, targetUserId: string }` | Host removes a participant from the call (host only). |
| `call:screen-share-start` | `{ roomId: string, userId: string }` | Signals that user has started screen share. |
| `call:screen-share-stop` | `{ roomId: string, userId: string }` | Signals that user has stopped screen share. |
| `call:recording-start` | `{ roomId: string }` | Host starts call recording (host only). |
| `call:recording-stop` | `{ roomId: string }` | Host stops call recording (host only). |

#### Server → Client

| Event | Payload | Description |
|---|---|---|
| `call:participant-joined` | `{ userId: string, displayName: string }` | Notifies all room members a new participant joined the call. |
| `call:participant-left` | `{ userId: string }` | Notifies all room members a participant left. |
| `call:offer` | `{ fromUserId: string, sdp: RTCSessionDescriptionInit }` | Relays WebRTC offer to the target peer. |
| `call:answer` | `{ fromUserId: string, sdp: RTCSessionDescriptionInit }` | Relays WebRTC answer to the target peer. |
| `call:ice-candidate` | `{ fromUserId: string, candidate: RTCIceCandidateInit }` | Relays ICE candidate to the target peer. |
| `call:mute-changed` | `{ userId: string, kind: "audio" \| "video", muted: boolean }` | Broadcasts a participant's updated mute/camera state. |
| `call:host-muted` | `{ targetUserId: string }` | Instructs target client to mute itself; informs others. |
| `call:kicked` | `{ targetUserId: string }` | Instructs target client to leave the call. |
| `call:screen-share-started` | `{ userId: string }` | Notifies room that screen share is active. |
| `call:screen-share-stopped` | `{ userId: string }` | Notifies room that screen share ended. |
| `call:recording-status` | `{ recording: boolean, startedBy: string }` | Broadcasts current recording state to all participants. |
| `call:state-sync` | `{ participants: CallParticipant[], recording: boolean }` | Sent to a newly joining participant to sync current call state. |

---

### New TypeScript Interfaces (shared types)

```typescript
interface CallParticipant {
  userId: string;
  displayName: string;
  audioMuted: boolean;
  videoMuted: boolean;
  isScreenSharing: boolean;
  isActiveSpeaker: boolean;
}

interface CallState {
  inCall: boolean;
  participants: CallParticipant[];
  localAudioMuted: boolean;
  localVideoMuted: boolean;
  pushToTalkActive: boolean;
  isScreenSharing: boolean;
  recording: boolean;
  audioOnlyFallback: boolean; // true when participant count > 6 video streams
}
```

---

### Recoil State — New Atoms (extending `common/recoil/room/`)

| Atom key | Type | Description |
|---|---|---|
| `callState` | `CallState` | Full local call state for the current user. |
| `callParticipants` | `CallParticipant[]` | Live list of all call participants and their states. |

---

### Canvas Data Model — New Move/Shape Type

A new shape type `screen-share-frame` is added to the existing whiteboard move model:

```typescript
interface ScreenShareMove {
  type: "screen-share-frame";
  id: string;            // unique move id
  ownerId: string;       // userId of the sharer
  x: number;            // canvas x position
  y: number;            // canvas y position
  width: number;        // frame width in canvas units
  height: number;       // frame height in canvas units
}
```

The frame position and size are synced via the existing move/draw Socket.IO events so all participants see the same frame placement on the canvas.

---

## Acceptance Criteria

### AC-1 — Join Call

**Given** a user is in a DigiColab room
**When** they click the "Join Call" toolbar button
**Then** their local microphone stream is activated within 2 seconds on a standard broadband connection, a floating video tile appears for them, and all other participants in the call receive a `call:participant-joined` event and see a new tile.

---

### AC-2 — Audio/Video Mesh & Fallback

**Given** a call with 6 or fewer participants who all have video enabled
**When** a 7th participant joins with video on
**Then** the system falls back to audio-only for all participants, avatar placeholder tiles replace video tiles, and a visible status indicator ("Video unavailable — audio-only mode") is shown to all participants without any user action required.

---

### AC-3 — Mute / Camera Toggle

**Given** a user is in an active call
**When** they click the mute microphone or toggle camera button
**Then** their local track is muted/disabled immediately, their tile updates to reflect the muted/camera-off state, and all other participants' views of that tile update within 1 second.

---

### AC-4 — Push-to-Talk

**Given** a user has enabled push-to-talk mode
**When** they hold the designated push-to-talk key
**Then** their microphone is unmuted only for the duration the key is held; releasing the key immediately re-mutes the microphone, and the muted state change is reflected to all participants within 1 second.

---

### AC-5 — Switch Input/Output Device

**Given** a user is in a call (or in the device-picker modal before joining)
**When** they select a different microphone, camera, or audio output device from the device picker
**Then** the active media tracks switch to the selected device without dropping the call or requiring a page refresh.

---

### AC-6 — Active Speaker Indicator

**Given** multiple participants are in an active call
**When** a participant is the loudest current speaker (above a defined audio threshold)
**Then** their video tile receives a highlighted ring border and their cursor on the shared whiteboard canvas displays a matching ring; the indicator updates within 500 ms of audio level change.

---

### AC-7 — Screen Share Embedded on Canvas

**Given** a participant is in an active call
**When** they click "Share Screen" and grant browser permission
**Then** a `screen-share-frame` element appears on the whiteboard canvas within 3 seconds, visible to all room participants, and can be repositioned and resized by the sharer; other participants can draw/annotate around the frame.

---

### AC-8 — Screen Share Stop

**Given** a participant has an active screen share frame on the canvas
**When** they click "Stop Sharing" (or the browser ends the share)
**Then** the screen-share-frame is removed from the canvas for all participants and the sharer's video tile returns to the normal camera view (or audio-only avatar if camera is off).

---

### AC-9 — Host Mute

**Given** a user is a room host and another participant is unmuted
**When** the host clicks "Mute" on that participant's tile
**Then** the target participant's microphone is silenced within 2 seconds, their tile shows the muted indicator for all participants, and the target user receives a notification that they were muted by the host.

---

### AC-10 — Host Kick

**Given** a user is a room host
**When** the host clicks "Remove from call" on a participant's tile
**Then** the target participant's media streams are torn down within 2 seconds, their tile disappears for all participants, and the kicked user sees a notification that they were removed from the call and is returned to whiteboard-only mode.

---

### AC-11 — Recording Start/Stop & Download

**Given** a user is a room host and a call is active
**When** the host clicks "Start Recording"
**Then** a recording indicator is shown to all participants; when the host subsequently clicks "Stop Recording," the recording file (audio + video tiles) is finalized and a download link is presented to the host within 10 seconds of stopping.

---

### AC-12 — Leave Call

**Given** a user is in an active call
**When** they click "Leave Call"
**Then** all of their peer connections are closed, their tile is removed from all other participants' views within 1 second, and the user is returned to the whiteboard-only state without leaving the room.

---

### AC-13 — Late Join State Sync

**Given** an active call is in progress in a room
**When** a new user opens that room
**Then** they see the call in-progress indicator, the current participant list (with mute/camera states), and the recording indicator if applicable, before clicking "Join Call."

---

### AC-14 — Non-Host Call Control Restriction

**Given** a user is in a call but does not have the host role
**When** they attempt to mute or remove another participant
**Then** the action is rejected by the server and no state change is applied.

---

## Non-Functional Requirements

### Performance
- Local microphone stream must be active within **2 seconds** of clicking "Join Call" on a standard broadband connection (≥ 10 Mbps).
- Screen-share frame must appear on the canvas for all participants within **3 seconds** of the sharer granting browser permission.
- Call state changes (mute, camera toggle, join, leave) must propagate to all participants within **1 second**.
- Active-speaker indicator must update within **500 ms** of audio level change.
- The peer-to-peer mesh must support up to **6 simultaneous video streams** without a media server; beyond this threshold the system automatically falls back to audio-only.

### Security
- All WebRTC media streams are encrypted end-to-end via **DTLS-SRTP** (enforced by browser WebRTC default).
- All signalling messages are transmitted over the existing authenticated Socket.IO connection; the server must **validate the sender's role** before acting on privileged events (`call:host-mute`, `call:host-kick`, `call:recording-start`, `call:recording-stop`).
- Non-host clients sending host-only signalling events must receive an error response and the event must be silently dropped server-side — no state change is applied.
- Recording files must be accessible only to the host who initiated the recording; download URLs must be authenticated/time-limited.

### Accessibility
- All call control buttons must have descriptive `aria-label` attributes (e.g., "Mute microphone", "Disable camera").
- The active-speaker ring and mute/camera-off indicators must not rely on color alone; icons or labels must accompany any color-based state change.
- Device-picker modal and call controls must be fully keyboard-navigable (Tab/Enter/Escape).
- Audio-only avatar tiles must display the participant's display name or initials so participants are identifiable without a camera feed.

### Reliability & Graceful Degradation
- If a user's browser does not support WebRTC (`RTCPeerConnection` unavailable), the "Join Call" button must display a tooltip explaining the limitation and must not crash the whiteboard.
- If a participant's camera permission is denied, the system must silently fall back to audio-only with an avatar tile and display an informative message to that participant only.
- ICE connection failures must trigger an automatic re-negotiation attempt; if re-negotiation fails, the affected peer connection is torn down cleanly and the participant is shown a reconnect prompt.

### Compliance
- The recording feature must display a visible **recording indicator** to all call participants for the full duration of any active recording, ensuring informed consent.
- Recorded files must be stored and handled in accordance with the platform's existing data-retention and privacy policy.

---

# Design

# Design — Voice & Video Chat

## Architecture Overview

DigiColab is a Next.js application with a Pages Router (`pages/`), Recoil for global state (`common/recoil/`), and a Socket.IO singleton (`common/lib/socket.ts`) used for all real-time signalling. The voice/video feature lives entirely on the client side as a new `modules/call/` module that is mounted inside the existing `modules/room/components/Room.tsx` layout; it re-uses the Socket.IO connection as a WebRTC signalling channel (no new server transport), extends the global TypeScript event interfaces in `common/types/global.d.ts`, and adds a new Recoil atom tree under `common/recoil/call/` for call state. The screen-share stream is injected into the whiteboard as a new `Move` shape variant (`"screenshare"`) so it participates in the existing canvas rendering pipeline.

---

## Key Decisions

| # | Decision | Rationale |
|---|---|---|
| 1 | **Reuse Socket.IO as WebRTC signalling channel** | The singleton socket in `common/lib/socket.ts` is already connected and authenticated to the room; piggybacking offer/answer/ICE messages on it avoids any new backend infrastructure or auth layer. |
| 2 | **Pure P2P mesh (no SFU/MCU)** | Intake specified P2P mesh. For ≤ 6 video-on participants this is viable; beyond that, the implementation silently downgrades new joiners to audio-only, matching the spec's fallback behaviour. |
| 3 | **New `modules/call/` module, no mutation of existing canvas hooks** | Keeping call logic in its own module prevents entanglement with the draw/undo pipeline and makes the feature independently removable. |
| 4 | **Screen-share as a new `Move` shape type (`"screenshare"`)** | Extending the existing `Move` union and `Shape` type means screen-share frames are stored, moved, and resized by the already-working canvas machinery — zero new drag/resize infrastructure needed. |
| 5 | **Recording via `MediaRecorder` on the host client** | Client-side recording with the `MediaRecorder` API avoids storing media on the server. The host captures a `MediaStream` composed of all active remote video tracks plus the local mic; the resulting Blob is offered as a browser download when stopped. |
| 6 | **Active-speaker detection via `AudioWorklet` / `RTCPeerConnection.getStats()`** | Polling `getStats()` for `audioLevel` on each peer connection gives a low-overhead speaker-rank signal without a dedicated audio-analysis library; the result drives a Recoil atom that both the tile overlay and `MousesRenderer` subscribe to. |

---

## Module Boundaries

### Existing files touched

| File | Change |
|---|---|
| `common/types/global.d.ts` | Add `"screenshare"` to the `Shape` union; add `CallParticipant`, `CallState` interfaces; add all `call:*` events to `ServerToClientEvents` and `ClientToServerEvents`. |
| `common/lib/socket.ts` | No code change — type safety flows from `global.d.ts` automatically because the socket is typed against those interfaces. |
| `common/recoil/room/room.atom.ts` | No change — call state lives in its own atom. |
| `modules/room/components/Room.tsx` | Mount `<CallOverlay />` and `<CallControlsBar />` as siblings to existing board components; wrap with `CallContextProvider`. |
| `modules/room/components/toolbar/ToolBar.tsx` | Add the **"Join Call"** icon button and wiring to `useCall().joinCall()`. |
| `modules/room/components/board/Canvas.tsx` | Render `ScreenShareFrame` elements when a `screenshare` move is present in `usersMoves`. |
| `modules/room/components/board/MousesRenderer.tsx` | Subscribe to active-speaker atom to render the highlight ring around the speaking user's cursor. |
| `modules/room/modals/` | Add `DevicePickerModal.tsx` for camera/mic/output selection. |

### New files / modules

```
modules/call/
  index.ts                        # barrel export
  context/
    Call.context.tsx              # CallContextProvider; owns RTCPeerConnection map
  hooks/
    useCall.ts                    # join/leave, media stream management
    usePeerConnections.ts         # per-peer RTCPeerConnection lifecycle
    useActiveSpeaker.ts           # polls getStats(), writes activeSpeakerAtom
    useScreenShare.ts             # getDisplayMedia(), injects screenshare Move
    useRecording.ts               # MediaRecorder orchestration (host only)
    usePushToTalk.ts              # keydown/keyup → mute toggle
  components/
    CallOverlay.tsx               # positions all VideoTile components as floating DOM overlay
    VideoTile.tsx                 # draggable tile: <video> or avatar placeholder
    CallControlsBar.tsx           # mute, camera, PTT, devices, screen share, leave, record
    ScreenShareFrame.tsx          # canvas-layer resizable frame rendering the remote stream
  lib/
    peerManager.ts                # imperative RTCPeerConnection factory + ICE/SDP helpers
    activeSpeakerDetector.ts      # getStats() polling loop → ranked speaker list

common/recoil/call/
  index.ts
  call.atom.ts                    # callStateAtom: participants, localMedia, recordingStatus
  call.hooks.ts                   # useCallState, useLocalMedia, useCallParticipants, etc.
```

---

## External Dependencies

| Package | Version | Purpose |
|---|---|---|
| **`simple-peer`** | `^9.11.1` | Thin WebRTC wrapper; simplifies offer/answer/ICE exchange over Socket.IO. Can be replaced with raw `RTCPeerConnection` if bundle size is a concern. |
| **`recordrtc`** (optional) | `^5.6.2` | Cross-browser `MediaRecorder` abstraction for recording mixed audio+video. Used only on the host client; can be swapped for native `MediaRecorder` in Chrome-only scenarios. |
| **`@radix-ui/react-select`** | already in project or `^2.0.0` | Device picker dropdown; consistent with any Radix primitives already present. |
| **`framer-motion`** | already in project | Draggable video tiles use the existing `motion.div` + `drag` API already used in the toolbar and other animations. |
| Browser APIs (no package) | — | `RTCPeerConnection`, `getUserMedia`, `getDisplayMedia`, `AudioWorklet`, `MediaRecorder` — all available in evergreen browsers; feature-detected at runtime for graceful fallback. |

> **No new backend service is required.** The existing Socket.IO server only needs the new `call:*` event names forwarded within the room namespace — relay-only, no server-side logic.

---

## Trade-offs & Risks

**P2P mesh scaling ceiling.** The intake selected mesh P2P, which is suitable for the stated 7–20 participant target only after falling back to audio-only above 6 video streams. For groups that consistently exceed 6 video-on participants, a Selective Forwarding Unit (e.g. LiveKit, mediasoup) would be necessary; the `modules/call/lib/peerManager.ts` abstraction is intentionally designed to be swappable for an SFU SDK without touching React components. **Client-side recording limitations.** Recording via `MediaRecorder` on the host's browser means quality and reliability depend on the host's hardware; the host dropping the call or closing the tab loses the recording. A server-side recording path (e.g. forwarding streams to an Egress service) was considered and explicitly deferred to a follow-on release. **Screen-share as a `Move` type.** Embedding the stream reference in the canvas move model works well for positioning and resize, but `Move` objects are serialised and sent to all peers — the actual `MediaStream` object must be transmitted via WebRTC data/track channels, not via the socket payload; only the frame geometry and participant ID travel through the existing move pipeline. Implementors must be careful not to serialise the live `MediaStream` into the socket event.

---

# Technical

# Technical Tasks — Voice & Video Chat

## 1. Implementation Tasks

### A. Shared Types & Socket Events

1. **`common/types/global.d.ts`** — Add `CallParticipant`, `CallSignal`, and `CallRole` types, and extend `ServerToClientEvents` / `ClientToServerEvents` with all WebRTC-signalling and call-control events (`call_join`, `call_leave`, `call_signal`, `call_offer`, `call_answer`, `call_ice_candidate`, `call_mute`, `call_camera_toggle`, `call_screen_share`, `call_host_mute`, `call_host_remove`, `call_recording_chunk`, `call_recording_stop`).

---

### B. Server — Socket.IO Signal Relay

2. **`server/index.ts`** — Register a new Socket.IO namespace block (or add to the existing room handler) that relays WebRTC signalling messages (`call_offer`, `call_answer`, `call_ice_candidate`) between peers in the same room using `socket.to(roomId).emit(...)`, and broadcasts call-control events (`call_join`, `call_leave`, `call_mute`, `call_camera_toggle`, `call_screen_share`, `call_host_mute`, `call_host_remove`).

3. **`server/index.ts`** — Track call state per room (participant list, host socket ID) in-memory inside the room's existing session map so that late-joiners receive the current participant list on `call_join` acknowledgement and host privileges transfer automatically on host disconnect.

---

### C. Client — Call State (Recoil)

4. **`common/recoil/call/call.atom.ts`** _(new file)_ — Define a `callAtom` with fields: `active: boolean`, `participants: Map<string, CallParticipant>`, `localStream: MediaStream | null`, `screenStream: MediaStream | null`, `isRecording: boolean`, `pushToTalkActive: boolean`.

5. **`common/recoil/call/call.hooks.ts`** _(new file)_ — Export `useCall()` hook wrapping all `callAtom` selectors and setters, plus helper actions (`joinCall`, `leaveCall`, `toggleMute`, `toggleCamera`, `startScreenShare`, `stopScreenShare`).

6. **`common/recoil/call/index.ts`** _(new file)_ — Re-export `callAtom` and `useCall`.

---

### D. Client — WebRTC Peer Mesh Service

7. **`modules/room/services/webrtcService.ts`** _(new file)_ — Implement `WebRTCService` class that manages the full peer mesh: `createPeer(remoteId, isInitiator)`, `addIceCandidate()`, `replaceTrack()`, `destroyPeer()`, ICE server config (STUN from env var), and emits/receives signalling events via the existing `socket` singleton from `common/lib/socket.ts`.

8. **`modules/room/services/mediaService.ts`** _(new file)_ — Implement `getUserMedia(video, audio)`, `getDisplayMedia()`, and `stopStream(stream)` wrappers with graceful permission-denial fallback (audio-only when camera is denied) used by `useCall` hooks.

---

### E. Client — Recording Service

9. **`modules/room/services/recordingService.ts`** _(new file)_ — Implement `RecordingService` using the browser `MediaRecorder` API; records the mixed local `MediaStream` (audio tracks from all peers merged via `AudioContext` + `createMediaStreamDestination`, video from local camera or screen share); exposes `start()`, `stop(): Blob`, and fires `call_recording_chunk` socket events every 10 s so the host can optionally relay chunks; persists the final `.webm` blob as a browser download.

---

### F. Client — Hooks

10. **`modules/room/hooks/useCallSocket.ts`** _(new file)_ — Subscribe to all call-related `ServerToClientEvents` (offers, answers, ICE candidates, participant join/leave, host commands) on mount; tear down listeners on unmount; update `callAtom` accordingly.

11. **`modules/room/hooks/usePushToTalk.ts`** _(new file)_ — Listen for `Space` keydown/keyup (or configurable key); unmute local audio track on press, remute on release; respects the `pushToTalkActive` flag in `callAtom`.

12. **`modules/room/hooks/useActiveSpeaker.ts`** _(new file)_ — Poll each peer's `RTCPeerConnection` `getStats()` on a 300 ms interval to detect the loudest speaker; set `activeSpeakerId` in `callAtom` and expose it for tile highlight and cursor ring.

---

### G. Client — UI Components

13. **`modules/room/components/call/CallTile.tsx`** _(new file)_ — Render a single draggable floating video tile (outside canvas coordinates, using `position: fixed`) showing the participant's `<video>` element or avatar placeholder when audio-only; display the active-speaker ring when the participant matches `activeSpeakerId`; show mute/camera-off badge overlays.

14. **`modules/room/components/call/CallTileGrid.tsx`** _(new file)_ — Render the full set of `CallTile` components for all `participants` in `callAtom`; manage drag state via `useState` + `onMouseDown/onMouseMove/onMouseUp` handlers with `useRef` for performance; collapse to avatar-strip when `>8` participants.

15. **`modules/room/components/call/CallControls.tsx`** _(new file)_ — Render the in-call control bar (mute mic, toggle camera, screen share, push-to-talk toggle, switch device, record, leave call); wire each button to the corresponding `useCall()` action; show recording indicator dot when `isRecording` is true.

16. **`modules/room/components/call/DeviceSelector.tsx`** _(new file)_ — Modal/popover that enumerates `navigator.mediaDevices.enumerateDevices()` for `audioinput`, `audiooutput`, and `videoinput`; lets the user select active devices; calls `webrtcService.replaceTrack()` after selection.

17. **`modules/room/components/call/HostControls.tsx`** _(new file)_ — Renders a context menu on each participant tile (only visible to the room host); provides "Mute participant" and "Remove from call" actions that emit `call_host_mute` / `call_host_remove` via socket.

18. **`modules/room/components/call/ScreenShareFrame.tsx`** _(new file)_ — A resizable, draggable canvas-embedded `<iframe>`-like overlay (absolute-positioned inside the whiteboard canvas container, not the canvas coordinate space) that renders the remote or local `screenStream` `<video>`; exposes resize handles and emits the frame's position/size to peers via a new `call_screenshare_layout` socket event so all users see the same frame bounds.

19. **`modules/room/components/call/index.ts`** _(new file)_ — Re-export all call UI components.

---

### H. Toolbar Integration

20. **`modules/room/components/toolbar/ToolBar.tsx`** — Import and add a **"Join Call"** button (phone/video icon from `react-icons`) that calls `useCall().joinCall()` when not in a call, or opens `CallControls` when already in a call; button renders a green "live" dot badge while the call is active.

---

### I. Room Component Integration

21. **`modules/room/components/Room.tsx`** — Mount `<CallTileGrid />`, `<CallControls />`, and `<ScreenShareFrame />` (conditionally when `callAtom.active`) as siblings inside the room wrapper `<div>`, and mount `<useCallSocket />` effect (via a `<CallSocketManager />` component) unconditionally so socket listeners are always registered.

22. **`modules/room/components/board/UserMouse.tsx`** — Read `activeSpeakerId` from `callAtom` and render a coloured ring around the cursor SVG for the active speaker participant whose `userId` matches.

---

### J. Env & Config

23. **`.env`** — Document new env var `NEXT_PUBLIC_STUN_URLS` (comma-separated STUN server URLs, defaulting to `stun:stun.l.google.com:19302`).

24. **`server/.env`** — Document `RECORDING_RELAY_ENABLED=false` feature-flag env var consumed by the server to optionally relay recording chunks to a storage endpoint.

---

## 2. Tests to Add

### Unit Tests

| File | What to test | Acceptance Criteria covered |
|---|---|---|
| `modules/room/services/__tests__/webrtcService.test.ts` | `createPeer` emits `call_offer`; `destroyPeer` closes the RTCPeerConnection; ICE candidate queuing before remote description is set | AC: peers connect within 3 s on same-network |
| `modules/room/services/__tests__/mediaService.test.ts` | Camera-denied path falls back to audio-only stream; `stopStream` stops all tracks | AC: silent fallback to audio-only |
| `modules/room/services/__tests__/recordingService.test.ts` | `start()` creates a `MediaRecorder`; `stop()` returns a `.webm` Blob; chunks emitted every ~10 s | AC: recording produces downloadable file |
| `common/recoil/call/__tests__/call.hooks.test.ts` | `toggleMute` flips `localStream` audio track `enabled`; `leaveCall` resets atom to default | AC: mute/unmute mic control |
| `modules/room/hooks/__tests__/usePushToTalk.test.ts` | Space keydown unmutes; keyup remutes; disabled when PTT flag is off | AC: push-to-talk mode |
| `modules/room/hooks/__tests__/useActiveSpeaker.test.ts` | Sets `activeSpeakerId` when audio energy exceeds threshold; clears when all silent | AC: active speaker indicator |

### Integration Tests

| File | What to test |
|---|---|
| `modules/room/components/call/__tests__/CallControls.test.tsx` | Clicking "Mute" calls `toggleMute`; "Leave" calls `leaveCall` and hides tile grid; "Record" starts recording and shows indicator dot |
| `modules/room/components/call/__tests__/CallTile.test.tsx` | Renders avatar when `videoEnabled=false`; renders active-speaker ring when tile ID matches `activeSpeakerId`; drag moves tile position |
| `modules/room/components/call/__tests__/DeviceSelector.test.tsx` | Lists enumerated devices; selecting a device calls `replaceTrack` |
| `modules/room/components/call/__tests__/HostControls.test.tsx` | Host sees mute/remove menu; non-host does not; clicking "Mute participant" emits `call_host_mute` |
| `server/__tests__/callSignalling.test.ts` | Signal relay: offer sent by peer A is received by peer B in same room; participant list returned on join; host transfer on host disconnect |

### E2E Tests (Playwright / Cypress)

| Scenario | Acceptance Criteria |
|---|---|
| Two simulated users join the same room, one clicks "Join Call", second auto-receives offer and joins — both video tiles appear | AC: one-click join |
| User 1 mutes mic — User 2's tile shows mute badge | AC: mute/unmute visible to others |
| User 1 starts screen share — `ScreenShareFrame` appears on both clients | AC: screen share embedded on canvas |
| Host removes User 2 from call — User 2's tile disappears | AC: host can remove participant |
| Camera permission denied — tile shows avatar, not black video | AC: audio-only fallback |
| User 1 starts recording, speaks, stops — `.webm` download is triggered | AC: recording download |

---

## 3. Deployment Notes

### Environment Variables

| Variable | Where | Purpose | Default |
|---|---|---|---|
| `NEXT_PUBLIC_STUN_URLS` | `.env` (client-exposed) | Comma-separated STUN server URLs for ICE | `stun:stun.l.google.com:19302` |
| `NEXT_PUBLIC_CALL_MAX_PARTICIPANTS` | `.env` (client-exposed) | Hard cap shown in UI (mesh degrades >6) | `20` |
| `RECORDING_RELAY_ENABLED` | `server/.env` | Toggle server-side recording chunk relay | `false` |
| `NEXT_PUBLIC_CALL_FEATURE_FLAG` | `.env` (client-exposed) | Kill-switch to hide "Join Call" button without a deploy | `true` |

### Feature Flag

- The **"Join Call"** button in `ToolBar.tsx` must be gated behind `NEXT_PUBLIC_CALL_FEATURE_FLAG`. Set it to `false` to disable the feature for all users without redeployment.

### No Database Migrations Required

- Call state is held entirely in-memory in the existing Socket.IO server process. No schema changes are needed.

### Dependencies to Add

| Package | Location | Purpose |
|---|---|---|
| `simple-peer` | `package.json` (client) | WebRTC peer abstraction over `RTCPeerConnection` |
| `@types/simple-peer` | `package.json` (devDependencies) | TypeScript types |
| `react-draggable` | `package.json` (client) | Draggable video tile positioning |

Run `npm install simple-peer @types/simple-peer react-draggable` in the project root.

### Browser Permissions Policy

- The Next.js `<head>` in `pages/_document.tsx` should add `<meta http-equiv="Permissions-Policy" content="camera=*, microphone=*, display-capture=*">` to avoid browser blocking of `getUserMedia` / `getDisplayMedia` in cross-origin iframes.

### HTTPS Requirement

- `getUserMedia` and `getDisplayMedia` require a secure context. Ensure all non-localhost environments serve over HTTPS. Update any load-balancer or reverse-proxy config accordingly.

---

## 4. Rollback Plan

If the Voice & Video Chat feature causes instability in production, set the environment variable `NEXT_PUBLIC_CALL_FEATURE_FLAG=false` and redeploy the Next.js client — this hides the "Join Call" button immediately without touching any server code, leaving all existing whiteboard, chat, and socket functionality intact. Because all call state is ephemeral (in-memory on the Socket.IO server, no database writes), there are no migrations to reverse. The new server-side signalling block in `server/index.ts` is purely additive and only activates on `call_*` socket events; it does not interfere with existing draw, mouse, or chat events. If a full code revert is needed, `git revert` the merge commit and redeploy both the client and server; all peer connections will drop harmlessly and users will see the standard whiteboard interface.
