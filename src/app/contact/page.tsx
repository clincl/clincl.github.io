'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:chuan.lin.cl@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`

    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section
        className="py-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Get In Touch
            </h1>
            <p
              className="text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="rounded-xl shadow-lg p-8"
              style={{
                backgroundColor: "var(--card-bg)",
                boxShadow: "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
              }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
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
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
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
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div
                className="rounded-xl shadow-lg p-8"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
                }}
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Direct Contact
                </h2>

                <div className="space-y-4">
                  <a
                    href="tel:347-463-1026"
                    className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "var(--contact-bg)",
                      color: "var(--text-primary)"
                    }}
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm opacity-75">347-463-1026</div>
                    </div>
                  </a>

                  <a
                    href="mailto:chuan.lin.cl@gmail.com"
                    className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "var(--contact-bg)",
                      color: "var(--text-primary)"
                    }}
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm opacity-75">chuan.lin.cl@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="rounded-xl shadow-lg p-8"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
                }}
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Connect With Me
                </h2>

                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/chuan-lin-733416195/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{ backgroundColor: "var(--contact-bg)" }}
                    title="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/clincl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{ backgroundColor: "var(--contact-bg)" }}
                    title="GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
