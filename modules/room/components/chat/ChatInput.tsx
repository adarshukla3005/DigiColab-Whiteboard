import { FormEvent, useState } from "react";

import { IoSendSharp } from "react-icons/io5";

import { socket } from "@/common/lib/socket";

const ChatInput = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!msg.trim()) return;

    socket.emit("send_msg", msg);

    setMsg("");
  };

  return (
    <form className="flex w-full items-center gap-2 mt-2" onSubmit={handleSubmit}>
      <input
        className="w-full rounded-full border border-gray-200 py-2 px-4 text-sm shadow-sm focus:border-primary-400 focus:ring-primary-400"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type your message..."
      />
      <button 
        className="btn-icon h-10 w-10 bg-primary-600 text-white disabled:bg-primary-300" 
        type="submit"
        disabled={!msg.trim()}
      >
        <IoSendSharp />
      </button>
    </form>
  );
};

export default ChatInput;
