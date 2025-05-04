import React from 'react';
import './about.css';
import founderImg from '/src/assets/about/author.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-images-wrapper">
          <div className="about-images">
            <img src="/src/assets/about/01.jpg" alt="Team member" className="about-image left-image" />
            <img src="/src/assets/about/02.jpg" alt="Team member" className="about-image right-image" />
          </div>
          <div className="badges-container">
            <div className="badge experience-badge">
              25+ Years Of Experience <span className="star-icon">★</span>
            </div>
            <div className="badge awards-badge">
              Awards Winning Company
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-label">
            <img src="src/assets/bale.png" className='bell' alt="" /> About Company
          </div>
          
          <h2 className="about-title">
            Preparing Your Success<br />
            Trusted IT Services
          </h2>
          
          <p className="about-description">
            Sed ut perspiciatis unde omnis iste natus error sit volupta tomes
            accusantium doloremque laudantium, totam rem
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Connect with leads with zero hassle</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Take quick payments direct from meetings</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Start finding leads that get converts quickly</span>
            </div>
          </div>
          
          <div className="about-cta">
            <a href="#" className="learn-more-btn">
              Learn More Us <span className="arrow-icon">→</span>
            </a>
            
            <div className="founder-info">
              <img src={founderImg} alt="Lucas J. Swe" className="founder-image" />
              <div className="founder-text">
                <span className="founder-name">Lucas J. Swe</span>
                <span className="founder-title">/ CO Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;








