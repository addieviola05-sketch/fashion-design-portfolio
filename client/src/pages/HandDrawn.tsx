import { Link } from "wouter";

/**
 * Hand Drawn / Rendered Collections Page
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function HandDrawn() {
  const collections = [
    {
      id: 1,
      title: "Victorian Revival",
      year: "2024",
      description:
        "A collection of hand-drawn costume designs inspired by Victorian era silhouettes and embellishments. Features detailed technical flats and rendered illustrations.",
      techniques: ["Hand Drawing", "Watercolor", "Technical Flats", "Digital Rendering"],
      imageUrl: "/images/hero-fashion.jpg",
    },
    {
      id: 2,
      title: "Contemporary Minimalism",
      year: "2024",
      description:
        "Exploring modern fashion through minimalist design sketches. This collection emphasizes clean lines, innovative silhouettes, and sustainable fabric choices.",
      techniques: ["Pencil Sketching", "Digital Design", "Color Studies", "Pattern Exploration"],
      imageUrl: "/images/design-process.jpg",
    },
    {
      id: 3,
      title: "Fantasy Realm Concepts",
      year: "2023",
      description:
        "Conceptual designs for fantasy and sci-fi costumes. Highly detailed renderings showcasing elaborate armor, flowing garments, and imaginative silhouettes.",
      techniques: ["Digital Illustration", "3D Concept Art", "Color Theory", "Texture Studies"],
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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">
            Hand Drawn & Rendered Collections
          </h1>
          <p className="text-lg text-foreground/70">
            Sketches, technical drawings, and digital renderings
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-20">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
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
                    src={collection.imageUrl}
                    alt={collection.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="mb-4">
                    <span className="text-accent font-raleway text-sm font-semibold">
                      {collection.year}
                    </span>
                  </div>

                  <h2 className="text-4xl font-cormorant font-bold mb-4">{collection.title}</h2>
                  <div className="w-12 h-1 bg-accent mb-6" />

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Techniques */}
                  <div className="mb-8">
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-3 uppercase tracking-wide">
                      Techniques & Methods
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {collection.techniques.map((technique) => (
                        <span
                          key={technique}
                          className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-sm text-foreground/70"
                        >
                          {technique}
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

      {/* Design Process Section */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-center">My Design Process</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-cormorant font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-cormorant font-bold mb-2">Research & Inspiration</h3>
                <p className="text-foreground/70">
                  I begin by researching the subject matter, whether historical periods, character
                  backgrounds, or contemporary trends. Mood boards and reference collections guide
                  the visual direction.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-cormorant font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-cormorant font-bold mb-2">Sketching & Ideation</h3>
                <p className="text-foreground/70">
                  Hand-drawn sketches allow me to explore multiple silhouettes and design
                  variations quickly. This phase is about creative freedom and experimentation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-cormorant font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-cormorant font-bold mb-2">Technical Development</h3>
                <p className="text-foreground/70">
                  Selected designs are refined into technical flats with precise measurements,
                  seam placements, and construction details. Digital tools assist in this phase.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-cormorant font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-cormorant font-bold mb-2">Rendering & Presentation</h3>
                <p className="text-foreground/70">
                  Final designs are rendered with color, texture, and detail to communicate the
                  vision clearly. This includes fabric swatches and material specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">Interested in Collaboration?</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            I'm available for custom design projects, consulting, and creative partnerships.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Project
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
