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
