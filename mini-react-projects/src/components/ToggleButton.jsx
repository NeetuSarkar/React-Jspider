import React, { useState } from "react";
import "../styles/ToggleButton.css";

const ToggleButton = ({ rounded = false }) => {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("white");

  const handleCheckboxChange = (event) => {
    setToggle(event.target.checked);
    setColor(event.target.checked ? "black" : "white"); // Toggle color based on the checkbox state
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <label className="switch">
        <input
          type="checkbox"
          checked={toggle}
          onChange={handleCheckboxChange}
        />
        <span className={`slider ${rounded ? "rounded" : ""}`}></span>
      </label>
    </div>
  );
};

export default ToggleButton;
