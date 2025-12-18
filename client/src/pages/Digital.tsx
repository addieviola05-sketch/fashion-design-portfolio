import { Link } from "wouter";

/**
 * Digital Projects Page - Digital Design Work
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function Digital() {
  const projects = [
    {
      id: 1,
      title: "3D Fashion Visualization",
      year: "2024",
      description:
        "Digital 3D models and visualizations of fashion designs. These projects showcase how designs move, drape, and interact with the body in three-dimensional space.",
      tools: ["3D Modeling", "Rendering", "Digital Visualization", "Motion Studies"],
      imageUrl: "/images/hero-fashion.jpg",
    },
    {
      id: 2,
      title: "Digital Collection Design",
      year: "2024",
      description:
        "A complete fashion collection designed entirely in digital format, from concept sketches to final technical specifications. Includes color palettes, fabric swatches, and production-ready files.",
      tools: ["Digital Design", "Color Theory", "Technical Specifications", "Production Files"],
      imageUrl: "/images/design-process.jpg",
    },
    {
      id: 3,
      title: "Interactive Lookbook",
      year: "2023",
      description:
        "An interactive digital lookbook showcasing a collection with zoom-able details, fabric information, and styling suggestions. Designed for both web and print distribution.",
      tools: ["Web Design", "Interactive Elements", "Digital Publishing", "UX/UI Design"],
      imageUrl: "/images/costume-design.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex justify-between items-center">
          <Link href="/">
            <a className="hover:opacity-80 transition-opacity">
              <img src="/images/logo-monogram.png" alt="Addison Moore" className="h-12 w-auto" />
            </a>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/">
              <a className="hover:text-accent transition-colors">Home</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-accent transition-colors">About</a>
            </Link>
            <Link href="/hand-drawn">
              <a className="hover:text-accent transition-colors">Hand Drawn</a>
            </Link>
            <Link href="/sewing">
              <a className="hover:text-accent transition-colors">Sewing</a>
            </Link>
            <Link href="/digital">
              <a className="hover:text-accent transition-colors">Digital</a>
            </Link>
            <Link href="/artwork">
              <a className="hover:text-accent transition-colors">Artwork</a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">
            Digital Projects
          </h1>
          <p className="text-lg text-foreground/70">
            3D modeling, digital design, and interactive experiences
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid md:grid-cols-2 gap-12 items-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-lg h-96 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="mb-4">
                    <span className="text-accent font-raleway text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="text-4xl font-cormorant font-bold mb-4">{project.title}</h2>
                  <div className="w-12 h-1 bg-accent mb-6" />

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools & Technologies */}
                  <div className="mb-8">
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-3 uppercase tracking-wide">
                      Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="inline-flex items-center gap-2 px-6 py-2 border border-accent text-accent rounded-lg font-raleway font-semibold hover:bg-accent/10 transition-colors">
                    View Details <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools & Skills */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-cormorant font-bold mb-12 text-center">
            Digital Tools & Skills
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "3D Modeling & Rendering",
                skills: ["3D Garment Visualization", "Digital Prototyping", "Texture Mapping", "Lighting & Rendering"],
              },
              {
                category: "Digital Design",
                skills: ["Vector Illustration", "Color Studies", "Digital Sketching", "Pattern Design"],
              },
              {
                category: "Web & Interactive",
                skills: ["Web Design", "Interactive Lookbooks", "Digital Publishing", "User Experience Design"],
              },
              {
                category: "Production & Technical",
                skills: ["Technical Specifications", "Production Files", "Color Management", "File Optimization"],
              },
            ].map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <h3 className="text-xl font-cormorant font-bold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="text-foreground/70 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">
            Digital Collaboration Opportunities
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            I'm available for digital design projects, 3D visualization work, and interactive
            design collaborations.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Digital Project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/50 border-t border-border text-center text-foreground/60 text-sm">
        <p>© 2025 Addison Moore. All rights reserved.</p>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
