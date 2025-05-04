import React, { useState, useEffect } from 'react';
import './testimonial.css';

const testimonials = [
  {
    id: 1,
    quote: "We denounce with right indignation dislike men who are so beguile and demoralized by the charms of pleasure of the moment, so blinded by desire cannot foresee",
    author: "Lucas J. Swe",
    title: "CO Founder",
    avatar: "/src/assets/testimonial/client.png",
    company: "/src/assets/testimonial/icon.png",
    companyName: "Dropbox"
  },
  {
    id: 2,
    quote: "Our team has been amazed by the results. The platform has transformed how we approach our digital strategy and customer engagement.",
    author: "Sarah Chen",
    title: "CTO",
    avatar: "/src/assets/testimonial/client.png",
    company: "/src/assets/testimonial/icon.png",
    companyName: "Microsoft"
  },
  {
    id: 3,
    quote: "The implementation was seamless, and the support team was incredibly responsive. We've seen a 40% increase in productivity since adoption.",
    author: "Michael Rodriguez",
    title: "CEO",
    avatar: "/src/assets/testimonial/client.png",
    company: "/src/assets/testimonial/icon.png",
    companyName: "Adobe"
  },
  {
    id: 4,
    quote: "This solution has completely revolutionized our workflow. The intuitive interface and powerful features have made a significant impact.",
    author: "Emma Wilson",
    title: "Director",
    avatar: "/src/assets/testimonial/client.png",
    company: "/src/assets/testimonial/icon.png",
    companyName: "Slack"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const handleSlideChange = (index: number) => {
    if (currentIndex === index) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };
  
  const current = testimonials[currentIndex];
  
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-image-container">
          <div className="testimonial-image-bg"></div>
          <img 
            src="/src/assets/testimonial/testimonial.png" 
            alt="Testimonial" 
            className="testimonial-image" 
          />
        </div>
        
        <div className="testimonial-content">
          <div className={`testimonial-slide ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <p className="testimonial-quote">
              {current.quote}
            </p>
            
            <div className="testimonial-divider"></div>
            
            <div className="testimonial-author-container">
              <img 
                src={current.avatar} 
                alt={current.author} 
                className="testimonial-author-avatar" 
              />
              
              <div className="testimonial-author-info">
                <span className="testimonial-author-name">{current.author} /</span>
                <span className="testimonial-author-title">{current.title}</span>
              </div>
              
              <img 
                src={current.company} 
                alt={current.companyName} 
                className="testimonial-company-logo" 
              />
            </div>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;





