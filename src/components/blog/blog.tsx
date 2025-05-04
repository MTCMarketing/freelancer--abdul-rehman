import React from 'react';
import './blog.css';

const blogPosts = [
  {
    id: 1,
    date: 'November 25, 2024',
    title: 'Revealing Images With Animations Gradients, Blend Modes Cool',
    image: '/src/assets/news/01.jpg',
    link: '#'
  },
  {
    id: 2,
    date: 'November 25, 2024',
    title: 'List Of 5 Ways Generating Real Time Audio Sentiment Analysis',
    image: '/src/assets/news/02.jpg',
    link: '#'
  },
  {
    id: 3,
    date: 'November 25, 2024',
    title: 'Revealing Images With Animations Gradients, Blend Modes Cool',
    image: '/src/assets/news/03.jpg',
    link: '#'
  }
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-label">
            <img src="/src/assets/bale.png" alt="" className='bell' />
            <span>News & Blog</span>
          </div>
          <h2 className="blog-title">Explore Our Latest News & Blog</h2>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-date">{post.date}</div>
              <h3 className="blog-post-title">{post.title}</h3>
              <a href={post.link} className="blog-read-more">
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.17 13H4V11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13Z" fill="currentColor" />
                </svg>
              </a>
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
