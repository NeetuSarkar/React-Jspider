import React, { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <div>
        <button
          style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}
          className="inc-dec"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <p style={{ fontSize: "1.2rem" }}>{count}</p>
        <button
          style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Task1;
