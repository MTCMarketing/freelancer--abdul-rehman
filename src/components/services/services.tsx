import React from 'react';
import './services.css';

const Services = () => {
  const serviceItems = [
    {
      id: '01',
      title: 'Data Manage & Solutions Center',
      image: '/src/assets/service/01.jpg',
      showReadMore: false
    },
    {
      id: '02',
      title: 'Preparing For Cloud Services',
      image: '/src/assets/service/02.jpg',
      showReadMore: false
    },
    {
      id: '03',
      title: 'Machine Learning & Development',
      image: '/src/assets/service/03.jpg',
      showReadMore: false
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Preparing For Your Business Success With IT Solution</h2>
        
        <div className="services-grid">
          {serviceItems.map((service) => (
            <div className="services-card" key={service.id}>
              <div className="services-content">
                <div>
                  <span className="services-id">{service.id}</span>
                  <h3 className="services-item-title">{service.title}</h3>
                </div>
                
                {service.showReadMore ? (
                  <a href="#" className="services-link">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.17 13H4v-2h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13z" fill="currentColor" />
                    </svg>
                  </a>
                ) : (
                  <a href="#" className="services-icon" aria-label={`Learn more about ${service.title}`}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.17 13H4v-2h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13z" fill="currentColor" />
                    </svg>
                  </a>
                )}
              </div>
              <div className="services-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


