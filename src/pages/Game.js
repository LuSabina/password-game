import React, { useState, useEffect } from "react";
import Condition from "../components/Condition";
import { requirements } from "../components/Requirements";
import { Container, Box } from "@mui/material";
import useStyles from "../styles";
import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

let doSort = false;

function Game() {
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
  function handleChange(event) {
    setPassword(event.target.value);
    changeState(event.target.value);
  }

  return (
    <>
      <Navbar />
      <main>
        <div>
          <Container align="center">
            <Heading text={`Hi, ${localStorage.getItem("name")}!`} />
            <TextInput
              handleChange={handleChange}
              sx={classes.input}
              label="Enter your password"
              id="outlined-password-input"
              input={password || ""}
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
