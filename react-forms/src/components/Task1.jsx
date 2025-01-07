import React, { useState } from "react";

const Task1 = () => {
  const [color, setColor] = useState("");

  function handleInput(event) {
    setColor(event.target.value);
  }
  return (
    <div>
      <div
        style={{
          height: "300px",
          width: "400px",
          alignContent: "center",
          textAlign: "center",
          background: color,
        }}
      >
        <input
          type="text"
          placeholder="Enter a color name...."
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default Task1;
