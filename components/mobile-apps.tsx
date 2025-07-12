"use client"

import React, { useState } from 'react'
import { Smartphone, Download, ExternalLink, X } from 'lucide-react'

const MobileApps = () => {
  const [showIOSModal, setShowIOSModal] = useState(false)

  const mobileApps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "AI Knowledge Desk",
      description: "AI-powered help desk solution available on both Android and iOS platforms.",
      downloads: "10+ Downloads",
      platforms: [
        { name: "Android", link: "https://play.google.com/store/apps/details?id=com.aiknowledgedesk.app&hl=en&pli=1" },
        { name: "iOS", link: "#", isIOS: true }
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "AI Trade Manager",
      description: "Comprehensive trading management solution for Android devices.",
      downloads: "20+ Downloads",
      platforms: [
        { name: "Android", link: "#" }
      ]
    }
  ]

  return (
    <section id="apps" className="py-20 bg-emerald-50 dark:bg-gray-900">
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
                  platform.isIOS ? (
                    <button
                      key={platformIndex}
                      onClick={() => setShowIOSModal(true)}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Download className="mr-2 w-5 h-5" />
                      Download on {platform.name}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      key={platformIndex}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Download className="mr-2 w-5 h-5" />
                      Download on {platform.name}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* iOS Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Download AI Knowledge Desk
              </h3>
              <button
                onClick={() => setShowIOSModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To download AI Knowledge Desk on iOS, please open the App Store and search for <strong>'AI KNOWLEDGE DESK'</strong>.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowIOSModal(false)}
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
              >
                Open App Store
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MobileApps