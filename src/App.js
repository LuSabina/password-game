import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Condition from "./components/Condition";
import { requirements } from "./components/Requirements";

function App() {
  const [password, setPassword] = useState("");
  const [require, setRequire] = useState([]);

  function changeState(updatedPassword) {
    if (updatedPassword.length > 0 && require.length === 0) {
      const firstCondition = requirements.shift();
      setRequire([firstCondition]);
    }
  }

  useEffect(() => {
    if (password.length > 0) {
      let lastFulfilled = require[require.length - 1];
      let lastColor = lastFulfilled.color;

      if (
        password.length > 0 &&
        lastColor === "green" &&
        requirements.length > 0
      ) {
        let newCondition = requirements.shift();

        setRequire((prevRequirements) => {
          return [...prevRequirements, newCondition];
        });
      }
    }
  }, [password, require]);

  return (
    <div className="App">
      <Heading />
      <Input
        input={password}
        setInput={setPassword}
        updateState={changeState}
      />

      {require.map((condition, id) => {
        return <Condition key={id} password={password} condition={condition} />;
      })}
    </div>
  );
}

export default App;
