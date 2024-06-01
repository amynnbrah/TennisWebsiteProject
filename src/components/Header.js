// src/components/Header.js
import React from 'react';
import Countdown from './Countdown';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <header>
      <h1>Tennis Tournament</h1>
      <Countdown targetDate="2024-07-01T00:00:00" />
      <SearchBar onSearch={(query) => console.log(query)} />
      <LanguageSelector
        languages={['English', 'Spanish', 'French']}
        onLanguageChange={(lang) => console.log(lang)}
      />
    </header>
  );
};

export default Header;
