import React, { useState } from "react";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setResult("Word not found in the dictionary.");
      return;
    }

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="container">
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Search a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <div className="result-container">
        <h3>Definition:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
