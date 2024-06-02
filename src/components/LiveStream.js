// src/components/LiveStream.js
import React from 'react';

const LiveStream = () => {
  return (
    <div>
      <h2>Live Stream</h2>
      <p>Watch the matches live here.</p>
      <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/live/jfKfPfyJRdk?si=Hd72lTrc227MUR3o"
  title="Live Stream"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
    </div>
  );
};

export default LiveStream;
