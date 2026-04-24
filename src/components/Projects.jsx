import React, { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'AI Integrations', 'Web Development', 'C++ / Systems', 'LLMs'];

  const projects = [
    {
      title: "Travel Planner Agent",
      category: "AI Integrations",
      description: "AI travel planner that generates day-by-day itineraries with timings, cost breakdowns, restaurant picks, and personalized budget-aware recommendations. Live rail/flight fares + distance-aware fallback pricing.",
      techStack: ["Python", "LLM", "IRCTC (RapidAPI)", "TravelPayouts", "Pricing heuristics"],
      githubLink: "https://github.com/Danish101010/Travel-planner-agent",
      liveLink: ""
    },
    {
      title: "FitLoop",
      category: "AI Integrations",
      description: "AI-powered nutrition tracker: snap a meal photo to detect foods (with confidence), estimate/edit portions, compute macros, and track progress analytics. Meal photo → macros + PID-based recommendations.",
      techStack: ["React", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL", "Gemini 2.5 Flash"],
      githubLink: "https://github.com/Danish101010/FitLoop",
      liveLink: ""
    },
    {
      title: "MedBill Extractor",
      category: "AI Integrations",
      description: "Invoice extraction pipeline for PDFs: image preprocessing, table segmentation, OCR line items with confidence, fuzzy deduplication, and ILP-based total reconciliation via FastAPI.",
      techStack: ["Python", "OpenCV", "Tesseract OCR", "RapidFuzz", "PuLP", "FastAPI"],
      githubLink: "https://github.com/Danish101010/bajaj_datathon",
      liveLink: ""
    },
    {
      title: "Payments App",
      category: "Web Development",
      description: "Dockerized full-stack payments demo: JWT auth, balance dashboard, user search, transfers, and paginated transaction history. Runs anywhere via Docker Compose (backend + frontend + MongoDB).",
      techStack: ["Node.js", "Express", "MongoDB", "React", "Docker Compose"],
      githubLink: "https://github.com/Danish101010/payments_app",
      liveLink: ""
    },
    {
      title: "Multiplayer Coin-Collector",
      category: "C++ / Systems",
      description: "Real-time multiplayer coin-collector showcasing a server-authoritative model, simulated ~200ms latency, and smooth client-side entity interpolation. Latency management + history buffer for smooth rendering.",
      techStack: ["Python", "Pygame", "TCP sockets", "JSON"],
      githubLink: "https://github.com/Danish101010/Coin_collector_game",
      liveLink: ""
    },
    {
      title: "BitTorrent Clone (C++)",
      category: "C++ / Systems",
      description: "C++ starter implementation for a BitTorrent client: parse .torrent metadata and learn trackers, peer protocol, and download pipelining. Build-your-own BitTorrent challenge starter.",
      techStack: ["C++", "Networking", "BitTorrent"],
      githubLink: "https://github.com/Danish101010/BitTorrent-clone",
      liveLink: ""
    },
    {
      title: "Decoding Strategies for LLMs",
      category: "LLMs",
      description: "Implemented and evaluated decoding strategies for Llama-2 translation (Hindi→English): greedy, nucleus sampling, constrained decoding, and Medusa (single- and multi-head). Quality + speed metrics evaluated.",
      techStack: ["Python", "PyTorch", "Transformers", "Llama 2"],
      githubLink: "https://github.com/Danish101010/Generative_Modelling/tree/main/assgn3/cs726_assgmt3",
      liveLink: ""
    },
    {
      title: "Script Generator",
      category: "LLMs",
      description: "End-to-end notebook workflow for fine-tuning an LLM on custom data: preprocessing, training optimization, evaluation, and controlled generation for reproducible iteration. Production-minded training patterns + eval-driven iteration.",
      techStack: ["Python", "PyTorch", "Hugging Face", "Jupyter", "Fine-tuning", "Controlled decoding"],
      githubLink: "https://github.com/Danish101010/Script_generator/",
      liveLink: ""
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        
        <div className="projects-filter">
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-header">
                <div className="folder-icon">
                  <Folder size={32} />
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label="Live Demo Link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
