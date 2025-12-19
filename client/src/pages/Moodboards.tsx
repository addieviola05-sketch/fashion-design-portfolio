import { useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";

/**
 * Moodboards Page - Design Inspiration & Visual References
 * Showcases mood boards and design inspiration for collections
 */

export default function Moodboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const moodboards = [
    {
      id: 1,
      title: "Mood Board 1",
      image: "/images/moodboards/Screenshot_2025-12-19_at_2.34.35 AM.png",
    },
    {
      id: 2,
      title: "Mood Board 2",
      image: "/images/moodboards/Screenshot_2025-12-19_at_2.34.50 AM.png",
    },
    {
      id: 3,
      title: "Mood Board 3",
      image: "/images/moodboards/Screenshot_2025-12-19_at_2.35.07 AM.png",
    },
    {
      id: 4,
      title: "Mood Board 4",
      image: "/images/moodboards/Screenshot_2025-12-19_at_2.35.28 AM.png",
    },
    {
      id: 5,
      title: "Mood Board 5",
      image: "/images/moodboards/Screenshot_2025-12-19_at_2.35.54 AM.png",
    },
    {
      id: 6,
      title: "Mood Board 6",
      image: "/images/moodboards/Screenshot_2025-12-19_at_2.36.32 AM.png",
    },
    {
      id: 7,
      title: "Mood Board 7",
      image: "/images/moodboards/Screenshot_2025-12-19_at_2.38.12 AM.png",
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
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/about" className="hover:text-accent transition-colors">About</a>
            <a href="/hand-drawn" className="hover:text-accent transition-colors">Hand Drawn</a>
            <a href="/sewing" className="hover:text-accent transition-colors">Sewing</a>
            <a href="/digital" className="hover:text-accent transition-colors">Digital</a>
            <a href="/moodboards" className="hover:text-accent transition-colors">Moodboards</a>
            <a href="/artwork" className="hover:text-accent transition-colors">Artwork</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Mood Boards</h1>
          <p className="text-lg text-accent font-semibold mb-2">Design Inspiration & Visual References</p>
          <p className="text-foreground/70">Exploring color palettes, textures, and conceptual themes</p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Moodboards Gallery */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-12">
            {moodboards.map((board) => (
              <div
                key={board.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(board.image)}
              >
                <div className="relative overflow-hidden rounded-lg bg-secondary/50 border border-border">
                  <img
                    src={board.image}
                    alt={board.title}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-cormorant font-bold mt-4">{board.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Mood board"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background text-foreground rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-secondary/50 border-t border-border text-center text-foreground/60 text-sm">
        <p>© 2025 Addison Moore. All rights reserved.</p>
      </footer>
    </div>
  );
}
