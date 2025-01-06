import React from "react";

const ObjectData = () => {
  let student = {
    name: "Ram",
    age: 24,
    address: "Banglore",
    phone: 7077336912,
  };
  return (
    <div>
      <h1>Wroking on Object Data</h1>
      <ul>
        {Object.keys(student).map((key) => (
          <h1 key={key}>
            {key}: {student[key]}
          </h1>
        ))}
      </ul>
    </div>
  );
};

export default ObjectData;
