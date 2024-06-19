import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Condition from "./components/Condition";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Heading />
      <Input input={password} setInput={setPassword} />
      <Condition password={password} />
    </div>
  );
}

export default App;
