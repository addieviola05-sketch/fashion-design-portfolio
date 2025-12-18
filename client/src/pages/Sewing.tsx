import { Link } from "wouter";

/**
 * Sewing Projects Page - Constructed Garments
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function Sewing() {
  const projects = [
    {
      id: 1,
      title: "Tailored Evening Gown",
      year: "2024",
      description:
        "A hand-constructed silk evening gown featuring intricate beadwork, custom tailoring, and couture finishing techniques. Each seam and detail was executed with precision.",
      materials: ["Silk Charmeuse", "Hand-Beaded Embellishments", "Custom Lining"],
      techniques: ["Hand Sewing", "Couture Finishing", "Beadwork", "Custom Tailoring"],
      imageUrl: "/images/costume-design.jpg",
    },
    {
      id: 2,
      title: "Structured Jacket Collection",
      year: "2024",
      description:
        "A series of tailored jackets exploring different construction methods, lapel styles, and fabric weights. Each piece demonstrates advanced pattern-making and garment construction skills.",
      materials: ["Wool Suiting", "Linen Blends", "Cotton Twill"],
      techniques: ["Pattern Making", "Interfacing", "Hand-Stitched Lapels", "Precision Tailoring"],
      imageUrl: "/images/hero-fashion.jpg",
    },
    {
      id: 3,
      title: "Costume Armor & Accessories",
      year: "2023",
      description:
        "Hand-crafted costume pieces including structured bodices, armor elements, and accessories. These pieces combine traditional tailoring with innovative construction methods.",
      materials: ["Specialty Fabrics", "Leather", "Metal Hardware"],
      techniques: ["Boning & Structuring", "Leatherworking", "Hardware Installation", "Armor Fabrication"],
      imageUrl: "/images/design-process.jpg",
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
            Sewing Projects
          </h1>
          <p className="text-lg text-foreground/70">
            Constructed garments and tailoring expertise
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

                  {/* Materials */}
                  <div className="mb-6">
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-3 uppercase tracking-wide">
                      Materials
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material) => (
                        <span
                          key={material}
                          className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-sm text-foreground/70"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Techniques */}
                  <div className="mb-8">
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-3 uppercase tracking-wide">
                      Techniques
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techniques.map((technique) => (
                        <span
                          key={technique}
                          className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-foreground"
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

      {/* Craftsmanship Section */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-center">
            Craftsmanship & Technique
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Every garment I construct is a testament to meticulous craftsmanship and technical
              expertise. I combine traditional tailoring techniques with innovative construction
              methods to create pieces that are both beautiful and functional.
            </p>

            <p>
              My sewing practice encompasses everything from basic seam construction to advanced
              couture techniques. I hand-finish details, create custom patterns, and work with
              specialty materials including leather, beads, and technical fabrics.
            </p>

            <p>
              Each project is approached with the understanding that construction quality directly
              impacts the final aesthetic and longevity of the garment. Precision, attention to
              detail, and respect for materials are at the heart of my work.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-cormorant font-bold mb-12 text-center">
            Core Sewing Skills
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pattern Making",
                description: "Creating custom patterns from sketches and measurements.",
              },
              {
                title: "Hand Sewing",
                description: "Precision hand-stitching for finishing and detail work.",
              },
              {
                title: "Tailoring",
                description: "Professional tailoring and garment fitting expertise.",
              },
              {
                title: "Couture Finishing",
                description: "High-end finishing techniques and embellishment work.",
              },
              {
                title: "Fabric Handling",
                description: "Expertise with various fabric types and their properties.",
              },
              {
                title: "Structural Design",
                description: "Creating structured garments with boning and interfacing.",
              },
            ].map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                <h3 className="text-xl font-cormorant font-bold mb-3">{skill.title}</h3>
                <p className="text-foreground/70">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">Commission Custom Work</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            I accept commissions for custom garments, alterations, and bespoke costume pieces.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
          >
            Request a Commission
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
