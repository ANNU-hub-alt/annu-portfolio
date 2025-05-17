
import React, { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
  category: 'web' | 'all';
};

const projects: Project[] = [
  {
    title: "Local Shop Inventory Website",
    description: "A team project focused on creating an inventory management system for local shops. I handled the frontend development, creating responsive interfaces and interactive components.",
    image: "/placeholder.svg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: 'web',
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'web'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-portfolio-darkBg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-10 space-x-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === 'all' 
                ? 'bg-portfolio-purple text-white' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === 'web' 
                ? 'bg-portfolio-purple text-white' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Web Development
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden rounded-xl group transition-all duration-300 hover:shadow-glow"
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-darkBg to-transparent opacity-60"></div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-portfolio-purple/20 text-portfolio-purple px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-portfolio-blue hover:text-portfolio-purple transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.repoLink && (
                    <a 
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-portfolio-blue hover:text-portfolio-purple transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                  
                  {!project.demoLink && !project.repoLink && (
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Code size={16} />
                      Private Project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-portfolio-blue/10 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-portfolio-purple/10 blur-xl"></div>
    </section>
  );
};

export default Projects;
