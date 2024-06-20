import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Condition from "./components/Condition";
import requirements from "./components/Requirements";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Heading />
      <Input input={password} setInput={setPassword} />

      {requirements.map((condition, id) => {
        return <Condition key={id} password={password} condition={condition} />;
      })}
    </div>
  );
}

export default App;
