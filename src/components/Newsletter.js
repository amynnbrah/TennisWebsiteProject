// src/components/Newsletter.js
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle newsletter subscription logic
    console.log('Subscribed with email:', email);
  };

  return (
    <div>
      <h2>Newsletter</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default Newsletter;
