import React, { useState } from "react";
import "./Task6.css";

const Task6 = () => {
  const [arr, setArr] = useState(["green", "green"]);
  function createCircle() {
    setArr([...arr, "green"]);
    console.log(arr);
  }
  function deleteCircle() {
    let arr2 = [...arr];
    const newArray = arr2.filter((ele) => ele === "green");
    setArr(newArray);
  }

  function changeColor(index) {
    const newArr = [...arr];

    newArr[index] === "green"
      ? (newArr[index] = "red")
      : (newArr[index] = "green");

    setArr(newArr);
  }

  const selectedCirlce = function () {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "red") count++;
    }
    return count;
  };
  return (
    <div className="container">
      <div className="button-container">
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={createCircle}
        >
          Create Circle
        </button>
        <button style={{ backgroundColor: "red" }} onClick={deleteCircle}>
          Delete Circle
        </button>
      </div>
      <div className="text-display">
        <h3>Total No. Of Circle Created: {arr.length}</h3>
        <h3>No. of Selected Circles: {selectedCirlce()}</h3>
      </div>
      <div className="circle-display">
        {arr.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "1px solid yellow",
            }}
            onClick={() => changeColor(index)}
            className="circle"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Task6;
