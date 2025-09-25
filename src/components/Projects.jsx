import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('frontend');

  const projectsData = {
    frontend: [
      {
        title: "Personal Portfolio Website – React",
        description: "A modern and interactive personal portfolio website built using React, showcasing projects, skills, experience, and achievements. The design focuses on responsive layouts, smooth navigation, and engaging UI components to provide an intuitive and visually appealing user experience.",
        image: "pf.png",
        link: "https://example.com",
        technologies: ["HTML", "CSS", "JavaScript", "React"]
      },
      {
        title: "AuroDesk – Journal Your Journey",
        description: "AuroDesk is an interactive web-based platform that lets users unleash their creativity by doodling, capturing moments, and saving their creations as photos. It combines a personal diary, to-do list, and task management tools with a space to visually express ideas, thoughts, and memories. AuroDesk makes it easy to stay organized, reflect, and preserve your creative moments all in one engaging dashboard.",
        image: "AURODESK.png",
        link: "https://aura-desk.netlify.app/",
        technologies: [ "HTML", "CSS", "JAVASCRIPT"]
      },
      {
        title: "SkillSphere – Interactive Learning & Career Growth Platform",
        description: "SkillSphere is an engaging web-based platform designed to help students and professionals enhance their skills through interactive quizzes, interview preparation tools, and AI-powered chatbot assistance. The platform combines learning, practice, and career readiness in one place, making it easier to stay motivated and track progress.",
        image: "CB.png",
        link: "https://github.com/giffy19/SkillSphere",
        technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"]
      },
      {
        title: "Recipe Finder – Discover & Cook",
        description: "An interactive web app to search, filter, and explore recipes from around the world. Features include detailed instructions, video tutorials, voice-guided reading, favorites, and dark/light mode for a modern, user-friendly cooking experience.",
        image: "recipe.png",
        link: "https://giffy19.github.io/Recipe-Finder/",
        technologies: ["HTML", "CSS", "JavaScript"]
      }
    ],
    uiux: [
      {
        title: "Personal Portfolio – UI/UX Design in Figma",
        description: "A fully designed personal portfolio created in Figma, featuring a modern layout, intuitive navigation, and responsive design elements. The prototype highlights sections like About, Skills, Projects, and Contact, all structured with clean typography and engaging visuals to ensure a professional and user-friendly experience.",
        image: "ptt.png",
        link: "https://www.figma.com/proto/y4dAg1PUDRFJsRH4CckggE/Untitled?page-id=0%3A1&node-id=1-2&viewport=99%2C245%2C0.07&t=zMr5NGueQyxTUwzE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
        technologies: ["Figma", "UI Design", "Wireframing", "Prototyping"]
      },
      {
        title: "Music Academy Website - UI Design",
        description: "An interactive website UI concept for a Music Academy, designed in Figma. The design includes dedicated pages for Services and Gallery, along with a simple course enrollment flow. The focus is on clean navigation, engaging visuals, and a modern layout that enhances the user experience.",
        image: "mu.png",
        link: "https://www.figma.com/proto/EJsky9Y1LmSLBqyzRjsEJT/music?page-id=0%3A1&node-id=5-11&starting-point-node-id=5%3A11&t=fBFOOUtEhgkQy5rG-1",
        technologies: ["Figma", "User Flow", "Interaction Design"]
      },
      {
        title: "Travel Agency Website - UI Design",
        description: "An interactive website UI concept for a Travel Agency, designed in Figma. The design includes dedicated pages for Destinations, Packages, and Gallery, along with a simple booking and inquiry flow. The focus is on clean navigation, visually appealing imagery, and a modern layout that enhances the user experience.",
        image: "travel.png",
        link: "https://www.figma.com/proto/BbJkipqLuELZsjn6sG6xlC/travel?page-id=0%3A1&node-id=1-2&p=f&viewport=25%2C148%2C0.12&t=XqR1dc9k61N4wpmg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
        technologies: ["Figma", "UI/UX", "User Research"]
      },
      {
        title: "Restaurant Menu Card - UI Design",
        description: "An interactive menu card slider for a restaurant, designed in Figma. Users can scroll through dishes with images, descriptions, and prices. The design emphasizes smooth horizontal scrolling, visually appealing dish cards, and an intuitive browsing experience.",
        image: "food.png",
        link: "https://www.figma.com/proto/ot63WXxvJAynveQx3qufq4/menu?page-id=0%3A1&node-id=1-2&viewport=331%2C340%2C0.17&t=Gb4UWSCEsPrWttcF-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2",
        technologies: ["Figma", "UI Design", "Prototyping"]
      }
    ]
  };

  const openProjectModal = (project) => {
    setActiveProject(project);
  };

  const closeProjectModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-tabs">
          <button 
            className={`tab-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend Projects
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'uiux' ? 'active' : ''}`}
            onClick={() => setActiveCategory('uiux')}
          >
            UI/UX Projects
          </button>
        </div>
        
        <div className="project-grid">
          {projectsData[activeCategory].map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-details">View Details</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeProjectModal}>&times;</span>
            <h2>{activeProject.title}</h2>
            <img src={activeProject.image} alt={activeProject.title} className="modal-image" />
            <p className="modal-description">{activeProject.description}</p>
            <div className="modal-technologies">
              <h4>Technologies Used:</h4>
              <div className="technologies">
                {activeProject.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;