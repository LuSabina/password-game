import { Container, Button, Stack } from "@mui/material";
import useStyles from "../styles";
import TextInput from "../components/TextInput";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { checkIfNameIsValid } from "../utils";

function AppBody({ name, setName }) {
  const classes = useStyles();

  const assignName = (event) => {
    return setName(event.target.value);
  };

  return (
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
        {renderButton(classes, name)}
      </Stack>
    </Container>
  );
}
export default AppBody;

function renderButton(classes, name) {
  if (checkIfNameIsValid(name)) {
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
  } else {
    return <Button disabled>Submit</Button>;
  }
}
