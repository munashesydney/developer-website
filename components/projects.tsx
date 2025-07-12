"use client"

import React from 'react'
import { ExternalLink, Zap, MessageSquare, ArrowRightLeft, Code, Shield } from 'lucide-react'

const Projects = () => {
  const aiProjects = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Signal Copier",
      description: "AI-powered trade signal automation platform for automated trading strategies",
      stats: "Active Users: 2000+",
      demoLink: "#"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Knowledge Desk", 
      description: "AI-driven help desk platform revolutionizing customer support",
      stats: "5000+ Users",
      demoLink: "#"
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6" />,
      title: "AI Telegram Copier",
      description: "Automated Telegram trading bot for signal copying and execution",
      stats: "1M+ Trades Copied",
      demoLink: "#"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Fire Snippets",
      description: "AI-enhanced code snippet manager for developers",
      stats: "10K+ Snippets",
      demoLink: "#"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Trade Manager",
      description: "Risk management platform for AI trading systems",
      stats: "$10M+ Managed",
      demoLink: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured AI Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                  {project.stats}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <a
                href={project.demoLink}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors duration-200"
              >
                Live Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects