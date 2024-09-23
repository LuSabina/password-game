import React from "react";
import { Typography } from "@mui/material";
import useStyles from "../styles";

function NameHeading() {
  const classes = useStyles();
  return (
    <Typography variant="h3" sx={classes.heading}>
      Welcome to the password game!
    </Typography>
  );
}

export default NameHeading;
