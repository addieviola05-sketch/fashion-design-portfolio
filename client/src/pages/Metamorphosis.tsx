import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Metamorphosis Collection Page
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: EB Garamond (headlines) + Poppins (body)
 */

export default function Metamorphosis() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Title Slide",
      description: "Collection introduction with lepidopteran transformation inspiration",
      image: "/images/metamorphosis/001.webp",
    },
    {
      id: 2,
      title: "About Metamorphosis",
      description: "Conceptual foundation exploring biological transformation and renewal",
      image: "/images/metamorphosis/002.webp",
    },
    {
      id: 3,
      title: "Aspects of Metamorphosis",
      description: "Six stages of butterfly lifecycle: Egg, Larvae, Moulting, Chrysalis, Imago, Decay",
      image: "/images/metamorphosis/003.webp",
    },
    {
      id: 4,
      title: "Mood & Inspiration",
      description: "Visual references and design inspiration palette",
      image: "/images/metamorphosis/004.webp",
    },
    {
      id: 5,
      title: "Customer Profile",
      description: "Target wearer and styling narrative",
      image: "/images/metamorphosis/005.webp",
    },
  ];

  const carouselImages = galleryItems.map((item) => item.image);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

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
          <Link href="/hand-drawn">
            <a className="hover:opacity-80 transition-opacity">
              <img src="/images/logo-monogram.png" alt="Addison Moore" className="h-12 w-auto" />
            </a>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/">
              <a className="hover:text-accent transition-colors">Home</a>
            </Link>
            <Link href="/hand-drawn">
              <a className="hover:text-accent transition-colors">Back to Collections</a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Metamorphosis</h1>
          <p className="text-lg text-accent font-semibold mb-2">Lepidopteran Transformation & Vulnerability</p>
          <p className="text-foreground/70">Stella McCartney-influenced collection exploring growth, decay, and renewal</p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container max-w-5xl">
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative rounded-lg overflow-hidden bg-secondary/50 border border-border" style={{aspectRatio: '16 / 9'}}>
              <img
                src={carouselImages[currentSlide]}
                alt="Collection slide"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-background/80 hover:bg-background text-accent rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-background/80 hover:bg-background text-accent rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-accent w-8" : "bg-border w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Description */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h2 className="text-4xl font-cormorant font-bold mb-4">Collection Overview</h2>
            <div className="w-8 h-1 bg-accent mb-8" />
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              "Metamorphosis" interprets the stages of lepidopteran transformation through a chic, Stella McCartney–influenced lens. This collection pairs clean, elongated silhouettes and restrained tailoring with layered draping, pleating, and distressed textures inspired by shedding skin, the fragility of insect wings, and the containment of growth.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Each piece explores themes of vulnerability, transformation, and the beauty found in decay. The collection moves through six distinct phases—Egg, Larvae, Moulting, Chrysalis, Imago, and Decay—translating the biological metamorphosis into wearable narratives of growth, shedding, and renewal.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Metamorphosis is not change for its own sake, but the proof that nothing remains static—that becoming is the most human act of all.
            </p>
          </div>

          {/* Key Themes */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-3">Design Inspiration</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✦ Lepidopteran lifecycle stages</li>
                <li>✦ Stella McCartney's aesthetic</li>
                <li>✦ Distressed and layered textiles</li>
                <li>✦ Biological transformation</li>
                <li>✦ Vulnerability and growth</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-3">Construction Techniques</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✦ Clean, elongated silhouettes</li>
                <li>✦ Layered draping and pleating</li>
                <li>✦ Distressed textile treatments</li>
                <li>✦ Restrained tailoring</li>
                <li>✦ Intentional asymmetry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-cormorant font-bold mb-4 text-center">Collection Gallery</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="group">
                <div className="relative overflow-hidden rounded-lg h-80 bg-secondary/50 border border-border mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-cormorant font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container text-center">
          <h3 className="text-3xl font-cormorant font-bold mb-4">Interested in This Collection?</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Explore the six stages of transformation and discuss custom collaborations inspired by metamorphosis.
          </p>
          <a
            href="mailto:addison.ogcoaicloud.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/50 border-t border-border text-center text-foreground/60 text-sm">
        <p>© 2025 Addison Moore. All rights reserved.</p>
      </footer>
    </div>
  );
}
