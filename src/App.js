import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Condition from "./components/Condition";
import { requirements } from "./components/Requirements";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
} from "@mui/material";
import useStyles from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockIcon from "@mui/icons-material/Lock";

let doSort = false;

function App() {
  const [password, setPassword] = useState("");
  const [require, setRequire] = useState([]);
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
          <LockIcon />
          <Typography sx={classes.toolbartext}>PasswordApp</Typography>
          <GitHubIcon sx={{ marginLeft: "auto" }} />
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container align="center">
            <Heading />
            <Input
              input={password}
              setInput={setPassword}
              updateState={changeState}
            />

            {require.map((condition, id) => {
              return (
                <Box sx={classes.condition}>
                  <Condition
                    key={id}
                    password={password}
                    condition={condition}
                  />
                </Box>
              );
            })}
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
