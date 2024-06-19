import React from "react";
import requirements from "./Requirements";

function Condition({ password }) {
  requirements.forEach((requirement) => {
    requirement.test(password);
  });

  return (
    <h3>
      <ul
        className="heading"
        style={{ color: requirements[0].color }}
        key={requirements[0].id}
      >
        {requirements[0].name}
      </ul>

      <ul
        className="heading"
        style={{ color: requirements[1].color }}
        key={requirements[1].id}
      >
        {requirements[1].name}
      </ul>

      <ul
        className="heading"
        style={{ color: requirements[2].color }}
        key={requirements[2].id}
      >
        {requirements[2].name}
      </ul>
    </h3>
  );
}

export default Condition;
