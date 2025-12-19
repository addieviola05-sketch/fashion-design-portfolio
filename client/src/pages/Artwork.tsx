import { useState } from "react";
import { Link } from "wouter";

/**
 * Artwork Page - Artistic Creations
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function Artwork() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artworkImages = [
    { id: 1, src: "/artwork/60798937631__0B63A59E-56ED-4479-A10D-62313C1751F5.JPG" },
    { id: 2, src: "/artwork/IMG_3310.JPG" },
    { id: 3, src: "/artwork/IMG_3312.JPG" },
    { id: 4, src: "/artwork/IMG_3316.PNG" },
    { id: 5, src: "/artwork/IMG_3320.JPG" },
    { id: 6, src: "/artwork/IMG_3318.JPG" },
    { id: 7, src: "/artwork/785099955.531993.jpg" },
    { id: 8, src: "/artwork/785100093.605048.jpg" },
    { id: 9, src: "/artwork/785100131.715581.jpg" },
    { id: 10, src: "/artwork/785100157.760107.jpg" },
    { id: 11, src: "/artwork/IMG_7325.JPG" },
    { id: 12, src: "/artwork/782074544.504703.jpg" },
    { id: 13, src: "/artwork/783284835.816922.jpg" },
    { id: 14, src: "/artwork/IMG_7326.JPG" },
    { id: 15, src: "/artwork/IMG_7324.JPG" },
    { id: 16, src: "/artwork/IMG_7319.JPG" },
    { id: 17, src: "/artwork/IMG_7321.JPG" },
    { id: 18, src: "/artwork/IMG_7323.JPG" },
    { id: 19, src: "/artwork/IMG_7322.JPG" },
    { id: 20, src: "/artwork/IMG_0423.jpg" },
    { id: 21, src: "/artwork/IMG_0424.jpg" },
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
            <Link href="/moodboards">
              <a className="hover:text-accent transition-colors">Moodboards</a>
            </Link>
              <a className="hover:text-accent transition-colors">Digital</a>
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
            backgroundImage: 'url(/artwork/IMG_0423.jpg)',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="container text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4 text-white">
            Artwork
          </h1>
          <p className="text-lg text-white/80">
            Artistic explorations and creative expressions
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Artwork Gallery Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworkImages.map((artwork, index) => (
              <div
                key={artwork.id}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                onClick={() => setSelectedImage(artwork.src)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <img
                  src={artwork.src}
                  alt={`Artwork ${artwork.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-raleway font-semibold">
                    View
                  </span>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Artwork"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
