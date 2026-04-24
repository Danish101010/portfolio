import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="about-content centered">
          <p className="about-text">
            I’m someone who enjoys understanding how things work at a fundamental level and then building on top of that. My main interest lies in Artificial Intelligence, especially deep learning and large language models, but I also like working across the stack to turn ideas into usable products.
          </p>
          <p className="about-text">
            I’ve spent a good amount of time experimenting with generative models, reinforcement learning, and NLP systems, and I enjoy the process of taking a concept from research and making it work in practice. Whether it’s training models, optimizing them, or integrating them into applications, I like being involved end-to-end.
          </p>
          
          <div className="about-exploring glass-card">
            <h3>Currently exploring</h3>
            <ul className="exploring-list">
              <li>LLM evaluation + retrieval quality (RAG)</li>
              <li>Agentic AI and autonomous systems</li>
              <li>Production AI pipelines (FastAPI, orchestration)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
