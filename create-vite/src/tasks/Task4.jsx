import React, { useState } from "react";

const Task4 = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  function handleInc() {
    const newCount = count + 1;
    setCount(newCount);
    if (isPrime(newCount)) {
      setColor("blue");
    } else if (newCount % 2 == 0) {
      setColor("green");
    } else if (newCount % 2 == 1) {
      setColor("red");
    }
  }
  return (
    <div className="card">
      <div>
        <button
          style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}
          className="inc-dec"
          onClick={handleInc}
        >
          +
        </button>
        <p style={{ fontSize: "3rem", color: color }}>{count}</p>
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

export default Task4;
