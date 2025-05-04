import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* CTA Section */}
        <div className="footer-cta">
          <div className="cta-content">
            <div className="next-logo">
              <img src="src/assets/logo/white-logo.svg" alt="" />
            </div>
            <h2 className="cta-text">Let's Discussed About <span className="highlight">Your Projects</span></h2>
          </div>
          <div className="cta-button">
            <a href="#" className="get-started-btn">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.17 13H4V11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        {/* Footer Content */}
        <div className="footer-content">
          {/* About Us */}
          <div className="footer-column">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              Sed perspiciatis unde omnis natus doloremque laudantium totae
            </p>
            <div className="social-icons1">
              <a href="#" className="social-icon1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="social-icon1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.17 4.9 4.9 0 0 1-.77-.07 4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06 11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="social-icon1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" fill="currentColor" />
            </svg>
              </a>
              <a href="#" className="social-icon1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor" />
            </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Link */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Link</h3>
            <ul className="footer-links">
              <li><a href="#">Popular Services</a></li>
              <li><a href="#">Team Member</a></li>
              <li><a href="#">Privacy & Setting</a></li>
              <li><a href="#">Pricing Package</a></li>
            </ul>
          </div>
          
          {/* Get In Touch */}
          <div className="footer-column">
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#6C2BF9" />
                </svg>
                <span>55 Main Street, 2nd block<br />Malborne, Australia</span>
              </div>
              <div className="contact-item1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#6C2BF9" />
                </svg>
                <span>info@example.com</span>
              </div>
              <div className="contact-item1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z" fill="#6C2BF9" />
                </svg>
                <span>+000 (123) 456 88</span>
              </div>
            </div>
          </div>
          
          {/* Recent News */}
          <div className="footer-column">
            <h3 className="footer-heading">Recent News</h3>
            <div className="recent-news">
              <div className="news-item">
                <div className="news-image">
                  <img src="/src/assets/news/pp1.png" alt="News" />
                </div>
                <div className="news-content">
                  <span className="news-date">Nov 25, 2024</span>
                  <h4 className="news-title">How Achieve More Your Nine To Five</h4>
                </div>
              </div>
              <div className="news-item">
                <div className="news-image">
                  <img src="/src/assets/news/pp2.png" alt="News" />
                </div>
                <div className="news-content">
                  <span className="news-date">Nov 25, 2024</span>
                  <h4 className="news-title">Discover A Better Way Of Company.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-links-bottom">
            <a href="#">FAQs</a>
            <a href="#">Company</a>
            <a href="#">Privacy</a>
          </div>
          <div className="scroll-top">
            <a href="#top">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" fill="white" />
              </svg>
            </a>
          </div>
          <div className="copyright">
            © 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


