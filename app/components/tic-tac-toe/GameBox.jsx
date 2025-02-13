"use client";

import { Box } from "@mui/material";

export default function GameBox({ value, clickEvent }) {
  return (
    <div>
      <Box
        className="bg-gray-300 text-8xl font-semibold text-center pt-7 rounded-md"
        sx={{ height: 150, width: 150 }}
        onClick={clickEvent}>
        {value}
      </Box>
    </div>
  );
}
