"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";

// Error Boundary Component
function ErrorFallback({
  error,
  resetError,
}: {
  error: Error;
  resetError: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div
        className="max-w-md w-full rounded-xl shadow-lg p-8 text-center"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div className="text-6xl mb-4">⚠️</div>
        <h2
          className="text-xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Something went wrong
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={resetError}
          className="px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          style={{
            backgroundColor: "var(--accent-primary)",
            color: "#ffffff",
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

// Loading Component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div
        className="animate-spin rounded-full h-8 w-8 border-b-2"
        style={{ borderColor: "var(--accent-primary)" }}
      ></div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [isDark, setIsDark] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Watch for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark-theme"));
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Handle URL hash and query string for tab navigation (GitHub Pages support)
  useEffect(() => {
    const handleNavigation = () => {
      // Check for GitHub Pages query string routing (e.g., ?/projects/pantry-chef)
      const query = window.location.search;
      if (query.startsWith('?/')) {
        const path = query.slice(2).split('&')[0]; // Remove '?/' and get the path
        // Navigate to the actual route
        window.history.replaceState(null, '', path + window.location.hash);
      }

      // Handle tab navigation
      const hash = window.location.hash.replace('#', '');
      if (hash && ['about', 'projects', 'resume'].includes(hash)) {
        setActiveTab(hash);
        // Scroll to top of page to ensure tabs are visible
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    // Check initial navigation
    handleNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  // Handle back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: "about", label: "About", component: About },
    { id: "projects", label: "Projects", component: Projects },
    {
      id: "resume",
      label: "Resume",
      component: () => (
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            {/* Resume Header */}
            <div className="text-center mb-8">
              {/* Download Button */}
              <a
                href="/Chuan_Lin_Resume.pdf"
                download="Chuan_Lin_Resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mr-4"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "#ffffff",
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>

            {/* Resume Viewer */}
            <div
              className="rounded-xl shadow-lg overflow-hidden"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <iframe
                src="/Chuan_Lin_Resume.pdf"
                className="w-full h-screen border-0"
                title="Chuan Lin Resume"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Main Content Layout */}
      <section
        className="lg:py-20 py-0 transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Combined Profile & Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div
                  className="rounded-xl shadow-lg p-6 transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    boxShadow:
                      "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
                  }}
                >
                  {/* Profile Image */}
                  <img
                    src="/Chuan.jpg"
                    alt="Chuan Lin - Software Engineer and AWS System Development Engineer"
                    className="w-full h-auto rounded-full shadow-md object-cover aspect-square"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Name and Title */}
                  <div className="mt-6 text-center">
                    <h3
                      className="text-xl font-bold mb-2 transition-colors duration-300"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Chuan Lin
                    </h3>
                    <p
                      className="transition-colors duration-300 mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Software Engineer
                    </p>
                    <p
                      className="text-sm transition-colors duration-300"
                      style={{ color: "var(--text-muted)" }}
                    >
                      New York, NY
                    </p>
                  </div>

                  {/* Social Links under Role */}
                  <div className="flex justify-center space-x-3 mt-4 mb-6">
                    <a
                      href="https://www.linkedin.com/in/chuan-lin-733416195/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-lg transition-all duration-200 group hover:scale-110"
                      style={{ backgroundColor: "var(--contact-bg)" }}
                      title="LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center p-3 rounded-lg transition-all duration-200 group hover:scale-110"
                      style={{ backgroundColor: "var(--contact-bg)" }}
                      title="GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>

                    <button
                      onClick={() => window.location.href = 'tel:347-463-1026'}
                      className="flex items-center justify-center p-3 rounded-lg transition-all duration-200 group hover:scale-110"
                      style={{ backgroundColor: "var(--contact-bg)" }}
                      title="Phone: 347-463-1026"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </button>

                    <button
                      onClick={() => window.location.href = 'mailto:chuan.lin.cl@gmail.com'}
                      className="flex items-center justify-center p-3 rounded-lg transition-all duration-200 group hover:scale-110"
                      style={{ backgroundColor: "var(--contact-bg)" }}
                      title="Email: chuan.lin.cl@gmail.com"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </button>
                  </div>


                </div>
              </div>
            </div>

            {/* Right Side - Tabbed Content - Hidden on mobile */}
            <div className="hidden lg:block lg:col-span-2">
              <div
                className="rounded-xl shadow-lg overflow-hidden transition-colors duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow:
                    "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
                }}
              >
                {/* Tab Navigation - Hidden on mobile since we have hamburger menu */}
                <div
                  className="hidden md:flex border-b transition-colors duration-300"
                  style={{ borderBottomColor: "var(--border-color)" }}
                  role="tablist"
                  aria-label="Portfolio sections"
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 focus:outline-none"
                      style={{
                        color:
                          activeTab === tab.id
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                        borderBottom:
                          activeTab === tab.id
                            ? "3px solid var(--accent-primary)"
                            : "none",
                        backgroundColor:
                          activeTab === tab.id
                            ? "var(--tab-active-bg)"
                            : "transparent",
                        fontWeight: activeTab === tab.id ? "600" : "500",
                      }}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={`panel-${tab.id}`}
                      id={`tab-${tab.id}`}
                      tabIndex={activeTab === tab.id ? 0 : -1}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div
                  className="relative transition-colors duration-300"
                  style={{ backgroundColor: "var(--bg-tertiary)" }}
                >
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`transition-all duration-500 ease-in-out ${
                        activeTab === tab.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4 pointer-events-none absolute inset-0"
                      }`}
                    >
                      <tab.component />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Only visible on mobile after scrolling */}
        <div id="contact" className="lg:hidden mt-8">
          <div
            className="rounded-xl shadow-lg p-6"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow:
                "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
            }}
          >
            <h3
              className="text-xl font-bold mb-6 text-center"
              style={{ color: "var(--text-primary)" }}
            >
              Get In Touch
            </h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const subject = formData.get('subject') as string;
                const message = formData.get('message') as string;

                const mailtoLink = `mailto:chuan.lin.cl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`
                )}`;

                window.location.href = mailtoLink;
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg-accent)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg-accent)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg-accent)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: "var(--bg-accent)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "#ffffff",
                  boxShadow: "var(--shadow-color) 0 4px 6px -1px",
                }}
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: "var(--border-color)" }}>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                Prefer direct contact?
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:347-463-1026"
                  className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "var(--contact-bg)",
                    color: "var(--text-primary)"
                  }}
                  title="Call: 347-463-1026"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </a>

                <a
                  href="mailto:chuan.lin.cl@gmail.com"
                  className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "var(--contact-bg)",
                    color: "var(--text-primary)"
                  }}
                  title="Email: chuan.lin.cl@gmail.com"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button - Now visible on all screen sizes */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: "var(--accent-primary)",
            color: "#ffffff",
            boxShadow: "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
          }}
          aria-label="Back to top"
          title="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
