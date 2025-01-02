import React, { useState } from "react";

const InputField = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <input
        type="text"
        placeholder="Enter username"
        style={{ padding: "5px" }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        id=""
        style={{ padding: "5px" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default InputField;
