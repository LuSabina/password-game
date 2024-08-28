import React from "react";

function Input({ input, setInput, updateState }) {
  function handleChange(event) {
    setInput(event.target.value);
    updateState(event.target.value);
  }

  return <input onChange={handleChange} value={input} />;
}

export default Input;
