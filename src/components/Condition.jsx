import React from "react";

function Condition({ password, condition }) {
  condition.test(password);

  return (
    <>
      <ul
        className="heading"
        style={{ color: condition.color }}
        key={condition.id}
      >
        {condition.name}
      </ul>
    </>
  );
}

export default Condition;
