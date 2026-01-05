import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BoulderingAIPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section
        className="py-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to Projects Link */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "var(--accent-primary)", color: "#ffffff", border: "1px solid var(--accent-primary)" }}
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
          <div
            className="rounded-xl shadow-lg p-8 transition-colors duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow:
                "var(--shadow-color) 0 10px 15px -3px, var(--shadow-color) 0 4px 6px -2px",
            }}
          >
            {/* Project Header */}
            <div className="text-center mb-8">
              <h1
                className="text-4xl font-bold mb-4 transition-colors duration-300"
                style={{ color: "var(--text-primary)" }}
              >
                🤖 Bouldering AI Analysis
              </h1>
              <p
                className="text-xl transition-colors duration-300"
                style={{ color: "var(--text-secondary)" }}
              >
                Climbing Technique Analyzer
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Live Demo
              </span>
            </div>

            {/* Project Description */}
            <div className="mb-8">
              <h2
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ color: "var(--text-primary)" }}
              >
                Project Overview
              </h2>
              <p
                className="text-lg leading-relaxed transition-colors duration-300"
                style={{ color: "var(--text-secondary)" }}
              >
                AI-powered platform for analyzing climbing techniques through
                video processing and real-time feedback.
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h2
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ color: "var(--text-primary)" }}
              >
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {["HTML/CSS", "JavaScript", "AI APIs", "Video Processing"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
                      style={{
                        backgroundColor: "var(--accent-secondary)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h2
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ color: "var(--text-primary)" }}
              >
                Key Features
              </h2>
              <ul className="space-y-2">
                {[
                  "Video upload and analysis",
                  "Real-time technique feedback",
                  "AI-powered movement detection",
                  "Progress tracking dashboard",
                  "Community feature integration",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mr-2 mt-1 flex-shrink-0"
                      style={{ backgroundColor: "var(--accent-primary)", color: "#ffffff", border: "1px solid var(--accent-primary)" }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Project Write-up Section */}
            <div className="mb-8">
              <h2
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ color: "var(--text-primary)" }}
              >
                Project Details
              </h2>
              <div
                className="p-6 rounded-lg border-2 border-dashed transition-colors duration-300"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--bg-tertiary)",
                }}
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Video Processing Pipeline
                  </h3>
                  <p>
                    The system implements a comprehensive video analysis
                    pipeline using computer vision algorithms to track climber
                    movements in real-time. HTML5 Canvas and WebGL provide
                    hardware-accelerated rendering for smooth video playback and
                    overlay graphics.
                  </p>

                  <h3 className="text-lg font-semibold">AI-Powered Analysis</h3>
                  <p>
                    Advanced machine learning models analyze climbing techniques
                    by detecting body positioning, movement patterns, and
                    technique efficiency. The AI provides instant feedback on
                    form, suggesting improvements for optimal climbing
                    performance.
                  </p>

                  <h3 className="text-lg font-semibold">
                    Key Challenges & Solutions
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Real-time Processing:</strong> Optimized computer
                      vision algorithms to achieve 30fps analysis on standard
                      hardware
                    </li>
                    <li>
                      <strong>Movement Detection:</strong> Implemented pose
                      estimation using TensorFlow.js for accurate body tracking
                    </li>
                    <li>
                      <strong>User Experience:</strong> Designed intuitive
                      visual feedback system with color-coded technique
                      indicators
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">Technical Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Real-time video analysis at 1080p resolution</li>
                    <li>
                      Multi-angle camera support for comprehensive technique
                      analysis
                    </li>
                    <li>
                      Progress tracking with historical performance metrics
                    </li>
                    <li>
                      Community features for sharing climbing tips and
                      techniques
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">Future Development</h3>
                  <p>
                    Upcoming features include mobile app integration, advanced
                    biomechanical analysis, and integration with climbing gym
                    equipment for automated workout tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "#ffffff",
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2"
                style={{
                  borderColor: "var(--accent-primary)",
                  color: "var(--accent-primary)",
                  backgroundColor: "transparent",
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
