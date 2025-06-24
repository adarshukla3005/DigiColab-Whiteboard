import { useRef } from "react";

import { motion } from "framer-motion";
import { useInterval, useMouse } from "react-use";

import { getPos } from "@/common/lib/getPos";
import { socket } from "@/common/lib/socket";

import { useBoardPosition } from "../../hooks/useBoardPosition";

const MousePosition = () => {
  const { x, y } = useBoardPosition();

  const prevPosition = useRef({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);

  const { docX, docY } = useMouse(ref);

  const touchDevice = window.matchMedia("(pointer: coarse)").matches;

  useInterval(() => {
    if (
      (prevPosition.current.x !== docX || prevPosition.current.y !== docY) &&
      !touchDevice
    ) {
      socket.emit("mouse_move", getPos(docX, x), getPos(docY, y));
      prevPosition.current = { x: docX, y: docY };
    }
  }, 150);

  if (touchDevice) return null;

  const posX = getPos(docX, x).toFixed(0);
  const posY = getPos(docY, y).toFixed(0);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none absolute top-0 left-0 z-50 select-none transition-colors"
      animate={{ x: docX + 15, y: docY + 15 }}
      transition={{ duration: 0.05, ease: "linear" }}
    >
      <div className="rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-secondary-800 shadow-sm backdrop-blur-sm">
        <span className="text-primary-600">{posX}</span>
        <span className="mx-1 text-secondary-400">|</span>
        <span className="text-primary-600">{posY}</span>
      </div>
    </motion.div>
  );
};

export default MousePosition;
