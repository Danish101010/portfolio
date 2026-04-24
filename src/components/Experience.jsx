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
      points: [
        "Architected AI Image Quality Audit System, reducing QA effort by 75%.",
        "Engineered scalable web scraping and transcript analysis pipelines using LLMs and Whisper ASR.",
        "Built a hierarchical secrets management system integrated with AWS."
      ]
    },
    {
      role: "Artificial Intelligence Researcher",
      company: "Modernmonklabs",
      location: "Remote",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Researched GraphML based approaches for Drug discovery.",
        "Worked on encoding drug compounds, utilized Sequence RNN and Graph-Transformer models.",
        "Predicted outcomes of interaction between drug and target protein by training models on biomedical datasets."
      ]
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
                
                <ul className="exp-points">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
