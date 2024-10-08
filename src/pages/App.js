import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AppBody from "../components/AppBody";

function App() {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    handleEnterButton(navigate);
  });

  return (
    <>
      <Navbar />
      <AppBody name={name} setName={setName} />
    </>
  );
}

export default App;

function handleEnterButton(navigate) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/game");
    }
  };
  document.addEventListener("keydown", handleKeyPress);
  return () => {
    document.removeEventListener("keydown", handleKeyPress);
  };
}
