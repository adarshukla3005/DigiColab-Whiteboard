import { useRoom } from "@/common/recoil/room";

const UserList = () => {
  const room = useRoom();

  return (
    <div className="absolute right-5 top-5 z-50 flex flex-col items-end gap-2">
      {[...room.users.entries()].map(([userId, user]) => (
        <div
          key={userId}
          className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-secondary-800">{user.name}</span>
          <div
            className="h-3 w-3 rounded-full"
            style={{ background: user.color }}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
