import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Condition from "./components/Condition";
import { requirements, requirementsMet } from "./components/Requirements";

function App() {
  const [password, setPassword] = useState("");
  const [require, setRequire] = useState([]);

  const firstCondition = requirements[0];

  console.log(requirementsMet);

  //console.log(firstCondition);

  function changeState(updatedPassword) {
    if (updatedPassword.length > 0 && requirementsMet.length === 0) {
      requirementsMet.push(firstCondition);
    }

    let lastFulfilled = requirementsMet[requirementsMet.length - 1];
    if (lastFulfilled.color === "green") {
      let newCondition = requirements.shift();
      requirementsMet.push(newCondition);
      // setRequire((prevRequirements) => {
      //   return [...prevRequirements, require];
      // });
    }
  }

  return (
    <div className="App">
      <Heading />
      <Input
        input={password}
        setInput={setPassword}
        updateState={changeState}
      />

      {requirementsMet.map((condition, id) => {
        return <Condition key={id} password={password} condition={condition} />;
      })}
    </div>
  );
}

export default App;
