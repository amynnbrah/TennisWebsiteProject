// src/components/LanguageSelector.js
import React from 'react';

const LanguageSelector = ({ languages, onLanguageChange }) => {
  return (
    <select onChange={(e) => onLanguageChange(e.target.value)}>
      {languages.map((lang, index) => (
        <option key={index} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
