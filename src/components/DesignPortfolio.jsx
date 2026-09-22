import React, { useState, useEffect, useCallback } from 'react';
import './DesignPortfolio.css';

const designProjects = [
  {
    id: 'icert-global',
    title: 'iCert Global',
    description: 'Corporate marketing creatives for iCert Global certification programs.',
    images: [
      { src: 'Designs/task_1.jpg.jpeg', title: 'Cloud Computing Marketing Creative' },
      { src: 'Designs/task_2.jpg.jpeg', title: 'Data Science & AI Marketing Creative' },
      { src: 'Designs/task_3.jpg.jpeg', title: 'Cyber Security Marketing Creative' },
    ],
  },
  {
    id: 'event-promotional',
    title: 'Event & Promotional Designs',
    description: 'Marketing and event promotional materials designed for various occasions and campaigns.',
    images: [
      { src: 'Designs/design.jpeg', title: 'Metamorph Design Creative' },
      { src: 'Designs/No Smoking Day.jpg.jpeg', title: 'No Smoking Day Awareness Poster' },
      { src: 'Designs/church.jpeg', title: 'Church Creative Poster' },
    ],
  },
  {
    id: 'rooted-youth-retreat',
    title: 'RO0TED — Youth Retreat',
    description: 'Event promotion and coordinated certificate designs for a youth retreat.',
    images: [
      { src: 'Designs/Rooted Notice.jpg.jpeg', title: 'Rooted Retreat Notice' },
      { src: 'Designs/Certificate Participation - Bible Quiz.jpg.jpeg', title: 'Bible Quiz Participation Certificate' },
      { src: 'Designs/Certificate - Bible Quiz Winners.jpg.jpeg', title: 'Bible Quiz Winners Certificate' },
    ],
  },
  {
    id: 'housewarming-invitation',
    title: 'Housewarming Invitation',
    description: 'Personalized invitation design crafted for a family housewarming celebration.',
    images: [
      { src: 'Designs/housewarming.jpeg', title: 'Berachah Housewarming Invitation' },
    ],
  },
];

const DesignPortfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openProjectModal = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setActiveProject(null);
    setActiveImageIndex(0);
    document.body.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
  }, [activeProject]);

  const prevImage = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight' && activeProject.images.length > 1) nextImage();
      if (e.key === 'ArrowLeft' && activeProject.images.length > 1) prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, closeModal, nextImage, prevImage]);

  return (
    <section id="design" className="design-portfolio">
      <div className="container">
        <h2 className="section-title">Design</h2>
        <p className="design-subtitle">
          Selected graphic design work across marketing, events, and digital content.
        </p>

        {/* ── 2-Column Project Grid ── */}
        <div className="design-grid">
          {designProjects.map((project) => {
            const hasMultiple = project.images.length > 1;

            return (
              <div
                key={project.id}
                className="design-card"
                onClick={() => openProjectModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openProjectModal(project)}
                aria-label={`View project ${project.title}`}
              >
                {/* ── Thumbnail / Collage ── */}
                <div className="design-card-thumbnail">
                  {hasMultiple ? (
                    <div className="collage-grid">
                      <div className="collage-main">
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].title}
                          loading="lazy"
                        />
                      </div>
                      <div className="collage-side">
                        <img
                          src={project.images[1].src}
                          alt={project.images[1].title}
                          loading="lazy"
                        />
                        {project.images[2] && (
                          <img
                            src={project.images[2].src}
                            alt={project.images[2].title}
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="single-thumbnail">
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].title}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="thumbnail-badge">
                    {project.images.length} {project.images.length === 1 ? 'Design' : 'Designs'}
                  </div>

                  <div className="thumbnail-overlay">
                    <span>Explore Design</span>
                  </div>
                </div>

                {/* ── Card Info ── */}
                <div className="design-card-content">
                  <h3 className="design-card-title">{project.title}</h3>
                  <p className="design-card-description">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox / Modal ── */}
      {activeProject && (
        <div
          className="design-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="design-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="design-modal-header">
              <div className="design-modal-meta">
                <h3 className="design-modal-title">{activeProject.title}</h3>
                <p className="design-modal-desc">{activeProject.description}</p>
              </div>
              <button
                className="design-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Viewer */}
            <div className="design-modal-body">
              {activeProject.images.length > 1 && (
                <button
                  className="modal-nav-btn modal-nav-prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
              )}

              <div className="modal-image-wrapper">
                <img
                  src={activeProject.images[activeImageIndex].src}
                  alt={activeProject.images[activeImageIndex].title}
                  className="modal-main-img"
                />
              </div>

              {activeProject.images.length > 1 && (
                <button
                  className="modal-nav-btn modal-nav-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  &#8250;
                </button>
              )}
            </div>

            {/* Footer Navigation */}
            <div className="design-modal-footer">
              <div className="modal-caption-row">
                <span className="modal-img-caption">
                  {activeProject.images[activeImageIndex].title}
                </span>
                {activeProject.images.length > 1 && (
                  <span className="modal-img-counter">
                    {activeImageIndex + 1} of {activeProject.images.length}
                  </span>
                )}
              </div>

              {activeProject.images.length > 1 && (
                <div className="modal-thumbnails-strip">
                  {activeProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`modal-thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={img.src} alt={img.title} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignPortfolio;
