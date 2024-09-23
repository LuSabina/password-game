import React, { useState } from "react";
import Heading from "../components/Heading";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import useStyles from "../styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Login from "../components/Login";
import { Link } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={classes.appname}>
        <Toolbar>
          <LockOutlinedIcon />
          <Typography sx={classes.toolbartext}>PasswordGame</Typography>
          <IconButton
            sx={{ marginLeft: "auto" }}
            href="https://github.com/sabinaLukaszczyk/password-game"
            target="_blank"
          >
            <GitHubIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container align="center">
            <Heading name={name} />
            <Stack sx={classes.stack} spacing={1}>
              <Login setName={setName} />

              <Button
                component={Link}
                to="/game"
                variant="contained"
                href=""
                sx={classes.subbutton}
              >
                Submit
              </Button>
            </Stack>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
