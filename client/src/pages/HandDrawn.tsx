import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Hand Drawn Collections Page
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: EB Garamond (headlines) + Poppins (body)
 */

export default function HandDrawn() {
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({});
  const [autoPlayIndices, setAutoPlayIndices] = useState<Record<string, number>>({});

  const getCarouselIndex = (collectionId: string) => autoPlayIndices[collectionId] ?? carouselIndices[collectionId] ?? 0;

  const nextCarouselSlide = (e: React.MouseEvent, collectionId: string, totalSlides: number) => {
    e.preventDefault();
    setCarouselIndices((prev) => ({
      ...prev,
      [collectionId]: ((prev[collectionId] || 0) + 1) % totalSlides,
    }));
  };

  const prevCarouselSlide = (e: React.MouseEvent, collectionId: string, totalSlides: number) => {
    e.preventDefault();
    setCarouselIndices((prev) => ({
      ...prev,
      [collectionId]: ((prev[collectionId] || 0) - 1 + totalSlides) % totalSlides,
    }));
  };

  const collections = [
    {
      id: "sorrow-of-angels",
      title: "The Sorrow of Angels",
      tagline: "Mugler Inspired Day to Evening",
      description: "A day to evening collection inspired by Halley's Comet and recurrence theory. This collection explores the cyclical nature of celestial phenomena through structured silhouettes and intricate beading. Drawing from women's 90s power suiting, each piece channels architectural precision and otherworldly elegance, merging the sharp lines of Thierry Mugler with ethereal, beaded detailing that captures the luminescence of cosmic events.",
      inspiration: ["Halley's Comet", "Recurrence Theory", "Thierry Mugler", "90s Power Suiting", "Beadwork"],
      carouselImages: [
        "/images/sorrow-of-angels/001.webp",
        "/images/sorrow-of-angels/002.webp",
        "/images/sorrow-of-angels/003.webp",
        "/images/sorrow-of-angels/004.webp",
        "/images/sorrow-of-angels/005.webp",
      ],
    },
    {
      id: "solar-synthesis",
      title: "Solar Synthesis",
      tagline: "Solarpunk Architecture & Harmony",
      description: "A solarpunk-inspired collection that merges tailored silhouettes with fluid draping, knitwear, and technical construction. Drawing from architectural references like the Amazon Spheres, this collection explores the harmony between body, environment, and technology. Clean lines meet organic curves; structured tailoring flows into ethereal draping, creating a dialogue between human form and natural systems.",
      inspiration: ["Solarpunk", "Amazon Spheres", "Architectural Form", "Technical Knitwear", "Environmental Harmony"],
      carouselImages: [
        "/collections/solar-synthesis/page-01.png",
        "/collections/solar-synthesis/page-02.png",
        "/collections/solar-synthesis/page-03.png",
        "/collections/solar-synthesis/page-04.png",
        "/collections/solar-synthesis/page-05.png",
      ],
    },
    {
      id: "the-poppy-war",
      title: "The Poppy War",
      tagline: "Deconstructed Androgynous Utilitarianism",
      description: "A female-leaning androgynous deconstructed utilitarianism collection informed by militarism, ritual, and psychological transformation. Drawing from historical Chinese dress, military uniforms, and the philosophical cost of divinity, this collection is inspired by R.F. Kuang's 'The Poppy War.' Sharp utility pockets, asymmetrical closures, and layered construction create a visual narrative of power, sacrifice, and transcendence through fashion.",
      inspiration: ["The Poppy War (Novel)", "Historical Chinese Dress", "Military Uniforms", "Psychological Transformation", "Ritualism"],
      carouselImages: [],
    },
    {
      id: "metamorphosis",
      title: "Metamorphosis",
      tagline: "Lepidopteran Transformation & Vulnerability",
      description: "This collection interprets the stages of lepidopteran transformation through a chic, Stella McCartney–influenced lens. Pairing clean, elongated silhouettes and restrained tailoring with layered draping, pleating, and distressed textures, each piece evokes the shedding of skin, the fragility of insect wings, and the containment of growth. The collection explores themes of vulnerability, transformation, and the beauty found in decay.",
      inspiration: ["Lepidopteran Metamorphosis", "Stella McCartney", "Distressed Textiles", "Layered Draping", "Growth & Decay"],
      carouselImages: [
        "/images/metamorphosis/001.webp",
        "/images/metamorphosis/002.webp",
        "/images/metamorphosis/003.webp",
        "/images/metamorphosis/004.webp",
        "/images/metamorphosis/005.webp",
      ],
    },
    {
      id: "beyond-pittock",
      title: "Beyond Pittock",
      tagline: "Edwardian Drapery & Historical Narrative",
      description: "A drapery-based collection inspired by Pittock Mansion's rich history, particularly the story of Georgiana Pittock. This collection reinterprets Edwardian fashion through a modern lens, honoring the elegance and complexity of early 20th-century silhouettes. Flowing fabrics, intricate pleating, and romantic draping create pieces that feel both historically grounded and contemporary.",
      inspiration: ["Pittock Mansion", "Georgiana Pittock", "Edwardian Fashion", "Historical Drapery", "Modern Interpretation"],
      carouselImages: [],
    },
    {
      id: "opposite-designer",
      title: "Opposite Designer",
      tagline: "Space Age Geometry & Calculated Revenge",
      description: "This collection merges Pierre Cardin's Space Age geometry and modular tailoring with fencing and militaristic references from Alexandre Dumas' 'The Count of Monte Cristo.' Using sharp, architectural silhouettes, segmented construction, circular cut-outs, and layered armor-like panels, each piece translates Edmond Dantès' calculated revenge into controlled, futuristic power dressing. Form becomes function; geometry becomes narrative.",
      inspiration: ["Pierre Cardin", "Space Age Design", "The Count of Monte Cristo", "Fencing", "Modular Tailoring", "Futurism"],
      carouselImages: [],
    },
    {
      id: "fall-of-the-romanovs",
      title: "Fall of the Romanovs",
      tagline: "Decadence & Soviet Brutalism",
      description: "A day-to-evening collection exploring the contradicting aesthetics of Russian monarchy's decadence and the transition into Soviet brutalism. This collection juxtaposes ornate, opulent detailing with stark, geometric forms. Rich fabrics meet austere construction; embellishment clashes with minimalism. The result is a powerful visual narrative of political upheaval, cultural transformation, and the collision of two aesthetic worlds.",
      inspiration: ["Russian Monarchy", "Edwardian Opulence", "Soviet Brutalism", "Political Transition", "Aesthetic Contrast"],
      carouselImages: [
        "/collections/fall-of-the-romanovs/page-01.png",
        "/collections/fall-of-the-romanovs/page-02.png",
        "/collections/fall-of-the-romanovs/page-03.png",
        "/collections/fall-of-the-romanovs/page-04.png",
        "/collections/fall-of-the-romanovs/page-05.png",
      ],
    },
  ];

  // Auto-play effect for carousels
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    collections.forEach((collection) => {
      if (collection.carouselImages && collection.carouselImages.length > 0) {
        const interval = setInterval(() => {
          setAutoPlayIndices((prev) => ({
            ...prev,
            [collection.id]: ((prev[collection.id] || 0) + 1) % collection.carouselImages.length,
          }));
        }, 4000);
        intervals.push(interval);
      }
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

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
      <section className="py-24 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Hand Drawn Collections</h1>
          <p className="text-lg text-foreground/70">
            Conceptual narratives through design
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="space-y-20">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="mb-6">
                    <h2 className="text-4xl font-cormorant font-bold mb-2">{collection.title}</h2>
                    <p className="text-lg text-accent font-semibold">{collection.tagline}</p>
                    <div className="w-8 h-1 bg-accent mt-4" />
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                    {collection.description}
                  </p>

                  {/* Inspiration Tags */}
                  <div className="flex flex-wrap gap-3">
                    {collection.inspiration.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-secondary/50 border border-accent/30 rounded-full text-sm text-foreground/70 hover:border-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Carousel Preview */}
                <Link href={`/${collection.id}`}>
                  <div className={`relative bg-secondary/30 rounded-lg border border-border overflow-hidden group cursor-pointer ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`} style={{aspectRatio: '16 / 9'}}>
                    {collection.carouselImages && collection.carouselImages.length > 0 ? (
                      <>
                        <img
                          src={collection.carouselImages[getCarouselIndex(collection.id)]}
                          alt={collection.title}
                          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="text-white/0 group-hover:text-white/80 text-sm font-semibold transition-all">View Collection</span>
                        </div>

                        {/* Carousel Controls */}
                        <button
                          onClick={(e) => prevCarouselSlide(e, collection.id, collection.carouselImages.length)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-background/80 hover:bg-background text-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => nextCarouselSlide(e, collection.id, collection.carouselImages.length)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-background/80 hover:bg-background text-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <div className="text-center flex items-center justify-center h-full">
                        <div>
                          <p className="text-foreground/50 text-sm">Collection imagery</p>
                          <p className="text-foreground/30 text-xs mt-2">Coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Divider */}
                {index < collections.length - 1 && (
                  <div className="col-span-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container text-center">
          <h3 className="text-3xl font-cormorant font-bold mb-4">Interested in Collaborating?</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Each collection represents a unique conceptual journey. I'm open to discussing custom design work, consultations, and collaborative projects.
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
