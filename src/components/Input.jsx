import React from "react";

function Input({ input, setInput }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return <input onChange={handleChange} value={input} />;
}

export default Input;
