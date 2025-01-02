import React from "react";
import { useState } from "react";

const StateInFunction = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Neetu");

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>State in Function Component</h1>
      <h2>Name: {name}</h2>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateInFunction;
