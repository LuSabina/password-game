import { Container, Button, Stack } from "@mui/material";
import useStyles from "../styles";
import TextInput from "../components/TextInput";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function AppBody({ name, setName }) {
  const classes = useStyles();
  let validName = name.trim();

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
        {renderButton(validName, classes)}
      </Stack>
    </Container>
  );
}
export default AppBody;

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
