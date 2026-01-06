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

  const navigateToPage = (page: string) => {
    // Close menu first
    setIsMobileMenuOpen(false)

    // Navigate to different pages using Next.js router
    if (page === 'home') {
      router.push('/')
    } else if (page === 'about') {
      router.push('/about')
    } else if (page === 'projects') {
      router.push('/projects')
    } else if (page === 'resume') {
      router.push('/resume')
    } else if (page === 'contact') {
      router.push('/#contact')
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
          {/* Logo/Name */}
          <div className="text-2xl font-bold">
            <Link
              href="/"
              className="transition-colors duration-300"
              style={{ color: 'var(--navbar-text)' }}
            >
              Chuan Lin
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {/* Contact information is now visible on the main page */}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40" style={{ backgroundColor: 'var(--bg-overlay)' }}>
          <div className="flex flex-col items-center justify-center min-h-screen px-6">
            <div
              className="w-full max-w-sm rounded-xl shadow-lg p-6 space-y-6"
              style={{
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--shadow-color) 0 20px 25px -5px, var(--shadow-color) 0 10px 10px -5px'
              }}
            >
              {/* Close Button */}
              <div className="flex justify-end">
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
              <nav className="space-y-4">
                <button
                  onClick={() => navigateToPage('home')}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-accent)'
                  }}
                >
                  Home
                </button>

                <button
                  onClick={() => navigateToPage('about')}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-accent)'
                  }}
                >
                  About
                </button>

                <button
                  onClick={() => navigateToPage('projects')}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-accent)'
                  }}
                >
                  Projects
                </button>

                <button
                  onClick={() => navigateToPage('resume')}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-accent)'
                  }}
                >
                  Resume
                </button>

                <button
                  onClick={() => navigateToPage('contact')}
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
        </div>
      )}
    </nav>
  )
}
