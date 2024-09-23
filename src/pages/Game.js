import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Condition from "../components/Condition";
import { requirements } from "../components/Requirements";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
} from "@mui/material";
import useStyles from "../styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

let doSort = false;

function Game() {
  const [password, setPassword] = useState("");
  const [require, setRequire] = useState([]);
  const [name, setName] = useState("");
  const classes = useStyles();

  function changeState(updatedPassword) {
    doSort = true;
    if (updatedPassword.length > 0 && require.length === 0) {
      const firstCondition = requirements.shift();
      setRequire([firstCondition]);
    }
  }

  useEffect(() => {
    let newRequirements = require;
    if (password.length > 0) {
      let lastFulfilled = require[0];
      let lastColor = lastFulfilled.color;

      if (lastColor === "green" && requirements.length > 0) {
        let newCondition = requirements.shift();
        newRequirements = [newCondition, ...require];
      }

      if (doSort) {
        newRequirements = [...newRequirements].sort((a, b) =>
          b.color.localeCompare(a.color)
        );

        doSort = false;
      }

      setRequire(newRequirements);
    }
  }, [password, require]);

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
            <Input
              input={password}
              setInput={setPassword}
              updateState={changeState}
              setName={setName}
            />

            {require.map((condition, id) => {
              return (
                <Box sx={classes.condition} key={id}>
                  <Condition password={password} condition={condition} />
                </Box>
              );
            })}
          </Container>
        </div>
      </main>
    </>
  );
}

export default Game;
