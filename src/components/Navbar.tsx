'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Watch for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark-theme'))
    }

    // Check initial theme
    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
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
            <Link
              href="/"
              className="transition-colors duration-300 flex items-center"
              style={{ color: 'var(--navbar-text)' }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="mr-2"
                style={{ color: 'var(--navbar-text)' }}
              >
                <rect
                  x="4"
                  y="4"
                  width="24"
                  height="24"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <text
                  x="16"
                  y="22"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="bold"
                  fill="currentColor"
                  fontFamily="system-ui, sans-serif"
                >
                  CL
                </text>
              </svg>
              <span className="hidden sm:inline">Chuan Lin</span>
            </Link>
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

      {/* Mobile Menu Slide-out Panel */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 z-40 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Menu</h2>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-opacity-20"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-accent)'
              }}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-accent)'
              }}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection('resume')}
              className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-accent)'
              }}
            >
              Resume
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-accent)'
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  )
}
