import { FormEvent, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { FiEdit3 } from "react-icons/fi";

import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";
import NotFoundModal from "@/modules/home/modals/NotFound";

const NameInput = () => {
  const setRoomId = useSetRoomId();
  const { openModal } = useModal();

  const [name, setName] = useState("");

  const router = useRouter();
  const roomId = (router.query.roomId || "").toString();

  useEffect(() => {
    if (!roomId) return;

    socket.emit("check_room", roomId);

    socket.on("room_exists", (exists) => {
      if (!exists) {
        router.push("/");
      }
    });

    // eslint-disable-next-line consistent-return
    return () => {
      socket.off("room_exists");
    };
  }, [roomId, router]);

  useEffect(() => {
    const handleJoined = (roomIdFromServer: string, failed?: boolean) => {
      if (failed) {
        router.push("/");
        openModal(<NotFoundModal id={roomIdFromServer} />);
      } else setRoomId(roomIdFromServer);
    };

    socket.on("joined", handleJoined);

    return () => {
      socket.off("joined", handleJoined);
    };
  }, [openModal, router, setRoomId]);

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit("join_room", roomId, name);
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="mx-4 w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <form
          className="flex flex-col items-center"
          onSubmit={handleJoinRoom}
        >
          <div className="mb-6 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <FiEdit3 className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-secondary-800 sm:text-5xl">
            DigiColab
          </h1>
          <h3 className="mt-2 text-lg text-secondary-500 sm:text-xl">
            Real-time whiteboard
          </h3>

          <div className="mt-8 w-full">
            <label className="mb-2 block text-sm font-medium text-secondary-700">
              Enter your name to join
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 p-3 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              id="room-id"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 15))}
              required
            />
          </div>

          <button 
            className="btn mt-6 w-full" 
            type="submit"
            disabled={!name.trim()}
          >
            Join Whiteboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameInput;
