"use client";

import Box from "@mui/material/Box";

import { useEffect, useState } from "react";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default function Calendar() {
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
      <CalendarHead
        handleBackBtn={handleBackBtn}
        currDate={currDate}
        handleNextBtn={handleNextBtn}
      />
      <CalendarBody week={week} startDay={startDay} daysInMonth={daysInMonth} />
    </Box>
  );
}
