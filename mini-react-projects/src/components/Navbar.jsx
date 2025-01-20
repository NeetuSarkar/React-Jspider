import React from "react";
import "../styles/Navbar.css";
import ToggleButton from "./ToggleButton";
const Navbar = ({ onProjectsClick }) => {
  return (
    <div className="navbar" style={{ height: "7vh" }}>
      <div className="nav-left">
        <h3>Mini Projects</h3>
      </div>
      <div className="nav-right">
        <h4 onClick={onProjectsClick}>Projects</h4>
        {/* <ToggleButton /> */}
      </div>
    </div>
  );
};

export default Navbar;
