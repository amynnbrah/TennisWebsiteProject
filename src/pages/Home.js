// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import Sponsors from '../components/Sponsors';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Header />
      <SocialMedia />
      <Sponsors />
      <Newsletter />
    </div>
  );
};

export default Home;
