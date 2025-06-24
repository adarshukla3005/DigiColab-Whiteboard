import { socket } from "@/common/lib/socket";

const Message = ({ userId, msg, username, color }: Message) => {
  const me = socket.id === userId;

  return (
    <div
      className={`my-2 flex flex-col ${me ? "items-end" : "items-start"}`}
    >
      {!me && (
        <div className="flex items-center gap-1.5 mb-1">
          <div 
            className="h-2.5 w-2.5 rounded-full" 
            style={{ backgroundColor: color }} 
          />
          <h5 className="text-xs font-medium text-secondary-600">
            {username}
          </h5>
        </div>
      )}
      <div 
        className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
          me 
            ? "bg-primary-100 text-primary-800" 
            : "bg-secondary-100 text-secondary-800"
        }`}
      >
        <p style={{ wordBreak: "break-all" }}>{msg}</p>
      </div>
    </div>
  );
};

export default Message;
