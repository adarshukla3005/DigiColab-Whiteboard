import { useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { RgbaColorPicker } from "react-colorful";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useClickAway } from "react-use";
import { IconWrapper } from "@/common/components/IconWrapper";

import { useOptions } from "@/common/recoil/options/options.hooks";

import { EntryAnimation } from "../../animations/Entry.animations";

const ColorPicker = () => {
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
        title="Color Picker"
      >
        <IconWrapper Icon={IoColorPaletteOutline} />
        <div 
          className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-white"
          style={{ 
            backgroundColor: `rgba(${options.lineColor.r}, ${options.lineColor.g}, ${options.lineColor.b}, ${options.lineColor.a})` 
          }}
        />
      </button>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute left-10 mt-24 rounded-xl bg-white p-4 shadow-xl sm:left-14"
            variants={EntryAnimation}
            initial="from"
            animate="to"
            exit="from"
          >
            <div className="mb-4">
              <h2 className="mb-2 text-sm font-medium text-secondary-700">
                Line Color
              </h2>
              <RgbaColorPicker
                color={options.lineColor}
                onChange={(e) => {
                  setOptions({
                    ...options,
                    lineColor: e,
                  });
                }}
                className="mb-2"
              />
              <div 
                className="mt-1 h-6 w-full rounded-md border border-gray-200" 
                style={{ 
                  backgroundColor: `rgba(${options.lineColor.r}, ${options.lineColor.g}, ${options.lineColor.b}, ${options.lineColor.a})` 
                }}
              />
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <h2 className="mb-2 text-sm font-medium text-secondary-700">
                Fill Color
              </h2>
              <RgbaColorPicker
                color={options.fillColor}
                onChange={(e) => {
                  setOptions({
                    ...options,
                    fillColor: e,
                  });
                }}
                className="mb-2"
              />
              <div 
                className="mt-1 h-6 w-full rounded-md border border-gray-200" 
                style={{ 
                  backgroundColor: `rgba(${options.fillColor.r}, ${options.fillColor.g}, ${options.fillColor.b}, ${options.fillColor.a})` 
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
