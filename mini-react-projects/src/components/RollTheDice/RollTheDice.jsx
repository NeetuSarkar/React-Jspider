import React, { useState } from "react";
import dice1 from "./dice/dice1.png";
import dice2 from "./dice/dice2.png";
import dice3 from "./dice/dice3.png";
import dice4 from "./dice/dice4.png";
import dice5 from "./dice/dice5.png";
import dice6 from "./dice/dice6.png";

import "./RollTheDice.css"; // Import the external style file

const RollTheDice = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const [winMsg, setWinMsg] = useState("");
  const [point, setPoint] = useState(100);
  const [betSize, setBetSize] = useState(10);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleBetSizeChange = (e) => {
    setBetSize(Number(e.target.value)); // Update betSize based on the selected value
  };

  function play() {
    setIsShaking(true);
    setTimeout(() => {
      setPoint((prevPoint) => prevPoint - betSize); // Deduct the bet size
      setIsShaking(false);
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      setDiceOne(newDice1);
      setDiceTwo(newDice2);

      const total = newDice1 + newDice2;

      if (selectedOption === "small" && total >= 2 && total <= 6) {
        setWinMsg("💸You win with Small!🏆");
        setPoint((prevPoint) => prevPoint + betSize * 2); // Win rewards based on bet size
      } else if (selectedOption === "jackpot" && total === 7) {
        setWinMsg("You hit the Jackpot!💸💸💸");
        setPoint((prevPoint) => prevPoint + betSize * 5);
      } else if (selectedOption === "big" && total >= 8 && total <= 12) {
        setWinMsg("💸You win with Big!🏆");
        setPoint((prevPoint) => prevPoint + betSize * 2);
      } else {
        setWinMsg("You lose. Try again!😔🤦");
      }

      setSelectedOption("");
    }, 3000);
  }

  const isAnyRadioSelected = selectedOption !== "";

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#959a9c",
        color: "white",
        margin: "10%",
        position: "relative",
        width: "50vw",
      }}
    >
      <p className="points">
        💲
        <span id="point">{point}</span>
      </p>
      <h2>🎰🎯 Roll The Dice Game 🎯🎰</h2>

      <div className="dice-container">
        <img
          className={isShaking ? "shaking" : ""}
          src={
            diceOne === 1
              ? dice1
              : diceOne === 2
              ? dice2
              : diceOne === 3
              ? dice3
              : diceOne === 4
              ? dice4
              : diceOne === 5
              ? dice5
              : dice6
          }
          alt={`Dice ${diceOne}`}
        />
        <h1 style={{ color: "black" }}>+</h1>
        <img
          className={isShaking ? "shaking" : ""}
          src={
            diceTwo === 1
              ? dice1
              : diceTwo === 2
              ? dice2
              : diceTwo === 3
              ? dice3
              : diceTwo === 4
              ? dice4
              : diceTwo === 5
              ? dice5
              : dice6
          }
          alt={`Dice ${diceTwo}`}
        />
      </div>

      <div className="betSize">
        <h4 style={{ color: "yellow" }}>Select Bet Size</h4>
        <select name="betSize" id="betSize" onChange={handleBetSizeChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      <div className="options-container">
        <div className="radio-group">
          <input
            type="radio"
            name="diceOption"
            value="small"
            id="small"
            checked={selectedOption === "small"}
            onChange={handleRadioChange}
          />
          <label htmlFor="small">Small (2-6)</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            name="diceOption"
            value="jackpot"
            id="jackpot"
            checked={selectedOption === "jackpot"}
            onChange={handleRadioChange}
          />
          <label htmlFor="jackpot">Jackpot (7)</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            name="diceOption"
            value="big"
            id="big"
            checked={selectedOption === "big"}
            onChange={handleRadioChange}
          />
          <label htmlFor="big">Big (8-12)</label>
        </div>
      </div>
      <h3>Select your Option to start</h3>
      {isAnyRadioSelected ? (
        <button onClick={play} id="playBtn">
          Play
        </button>
      ) : (
        <h3 id="winMsg">{winMsg}</h3>
      )}
    </div>
  );
};

export default RollTheDice;
