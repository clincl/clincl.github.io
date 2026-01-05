"use client";

import { useState } from "react";
import { portfolioContent } from "@/data/content";

export default function About() {
  const [showCopied, setShowCopied] = useState(false);

  const handleContactClick = (type: 'phone' | 'email') => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (type === 'phone') {
      if (isMobile) {
        // Mobile: use tel: link
        window.location.href = `tel:${portfolioContent.contact.phone}`;
      } else {
        // Desktop: copy to clipboard
        navigator.clipboard.writeText(portfolioContent.contact.phone).then(() => {
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
        });
      }
    } else if (type === 'email') {
      if (isMobile) {
        // Mobile: use mailto: link
        window.location.href = `mailto:${portfolioContent.contact.email}`;
      } else {
        // Desktop: copy to clipboard
        navigator.clipboard.writeText(portfolioContent.contact.email).then(() => {
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
        });
      }
    }
  };
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Professional Summary */}
          <div
            className="p-8 rounded-xl shadow-lg mb-8"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow:
                "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {portfolioContent.summary.title}
            </h3>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {portfolioContent.summary.content}
            </p>
          </div>

          {/* Core Skills */}
          <div
            className="p-8 rounded-xl shadow-lg mb-8"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow:
                "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {portfolioContent.skills.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(portfolioContent.skills.categories).map(([key, category]) => (
                <div key={key}>
                  <h4
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                            key === 'languages' ? 'bg-blue-500' :
                            key === 'backend' ? 'bg-green-500' : 'bg-orange-500'
                          }`}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div
            className="p-8 rounded-xl shadow-lg mb-8"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow:
                "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
            }}
          >
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              {portfolioContent.experience.title}
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: "var(--border-color)" }}
              ></div>

              <div className="space-y-8">
                {portfolioContent.experience.roles.map((role, index) => (
                  <div key={role.id} className="relative flex items-start space-x-6">
                    <div
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor:
                          role.status === "Current"
                            ? "var(--accent-primary)"
                            : index === 1
                            ? "var(--accent-secondary)"
                            : "var(--accent-tertiary)",
                        boxShadow:
                          "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
                      }}
                    >
                      <img
                        src={role.logo}
                        alt={role.company}
                        className="w-6 h-6"
                        style={{ filter: role.logo.includes("aws") ? "var(--aws-logo-filter, none)" : "none" }}
                      />
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-4 mb-2">
                        <h4
                          className="text-xl font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {role.title}
                        </h4>
                        {role.status === "Current" && (
                          <span
                            className="px-3 py-1 text-sm font-medium rounded-full"
                            style={{
                              backgroundColor: "var(--current-badge-bg)",
                              color: "var(--current-badge-text)",
                            }}
                          >
                            {role.status}
                          </span>
                        )}
                      </div>
                      <p className="mb-3" style={{ color: "var(--text-muted)" }}>
                        {role.period}
                      </p>
                      <p
                        className="leading-relaxed mb-4"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {role.description}
                      </p>

                      {/* Achievements */}
                      {role.achievements && role.achievements.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {role.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 mt-2"
                                  style={{ backgroundColor: "var(--accent-primary)" }}
                                ></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {role.technologies && role.technologies.length > 0 && (
                        <div>
                          <h5 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                            Technologies:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {role.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 rounded-md text-xs font-medium"
                                style={{
                                  backgroundColor: "var(--bg-accent)",
                                  color: "var(--text-secondary)",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className="p-8 rounded-xl shadow-lg"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow:
                "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {portfolioContent.contact.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Phone */}
              <button
                onClick={() => handleContactClick('phone')}
                className="block w-full p-4 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer relative"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  border: "1px solid var(--border-color)"
                }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-xl">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-medium transition-colors duration-300"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {portfolioContent.contact.phone}
                    </div>
                  </div>
                </div>
                {showCopied && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded">
                    Copied!
                  </div>
                )}
              </button>

              {/* Email */}
              <button
                onClick={() => handleContactClick('email')}
                className="block w-full p-4 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer relative"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  border: "1px solid var(--border-color)"
                }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-xl">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-medium transition-colors duration-300"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {portfolioContent.contact.email}
                    </div>
                  </div>
                </div>
                {showCopied && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded">
                    Copied!
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Interests */}
          {/* <div
            className="p-8 rounded-xl shadow-lg"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow:
                "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Beyond Code
            </h3>
          </div> */}
        </div>
      </div>
    </section>
  );
}
