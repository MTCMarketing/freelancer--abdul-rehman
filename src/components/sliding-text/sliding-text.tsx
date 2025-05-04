import React from 'react';
import './sliding-text.css';

const SlidingText = () => {
  return (
    <section className="sliding-text-section">
      <div className="sliding-text-background">
        <div className="play-button">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" fill="white" />
            <path d="M10 8L16 12L10 16V8Z" fill="#6C2BF9" />
          </svg>
        </div>
      </div>
      
      <div className="sliding-text-container">
        <div className="sliding-text-wrapper">
          <div className="sliding-text">
            <span className="text-separator">_</span>
            <span>Co Machine</span>
            <span className="text-separator">_</span>
            <span>IT Learning</span>
            <span className="text-separator">_</span>
            <span>Co Machine</span>
            <span className="text-separator">_</span>
            <span>IT Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingText;


