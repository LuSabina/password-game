import React from "react";
import useStyles from "../styles";
import { TextField } from "@mui/material";

function Input({ input, setInput, updateState }) {
  const classes = useStyles();

  function handleChange(event) {
    setInput(event.target.value);
    updateState(event.target.value);
  }

  return (
    <TextField
      onChange={handleChange}
      value={input}
      sx={classes.input}
      variant="outlined"
      id="outlined-password-input"
      label="Enter your password"
      size="small"
      autoComplete="off"
      color="#9e9e9e"
    />
  );
}

export default Input;
