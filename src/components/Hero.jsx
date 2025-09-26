import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const texts = ["Frontend Developer", "UI/UX Designer", "React Developer", "Digital Creator"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 200;

    const type = () => {
      const fullText = texts[currentIndex];
      const typedElement = document.getElementById('typed-text');

      if (typedElement) {
        if (isDeleting) {
          charIndex--;
          typingSpeed = 100;
        } else {
          charIndex++;
          typingSpeed = 200;
        }

        typedElement.textContent = fullText.substring(0, charIndex);

        if (!isDeleting && charIndex === fullText.length) {
          typingSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % texts.length;
          typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hello, I'm Giflin Godshia</h1>
          <div className="typing-container">
            <span id="typed-text"></span>
            <span className="cursor">|</span>
          </div>
          <p>I turn ideas into delightful digital journeys. I specialize in frontend development and UI/UX design.</p>
          <div className="hero-buttons">
            <a href="mailto:giflingodshia19@gmail.com" className="btn">📧 Mail Me</a>
            <a href="https://www.linkedin.com/in/giflin-godshia-889428258" target="_blank" rel="noopener noreferrer" className="btn">🔗 LinkedIn</a>
            <a href="https://github.com/giffy19" target="_blank" rel="noopener noreferrer" className="btn">💻 GitHub</a>
            <a href="GIFLIN_GODSHIA_DS.pdf" download className="btn">📄 Download Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="pro.jpg" alt="Giflin Godshia" />
        </div>
      </div>
    </section>
  );
};

export default Hero;