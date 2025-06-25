import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowsMove } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { IconWrapper } from "@/common/components/IconWrapper";

import { useOptionsValue } from "@/common/recoil/options";

import { useRefs } from "../../hooks/useRefs";

const SelectionBtns = () => {
  const { selection } = useOptionsValue();
  const { selectionRefs } = useRefs();

  let top;
  let left;

  if (selection) {
    const { x, y, width, height } = selection;
    top = Math.min(y, y + height) - 50;
    left = Math.min(x, x + width);
  } else {
    left = -100;
    top = -100;
  }

  const buttons = [
    { icon: <IconWrapper Icon={BsArrowsMove} />, title: "Move", index: 0 },
    { icon: <IconWrapper Icon={FiCopy} />, title: "Copy", index: 1 },
    { icon: <IconWrapper Icon={AiOutlineDelete} />, title: "Delete", index: 2 },
  ];

  return (
    <div
      className="absolute top-0 left-0 z-50 flex items-center justify-center gap-2 transition-all duration-200"
      style={{ top, left }}
    >
      <div className="flex gap-1 rounded-full bg-white/90 p-1 shadow-lg backdrop-blur-sm">
        {buttons.map((button) => (
          <button
            key={button.index}
            className="btn-icon h-8 w-8 bg-transparent text-secondary-700 hover:bg-primary-50"
            ref={(ref) => {
              if (ref && selectionRefs.current) selectionRefs.current[button.index] = ref;
            }}
            title={button.title}
          >
            {button.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionBtns;
