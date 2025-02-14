"use client";

import { useEffect, useState } from "react";
import GameBox from "./GameBox";
import winningCondition from "./winningCondition";
import Btn from "../Btn";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import Winner from "./Winner";

export default function PlayGround() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const winner = winningCondition(boxes);
  const [isWin, setIsWin] = useState(false);
  const [key, setKeyDown] = useState("");

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

  useEffect(() => {
    if (key === 48) {
      setBoxes(Array(9).fill(null));
      setIsX(true);
      setIsWin(false);
    }
    if (!winner) {
      if (key === 49) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 0 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 50) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 1 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 51) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 2 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 52) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 3 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 53) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 4 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 54) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 5 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 55) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 6 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 56) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 7 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      } else if (key === 57) {
        const newVal = boxes.map((val, i) =>
          val === null && i === 8 ? (isX ? "X" : "O") : val
        );
        setBoxes(newVal);
        setIsX(!isX);
      }
    }
  }, [key]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyDown(event.keyCode);
    };
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Winner isWin={isWin} winner={winner} />
      <Btn clickEvent={handleReplayBtn} icon={<ReplayRoundedIcon />} />
      <div className="flex w-[490px] flex-wrap gap-5 justify-center">
        {boxes.map((box, i) => (
          <GameBox key={i} value={box} clickEvent={() => handleOnClick(i)} />
        ))}
      </div>
    </div>
  );
}
