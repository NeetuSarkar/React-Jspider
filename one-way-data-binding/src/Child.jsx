import React from "react";

const Child = (props) => {
  // console.log(props);
  let src = "Hello, How are you?";
  return (
    <div>
      <h1>{props.text[0]}</h1>
      <h3>{props.text[1]}</h3>
      <button onClick={() => props.sendData(src)}>Click Me</button>
    </div>
  );
};

export default Child;
