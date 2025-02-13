import { Box } from "@mui/material";

export default function CalendarBody({ week, startDay, daysInMonth }) {
  return (
    <div>
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
    </div>
  );
}
