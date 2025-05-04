
import './Case-study.css';
const caseStudies = [
  {
    category: 'IT Consulting',
    title: 'How To Achieve More  Your Nine To Five',
    image: '/src/assets/case-study/01.jpg',
  },
  {
    category: 'Machine Learning',
    title: 'Strategies For Outstanding Future Results',
    image: '/src/assets/case-study/02.jpg',
  },
  {
    category: 'Software Design',
    title: 'Discover A Better Way Of  Defining  Goals.',
    image: '/src/assets/case-study/03.jpg',
  },
];

const CaseStudySection = () => {
  return (
    <section className="case-section">
      <div className="case-container">
        <div className="case-header">
          <div>
            <button className="tag-button"><img src="/src/assets/bale.png" alt="" className='bell' /> Popular Case Study</button>
            <h2 className="case-title">Discover Our Popular Case Study<br />That We Globally Completes</h2>
          </div>
          <button className="view-more-btn">View More Cases</button>
        </div>

        <div className="case-grid">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="case-card">
              <img src={study.image} alt={study.title} className="case-img" />
              <div className="case-content">
                <p className="case-category">{study.category}</p>
                <h3 className="case-heading">{study.title}</h3>
                <span className="arrow"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
