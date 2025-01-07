import React, { useState } from "react";

const Task2 = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        name=""
        id=""
        onChange={(e) => {
          setText(e.target.value);
        }}
        rows={10}
        cols={40}
        value={text}
      ></textarea>
      <h3>no of Chars: {text.length}</h3>
      <h3>No of Words: {text.split(" ").filter((e) => e != "").length}</h3>
      <div>
        <button onClick={() => setText("")}>Clear</button>
        <button onClick={() => setText(text.toUpperCase())}>Uppercase</button>
        <button
          onClick={() => {
            setText(text.slice(0, -1));
          }}
        >
          backspace
        </button>
      </div>
    </div>
  );
};

export default Task2;
