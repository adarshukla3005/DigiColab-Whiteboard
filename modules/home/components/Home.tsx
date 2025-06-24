import { FormEvent, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { FiEdit3, FiUsers, FiPlus } from "react-icons/fi";

import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";

import NotFoundModal from "../modals/NotFound";

const Home = () => {
  const { openModal } = useModal();
  const setAtomRoomId = useSetRoomId();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = "#f8fafc";
  }, []);

  useEffect(() => {
    socket.on("created", (roomIdFromServer) => {
      setAtomRoomId(roomIdFromServer);
      router.push(roomIdFromServer);
    });

    const handleJoinedRoom = (roomIdFromServer: string, failed?: boolean) => {
      if (!failed) {
        setAtomRoomId(roomIdFromServer);
        router.push(roomIdFromServer);
      } else {
        openModal(<NotFoundModal id={roomId} />);
      }
    };

    socket.on("joined", handleJoinedRoom);

    return () => {
      socket.off("created");
      socket.off("joined", handleJoinedRoom);
    };
  }, [openModal, roomId, router, setAtomRoomId]);

  useEffect(() => {
    socket.emit("leave_room");
    setAtomRoomId("");
  }, [setAtomRoomId]);

  const handleCreateRoom = () => {
    if (!username.trim()) return;
    socket.emit("create_room", username);
  };

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.trim()) return;
    if (roomId) socket.emit("join_room", roomId, username);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-primary-50 to-secondary-100">
      <header className="w-full bg-white/80 py-4 px-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
              <FiEdit3 className="h-5 w-5" />
            </div>
            <h1 className="text-2xl font-bold text-secondary-800">DigiColab</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-secondary-800">Welcome to DigiColab</h2>
            <p className="mt-3 text-secondary-600">Real-time collaborative whiteboard for teams</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl">
            {!isCreating ? (
              <>
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-secondary-700">
                    Your Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-gray-200 p-3 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Enter your name..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value.slice(0, 15))}
                    required
                  />
                </div>

                <form className="mb-6" onSubmit={handleJoinRoom}>
                  <label className="mb-2 block text-sm font-medium text-secondary-700">
                    Room ID
                  </label>
                  <div className="flex gap-2">
                    <input
                      className="flex-1 rounded-xl border border-gray-200 p-3 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Enter room ID..."
                      value={roomId}
                      onChange={(e) => setRoomId(e.target.value)}
                      required
                    />
                    <button 
                      className="btn flex items-center gap-2" 
                      type="submit"
                      disabled={!roomId.trim() || !username.trim()}
                    >
                      <FiUsers className="h-4 w-4" />
                      <span>Join</span>
                    </button>
                  </div>
                </form>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-sm text-secondary-500">or</span>
                  </div>
                </div>

                <button 
                  className="btn w-full bg-accent-500 hover:bg-accent-600 flex items-center justify-center gap-2"
                  onClick={() => setIsCreating(true)}
                >
                  <FiPlus className="h-4 w-4" />
                  <span>Create New Room</span>
                </button>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-secondary-700">
                    Your Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-gray-200 p-3 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Enter your name..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value.slice(0, 15))}
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <button 
                    className="btn flex-1 bg-secondary-200 text-secondary-800 hover:bg-secondary-300"
                    onClick={() => setIsCreating(false)}
                  >
                    Back
                  </button>
                  <button 
                    className="btn flex-1 bg-accent-500 hover:bg-accent-600 flex items-center justify-center gap-2"
                    onClick={handleCreateRoom}
                    disabled={!username.trim()}
                  >
                    <FiPlus className="h-4 w-4" />
                    <span>Create Room</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-secondary-500">
        © {new Date().getFullYear()} DigiColab. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
