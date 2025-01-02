import React from "react";
import Child from "./Child";

const Parent = () => {
  let arr = ["Hello I am Child", "Happy New Year"];
  let msg = "";
  function sendData(x) {
    msg = x;
    console.log(x);
  }
  return (
    <div>
      <Child text={arr} sendData={sendData} />
      <p>Messages: {msg}</p>
    </div>
  );
};

export default Parent;
