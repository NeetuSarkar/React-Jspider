import React, { useState } from "react";

const Task1 = () => {
  const [color, setColor] = useState("");

  function handleInput(event) {
    setColor(event.target.value);
  }
  return (
    <div className="display">
      <h2>Task 1</h2>
      <div
        style={{
          height: "200px",
          width: "auto",
          alignContent: "center",
          textAlign: "center",
          background: color,
          borderRadius: "1rem",
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
