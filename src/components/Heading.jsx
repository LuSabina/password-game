import React from "react";
import { Typography } from "@mui/material";
import useStyles from "../styles";

function Heading({ text }) {
  const classes = useStyles();
  return (
    <Typography variant="h3" sx={classes.heading}>
      {text}
    </Typography>
  );
}

export default Heading;
