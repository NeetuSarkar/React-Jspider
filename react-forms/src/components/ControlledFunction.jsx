import React, { useState } from "react";

const ControlledFunction = () => {
  const [val, setValue] = useState("");

  function handleChange(event) {
    console.log(event);
    setValue(event.target.value);
  }

  function handleClick() {
    console.log(val);
  }

  function clearInput() {
    setValue("");
  }
  return (
    <div>
      <h1>{"Controlled form in a function comp".toUpperCase()}</h1>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={val}
      />
      <button onClick={handleClick}>Print Name</button>
      <h1>{val}</h1>
      <button onClick={clearInput}>Clear the Input</button>
    </div>
  );
};

export default ControlledFunction;
