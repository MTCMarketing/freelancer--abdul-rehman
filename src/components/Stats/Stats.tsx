import React from 'react';
import './Stats.css';

const StatsSection: React.FC = () => {
  return (
    <div className="stats-container">
      <div className="header-section">
        <button className="fun-fact-btn">
          <img style={{  marginRight: '8px' }} src="/src/assets/bale.png" alt="" className='bell' />
          Company Fun Fact
        </button>
        <h1>Learn Our Company Statistics</h1>
      </div>
      <div className="stats-grid">
        <div className="stat-card light-bg">
          <h2>98%</h2>
          <p className="stat-title">Average Conversion Rate</p>
          <div className="underline"></div>
          <p className="stat-description">Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
        <div className="stat-card dark-bg">
          <h2>35m+</h2>
          <p className="stat-title">Traffic Generated</p>
          <div className="underline"></div>
          <p className="stat-description">Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
        <div className="stat-card light-bg">
          <h2>97%</h2>
          <p className="stat-title">Positive Customer Review</p>
          <div className="underline"></div>
          <p className="stat-description">Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
        <div className="stat-card light-bg">
          <h2>92%</h2>
          <p className="stat-title">Professional Team Members</p>
          <div className="underline"></div>
          <p className="stat-description">Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
