import { useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { TbLine } from "react-icons/tb";
import { useClickAway } from "react-use";
import { IconWrapper } from "@/common/components/IconWrapper";

import { useOptions } from "@/common/recoil/options";

import { EntryAnimation } from "../../animations/Entry.animations";

const LineWidthPicker = () => {
  const [options, setOptions] = useOptions();

  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        className="btn-icon relative"
        onClick={() => setOpened(!opened)}
        disabled={options.mode === "select"}
        title="Line Width"
      >
        <IconWrapper Icon={TbLine} className="rotate-45" strokeWidth={options.lineWidth > 10 ? 3 : options.lineWidth > 5 ? 2 : 1} />
        <div className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 text-[8px] font-semibold text-primary-800">
          {options.lineWidth}
        </div>
      </button>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute top-[6px] left-14 w-48 rounded-xl bg-white p-4 shadow-xl"
            variants={EntryAnimation}
            initial="from"
            animate="to"
            exit="from"
          >
            <h2 className="mb-2 text-sm font-medium text-secondary-700">Line Width: {options.lineWidth}px</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-secondary-500">1</span>
              <input
                type="range"
                min={1}
                max={20}
                value={options.lineWidth}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    lineWidth: parseInt(e.target.value, 10),
                  }))
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary-100"
              />
              <span className="text-xs text-secondary-500">20</span>
            </div>
            <div className="mt-3 flex justify-between">
              {[2, 5, 10, 15].map((width) => (
                <button
                  key={width}
                  className={`h-8 w-8 rounded-md ${
                    options.lineWidth === width ? "bg-primary-100 text-primary-800" : "bg-gray-100 text-secondary-600"
                  }`}
                  onClick={() =>
                    setOptions((prev) => ({
                      ...prev,
                      lineWidth: width,
                    }))
                  }
                >
                  {width}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LineWidthPicker;
