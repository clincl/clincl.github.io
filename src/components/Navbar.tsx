'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Close menu first
    setIsMobileMenuOpen(false)

    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm" style={{
      backgroundColor: 'var(--navbar-bg)',
      boxShadow: isScrolled ? 'var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px' : 'none'
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-colors duration-300"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x="4"
                  y="4"
                  width="24"
                  height="24"
                  rx="4"
                  fill="#3b82f6"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text
                  x="16"
                  y="22"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="bold"
                  fill="white"
                  fontFamily="system-ui, sans-serif"
                >
                  CL
                </text>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="transition-colors duration-300 font-medium hover:opacity-80"
              style={{ color: 'var(--navbar-text)' }}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="transition-colors duration-300 font-medium hover:opacity-80"
              style={{ color: 'var(--navbar-text)' }}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection('resume')}
              className="transition-colors duration-300 font-medium hover:opacity-80"
              style={{ color: 'var(--navbar-text)' }}
            >
              Resume
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="transition-colors duration-300 font-medium hover:opacity-80"
              style={{ color: 'var(--navbar-text)' }}
            >
              Contact
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 transition-colors duration-300"
                style={{ color: 'var(--navbar-text)' }}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full right-0 mt-2 w-64 z-40 transform transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
      }`} style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px'
      }}>
        <div className="py-2">
          {/* Navigation Links */}
          <nav className="space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-4 py-3 transition-colors duration-200 font-medium hover:bg-opacity-10"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="w-full text-left px-4 py-3 transition-colors duration-200 font-medium hover:bg-opacity-10"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection('resume')}
              className="w-full text-left px-4 py-3 transition-colors duration-200 font-medium hover:bg-opacity-10"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
            >
              Resume
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-left px-4 py-3 transition-colors duration-200 font-medium hover:bg-opacity-10"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>


    </nav>
  )
}
