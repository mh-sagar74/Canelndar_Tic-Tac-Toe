import { Box } from "@mui/material";
import Btn from "../Btn";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

export default function CalendarHead({
  handleBackBtn,
  currDate,
  handleNextBtn,
}) {
  return (
    <div>
      <Box className="flex justify-center justify-between bg-gray-300 rounded-t-md">
        <Btn clickEvent={handleBackBtn} icon={<ArrowBackIosRoundedIcon />} />
        <Box className="text-2xl pt-1">
          {currDate.toLocaleString("default", { month: "long" })}
          &nbsp;&nbsp;
          {currDate.getFullYear()}
        </Box>
        <Btn clickEvent={handleNextBtn} icon={<ArrowForwardIosRoundedIcon />} />
      </Box>
    </div>
  );
}
