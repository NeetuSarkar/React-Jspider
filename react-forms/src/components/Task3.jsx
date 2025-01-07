import React, { useState } from "react";

const Task3 = () => {
  const [green, setGreen] = useState(0);
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [color, setColor] = useState("rgb(0, 0, 0)"); // Initial color is black

  function generate() {
    // Ensure RGB values are within the valid range
    const r = Math.min(Math.max(parseInt(red), 0), 255);
    const g = Math.min(Math.max(parseInt(green), 0), 255);
    const b = Math.min(Math.max(parseInt(blue), 0), 255);

    // Update the color state
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div>
      <label htmlFor="red">Red</label>
      <input
        id="red"
        min="0"
        max="255"
        type="number"
        placeholder="0-255"
        value={red}
        onChange={(e) => setRed(e.target.value)}
      />
      <label htmlFor="green">Green</label>
      <input
        id="green"
        min="0"
        max="255"
        type="number"
        placeholder="0-255"
        value={green}
        onChange={(e) => setGreen(e.target.value)}
      />
      <label htmlFor="blue">Blue</label>
      <input
        id="blue"
        min="0"
        max="255"
        type="number"
        placeholder="0-255"
        value={blue}
        onChange={(e) => setBlue(e.target.value)}
      />
      <button onClick={generate}>Generate</button>
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: color,
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

export default Task3;
