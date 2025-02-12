// "use client";

import IconButton from "@mui/material/IconButton";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

export default function Btn({ icon = <CheckRoundedIcon />, clickEvent }) {
  return (
    <div>
      <IconButton onClick={clickEvent}>{icon}</IconButton>
    </div>
  );
}
