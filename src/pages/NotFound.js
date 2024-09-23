import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NotFoundPage() {
  const style = [
    {
      fontFamily: "Raleway",
      fontSize: "40px",
      textAlign: "center",
      caretColor: "transparent",
    },
    {
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
  ];

  return (
    <div style={style[0]}>
      404 Not Found
      <br />
      <iframe
        title="title"
        src="https://giphy.com/embed/oRGXTJJvAOsKD1jVBr"
        width="30%"
        height="30%"
        style={{
          position: "absolute",
        }}
      ></iframe>
      <br />
      <Link to="/">
        <Button style={style[1]}>Go home!</Button>
      </Link>
    </div>
  );
}
