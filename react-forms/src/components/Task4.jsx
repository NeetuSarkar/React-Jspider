import React, { useState } from "react";

const Task4 = () => {
  const [fruit, setFruit] = useState("");
  const [fruits, setFruits] = useState([]);

  function addFruit(e) {
    e.preventDefault();
    if (fruit) {
      const newList = [...fruits, fruit];
      setFruits(newList);
      setFruit("");
    }
  }

  return (
    <div className="display">
      <h2>Task 4</h2>
      <form onSubmit={addFruit}>
        <label htmlFor="">Fruit: </label>
        <input
          type="text"
          name="fruit"
          id="fruit"
          placeholder="Type Fruit name..."
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Add
        </button>
      </form>
      <h2 style={{ textAlign: "start" }}>List</h2>
      <ul style={{ textAlign: "start" }}>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task4;
