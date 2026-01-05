import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section
        className="py-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <About />
      </section>
    </main>
  );
}
