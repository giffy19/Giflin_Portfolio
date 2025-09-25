import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills = [
    { name: "HTML5", icon: "fab fa-html5", percentage: 90, color: "#e34f26" },
    { name: "CSS3", icon: "fab fa-css3-alt", percentage: 85, color: "#1572b6" },
    { name: "JavaScript", icon: "fab fa-js-square", percentage: 80, color: "#f7df1e" },
    { name: "React", icon: "fab fa-react", percentage: 75, color: "#61dafb" },
    { name: "Figma", icon: "fab fa-figma", percentage: 85, color: "#f24e1e" },
    { name: "Illustrator", icon: "fas fa-pen-nib", percentage: 70, color: "#ff9a00" },
  ];

  const softSkills = [
    { name: "Communication", icon: "fas fa-comments", percentage: 90, color: "#3498db" },
    { name: "Teamwork", icon: "fas fa-users", percentage: 95, color: "#2ecc71" },
    { name: "Problem Solving", icon: "fas fa-puzzle-piece", percentage: 80, color: "#e74c3c" },
    { name: "Creativity", icon: "fas fa-palette", percentage: 85, color: "#9b59b6" },
  ];

  // Set up intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            handleCategoryChange('technical');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setAnimatedSkills([]);
    
    const skillsToAnimate = category === 'technical' ? technicalSkills : softSkills;
    
    skillsToAnimate.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => [...prev, skill.name]);
      }, index * 200);
    });
  };

  // Circular progress bar component
  const CircularProgressBar = ({ percentage, color, icon, name, isAnimated }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="skill-circle">
        <div className="circle-progress">
          <svg className="progress-ring" width="120" height="120">
            <circle
              className="progress-ring-circle-bg"
              stroke="#e9ecef"
              strokeWidth="8"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />
            <circle
              className={`progress-ring-circle ${isAnimated ? 'animated' : ''}`}
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: isAnimated ? offset : circumference,
              }}
            />
          </svg>
          <div className="circle-content">
            <i className={icon} style={{ color }}></i>
            <span className={`percentage ${isAnimated ? 'animated' : ''}`}>
              {isAnimated ? `${percentage}%` : '0%'}
            </span>
          </div>
        </div>
        <div className="skill-name">{name}</div>
      </div>
    );
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-category-selector">
          <button 
            className={`category-btn ${activeCategory === 'technical' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('technical')}
          >
            <i className="fas fa-code"></i>
            Technical Skills
          </button>
          <button 
            className={`category-btn ${activeCategory === 'soft' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('soft')}
          >
            <i className="fas fa-brain"></i>
            Soft Skills
          </button>
        </div>
        
        <div className="skills-container">
          {activeCategory === 'technical' && (
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div 
                  className={`skill-item ${animatedSkills.includes(skill.name) ? 'animated' : ''}`} 
                  key={index}
                >
                  <CircularProgressBar 
                    percentage={skill.percentage} 
                    color={skill.color}
                    icon={skill.icon}
                    name={skill.name}
                    isAnimated={animatedSkills.includes(skill.name) && isVisible}
                  />
                </div>
              ))}
            </div>
          )}
          
          {activeCategory === 'soft' && (
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <div 
                  className={`skill-item ${animatedSkills.includes(skill.name) ? 'animated' : ''}`} 
                  key={index}
                >
                  <CircularProgressBar 
                    percentage={skill.percentage} 
                    color={skill.color}
                    icon={skill.icon}
                    name={skill.name}
                    isAnimated={animatedSkills.includes(skill.name) && isVisible}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;