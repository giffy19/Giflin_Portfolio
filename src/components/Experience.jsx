import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Eagle Hi-Tech",
      role: "Web Development Intern",
      period: "May 2024 – Jun 2024",
      description: "Built responsive websites using modern web technologies. Focused on UI design and performance optimization. Gained hands-on experience with HTML, CSS, JavaScript, and modern frameworks like React." 
    },
    {
      id: 2,
      company: "Alpha Ori Technologies",
      role: "Software Intern", 
      period: "Jun 2025 – Jul 2025",
      description: "Worked on frontend development and UI/UX design. Collaborated on agile software projects. Built responsive websites using modern web technologies, emphasizing UI design and performance optimization. "
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h1 className="main-title">Experience</h1>
        
        <div className="experience-cards">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <div className="card-content">
                <h2 className="company">{exp.company}</h2>
                <h3 className="role">{exp.role}</h3>
                <p className="period">{exp.period}</p>
                
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;