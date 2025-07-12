"use client"

import React from 'react'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'

const ExperienceEducation = () => {
  const experiences = [
    {
      title: "Guest Service Expert",
      company: "Prestige Beach House Hotel, Kelowna",
      date: "Oct 2024 - Ongoing",
      description: "Strengthened communication and collaboration skills by coordinating with teams to ensure smooth operations."
    },
    {
      title: "Guest Service Expert", 
      company: "Super 8 Hotel, Kelowna",
      date: "Oct 2023 - Aug 2024",
      description: "Developed excellent problem-solving and multitasking skills while handling customer inquiries and managing bookings."
    }
  ]

  const education = [
    {
      degree: "Diploma in Computer Science",
      institution: "Okanagan College, Kelowna",
      date: "2023-2025",
      description: "Relevant Coursework: Data Structures, Object-Oriented Programming, Web Development, Database Management"
    },
    {
      degree: "Cambridge International AS & A Level",
      institution: "Winwood College",
      date: "2020-2022",
      description: "Key Subjects: Mathematics, Physics & Computer Science\nComputer Science Coursework: Data Structures"
    }
  ]

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{exp.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{edu.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceEducation