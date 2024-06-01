// src/components/Matches.js
import React, { useState, useEffect } from 'react';

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch match data from the backend
    fetch('/api/matches')
      .then((response) => response.json())
      .then((data) => setMatches(data));
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.player1} vs {match.player2} - {match.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
