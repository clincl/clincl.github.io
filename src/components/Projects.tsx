"use client";

import { useState, useEffect } from "react";
import { portfolioContent } from "@/data/content";

export default function Projects() {
  const [isDark, setIsDark] = useState(false);

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

  const projects = portfolioContent.projects.items;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Projects
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore my recent work and technical implementations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Current Projects */}
          <div className="mb-20">
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                  boxShadow:
                    "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
                }}
              >
                <div
                  className="p-6"
                  style={{ backgroundColor: "var(--bg-accent)" }}
                >
                  <div className="mb-4">
                    <h4
                      className="text-2xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h4>
                  </div>
                  <h5
                    className="text-lg mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.subtitle}
                  </h5>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Simplified Mobile Layout: Better spacing and organization */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-6 lg:items-start">
                    {/* Project Image - Hidden on mobile to save space */}
                    <div className="hidden lg:block lg:col-span-3">
                      <div
                        className="rounded-lg p-4 text-center transition-colors duration-300"
                        style={{ backgroundColor: "var(--bg-accent)" }}
                      >
                        <div
                          className="text-sm transition-colors duration-300"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Project Image
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="lg:col-span-3">
                      <h6
                        className="font-semibold mb-2 sm:mb-3 transition-colors duration-300 text-sm sm:text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Technologies:
                      </h6>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded-md text-xs font-medium transition-colors duration-300"
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

                    {/* Key Features */}
                    <div className="lg:col-span-4">
                      <h6
                        className="font-semibold mb-2 sm:mb-3 transition-colors duration-300 text-sm sm:text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Key Features:
                      </h6>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="text-sm flex items-start transition-colors duration-300"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span
                              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-2"
                              style={{
                                backgroundColor: "var(--accent-primary)",
                              }}
                            ></span>
                            <span className="leading-tight text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="lg:col-span-2 flex flex-row gap-3 justify-center lg:justify-start lg:flex-col">
                      <a
                        href={project.links.github}
                        className="px-3 sm:px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200 text-xs sm:text-sm flex-1 lg:flex-none"
                        style={{
                          backgroundColor: "var(--accent-primary)",
                          color: "#ffffff",
                        }}
                      >
                        GitHub
                      </a>
                      <a
                        href={`/projects/${project.id}`}
                        className="px-3 sm:px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200 text-xs sm:text-sm flex-1 lg:flex-none"
                        style={{
                          border: "1px solid var(--border-color)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section - Commented out as requested */}
        {/*
        <div className="mt-16">
          <h3
            className="text-2xl font-bold mb-8 text-center transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            {portfolioContent.technologies.title}
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {portfolioContent.technologies.items.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center space-y-1 p-1 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow:
                    "var(--shadow-color) 0 1px 3px 0, var(--shadow-color) 0 1px 2px -1px",
                  animationDelay: `${index * 20}ms`,
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shadow-xs overflow-hidden transition-colors duration-300`}
                  style={{
                    backgroundColor: "var(--tech-icon-bg)",
                    border: "var(--tech-icon-border)",
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="w-3 h-3 object-contain"
                  />
                </div>
                <span
                  className="text-xs font-medium text-center leading-tight transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        */}
        </div>
      </div>
    </div>
  );
}
