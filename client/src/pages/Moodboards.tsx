import { Link } from "wouter";

/**
 * Moodboards Page - Design Inspiration and Aesthetic Collections
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function Moodboards() {
  const moodboards = [
    {
      id: 1,
      title: "The Secret Garden",
      year: "2025",
      description:
        "Inspired by Frances Hodgson Burnett's classic novel, this moodboard explores lush florals, romantic botanicals, and the mystery of hidden gardens. Rich jewel tones, delicate florals, and vintage botanical illustrations create an enchanted aesthetic.",
      colors: ["#2D5016", "#8B7355", "#D4AF37", "#E8D5C4", "#4A7C59"],
      imageUrl: "/images/design-process.jpg",
    },
    {
      id: 2,
      title: "Don't Lose Your Head",
      year: "2025",
      description:
        "A Tudor-inspired elevated grunge collection blending historical opulence with modern edge. Dark moody tones, ornate details, and rebellious silhouettes create a collection that challenges conventional beauty standards.",
      colors: ["#1a1a1a", "#8B0000", "#D4AF37", "#4A4A4A", "#2F4F4F"],
      imageUrl: "/images/costume-design.jpg",
    },
    {
      id: 3,
      title: "Autumn Whispers",
      year: "2024",
      description:
        "Warm earth tones, cozy textures, and the melancholy beauty of fall. This moodboard captures the essence of transitional seasons with burnt oranges, deep browns, and soft neutrals.",
      colors: ["#8B4513", "#D2691E", "#CD853F", "#DEB887", "#F5DEB3"],
      imageUrl: "/images/hero-fashion.jpg",
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
            <Link href="/moodboards">
              <a className="hover:text-accent transition-colors">Moodboards</a>
            </Link>
            <Link href="/artwork">
              <a className="hover:text-accent transition-colors">Artwork</a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center border-b border-border overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(135deg, #2D5016 0%, #8B7355 50%, #D4AF37 100%)',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="container text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4 text-white">
            Moodboards
          </h1>
          <p className="text-lg text-white/80">
            Design inspiration and aesthetic collections
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Moodboards Grid */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-32">
            {moodboards.map((moodboard, index) => (
              <div
                key={moodboard.id}
                className="grid md:grid-cols-2 gap-12 items-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Color Palette */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div>
                    <span className="text-accent font-raleway text-sm font-semibold">
                      {moodboard.year}
                    </span>
                    <h2 className="text-4xl font-cormorant font-bold mb-4 mt-2">{moodboard.title}</h2>
                    <div className="w-12 h-1 bg-accent mb-6" />
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {moodboard.description}
                    </p>
                  </div>

                  {/* Color Swatches */}
                  <div>
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-4 uppercase tracking-wide">
                      Color Palette
                    </h3>
                    <div className="grid grid-cols-5 gap-3">
                      {moodboard.colors.map((color, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div
                            className="w-full aspect-square rounded-lg border border-border shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs text-foreground/60 mt-2 font-mono">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-lg h-96 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <img
                    src={moodboard.imageUrl}
                    alt={moodboard.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-center">
            Design Philosophy
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Moodboards are the foundation of my design process. They capture the essence, emotion, and aesthetic direction of each collection before a single sketch is drawn.
            </p>

            <p>
              Through careful curation of colors, textures, imagery, and inspiration, moodboards guide every design decision—from fabric selection to silhouette development. They serve as visual narratives that communicate the story and spirit of each collection.
            </p>

            <p>
              These collections represent my design philosophy: intentional, thoughtful, and deeply rooted in storytelling. Each moodboard is a journey into a specific aesthetic world, inviting viewers to explore the themes and inspirations that drive my work.
            </p>
          </div>
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
