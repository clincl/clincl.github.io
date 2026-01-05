import Navbar from "@/components/Navbar";

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section
        className="py-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
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
      </section>
    </main>
  );
}
