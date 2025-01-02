import React from "react";
import "../styles/Card.css"; // Optional: Add some styling for the card.

const Card = ({ title, onClick, img }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
