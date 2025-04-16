import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of your first project. Explain what problems it solves and what you learned.",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project1",
    image: "gradient-1",
  },
  {
    title: "Project 2",
    description: "Description of your second project. Highlight your role and the impact.",
    technologies: ["Python", "Machine Learning", "TensorFlow"],
    link: "https://project2-demo.com",
    image: "gradient-2",
  },
  {
    title: "Project 3",
    description: "Description of your third project. Showcase your problem-solving skills.",
    technologies: ["JavaScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/project3",
    image: "gradient-3",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title mb-12">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${
                project.image === "gradient-1" ? "from-indigo-500/30 to-purple-500/30" :
                project.image === "gradient-2" ? "from-blue-500/30 to-teal-500/30" :
                "from-pink-500/30 to-orange-500/30"
              } flex items-center justify-center`}>
                <span className="text-5xl font-bold text-white/70">{project.title.charAt(0)}</span>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                      target="_blank"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                      target="_blank"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 