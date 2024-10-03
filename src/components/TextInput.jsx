import React from "react";
import { TextField } from "@mui/material";

function TextInput({ handleChange, input, label, placeholder, id, sx }) {
  return (
    <TextField
      onChange={handleChange}
      value={input}
      variant="outlined"
      id={id}
      label={label || undefined}
      size="small"
      autoComplete="off"
      color="#9e9e9e"
      placeholder={placeholder}
      sx={sx}
    />
  );
}

export default TextInput;
