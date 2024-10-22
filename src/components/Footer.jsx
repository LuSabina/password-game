import React from "react";

import useStyles from "../styles";
import { Box, Typography, Stack } from "@mui/material";

import CopyrightIcon from "@mui/icons-material/Copyright";
import Weather from "./Weather";

function Footer() {
  const classes = useStyles();
  return (
    <Box component="footer" sx={classes.footer}>
      <Stack direction="row" sx={classes.footerStack}>
        <Box sx={{ display: "flex" }}>
          <CopyrightIcon sx={classes.footerText} />
          <Typography sx={classes.footerText}>
            {new Date().getFullYear()}
          </Typography>
        </Box>
        <Weather />
      </Stack>
    </Box>
  );
}

export default Footer;
