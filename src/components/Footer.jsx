import React from "react";

import useStyles from "../styles";
import { Box, Typography, Stack } from "@mui/material";

import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const classes = useStyles();
  return (
    <Box component="footer" sx={classes.footer}>
      <Stack direction="row" spacing={1}>
        <CopyrightIcon sx={classes.footerText} />
        <Typography sx={classes.footerText}>
          {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
