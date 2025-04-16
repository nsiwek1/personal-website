import React from 'react';
import Link from 'next/link';
import OptimizedImage from './components/OptimizedImage';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold gradient-text">
                Natalia
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                  Projects
                </Link>
                <Link href="/experience" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                  Experience
                </Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="gradient-text">Natalia Siwek</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Computer Science and Statistics Student at Harvard College
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                Passionate about building innovative solutions and exploring the intersection of technology and society.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="btn-primary text-center"
                >
                  View My Projects
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
              {/* Profile Image */}
              <OptimizedImage
                src="/images/picture_main.jpeg"
                alt="Natalia Siwek"
                width={500}
                height={500}
                className="w-full h-full"
                priority={true}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-card p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-indigo-500/50">Project {item}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Project Title</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">A brief description of the project and its impact.</p>
                <Link href="/projects" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 