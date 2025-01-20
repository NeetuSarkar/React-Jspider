import React, { createRef, useRef, useState } from "react";

const UseRefHook = () => {
  const countRef = useRef(0);
  const h2TagRef = useRef(null);

  function changeText() {
    h2TagRef.current.textContent = "Hello Neetu";
  }

  function incrementcount() {
    countRef.current = countRef.current + 1;
  }

  return (
    <div>
      <h1>useRef() Hook</h1>
      <h1>Count: {countRef.current}</h1>
      <button onClick={incrementcount}>Increment</button>
      {/* <h1>Count2: {count}</h1>
      <button onClick={incrementcount2}>Increment</button> */}

      <h2 id="h2" ref={h2TagRef}>
        HELLO WORLD
      </h2>
      <button onClick={changeText}>Click to Change</button>
    </div>
  );
};

export default UseRefHook;
