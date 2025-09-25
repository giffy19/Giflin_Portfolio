import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 8056263611</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>giflingodshia19@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Chennai, India</span>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Giflin Godshia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;