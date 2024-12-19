import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Website Redesign',
    description: 'Developed a fully responsive e-commerce website using React.js and Tailwind CSS, improving user experience by 40%.',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80',
    tech: ['React', 'Tailwind CSS', 'Next.js'],
    liveLink: 'http://localhost:5174/',
    githubLink: '#',
  },
  {
    title: 'Text-To-Speech',
    description: ' technology converts written text into spoken words using javascript ',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
    tech: ['Html', 'css', 'Javascript'],
    liveLink: 'http://127.0.0.1:5500/index.html',
    githubLink: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a modern portfolio website with smooth animations and responsive design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tech: ['React', 'Tailwind CSS', 'Next.js'],
    liveLink: 'http://localhost:5173',
    githubLink: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}