import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Personal website showcasing projects, experience, and contact information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex-shrink-0">
                    <a href="/" className="text-xl font-bold gradient-text">
                      Your Name
                    </a>
                  </div>
                  <nav className="hidden md:flex space-x-8">
                    <a href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                      Projects
                    </a>
                    <a href="/experience" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                      Experience
                    </a>
                    <a href="/about" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                      About
                    </a>
                    <a href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors">
                      Contact
                    </a>
                  </nav>
                  <div className="flex items-center">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </header>
            <main className="pt-16">
              {children}
            </main>
            <footer className="bg-gray-50 dark:bg-gray-800 py-8 mt-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 