import React, { useState, useEffect } from "react";
import NameHeading from "../components/NameHeading";

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
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";

function App() {
  const classes = useStyles();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  let validName = name.trim();

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  function renderButton() {
    if (validName.length < 2) {
      return <Button disabled>Submit</Button>;
    } else {
      return (
        <Button
          component={Link}
          to="/game"
          variant="contained"
          sx={classes.subbutton}
        >
          Submit
        </Button>
      );
    }
  }

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
            <NameHeading />
            <Stack sx={classes.stack} spacing={1}>
              <LoginInput setName={setName} />
              {renderButton()}
            </Stack>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
