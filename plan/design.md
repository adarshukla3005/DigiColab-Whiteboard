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
