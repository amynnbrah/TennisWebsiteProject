// src/components/Players.js
import React, { useState, useEffect } from 'react';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch player data from the backend
    fetch('/api/players')
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.rank}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Players;
