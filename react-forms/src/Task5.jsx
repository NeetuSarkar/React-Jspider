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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>List of People</h3>
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
