"use client"

import React from 'react'
import { Github, ExternalLink, Star, GitBranch, Code, Globe } from 'lucide-react'

const OpenSource = () => {
  const openSourceProjects = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Browser0",
      description: "AI-powered browser automation platform that combines large language models with real browser control through the Model Context Protocol (MCP). Built with Remix, TypeScript, and integrated with Claude AI and Microsoft Playwright.",
      githubUrl: "https://github.com/munashesydney/browser0",
      liveUrl: null,
      tech: ["Docker", "Remix", "TypeScript", "Claude AI", "MCP", "Playwright"],
      features: [
        "AI-Powered Browser Control",
        "Real-time Browser Sessions", 
        "Accessibility-First Automation",
        "Comprehensive Tool Suite"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Blog0",
      description: "Open-source Docker-based blog platform for businesses. Instant deployment with themed templates, built for teams that want fast SEO-ready blogs with no fuss.",
      githubUrl: "https://github.com/munashesydney/blog0",
      liveUrl: null,
      tech: ["Docker", "Next.js", "TypeScript", "SEO"],
      features: [
        "Instant Deployment",
        "Themed Templates",
        "SEO-Ready",
        "Docker-Based"
      ]
    }
  ]

  return (
    <section id="open-source" className="py-20 bg-purple-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
            <Github className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Source Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Contributing to the developer community with innovative open source solutions
          </p>
        </div>

        <div className="space-y-12">
          {openSourceProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project Icon and Title */}
                <div className="lg:col-span-1">
                                     <div className="flex items-center mb-6">
                     <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg">
                       {project.icon}
                     </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center mt-2">
                        <Github className="w-4 h-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">Open Source</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Github className="mr-2 w-5 h-5" />
                      View on GitHub
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <Globe className="mr-2 w-5 h-5" />
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contribute to Open Source
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects are open for contributions! Whether you're a developer, designer, or just passionate about technology, 
              your contributions help make these tools better for everyone.
            </p>
            <a
              href="https://github.com/munashesydney"
              target="_blank"
              rel="noopener noreferrer"
                             className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github className="mr-2 w-5 h-5" />
              Explore My GitHub
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenSource 