"use client"

import React from 'react'
import { ArrowRight, Download, Terminal, Zap } from 'lucide-react'

const Hero = () => {
  const handleExploreWork = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    // Download the resume PDF
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Munashe_Sydney_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                Senior Software Developer
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Munashe{' '}
                <span className="text-purple-600">
                  Sydney
                </span>
                <br />
                Machiwenyika
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Aspiring Senior Software Developer passionate about building scalable 
                applications and improving user experiences. I actively leverage advancements 
                in Artificial Intelligence to streamline workflows, automate repetitive tasks, 
                and enhance productivity.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExploreWork}
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <span>sydneymach1@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span>+1-778-215-3914</span>
              </div>
              <div className="flex items-center">
                <span>604 Cawston, Kelowna BC</span>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Terminal window */}
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-2xl p-1 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-t-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-green-400">$ whoami</div>
                  <div className="text-white mt-2">munashe_sydney_machiwenyika</div>
                  <div className="text-green-400 mt-4">$ cat skills.txt</div>
                  <div className="text-purple-400 mt-2">
                    <div>🚀 Next.js</div>
                    <div>⚛️ React</div>
                    <div>🐍 Python</div>
                    <div>☕ Java</div>
                    <div>🤖 AI Integration</div>
                  </div>
                  <div className="text-green-400 mt-4 animate-pulse">$ _</div>
                </div>
              </div>

              {/* Lightning bolt icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero