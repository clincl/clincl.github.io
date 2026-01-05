import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section
        className="py-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <Projects />
      </section>
    </main>
  );
}
