import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { IoIosShareAlt } from "react-icons/io";
import { IconWrapper } from "@/common/components/IconWrapper";

import { CANVAS_SIZE } from "@/common/constants/canvasSize";
import { DEFAULT_EASE } from "@/common/constants/easings";
import { useViewportSize } from "@/common/hooks/useViewportSize";
import { useModal } from "@/common/recoil/modal";

import { useRefs } from "../../hooks/useRefs";
import ShareModal from "../../modals/ShareModal";
import BackgroundPicker from "./BackgoundPicker";
import ColorPicker from "./ColorPicker";
import HistoryBtns from "./HistoryBtns";
import ImagePicker from "./ImagePicker";
import LineWidthPicker from "./LineWidthPicker";
import ModePicker from "./ModePicker";
import ShapeSelector from "./ShapeSelector";

const ToolBar = () => {
  const { canvasRef, bgRef } = useRefs();
  const { openModal } = useModal();
  const { width } = useViewportSize();

  const [opened, setOpened] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (width >= 1024) setOpened(true);
    else setOpened(false);
  }, [width]);

  const handleExit = () => router.push("/");

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_SIZE.width;
    canvas.height = CANVAS_SIZE.height;

    const tempCtx = canvas.getContext("2d");

    if (tempCtx && canvasRef.current && bgRef.current) {
      tempCtx.drawImage(bgRef.current, 0, 0);
      tempCtx.drawImage(canvasRef.current, 0, 0);
    }

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  };

  const handleShare = () => openModal(<ShareModal />);

  return (
    <>
      <motion.button
        className="btn-icon absolute bottom-1/2 -left-2 z-50 h-12 w-12 rounded-full bg-primary-600 text-2xl shadow-lg transition-none lg:hidden"
        animate={{ rotate: opened ? 0 : 180 }}
        transition={{ duration: 0.2, ease: DEFAULT_EASE }}
        onClick={() => setOpened(!opened)}
      >
        <IconWrapper Icon={FiChevronRight} />
      </motion.button>
      <motion.div
        className="toolbar-container absolute left-10 top-[50%] z-50 grid grid-cols-2 items-center gap-5 p-6 text-secondary-800"
        animate={{
          x: opened ? 0 : -160,
          y: "-50%",
        }}
        transition={{
          duration: 0.2,
          ease: DEFAULT_EASE,
        }}
      >
        <div className="col-span-2">
          <HistoryBtns />
        </div>

        <div className="toolbar-divider col-span-2" />

        <ShapeSelector />
        <ColorPicker />
        <LineWidthPicker />
        <ModePicker />
        <ImagePicker />

        <div className="toolbar-divider col-span-2" />

        <BackgroundPicker />
        <button className="btn-icon text-2xl" onClick={handleShare}>
          <IconWrapper Icon={IoIosShareAlt} />
        </button>
        <button className="btn-icon text-2xl" onClick={handleDownload}>
          <IconWrapper Icon={HiOutlineDownload} />
        </button>
        <button className="btn-icon text-xl" onClick={handleExit}>
          <IconWrapper Icon={ImExit} />
        </button>
      </motion.div>
    </>
  );
};

export default ToolBar;
