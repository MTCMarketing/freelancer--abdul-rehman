import React, { useState } from 'react';
import './hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
    consultMethod: {
      virtual: false,
      inOffice: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'virtual' || name === 'inOffice') {
      setFormData({
        ...formData,
        consultMethod: {
          ...formData.consultMethod,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            We Take Care<br />
            Your IT Solutions<br />
            & Provide Best<br />
            Services
          </h1>
          
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">
              Get Started Now
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="btn btn-secondary">
              View Services
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
              </svg>
            </a>
          </div>
          
          <div className="hero-trust">
            <div className="trust-avatars">
              <img src="/src/assets/hero/client.png" alt="User" />
           
            </div>
            <p className="trust-text">
              Trusted by 14+ people<br />
              around the globe
            </p>
          </div>
        </div>
        
        <div className="hero-form-container">
          <div className="hero-form">
            <img 
              src="/src/assets/hero/hand-form.png" 
              alt="Pointer" 
              className="pointer-icon"
            />
            <h2 className="form-title">Get a Quote</h2>
            <p className="form-subtitle">Comprehensive Development Solutions</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Company Name" 
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <div className="">
                 
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="consult-method">
                <p className="consult-method-title">Preferred Consult Method:</p>
                <div className="checkbox-options">
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="virtual" 
                      name="virtual"
                      checked={formData.consultMethod.virtual}
                      onChange={handleChange}
                    />
                    <label htmlFor="virtual">Virtual</label>
                  </div>
                  
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="inOffice" 
                      name="inOffice"
                      checked={formData.consultMethod.inOffice}
                      onChange={handleChange}
                    />
                    <label htmlFor="inOffice">In Office</label>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="btn-submit">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



