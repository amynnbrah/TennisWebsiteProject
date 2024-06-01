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
        src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID"
        title="Live Stream"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveStream;
