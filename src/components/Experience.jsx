import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "AI Engineering Intern",
      company: "Pattern",
      location: "Pune, India",
      date: "May 2025 – July 2025",
      description: "Architected an AI-powered Image Quality Audit System, reducing QA effort by 75%. Engineered scalable web scraping and transcript analysis pipelines using LLMs and Whisper ASR, and built a hierarchical secrets management system integrated with AWS."
    },
    {
      role: "Artificial Intelligence Researcher",
      company: "Modernmonklabs",
      location: "Remote",
      date: "Jun 2024 - Aug 2024",
      description: "Researched GraphML-based approaches for drug discovery. Encoded drug compounds using Sequence RNN and Graph-Transformer models to predict interaction outcomes between drugs and target proteins by training on biomedical datasets."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="exp-header">
                  <div className="exp-title-wrapper">
                    <Briefcase className="exp-icon" />
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">@ {exp.company}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="meta-item"><Calendar size={14} /> {exp.date}</span>
                    <span className="meta-item"><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>
                
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
