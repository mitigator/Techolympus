import React from 'react';

const Flipbook = () => {
  return (
    <div style={{ border: '1px solid lightgray', width: '100%', height: '400px' }}>
      <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/dec355997f.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Flipbook"
      ></iframe>
    </div>
  );
};

export default Flipbook;
