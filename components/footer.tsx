"use client"

import React from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "AI Signal Copier", href: "https://aisignalcopier.com" },
    { name: "AI Knowledge Desk", href: "https://aiknowledgedesk.com" },
    { name: "AI Telegram Copier", href: "https://aitelegramcopier.com" },
    { name: "Fire Snippets", href: "https://firesnippets.com" },
    { name: "AI Trade Manager", href: "https://aitrademanager.com" },
    { name: "Browserize", href: "https://browserize.com" }
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/munashesydney", icon: <Github className="w-5 h-5" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/munashe-sydney-641883259/", icon: <Linkedin className="w-5 h-5" /> }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Munashe Sydney</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Computer Scientist, SaaS Founder, and Full-Stack Developer based in Canada. 
              Building tools that simplify workflows, automate customer support, and empower other developers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400" />
                <a 
                  href="mailto:sydneymach1@gmail.com"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  sydneymach1@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400" />
                <span>604 Cawston, Kelowna BC</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-purple-600 dark:text-purple-400" />
                <a 
                  href="tel:+1-778-215-3914"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  +1-778-215-3914
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Munashe Sydney. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 