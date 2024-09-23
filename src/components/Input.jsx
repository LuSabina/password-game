import React from "react";
import useStyles from "../styles";
import { TextField, Stack } from "@mui/material";

function Input({ input, setInput, updateState, setName }) {
  const classes = useStyles();

  function handleChange(event) {
    setInput(event.target.value);
    updateState(event.target.value);
  }
  function assignName(event) {
    return setName(event.target.value);
  }

  return (
    <Stack spacing={1} sx={classes.stack}>
      <TextField
        onChange={assignName}
        //value={input}
        sx={classes.input}
        variant="outlined"
        id="outlined-basic"
        placeholder="What is your name?"
        size="small"
        autoComplete="off"
        color="#9e9e9e"
      />
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
    </Stack>
  );
}

export default Input;
