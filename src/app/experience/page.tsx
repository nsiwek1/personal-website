interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

const experiences: Experience[] = [
  {
    company: "Microsoft",
    position: "Software Engineering Intern",
    duration: "Summer 2025",
    location: "Redmond, WA",
    description: [
      "Developed and maintained full-stack web applications using React and Node.js",
      "Collaborated with cross-functional teams to implement new features",
      "Improved application performance by 40% through code optimization",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    logo: "company1",
  },
  {
    company: "Research Lab",
    position: "Research Assistant",
    duration: "2022 - Present",
    location: "Harvard University",
    description: [
      "Conducted research in machine learning and computer vision",
      "Published findings in academic journals",
      "Developed novel algorithms for image processing",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch"],
    logo: "harvard",
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title mb-12">Experience</h1>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo/Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {exp.company.charAt(0)}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold mb-1">{exp.position}</h2>
                      <p className="text-xl text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.duration}</p>
                      <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="list-none space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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