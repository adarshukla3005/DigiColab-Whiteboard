import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { BsChatSquareFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useList } from "react-use";
import { IconWrapper } from "@/common/components/IconWrapper";

import { DEFAULT_EASE } from "@/common/constants/easings";
import { socket } from "@/common/lib/socket";
import { useRoom } from "@/common/recoil/room";

import ChatInput from "./ChatInput";
import Message from "./Message";

const Chat = () => {
  const room = useRoom();

  const msgList = useRef<HTMLDivElement>(null);

  const [newMsg, setNewMsg] = useState(false);
  const [opened, setOpened] = useState(false);
  const [msgs, handleMsgs] = useList<Message>([]);

  useEffect(() => {
    const handleNewMsg = (userId: string, msg: string) => {
      const user = room.users.get(userId);

      handleMsgs.push({
        userId,
        msg,
        id: msgs.length + 1,
        username: user?.name || "Anonymous",
        color: user?.color || "#000",
      });

      msgList.current?.scroll({ top: msgList.current?.scrollHeight });

      if (!opened) setNewMsg(true);
    };

    socket.on("new_msg", handleNewMsg);

    return () => {
      socket.off("new_msg", handleNewMsg);
    };
  }, [handleMsgs, msgs, opened, room.users]);

  return (
    <motion.div
      className="absolute bottom-0 z-50 flex h-[300px] w-full flex-col overflow-hidden rounded-t-xl shadow-xl sm:left-36 sm:w-[30rem]"
      animate={{ y: opened ? 0 : 260 }}
      transition={{ ease: DEFAULT_EASE, duration: 0.2 }}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between bg-primary-600 py-3 px-6 font-medium text-white"
        onClick={() => {
          setOpened((prev) => !prev);
          setNewMsg(false);
        }}
      >
        <div className="flex items-center gap-2">
          <IconWrapper Icon={BsChatSquareFill} className="text-primary-200" />
          <span className="text-sm">Team Chat</span>
          {newMsg && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-400 text-xs font-semibold text-white">
              !
            </span>
          )}
        </div>

        <motion.div
          animate={{ rotate: opened ? 0 : 180 }}
          transition={{ ease: DEFAULT_EASE, duration: 0.2 }}
          className="text-primary-200"
        >
          <IconWrapper Icon={FaChevronDown} />
        </motion.div>
      </button>
      <div className="flex flex-1 flex-col justify-between bg-white p-4">
        <div 
          className="h-[190px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent" 
          ref={msgList}
        >
          {msgs.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
          {msgs.length === 0 && (
            <div className="flex h-full items-center justify-center text-sm text-secondary-400">
              No messages yet. Start the conversation!
            </div>
          )}
        </div>
        <ChatInput />
      </div>
    </motion.div>
  );
};

export default Chat;
