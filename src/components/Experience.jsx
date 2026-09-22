import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Eagle Hi-Tech",
      role: "Web Development Intern",
      period: "May 2024 – Jun 2024",
      description: "Built responsive websites using modern web technologies. Focused on UI design and performance optimization. Gained hands-on experience with HTML, CSS, JavaScript, and modern frameworks like React.",
      accentColor: "#3498db",
    },
    {
      id: 2,
      company: "Alpha Ori Technologies",
      role: "Designer Intern",
      period: "Jun 2025 – Jul 2025",
      description: "Worked on visual design and UI/UX projects, creating digital creatives and responsive visual experiences while collaborating on design requirements and content.",
      accentColor: "#e74c3c",
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-cards">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card" style={{ '--accent': exp.accentColor }}>
              <div className="exp-header">
                <div className="exp-dot" style={{ background: exp.accentColor }}></div>
                <div>
                  <h3 className="exp-company">{exp.company}</h3>
                  <div className="exp-meta">
                    <span className="exp-role" style={{ color: exp.accentColor }}>{exp.role}</span>
                    <span className="exp-sep">·</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
              </div>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;