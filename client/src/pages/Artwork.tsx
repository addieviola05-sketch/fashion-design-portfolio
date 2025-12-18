import { Link } from "wouter";

/**
 * Artwork Page - Artistic Creations
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function Artwork() {
  const artworks = [
    {
      id: 1,
      title: "Fabric Studies Series",
      year: "2024",
      description:
        "A collection of artistic explorations of fabric, texture, and color. These pieces investigate the visual and tactile qualities of different materials through painting, collage, and mixed media.",
      medium: ["Watercolor", "Collage", "Mixed Media"],
      imageUrl: "/images/hero-fashion.jpg",
    },
    {
      id: 2,
      title: "Character Portraits",
      year: "2024",
      description:
        "Artistic portraits exploring character development and identity through costume and adornment. These pieces blend portraiture with fashion illustration.",
      medium: ["Acrylic", "Ink", "Digital Painting"],
      imageUrl: "/images/design-process.jpg",
    },
    {
      id: 3,
      title: "Textile Art Installation",
      year: "2023",
      description:
        "A large-scale textile art installation combining fabric, thread, and found objects. This immersive piece explores themes of identity, memory, and transformation.",
      medium: ["Textile", "Installation", "Found Objects"],
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
            Artwork
          </h1>
          <p className="text-lg text-foreground/70">
            Artistic explorations and creative expressions
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-20">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
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
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="mb-4">
                    <span className="text-accent font-raleway text-sm font-semibold">
                      {artwork.year}
                    </span>
                  </div>

                  <h2 className="text-4xl font-cormorant font-bold mb-4">{artwork.title}</h2>
                  <div className="w-12 h-1 bg-accent mb-6" />

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {artwork.description}
                  </p>

                  {/* Medium */}
                  <div className="mb-8">
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-3 uppercase tracking-wide">
                      Medium
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {artwork.medium.map((med) => (
                        <span
                          key={med}
                          className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-sm text-foreground/70"
                        >
                          {med}
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

      {/* Artistic Philosophy */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-center">
            Artistic Philosophy
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Beyond fashion and costume design, I engage in artistic practice that explores
              themes of identity, transformation, and the relationship between body and garment.
              These artworks are investigations into color, texture, and form.
            </p>

            <p>
              My artistic practice is deeply connected to my design work. The experimentation and
              creative freedom of fine art inform my approach to fashion and costume design,
              allowing me to push boundaries and explore new possibilities.
            </p>

            <p>
              Through various media—painting, collage, textile work, and installation—I explore
              the intersection of wearable art and fine art, creating pieces that challenge
              conventional notions of fashion and beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibition & Collaboration */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-center">
            Exhibition & Collaboration
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-8">
            <div className="p-8 bg-secondary/50 rounded-lg border border-border">
              <h3 className="text-2xl font-cormorant font-bold mb-3">Gallery Exhibitions</h3>
              <p className="text-foreground/70 mb-4">
                My artwork has been exhibited in galleries and art spaces, exploring the
                intersection of fashion, textile art, and fine art.
              </p>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 text-accent font-raleway font-semibold hover:gap-3 transition-all"
              >
                Inquire About Exhibitions <span>→</span>
              </a>
            </div>

            <div className="p-8 bg-secondary/50 rounded-lg border border-border">
              <h3 className="text-2xl font-cormorant font-bold mb-3">Collaborative Projects</h3>
              <p className="text-foreground/70 mb-4">
                I'm interested in collaborative projects with other artists, designers, and
                cultural institutions exploring themes of fashion, identity, and art.
              </p>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 text-accent font-raleway font-semibold hover:gap-3 transition-all"
              >
                Discuss Collaboration <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">
            Interested in My Artwork?
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            I'm available for commissions, exhibitions, and collaborative art projects.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
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
