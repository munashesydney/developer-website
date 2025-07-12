"use client"

import React from 'react'
import { Brain, Code, Wrench, Layers } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Professional Skills",
      skills: ["Problem Solving", "Adaptability", "Collaboration", "Fast Learning"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills", 
      skills: ["Web Development", "API Integration", "Database Management", "Prompt Engineering"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Programming",
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "PHP", "SQL"]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      skills: ["React", "Flutter", "Node.js"]
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills