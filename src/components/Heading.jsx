import React from "react";
import { Typography } from "@mui/material";
import useStyles from "../styles";

function Heading({ name }) {
  const classes = useStyles();
  return (
    <Typography variant="h3" sx={classes.heading}>
      Hello {name}
    </Typography>
  );
}

export default Heading;
