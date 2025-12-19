import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * The Sorrow of Angels Collection Page
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: EB Garamond (headlines) + Poppins (body)
 */

export default function SorrowOfAngels() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Slide ${i + 1}`,
    description: "The Sorrow of Angels Collection",
    image: `/images/sorrow-of-angels/soa_page-${String(i + 1).padStart(2, '0')}.png`,
  }));

  const carouselImages = galleryItems.map((item) => item.image);

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
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">The Sorrow of Angels</h1>
          <p className="text-lg text-accent font-semibold mb-2">Mugler Inspired Day to Evening</p>
          <p className="text-foreground/70">An exploration in the recurrence theory</p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container max-w-5xl">
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden bg-secondary/50 border border-border">
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
              "The Sorrow of Angels" is a day-to-evening collection inspired by Halley's Comet and the recurrence theory. This collection explores the cyclical nature of celestial phenomena through structured silhouettes and intricate beading. Drawing from women's 90s power suiting, each piece channels architectural precision and otherworldly elegance, merging the sharp lines of Thierry Mugler with ethereal, beaded detailing that captures the luminescence of cosmic events.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Medieval chronicles described Halley's Comet as "the sorrow of angels"—a messenger from the divine, a symbol of endings and beginnings. This collection translates that cosmic narrative into wearable form, creating pieces that feel both monumental and intimate.
            </p>
          </div>

          {/* Key Themes */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-3">Design Inspiration</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✦ Halley's Comet orbital mechanics</li>
                <li>✦ Recurrence theory and cyclical time</li>
                <li>✦ Thierry Mugler's architectural tailoring</li>
                <li>✦ 1990s power suiting silhouettes</li>
                <li>✦ Celestial luminescence and beadwork</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-3">Construction Techniques</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✦ Hand-beaded embellishments</li>
                <li>✦ Structured tailoring and boning</li>
                <li>✦ Precision seaming and finishing</li>
                <li>✦ Layered construction for movement</li>
                <li>✦ Custom pattern making</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-cormorant font-bold mb-4 text-center">Full Collection Presentation</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />
          
          <div className="bg-secondary/50 rounded-lg border border-border overflow-hidden mb-8">
            <iframe
              src="https://docs.google.com/gview?url=https%3A%2F%2Ffiles.manuscdn.com%2Fuser_upload_by_module%2Fsession_file%2F310519663254082411%2FicYgOuFrxkFRRPGu.pdf&embedded=true"
              width="100%"
              height="800px"
              style={{ border: "none" }}
              title="The Sorrow of Angels Collection"
            />
          </div>
          
          <div className="text-center">
            <a
              href="https://files.manuscdn.com/user_upload_by_module/session_file/310519663254082411/icYgOuFrxkFRRPGu.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Download Full Collection PDF
            </a>
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
            Learn more about the conceptual process, construction details, or discuss custom collaborations.
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
