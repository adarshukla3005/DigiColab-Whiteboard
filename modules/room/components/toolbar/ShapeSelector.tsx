import { useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { BiRectangle } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { CgShapeZigzag } from "react-icons/cg";
import { useClickAway } from "react-use";
import { IconWrapper } from "@/common/components/IconWrapper";

import { useOptions } from "@/common/recoil/options";

import { EntryAnimation } from "../../animations/Entry.animations";

const ShapeSelector = () => {
  const [options, setOptions] = useOptions();

  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  const handleShapeChange = (shape: Shape) => {
    setOptions((prev) => ({
      ...prev,
      shape,
    }));

    setOpened(false);
  };

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        className="btn-icon text-2xl"
        disabled={options.mode === "select"}
        onClick={() => setOpened((prev) => !prev)}
      >
        {options.shape === "circle" && <IconWrapper Icon={BsCircle} />}
        {options.shape === "rect" && <IconWrapper Icon={BiRectangle} />}
        {options.shape === "line" && <IconWrapper Icon={CgShapeZigzag} />}
      </button>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute left-14 z-10 flex gap-1 rounded-lg border bg-zinc-900 p-2 md:border-0"
            variants={EntryAnimation}
            initial="from"
            animate="to"
            exit="from"
          >
            <button
              className="btn-icon text-2xl"
              onClick={() => handleShapeChange("line")}
            >
              <IconWrapper Icon={CgShapeZigzag} />
            </button>

            <button
              className="btn-icon text-2xl"
              onClick={() => handleShapeChange("rect")}
            >
              <IconWrapper Icon={BiRectangle} />
            </button>

            <button
              className="btn-icon text-2xl"
              onClick={() => handleShapeChange("circle")}
            >
              <IconWrapper Icon={BsCircle} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShapeSelector;
