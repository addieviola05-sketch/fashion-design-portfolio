import { Link } from "wouter";
import CollectionCarousel from "@/components/CollectionCarousel";

/**
 * Digital Projects Page - Fashion Design Collections
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function Digital() {
  // Generate image paths for carousels
  const secretGardenImages = Array.from({ length: 20 }, (_, i) =>
    `/collections/sg_page-${String(i + 1).padStart(2, '0')}.png`
  );

  const dlyheImages = Array.from({ length: 24 }, (_, i) =>
    `/collections/dlyh_page-${String(i + 1).padStart(2, '0')}.png`
  );

  const collections = [
    {
      id: 1,
      title: "Don't Lose Your Head",
      subtitle: "Fall Tudor-Inspired Elevated Grunge Collection by Viola & Spindle",
      year: "2025",
      season: "Fall 2025",
      inspiration: "Tudor History & Elevated Grunge Aesthetic",
      description:
        "An audacious and dramatic fall collection that merges Tudor historical silhouettes with contemporary elevated grunge sensibilities. This collection subverts expectations by combining opulent historical references with modern edge, creating pieces that are both refined and rebellious. Rich jewel tones, dramatic silhouettes, and intricate details create a collection that celebrates historical fashion while pushing it into bold new territory.",
      highlights: [
        "Tudor-inspired silhouettes with modern proportions",
        "Rich jewel-tone color palette with dramatic contrasts",
        "Elevated grunge aesthetic with refined tailoring",
        "Statement collars and dramatic sleeve details",
        "Intricate pattern work and textile innovation",
        "Subversive historical references with contemporary edge",
      ],
      keyPieces: [
        "Dramatic statement coats with contrast collars",
        "Structured bodices with modern proportions",
        "Wide-leg trousers in rich jewel tones",
        "Layered silhouettes combining multiple textures",
        "Elevated grunge styling with historical references",
      ],
      colorPalette: [
        { name: "Deep Burgundy", description: "Wine and burgundy tones", colors: ["#5c1a1a", "#8b3a3a", "#c97a7a"] },
        { name: "Forest Green", description: "Rich forest greens", colors: ["#1a3a2a", "#2d5a3d", "#4a7a5a"] },
        { name: "Charcoal", description: "Charcoal and black accents", colors: ["#2a2a2a", "#4a4a4a", "#6a6a6a"] },
        { name: "Cream", description: "Cream and ivory contrast details", colors: ["#f5f1e8", "#e8dcc8", "#d4c4a8"] },
        { name: "Jewel Tones", description: "Jewel-tone blues and purples", colors: ["#2c3e7a", "#4a3a7a", "#6a4a8a"] },
      ],
      tools: ["Adobe Illustrator", "Digital Design", "Silhouette Development", "Color Theory", "Historical Research"],
      pdfUrl: "/Moore,AddisonDLYHFinal.ai",
      carouselImages: dlyheImages,
    },
    {
      id: 2,
      title: "The Secret Garden",
      subtitle: "Modern Fall Cozy Rainwear Collection by Viola & Spindle",
      year: "2026",
      season: "Fall 2026",
      inspiration: "The Secret Garden by Frances Hodgson Burnett",
      description:
        "A romantic and whimsical fall rainwear collection inspired by the lush botanical world of The Secret Garden. This collection features enchanting floral prints, structured plaids, and cozy silhouettes designed for modern comfort with a touch of literary magic. Each piece combines practical rainwear functionality with elevated design details, creating garments that celebrate nature's beauty while providing protection from the elements.",
      highlights: [
        "Botanical floral prints featuring garden flowers and foliage",
        "Structured plaid patterns in autumn color palettes",
        "Fawn double-breasted trench coats with Peter Pan collars",
        "Wide-leg pants in yarn-dyed suiting",
        "Empire waist silhouettes with romantic details",
        "Fabric innovations combining cotton, polyester, and rayon blends",
      ],
      keyPieces: [
        "Cloverwake Plaid Wide-Leg Pants",
        "Garnet Harvest Plaid Trousers",
        "Witchwell Plaid Trousers",
        "Cranewife Floral Trench Coat",
        "Bluebell Floral Trench Coat",
        "Hearthmoss Floral Rowan Empire Henley",
      ],
      colorPalette: [
        { name: "Cloverwake", description: "Green, gold, and cream plaid", colors: ["#2d5016", "#d4a574", "#f5f1e8"] },
        { name: "Garnet Harvest", description: "Burgundy and green plaid", colors: ["#6b2c2c", "#2d5016", "#e8d4c4"] },
        { name: "Witchwell", description: "Blue and rust plaid", colors: ["#2c3e50", "#8b4513", "#d4a574"] },
        { name: "Hearthmoss", description: "Green with golden flowers", colors: ["#3d5a3d", "#d4a574", "#8b7355"] },
        { name: "Cranewife", description: "Burgundy with pink florals", colors: ["#6b2c2c", "#c97a9a", "#f5e6e8"] },
        { name: "Bluebell", description: "Blue with red florals", colors: ["#3d5a7d", "#a84c4c", "#e8d4d4"] },
      ],
      tools: ["Adobe Illustrator", "Digital Design", "Pattern Design", "Color Theory", "Technical Specifications"],
      pdfUrl: "/Moore,AddisonFinalProject.pdf",
      carouselImages: secretGardenImages,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex justify-between items-center">
          <Link href="/">
            <img
              src="/images/logo-monogram.png"
              alt="Addison Moore"
              className="h-12 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/hand-drawn" className="hover:text-accent transition-colors">
              Hand Drawn
            </Link>
            <Link href="/sewing" className="hover:text-accent transition-colors">
              Sewing
            </Link>
            <Link href="/digital" className="hover:text-accent transition-colors">
              Digital
            </Link>
            <Link href="/artwork" className="hover:text-accent transition-colors">
              Artwork
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">
            Digital Collections
          </h1>
          <p className="text-lg text-foreground/70">
            Fashion design collections created in Adobe Illustrator
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Collections */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="space-y-32">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Collection Header */}
                <div className="mb-12">
                  <span className="text-accent font-raleway text-sm font-semibold">
                    {collection.season}
                  </span>
                  <h2 className="text-5xl font-cormorant font-bold mb-2 mt-2">
                    {collection.title}
                  </h2>
                  <p className="text-2xl text-accent font-raleway mb-4">
                    {collection.subtitle}
                  </p>
                  <div className="w-12 h-1 bg-accent mb-8" />
                </div>

                {/* Carousel */}
                <div className="mb-12">
                  <CollectionCarousel
                    images={collection.carouselImages}
                    title={collection.title}
                  />
                </div>

                {/* Description */}
                <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mb-12">
                  {collection.description}
                </p>

                {/* Inspiration */}
                <div className="mb-12 p-6 bg-accent/10 border-l-2 border-accent rounded">
                  <p className="text-sm font-raleway text-accent font-semibold mb-2">
                    INSPIRATION
                  </p>
                  <p className="text-lg text-foreground/80">{collection.inspiration}</p>
                </div>

                {/* Collection Highlights */}
                <div className="mb-12">
                  <h3 className="text-2xl font-cormorant font-bold mb-6">
                    Collection Highlights
                  </h3>
                  <ul className="space-y-3">
                    {collection.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground/80 text-lg"
                      >
                        <span className="text-accent mt-1">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Pieces */}
                <div className="mb-12">
                  <h3 className="text-2xl font-cormorant font-bold mb-6">
                    Key Pieces
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {collection.keyPieces.map((piece, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-secondary/50 border border-border rounded-lg text-foreground/80"
                      >
                        {piece}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div className="mb-12">
                  <h3 className="text-2xl font-cormorant font-bold mb-6">
                    Color Palette
                  </h3>
                  <div className="space-y-4">
                    {collection.colorPalette.map((palette, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        {/* Color Swatches */}
                        <div className="flex gap-2 flex-shrink-0">
                          {palette.colors.map((color, colorIdx) => (
                            <div
                              key={colorIdx}
                              className="w-16 h-16 rounded-lg border border-border/50 shadow-sm"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                        {/* Color Description */}
                        <div className="flex-1 pt-1">
                          <h4 className="font-cormorant font-bold text-foreground mb-1">
                            {palette.name}
                          </h4>
                          <p className="text-foreground/70 text-sm">{palette.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Software */}
                <div className="mb-12">
                  <h3 className="text-sm font-raleway font-semibold text-accent mb-4 uppercase tracking-wide">
                    Tools & Software
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {collection.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Full Collection Button */}
                <a
                  href={collection.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
                >
                  View Full Collection PDF <span>→</span>
                </a>

                {/* Divider */}
                {index < collections.length - 1 && (
                  <div className="mt-24 pt-24 border-t border-border/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="relative py-24 border-t border-border overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/design-process-bg.jpg)',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container max-w-3xl relative z-10">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-center text-white">
            Digital Design Process
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-6 text-lg text-white/90 leading-relaxed">
            <p>
              My digital design process begins with extensive research and mood board creation,
              exploring historical references, color theory, and contemporary design trends. Using
              Adobe Illustrator, I develop detailed technical specifications that bridge the gap
              between artistic vision and production reality.
            </p>

            <p>
              Each collection is meticulously crafted with attention to fabric selection, pattern
              placement, and construction details. I create comprehensive design documents including
              color palettes, fabric swatches, garment specifications, and detailed illustrations
              that communicate the collection's narrative and aesthetic vision.
            </p>

            <p>
              These digital collections represent a complete design process from concept to
              production-ready specifications, demonstrating expertise in fashion design software,
              technical illustration, and the ability to translate creative vision into wearable
              garments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">
            Digital Design Collaboration
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            I'm available for digital design projects, collection development, and technical
            illustration work. Let's bring your fashion vision to life.
          </p>
          <a
            href="mailto:addieviola05@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Digital Project
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
