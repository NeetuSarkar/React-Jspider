import React, { useState } from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleDec() {
    if (count <= 0) return;
    setCount(count - 1);
  }

  function handleInc() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <div className="counter-card">
        <h2 className="counter-display">{count}</h2>
        <div className="counter-btns">
          <button onClick={handleInc}>+</button>
          <button onClick={handleDec}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
