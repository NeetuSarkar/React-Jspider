import React, { useState } from "react";

const Task3 = () => {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div
      className="card"
      style={{
        backgroundColor: toggle ? "white" : "black",
        color: toggle ? "black" : "white",
      }}
    >
      <button style={{ padding: "5px 10px" }} onClick={handleClick}>
        {toggle ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Task3;
