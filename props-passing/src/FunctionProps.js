import React from "react";

const FunctionProps = (props) => {
  console.log(props.children);
  return (
    <div>
      <h1>Function Based Props</h1>
      <h2>{props.children}</h2>
      {props.children[1]}
      {props.children[2]}
      <p>Hello, {props.name}</p>
    </div>
  );
};

export default FunctionProps;
