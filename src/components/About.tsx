import { portfolioContent } from "@/data/content";

export default function About() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            About
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div
            className="p-8 rounded-xl mb-1"
            style={{
              backgroundColor: "var(--card-bg)",
            }}
          >
            <p
              className="text-lg leading-relaxed mb-6 font-light italic"
              style={{ color: "var(--text-primary)" }}
            >
              Hey there! I'm Chuan, a software engineer at AWS. When I'm not
              coding, you'll find me climbing rocks or taking photos.
            </p>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I started my career as a Cloud Support Associate/Engineer on the
              database team at AWS before transitioning to my latest role as a
              full-stack developer at AWS, where I worked with React,
              Typescript, Node.JS, and Python.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Outside of work, I enjoy bouldering, photography, and board games.
            </p>
          </div>

          {/* Experience */}
          <div
            className="p-8 rounded-xl mb-8"
            style={{
              backgroundColor: "var(--card-bg)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
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
                  <div
                    key={role.id}
                    className="relative flex items-start space-x-6"
                  >
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
                        style={{
                          filter: role.logo.includes("aws")
                            ? "var(--aws-logo-filter, none)"
                            : "none",
                        }}
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
                      <p
                        className="mb-3"
                        style={{ color: "var(--text-muted)" }}
                      >
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
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "var(--text-primary)" }}
                          >
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
                                  style={{
                                    backgroundColor: "var(--accent-primary)",
                                  }}
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
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: "var(--text-primary)" }}
                          >
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
        </div>
      </div>
    </div>
  );
}
