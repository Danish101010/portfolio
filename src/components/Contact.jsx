import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content glass-card">
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="contact-desc">
            Currently looking for new opportunities. Whether you have a question, a project in mind, 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-info">
            <a href="mailto:danishsiddiqui2486@gmail.com" className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="contact-text">
                <span>Email</span>
                <strong>danishsiddiqui2486@gmail.com</strong>
              </div>
            </a>
            
            <a href="tel:+917857078846" className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="contact-text">
                <span>Phone</span>
                <strong>+91 7857078846</strong>
              </div>
            </a>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="contact-text">
                <span>Location</span>
                <strong>Mumbai, India</strong>
              </div>
            </div>
          </div>
          
          <a href="mailto:danishsiddiqui2486@gmail.com" className="btn btn-primary contact-cta">
            Say Hello
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Danish Siddiqui. All rights reserved.</p>
          </div>
          
          <div className="footer-center">
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
              <ArrowUp size={20} />
            </button>
          </div>
          
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/Danish101010" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/danish-siddiqui-72a9301a7/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
