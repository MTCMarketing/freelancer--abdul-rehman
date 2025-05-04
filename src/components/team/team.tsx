import React from 'react';
import './team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Robert E. Whitmore',
      position: 'Product Designer',
      image: '/src/assets/team/01.jpg',
      featured: true
    },
    {
      id: 2,
      name: 'Johnny M. Smith',
      position: 'IT Consultant',
      image: '/src/assets/team/02.jpg',
      featured: true
    },
    {
      id: 3,
      name: 'Angelo H. Tomlin',
      position: 'Senior Manager',
      image: '/src/assets/team/03.jpg',
      featured: false
    },
    {
      id: 4,
      name: 'Robert E. Whitmore',
      position: 'Web Designer',
      image: '/src/assets/team/04.jpg',
      featured: false
    },
    {
      id: 5,
      name: 'Manuel G. Wilmer',
      position: 'CEO & Founder',
      image: '/src/assets/team/05.jpg',
      featured: false
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-layout">
          <div className="team-header-area">
            <div className="team-header">
              <div className="team-label">
                <img src="src/assets/bale.png" className='bell' alt="" />
                <span>Team Member</span>
              </div>
              <h2 className="team-title">Meet Our Professional Team Members</h2>
              <p className="team-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptа tеmрs
                accusantium doloremque laudantium, totam rem
              </p>
            </div>
          </div>

          <div className="team-featured">
            {teamMembers
              .filter(member => member.featured)
              .map(member => (
                <div key={member.id} className="team-card featured">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                    <button className="add-button" aria-label="Add team member">+</button>
                  </div>
                </div>
              ))}
          </div>

          <div className="team-regular">
            {teamMembers
              .filter(member => !member.featured)
              .map(member => (
                <div key={member.id} className="team-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                    <button className="add-button" aria-label="Add team member">+</button>
                  </div>
                </div>
              ))}
          </div>

          <div className="view-more-container">
            <button className="view-more-button">View More Members</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;






