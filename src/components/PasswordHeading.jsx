import React from "react";
import { Typography } from "@mui/material";
import useStyles from "../styles";

function PasswordHeading() {
  const classes = useStyles();
  return (
    <Typography variant="h3" sx={classes.heading}>
      Hi, {localStorage.getItem("name")}!
    </Typography>
  );
}

export default PasswordHeading;
