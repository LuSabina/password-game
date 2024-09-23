import React from "react";
import useStyles from "../styles";
import { TextField } from "@mui/material";

function Login({ setName }) {
  const classes = useStyles();

  function assignName(event) {
    return setName(event.target.value);
  }

  return (
    <TextField
      onChange={assignName}
      sx={classes.inputName}
      variant="outlined"
      id="outlined-basic"
      placeholder="What is your name?"
      size="small"
      autoComplete="off"
      color="#9e9e9e"
    />
  );
}

export default Login;
