import React from "react";
import { LuListTodo } from "react-icons/lu";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "navbar dark" : "navbar"}>
      <LuListTodo style={{ fontSize: "2rem" }} />
      <h2>TODO APP</h2>

      <div className="toggle-container">
        <button
          className={isDarkMode ? "toggleBtnDark" : "toggleBtn"}
          onClick={toggleMode}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
