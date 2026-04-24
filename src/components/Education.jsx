import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Mechanical Engineering",
      school: "Indian Institute of Technology (IIT) Bombay",
      location: "Mumbai, India",
      date: "Oct 2022 — May 2026",
      icon: <GraduationCap className="edu-timeline-icon" />,
      highlights: [
        "CPI: 8.5 / 10",
        "Minor: Computer Science & Engineering (CSE)",
        "Relevant Coursework: Intro to ML, Advanced ML, Reinforcement Learning, Statistical ML, Deep Learning for Image Analysis, Digital Image Processing, Computer Networks, Discrete Structures, Logic for CS, Applied AI & Data Science."
      ]
    },
    {
      degree: "Senior Secondary (12th)",
      school: "Foundation School",
      location: "India",
      date: "2022",
      icon: <BookOpen className="edu-timeline-icon" />,
      highlights: [
        "Board: CBSE",
        "Score: 93%"
      ]
    },
    {
      degree: "Secondary School (10th)",
      school: "Cambridge Senior Secondary School",
      location: "India",
      date: "2020",
      icon: <School className="edu-timeline-icon" />,
      highlights: [
        "Board: CBSE",
        "Score: 94.6%"
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          Educational <span>Background</span>
        </h2>
        
        <div className="edu-timeline-container">
          <div className="edu-timeline-line"></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className="edu-timeline-item">
              <div className="edu-timeline-dot"></div>
              <div className="edu-timeline-content glass-card">
                <div className="edu-header">
                  <div className="edu-title-wrapper">
                    {edu.icon}
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <span className="edu-school">@ {edu.school}</span>
                  </div>
                  <div className="edu-meta">
                    <span className="meta-item"><Calendar size={14} /> {edu.date}</span>
                    <span className="meta-item"><MapPin size={14} /> {edu.location}</span>
                  </div>
                </div>
                
                <ul className="edu-highlights">
                  {edu.highlights.map((highlight, idx) => {
                    const colonIndex = highlight.indexOf(':');
                    if (colonIndex > -1) {
                      return (
                        <li key={idx}>
                          <strong>{highlight.substring(0, colonIndex + 1)}</strong>
                          {highlight.substring(colonIndex + 1)}
                        </li>
                      );
                    }
                    return <li key={idx}>{highlight}</li>;
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
