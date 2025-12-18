import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FallOfTheRomanovs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "/collections/fall-of-the-romanovs/page-1.png",
    "/collections/fall-of-the-romanovs/page-2.png",
    "/collections/fall-of-the-romanovs/page-3.png",
    "/collections/fall-of-the-romanovs/page-4.png",
    "/collections/fall-of-the-romanovs/page-5.png",
  ];

  const galleryImages = [
    "/collections/fall-of-the-romanovs/page-1.png",
    "/collections/fall-of-the-romanovs/page-2.png",
    "/collections/fall-of-the-romanovs/page-3.png",
    "/collections/fall-of-the-romanovs/page-4.png",
    "/collections/fall-of-the-romanovs/page-5.png",
    "/collections/fall-of-the-romanovs/page-6.png",
    "/collections/fall-of-the-romanovs/page-7.png",
    "/collections/fall-of-the-romanovs/page-8.png",
    "/collections/fall-of-the-romanovs/page-9.png",
    "/collections/fall-of-the-romanovs/page-10.png",
    "/collections/fall-of-the-romanovs/page-11.png",
    "/collections/fall-of-the-romanovs/page-12.png",
    "/collections/fall-of-the-romanovs/page-13.png",
    "/collections/fall-of-the-romanovs/page-14.png",
    "/collections/fall-of-the-romanovs/page-15.png",
  ];

  // Auto-play carousel
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
          <Link href="/">
            <div className="hover:opacity-80 transition-opacity cursor-pointer">
              <img src="/images/logo-monogram.png" alt="Addison Moore" className="h-12 w-auto" />
            </div>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/">
              <div className="hover:text-accent transition-colors cursor-pointer">Home</div>
            </Link>
            <Link href="/about">
              <div className="hover:text-accent transition-colors cursor-pointer">About</div>
            </Link>
            <Link href="/hand-drawn">
              <div className="hover:text-accent transition-colors cursor-pointer">Hand Drawn</div>
            </Link>
            <Link href="/sewing">
              <div className="hover:text-accent transition-colors cursor-pointer">Sewing</div>
            </Link>
            <Link href="/digital">
              <div className="hover:text-accent transition-colors cursor-pointer">Digital</div>
            </Link>
            <Link href="/artwork">
              <div className="hover:text-accent transition-colors cursor-pointer">Artwork</div>
            </Link>
            <Link href="/contact">
              <div className="hover:text-accent transition-colors cursor-pointer">Contact</div>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container">
          <Link href="/hand-drawn">
            <div className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors cursor-pointer mb-6">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Back to Collections</span>
            </div>
          </Link>
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Fall of the Romanovs</h1>
          <p className="text-lg text-foreground/70 mb-6">
            A day into evening collection exploring the contradicting aesthetics of Russian monarchy's decadence and the transition into Soviet brutalism.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Historical Reference</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Decadence</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Soviet Brutalism</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Transition</span>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="relative bg-secondary/30 rounded-lg border border-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src={carouselImages[currentSlide]}
              alt={`Fall of the Romanovs slide ${currentSlide + 1}`}
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
