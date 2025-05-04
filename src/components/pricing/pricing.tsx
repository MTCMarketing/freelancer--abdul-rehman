import React from 'react';
import './pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Regular Plan',
      price: '$19',
      features: [
        { name: 'IT Consulting', included: true },
        { name: 'Digital Product Design', included: true },
        { name: 'Machine Learning', included: true },
        { name: 'Automation templates', included: false },
        { name: 'Great Customer Support', included: false }
      ],
      isPopular: false
    },
    {
      name: 'Business Plan',
      price: '$53',
      features: [
        { name: 'IT Consulting', included: true },
        { name: 'Digital Product Design', included: true },
        { name: 'Machine Learning', included: true },
        { name: 'Automation templates', included: true },
        { name: 'Great Customer Support', included: true }
      ],
      isPopular: true
    },
    {
      name: 'Professional Plan',
      price: '$99',
      features: [
        { name: 'IT Consulting', included: true },
        { name: 'Digital Product Design', included: true },
        { name: 'Machine Learning', included: true },
        { name: 'Automation templates', included: false },
        { name: 'Great Customer Support', included: false }
      ],
      isPopular: false
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="pricing-label">
            <img src="/src/assets/bale.png" alt="" className='bell' />
            Pricing Package
          </div>
          <h2 className="pricing-title">Popular Pricing For IT Consulting</h2>
        </div>

        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              <div className="pricing-plan-header">
                <h3 className="pricing-plan-name">{plan.name}</h3>
                <p className="pricing-plan-for">For Small Businesses</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={feature.included ? 'included' : 'not-included'}>
                    <span className="feature-bullet">•</span>
                    {feature.name}
                  </li>
                ))}
              </ul>

              <div className="pricing-footer">
                <div className="pricing-price">
                  <h4>{plan.price}</h4>
                  <span>/Month</span>
                </div>
                <p className="pricing-for">For Small Businesses</p>
                <button className="choose-package-btn">Choose Package</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;