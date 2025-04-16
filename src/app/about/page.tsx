import React from 'react';
import OptimizedImage from '../components/OptimizedImage';

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "Java", "SQL", "Git", "AWS", "Docker", "Machine Learning", 
    "Data Analysis", "UI/UX Design", "Agile Methodologies"
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title mb-12">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am a Computer Science and Statistics student at Harvard College, passionate about technology and its potential to solve real-world problems. My academic journey has equipped me with a strong foundation in both theoretical and practical aspects of computer science.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Throughout my studies, I've developed a keen interest in software development, data analysis, and machine learning. I enjoy tackling complex problems and creating innovative solutions that make a positive impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or engaging in hackathons to push my creative boundaries.
            </p>
          </div>
          <div className="glass-card p-4 rounded-xl overflow-hidden">
            <OptimizedImage
              src="/images/profile.jpg"
              alt="Natalia Siwek"
              width={300}
              height={300}
              className="w-full h-full rounded-lg"
              priority={true}
              objectFit="cover"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3 mb-12">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="glass-card p-6 mb-8">
          <h3 className="text-xl font-semibold mb-2">Harvard College</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Bachelor of Arts in Computer Science and Statistics</p>
          <p className="text-gray-500 dark:text-gray-500">2021 - Present</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Relevant coursework: Data Structures and Algorithms, Machine Learning, Database Systems, 
            Software Engineering, Artificial Intelligence, Probability and Statistics.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Technology</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>Cloud Computing</li>
              <li>Blockchain Technology</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Personal</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Reading</li>
              <li>Hiking</li>
              <li>Photography</li>
              <li>Traveling</li>
              <li>Volunteering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 