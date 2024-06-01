// src/components/Tickets.js
import React from 'react';

const Tickets = () => {
  return (
    <div>
      <h2>Tickets</h2>
      <p>Buy your tickets for the tournament.</p>
      <button onClick={() => window.location.href = '/buy-tickets'}>Buy Tickets</button>
    </div>
  );
};

export default Tickets;
