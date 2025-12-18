import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * The Poppy War Collection Page
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: EB Garamond (headlines) + Poppins (body)
 */

export default function PoppyWar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    "/collections/the-poppy-war/poppy-page-01.png",
    "/collections/the-poppy-war/poppy-page-02.png",
    "/collections/the-poppy-war/poppy-page-03.png",
    "/collections/the-poppy-war/poppy-page-04.png",
    "/collections/the-poppy-war/poppy-page-05.png",
    "/collections/the-poppy-war/poppy-page-06.png",
    "/collections/the-poppy-war/poppy-page-07.png",
    "/collections/the-poppy-war/poppy-page-08.png",
    "/collections/the-poppy-war/poppy-page-09.png",
    "/collections/the-poppy-war/poppy-page-10.png",
    "/collections/the-poppy-war/poppy-page-11.png",
    "/collections/the-poppy-war/poppy-page-12.png",
    "/collections/the-poppy-war/poppy-page-13.png",
    "/collections/the-poppy-war/poppy-page-14.png",
    "/collections/the-poppy-war/poppy-page-15.png",
    "/collections/the-poppy-war/poppy-page-16.png",
    "/collections/the-poppy-war/poppy-page-17.png",
    "/collections/the-poppy-war/poppy-page-18.png",
  ];

  const carouselImages = galleryImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/images/logo-monogram.png" alt="Addison Moore" className="h-12 w-auto" />
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/hand-drawn" className="hover:text-accent transition-colors">Hand Drawn</Link>
            <Link href="/sewing" className="hover:text-accent transition-colors">Sewing</Link>
            <Link href="/digital" className="hover:text-accent transition-colors">Digital</Link>
            <Link href="/artwork" className="hover:text-accent transition-colors">Artwork</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container">
          <Link href="/hand-drawn" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Back to Collections</span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">The Poppy War</h1>
          <p className="text-lg text-foreground/70 mb-6">
            A deconstructed androgynous utilitarianism collection exploring raw power and minimalist rebellion through architectural silhouettes and strategic deconstruction.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Deconstructed</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Androgynous</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Utilitarian</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Architectural</span>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="relative bg-secondary/30 rounded-lg border border-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src={carouselImages[currentSlide]}
              alt={`The Poppy War slide ${currentSlide + 1}`}
              className="w-full h-full object-contain"
            />
            
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background transition-colors rounded-full z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background transition-colors rounded-full z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 rounded-full text-sm font-semibold">
              {currentSlide + 1} / {carouselImages.length}
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-cormorant font-bold mb-12">Full Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border overflow-hidden hover:border-accent transition-colors group"
              >
                <div className="relative bg-secondary/50 overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-foreground/70">Slide {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container text-center text-foreground/60 text-sm">
          <p>© 2025 Addison Moore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
