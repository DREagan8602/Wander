import React, { useState } from "react";
import "./App.css";

function App() {
  const [guess, setGuess] = useState("");
  const [clue, setClue] = useState("Today's destination is a city of light.");
  const [attempts, setAttempts] = useState([]);

  const handleGuess = () => {
    setAttempts([...attempts, guess]);
    if (guess.toLowerCase() === "paris") {
      setClue("🎉 Correct! It's Paris!");
    } else {
      setClue("Try again!");
    }
    setGuess("");
  };

  return (
    <div className="App">
      <header>
        <h1>WanderWordle</h1>
        <p>{clue}</p>
      </header>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit</button>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>{attempt}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
