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
