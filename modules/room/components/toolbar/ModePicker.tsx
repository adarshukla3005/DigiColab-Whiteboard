import { useEffect } from "react";

import { AiOutlineSelect } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaEraser } from "react-icons/fa";
import { IconWrapper } from "@/common/components/IconWrapper";

import { useOptions, useSetSelection } from "@/common/recoil/options";

const ModePicker = () => {
  const [options, setOptions] = useOptions();
  const { clearSelection } = useSetSelection();

  useEffect(() => {
    clearSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.mode]);

  const modes = [
    {
      id: "draw",
      icon: <IconWrapper Icon={BsPencilFill} />,
      title: "Draw"
    },
    {
      id: "eraser",
      icon: <IconWrapper Icon={FaEraser} />,
      title: "Eraser"
    },
    {
      id: "select",
      icon: <IconWrapper Icon={AiOutlineSelect} className="text-xl" />,
      title: "Select"
    }
  ];

  return (
    <div className="flex flex-col gap-2">
      {modes.map((mode) => (
        <button
          key={mode.id}
          className={`btn-icon relative ${
            options.mode === mode.id 
              ? "bg-primary-600 text-white ring-2 ring-primary-200" 
              : "bg-gray-100 text-secondary-600 hover:bg-gray-200"
          }`}
          onClick={() => {
            setOptions((prev) => ({
              ...prev,
              mode: mode.id as "draw" | "eraser" | "select",
            }));
          }}
          title={mode.title}
        >
          {mode.icon}
          {options.mode === mode.id && (
            <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ModePicker;
