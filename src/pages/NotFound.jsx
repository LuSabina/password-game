import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NotFoundPage() {
  const styles = {
    container: {
      fontFamily: "Raleway",
      fontSize: "40px",
      textAlign: "center",
      caretColor: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    },
    iframe: {
      width: "50%",
      height: "50%",
      border: "none",
    },

    button: {
      backgroundColor: "#white",
      border: "1px solid #EEEEEE",
      padding: "1rem",
      fontSize: "1rem",
      width: "10em",
      height: "2em",
      borderRadius: "1rem",
      color: "#A91D3A",
      boxShadow: "0 0.2rem #dfd9d9",
      caretColor: "transparent",
      fontFamily: "Raleway",
    },
  };

  return (
    <div style={styles.container}>
      404 Not Found
      <br />
      <iframe
        title="title"
        src="https://giphy.com/embed/oRGXTJJvAOsKD1jVBr"
        style={styles.iframe}
      ></iframe>
      <br />
      <Link to="/">
        <Button style={styles.button}>Go home!</Button>
      </Link>
    </div>
  );
}
