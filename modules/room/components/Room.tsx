import { useRoom } from "@/common/recoil/room";

import RoomContextProvider from "../context/Room.context";
import Canvas from "./board/Canvas";
import MousePosition from "./board/MousePosition";
import MousesRenderer from "./board/MousesRenderer";
import MoveImage from "./board/MoveImage";
import SelectionBtns from "./board/SelectionBtns";
import Chat from "./chat/Chat";
import NameInput from "./NameInput";
import ToolBar from "./toolbar/ToolBar";
import UserList from "./UserList";

const Room = () => {
  const room = useRoom();

  if (!room.id) return <NameInput />;

  return (
    <RoomContextProvider>
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-secondary-50 to-secondary-100">
        <div className="absolute inset-0 bg-primary-100/5 backdrop-blur-[2px]">
          <div className="h-full w-full p-4 md:p-6">
            <div className="relative h-full w-full rounded-3xl bg-white/80 shadow-xl backdrop-blur-sm">
              <UserList />
              <ToolBar />
              <SelectionBtns />
              <MoveImage />
              <Canvas />
              <MousePosition />
              <MousesRenderer />
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </RoomContextProvider>
  );
};

export default Room;
