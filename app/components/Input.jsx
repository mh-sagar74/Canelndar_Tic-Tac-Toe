import TextField from "@mui/material/TextField";

export default function Input({ value, onChange, label = "Type here" }) {
  return (
    <div>
      <TextField
        value={value}
        onChange={onChange}
        variant="filled"
        label={label}
        sx={{ width: 450 }}
      />
    </div>
  );
}
