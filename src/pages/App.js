import React, { useState, useEffect } from "react";
import { Container, Button, Stack } from "@mui/material";
import useStyles from "../styles";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

function App() {
  const classes = useStyles();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  let validName = name.trim();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        navigate("/game");
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  function assignName(event) {
    return setName(event.target.value);
  }

  return (
    <>
      <Navbar />
      <main>
        <div>
          <Container align="center">
            <Heading text="Welcome to the password game!" />
            <Stack sx={classes.stack} spacing={1}>
              <TextInput
                handleChange={assignName}
                sx={classes.inputName}
                placeholder="What is your name?"
                id="outlined-basic"
                input={name || ""}
              />
              {renderButton(validName, classes)}
            </Stack>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;

function renderButton(validName, classes) {
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
