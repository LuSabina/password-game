import React from "react";

function Condition({ password, condition }) {
  condition.test(password);

  return (
    <>
      <ul style={{ color: condition.color, paddingLeft: 0 }} key={condition.id}>
        {condition.name}
      </ul>
    </>
  );
}

export default Condition;
