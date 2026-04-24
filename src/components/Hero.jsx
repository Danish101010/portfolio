import React from 'react';
import { Mail, FileText, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Danish Siddiqui</span>
            <br />
            <span className="text-gradient">AI Engineer & Developer.</span>
          </h1>
          
          <p className="hero-subtitle">
            B.Tech from <strong>IIT Bombay</strong> with a Minor in 
            Computer Science & Engineering. Passionate about building intelligent systems and scalable applications.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/resume.pdf" download="Danish_Siddiqui_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline hero-btn-icon">
              <FileText size={18} />
              Resume
            </a>
            <a href="mailto:danishsiddiqui2486@gmail.com" className="btn btn-outline hero-btn-icon">
              <Mail size={18} />
              Contact
            </a>
          </div>
          
          <div className="hero-socials">
            <p>Connect with me:</p>
            <div className="social-links">
              <a href="https://github.com/Danish101010" target="_blank" rel="noreferrer" className="social-icon">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/danish-siddiqui-72a9301a7/" target="_blank" rel="noreferrer" className="social-icon">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-wrapper">
            <div className="profile-glow"></div>
            <img src={profileImg} alt="Danish Siddiqui" className="profile-image" />
            <div className="glass-card tech-card card-1">
              <div className="tech-dot py"></div> Python
            </div>
            <div className="glass-card tech-card card-3">
              <div className="tech-dot ml"></div> AI/ML
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#about">
          <span className="scroll-text">Scroll Down</span>
          <ChevronDown className="scroll-icon" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
