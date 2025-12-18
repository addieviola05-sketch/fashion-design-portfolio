import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OppositeDesigner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    "/collections/opposite-designer/cardin-page-01.png",
    "/collections/opposite-designer/cardin-page-02.png",
    "/collections/opposite-designer/cardin-page-03.png",
    "/collections/opposite-designer/cardin-page-04.png",
    "/collections/opposite-designer/cardin-page-05.png",
    "/collections/opposite-designer/cardin-page-06.png",
    "/collections/opposite-designer/cardin-page-07.png",
    "/collections/opposite-designer/cardin-page-08.png",
    "/collections/opposite-designer/cardin-page-09.png",
    "/collections/opposite-designer/cardin-page-10.png",
    "/collections/opposite-designer/cardin-page-11.png",
    "/collections/opposite-designer/cardin-page-12.png",
    "/collections/opposite-designer/cardin-page-13.png",
    "/collections/opposite-designer/cardin-page-14.png",
    "/collections/opposite-designer/cardin-page-15.png",
    "/collections/opposite-designer/cardin-page-16.png",
    "/collections/opposite-designer/cardin-page-17.png",
    "/collections/opposite-designer/cardin-page-18.png",
    "/collections/opposite-designer/cardin-page-19.png",
    "/collections/opposite-designer/cardin-page-20.png",
    "/collections/opposite-designer/cardin-page-21.png",
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

      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container">
          <Link href="/hand-drawn" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Back to Collections</span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Opposite Designer</h1>
          <p className="text-lg text-foreground/70 mb-6">
            Pierre Cardin X Edmond Dantes: A fusion of Space Age geometry and calculated revenge, merging futuristic modular tailoring with militaristic fencing aesthetics.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Space Age</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Geometric</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Modular</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">Futuristic</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="relative bg-secondary/30 rounded-lg border border-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src={carouselImages[currentSlide]}
              alt={`Opposite Designer slide ${currentSlide + 1}`}
              className="w-full h-full object-contain"
            />
            
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

            <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 rounded-full text-sm font-semibold">
              {currentSlide + 1} / {carouselImages.length}
            </div>
          </div>
        </div>
      </section>

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

      <footer className="border-t border-border py-12">
        <div className="container text-center text-foreground/60 text-sm">
          <p>© 2025 Addison Moore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
