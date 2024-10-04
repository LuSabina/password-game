import {
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  IconButton,
} from "@mui/material";
import useStyles from "../styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={classes.appname}>
        <Toolbar>
          <LockOutlinedIcon />
          <Button
            onClick={handleReload}
            variant="text"
            sx={classes.toolbartext}
          >
            PasswordGame
          </Button>
          <IconButton
            sx={{ marginLeft: "auto" }}
            href="https://github.com/sabinaLukaszczyk/password-game"
            target="_blank"
          >
            <GitHubIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

function handleReload() {
  localStorage.clear();
  window.location.replace("/");
}
