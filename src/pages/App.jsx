import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AppBody from "../components/AppBody";
import { checkIfNameIsValid } from "../utils";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    handleEnterButton(navigate, name);
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppBody name={name} setName={setName} />}/>
        
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

function handleEnterButton(navigate, name) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && checkIfNameIsValid(name)) {
      navigate("/game");
    }
  };
  document.addEventListener("keydown", handleKeyPress);
  return () => {
    document.removeEventListener("keydown", handleKeyPress);
  };
}
