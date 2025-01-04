import React, { useState } from "react";

const Task2 = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="card">
      <div
        className="color-div"
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
          backgroundColor: color, // Remove extra curly braces
        }}
      ></div>
      <div>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
};

export default Task2;
