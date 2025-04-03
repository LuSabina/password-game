import React from "react";

function Condition({ password, condition }) {
  condition.test(password);

  return (
    <>
      <ul
        style={{
          color: condition.color,
          paddingLeft: 0,
          listStyleType: "none",
        }}
        key={condition.id}
      >
        <li>{condition.name}</li>
      </ul>
    </>
  );
}

export default Condition;
