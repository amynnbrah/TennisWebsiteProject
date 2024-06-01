// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MatchesPage from './pages/MatchesPage';
import PlayersPage from './pages/PlayersPage';
import TicketsPage from './pages/TicketsPage';
import NewsPage from './pages/NewsPage';
import SponsorsPage from './pages/SponsorsPage';
import ContactPage from './pages/ContactPage';
import LiveStreamPage from './pages/LiveStreamPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/livestream" element={<LiveStreamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
