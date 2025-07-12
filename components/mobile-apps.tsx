"use client"

import React from 'react'
import { Smartphone, Download, ExternalLink } from 'lucide-react'

const MobileApps = () => {
  const mobileApps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "AI Knowledge Desk",
      description: "AI-powered help desk solution available on both Android and iOS platforms.",
      downloads: "5000+ Downloads",
      platforms: [
        { name: "Android", link: "#" },
        { name: "iOS", link: "#" }
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "AI Trade Manager",
      description: "Comprehensive trading management solution for Android devices.",
      downloads: "2000+ Downloads",
      platforms: [
        { name: "Android", link: "#" }
      ]
    }
  ]

  return (
    <section id="apps" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mobile Applications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mobileApps.map((app, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                  {app.icon}
                </div>
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                  {app.downloads}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {app.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {app.description}
              </p>
              
              <div className="space-y-3">
                {app.platforms.map((platform, platformIndex) => (
                  <a
                    key={platformIndex}
                    href={platform.link}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download on {platform.name}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MobileApps