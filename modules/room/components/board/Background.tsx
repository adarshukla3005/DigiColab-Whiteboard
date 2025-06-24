import { RefObject, useEffect } from "react";

import { motion } from "framer-motion";

import { CANVAS_SIZE } from "@/common/constants/canvasSize";
import { useBackground } from "@/common/recoil/background";

import { useBoardPosition } from "../../hooks/useBoardPosition";

const Background = ({ bgRef }: { bgRef: RefObject<HTMLCanvasElement> }) => {
  const bg = useBackground();
  const { x, y } = useBoardPosition();

  useEffect(() => {
    const ctx = bgRef.current?.getContext("2d");

    if (ctx) {
      // Set background color based on mode
      const bgColor = bg.mode === "dark" ? "#1e293b" : "#f8fafc";
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

      document.body.style.backgroundColor = bgColor;

      if (bg.lines) {
        // Draw grid lines with a more subtle appearance
        ctx.lineWidth = 1;
        
        // Subtle grid lines based on mode
        const lineColor = bg.mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";
        ctx.strokeStyle = lineColor;
        
        // Draw horizontal lines
        for (let i = 0; i < CANVAS_SIZE.height; i += 25) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(ctx.canvas.width, i);
          ctx.stroke();
        }

        // Draw vertical lines
        for (let i = 0; i < CANVAS_SIZE.width; i += 25) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, ctx.canvas.height);
          ctx.stroke();
        }
        
        // Add subtle dots at intersections for a more modern look
        const dotColor = bg.mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.09)";
        ctx.fillStyle = dotColor;
        
        for (let x = 0; x < CANVAS_SIZE.width; x += 25) {
          for (let y = 0; y < CANVAS_SIZE.height; y += 25) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
  }, [bgRef, bg]);

  return (
    <motion.canvas
      ref={bgRef}
      width={CANVAS_SIZE.width}
      height={CANVAS_SIZE.height}
      className="absolute top-0 rounded-lg shadow-inner-lg"
      style={{ x, y }}
    />
  );
};

export default Background;
