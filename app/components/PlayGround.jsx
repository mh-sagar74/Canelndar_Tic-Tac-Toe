"use client";

import { useEffect, useState } from "react";
import GameBox from "./GameBox";
import winningCondition from "./winningCondition";
import Btn from "./Btn";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

export default function PlayGround() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const winner = winningCondition(boxes);
  const [isWin, setIsWin] = useState(false);

  const handleOnClick = (i) => {
    if (winner) {
      return winner;
    } else {
      if (!boxes[i]) {
        const boxVal = boxes.map((box, index) =>
          index === i ? (isX ? "X" : "O") : box
        );
        setBoxes(boxVal);
      } else {
        return;
      }
      setIsX(!isX);
    }
  };

  useEffect(() => {
    if (winner) {
      setIsWin(true);
    }
  }, [winner]);

  const handleReplayBtn = () => {
    setBoxes(Array(9).fill(null));
    setIsX(true);
    setIsWin(false);
  };

  return (
    <div>
      <div>
        {isWin ? (
          <div className="text-4xl bg-green-100">
            Winner is : <span className="text-red-500 font-bold">{winner}</span>
          </div>
        ) : null}
      </div>
      <Btn clickEvent={handleReplayBtn} icon={<ReplayRoundedIcon />} />
      <div className="flex w-[490px] flex-wrap gap-5 justify-center">
        {boxes.map((box, i) => (
          <GameBox key={i} value={box} clickEvent={() => handleOnClick(i)} />
        ))}
      </div>
    </div>
  );
}
