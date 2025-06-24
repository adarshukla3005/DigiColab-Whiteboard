import { FaRedo, FaUndo } from "react-icons/fa";

import { useMyMoves } from "@/common/recoil/room";
import { useSavedMoves } from "@/common/recoil/savedMoves";

import { useRefs } from "../../hooks/useRefs";

const HistoryBtns = () => {
  const { redoRef, undoRef } = useRefs();

  const { myMoves } = useMyMoves();
  const savedMoves = useSavedMoves();

  return (
    <div className="flex w-full justify-center gap-4">
      <button
        className="btn-icon text-xl"
        ref={undoRef}
        disabled={!myMoves.length}
        title="Undo"
      >
        <FaUndo />
      </button>
      <button
        className="btn-icon text-xl"
        ref={redoRef}
        disabled={!savedMoves.length}
        title="Redo"
      >
        <FaRedo />
      </button>
    </div>
  );
};

export default HistoryBtns;
