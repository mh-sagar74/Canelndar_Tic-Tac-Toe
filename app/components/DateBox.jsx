"use client";

import Box from "@mui/material/Box";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Btn from "./Btn";
import { useEffect, useState } from "react";

export default function DateBox() {
  const [currDate, setCurrDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const year = currDate.getFullYear();
    const month = currDate.getMonth();
    const day = new Date(year, month, 1);
    const days = [];

    while (day.getMonth() === currDate.getMonth()) {
      days.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currDate]);

  const handleNextBtn = () => {
    setCurrDate(new Date(currDate.setMonth(currDate.getMonth() + 1)));
  };

  const handleBackBtn = () => {
    setCurrDate(new Date(currDate.setMonth(currDate.getMonth() - 1)));
  };

  return (
    <Box sx={{ width: 420 }} className="m-auto">
      <Box className="flex justify-center justify-between bg-gray-300 rounded-t-md">
        <Btn clickEvent={handleBackBtn} icon={<ArrowBackIosRoundedIcon />} />
        <Box className="text-2xl pt-1">
          {currDate.toLocaleString("default", { month: "long" })}
          &nbsp;&nbsp;
          {currDate.getFullYear()}
        </Box>
        <Btn clickEvent={handleNextBtn} icon={<ArrowForwardIosRoundedIcon />} />
      </Box>
      <Box className="flex justify-start bg-gray-200 rounded-b-md flex-wrap">
        {week.map((day) => (
          <Box className="pt-2 pb-2" sx={{ width: 60 }} key={day}>
            {day}
          </Box>
        ))}
        {Array.from({ length: startDay }).map((_, index) => (
          <Box className="pt-2 pb-2" sx={{ width: 60 }} key={index} />
        ))}
        {daysInMonth.map((d) => (
          <Box
            className={`pt-2 pb-2 ${
              new Date().getDate() === d.getDate() &&
              new Date().getMonth() === d.getMonth() &&
              new Date().getFullYear() === d.getFullYear()
                ? "bg-gray-400 rounded-md"
                : null
            }`}
            sx={{ width: 60 }}
            key={d}>
            {d.getDate()}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
