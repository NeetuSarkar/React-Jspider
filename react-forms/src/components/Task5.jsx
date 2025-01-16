import React, { useState } from "react";

const Task5 = () => {
  const [names, setnames] = useState(["Neetu"]);
  const [name, setname] = useState("");
  const [placeholder, setPlaceholder] = useState("Type name...");

  function addStart() {
    if (name) {
      let newList = [name, ...names];
      setnames(newList);
      setname("");
      setPlaceholder("Type name...");
    } else {
      setPlaceholder("Enter a name!");
    }
  }

  function addEnd() {
    if (name) {
      let newList = [...names, name];
      setnames(newList);
      setname("");
      setPlaceholder("Type name...");
    } else {
      setPlaceholder("Enter a name!");
    }
  }
  return (
    <div
      className="display"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <h2>Task 5</h2>
      <h2>List of People</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {names.map((name, index) => (
          <li style={{ textAlign: "start" }} key={index}>
            {name}
          </li>
        ))}
      </ul>
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          placeholder={placeholder}
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={addStart}
        >
          Add to Start
        </button>
        <button onClick={addEnd}>Add to End</button>
      </div>
    </div>
  );
};

export default Task5;
