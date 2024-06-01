// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/matches">Matches</Link>
      <Link to="/players">Players</Link>
      <Link to="/tickets">Tickets</Link>
      <Link to="/news">News</Link>
      <Link to="/sponsors">Sponsors</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/livestream">Live Stream</Link>
    </nav>
  );
};

export default Navbar;
