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
    if (page === 'about') {
      router.push('/about')
    } else if (page === 'projects') {
      router.push('/projects')
    } else if (page === 'resume') {
      router.push('/resume')
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
                  onClick={() => navigateToPage('about')}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-accent)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">👨‍💻</span>
                    <span className="font-medium">About</span>
                  </div>
                </button>

                <button
                  onClick={() => navigateToPage('projects')}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-accent)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🚀</span>
                    <span className="font-medium">Projects</span>
                  </div>
                </button>

                <button
                  onClick={() => navigateToPage('resume')}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-accent)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">📄</span>
                    <span className="font-medium">Resume</span>
                  </div>
                </button>

                {/* Contact Links */}
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="space-y-3">
                    <a
                      href="tel:347-463-1026"
                      className="flex items-center justify-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: 'var(--contact-bg)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      <span className="font-medium">Call Me</span>
                    </a>

                    <a
                      href="mailto:chuan.lin.cl@gmail.com"
                      className="flex items-center justify-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: 'var(--contact-bg)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span className="font-medium">Email Me</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
