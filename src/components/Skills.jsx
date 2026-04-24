import React from 'react';
import { Code, Database, Wrench, Layers, Terminal, Globe } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal className="category-icon" />,
      skills: ["C++", "C", "Python", "TypeScript", "MATLAB", "Bash"]
    },
    {
      title: "AI / ML / DL",
      icon: <Layers className="category-icon" />,
      skills: [
        "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", 
        "Probabilistic modeling", "Diffusion models", "GANs", 
        "VAEs", "Reinforcement learning", "NLP", "LLM prompting"
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="category-icon" />,
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SQL"]
    },
    {
      title: "Backend / Systems",
      icon: <Code className="category-icon" />,
      skills: [
        "FastAPI", "Flask", "SQLAlchemy", "Pydantic", 
        "PostgreSQL", "MongoDB", "Prisma", "Docker", "AWS Parameter Store"
      ]
    },
    {
      title: "Web",
      icon: <Globe className="category-icon" />,
      skills: ["Next.js", "React", "HTML", "CSS", "Tailwind"]
    },
    {
      title: "Tools",
      icon: <Wrench className="category-icon" />,
      skills: ["Git", "GitHub", "Linux", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card">
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
