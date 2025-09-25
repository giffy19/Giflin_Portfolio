import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                I'm a passionate B.Tech IT student from Chennai with a strong foundation in 
                frontend development and UI/UX design. My journey in technology began with 
                problem-solving on platforms like Skillrack, where I've solved 625+ problems, 
                honing my logical thinking and coding skills.
              </p>
              <p>
                This experience led me to explore web development and UI/UX design, where 
                I've completed 5+ projects that combine functionality with aesthetic appeal. 
                I enjoy the process of transforming ideas into interactive digital experiences 
                that users love.
              </p>
            </div>
            
            <div className="services-medium">
              <div className="service-item">
                <span className="service-symbol">🎨</span>
                <span className="service-label">Web Design</span>
              </div>
              <div className="service-item">
                <span className="service-symbol">💻</span>
                <span className="service-label">Web Development</span>
              </div>
              <div className="service-item">
                <span className="service-symbol">📱</span>
                <span className="service-label">UI Prototyping</span>
              </div>
              <div className="service-item">
                <span className="service-symbol">✂️</span>
                <span className="service-label">Editing</span>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-number">625+</div>
              <div className="stat-label">Skillrack Problems Solved</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">5+</div>
              <div className="stat-label">UI/UX & Web Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;