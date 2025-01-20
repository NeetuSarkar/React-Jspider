import React, { useState } from "react";
import "./Task8.css";

const Task8 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{8,}$/;
  function handleSubmit(e) {
    e.preventDefault();
    validEmail(email);
    validPassword(password);
    if (!emailError && !passwordError) {
      alert(`Email: ${email}, Password: ${password}`);
    } else {
      alert("Invalid inputs");
    }
  }

  function validEmail(email) {
    if (!email) {
      setEmailError("Email field is empty");
    } else if (!email.match(emailRegex)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }

  function validPassword(password) {
    if (!password) {
      setPasswordError("Password field is empty");
    } else if (!password.length >= 8) {
      setPasswordError("Password must have at least 8 characters.");
    } else if (!password.match(passwordRegex)) {
      setPasswordError(
        "Password must be contain at least one uppercase letter."
      );
    } else {
      setPasswordError("");
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    validEmail(email);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    validPassword(password);
  }

  return (
    <>
      <h2>Controlled Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login Form</legend>
          <table>
            <tr>
              <td>
                <label htmlFor="email">Email: </label>
              </td>
              <td>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  id="email"
                  onChange={handleEmail}
                />
              </td>
              <td>
                <span>{emailError}</span>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password: </label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  placeholder="* * * * * * *"
                  onChange={handlePassword}
                  value={password}
                />
              </td>

              <td>
                <span>{passwordError}</span>
              </td>
            </tr>

            <tr>
              <td colSpan={"2"} align="center">
                <button type="submit">Login</button>
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </>
  );
};

export default Task8;
