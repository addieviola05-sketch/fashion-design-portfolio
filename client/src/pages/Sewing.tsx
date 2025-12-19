import { useState } from "react";
import { Link } from "wouter";

/**
 * Sewing Projects Page - Realized 3D Garments
 * Showcases actual constructed pieces with detailed project narratives
 */

export default function Sewing() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Corsaire Dress",
      subtitle: "Vivienne Westwood Inspired | Edmund Dantes Quest for Revenge",
      year: "2024",
      description:
        "A modern reinterpretation of Vivienne Westwood's iconic 1981 Pirate Collection, inspired by Alexandre Dumas's The Count of Monte Cristo. This piece features bold architectural silhouettes with dramatic puffed sleeves and structured tailoring, referencing Westwood's rebellious aesthetic and the narrative of vengeance and transformation. The striped collar detail and precise button placement echo the punk-meets-haute-couture philosophy of the original collection.",
      materials: [
        "Red Linen",
        "Striped Cotton",
        "Mother of Pearl Buttons",
        "Custom Interfacing",
      ],
      techniques: [
        "Structured Tailoring",
        "Puffed Sleeve Construction",
        "Off-Shoulder Neckline",
        "Button Placement & Finishing",
        "Precise Seaming",
      ],
      images: [
        "/images/sewing-projects/IMG_7331.jpeg",
        "/images/sewing-projects/IMG_7332.jpeg",
        "/images/sewing-projects/IMG_7334.jpeg",
        "/images/sewing-projects/IMG_7335.jpeg",
        "/images/sewing-projects/IMG_7336.jpeg",
      ],
      inspiration:
        "Vivienne Westwood's 1981 Pirate Collection & The Count of Monte Cristo narrative",
    },
    {
      id: 2,
      title: "Tartan Skirt with Cream Blouse",
      year: "2024",
      description:
        "A classically tailored ensemble combining a hand-constructed tartan skirt with structured pleating and a cream linen blouse. This piece demonstrates mastery of traditional tailoring techniques, including precise pattern matching on the tartan weave, professional hem finishing, and proper waistband construction. The combination showcases both technical precision and timeless design sensibility.",
      materials: [
        "Tartan Wool",
        "Cream Linen",
        "Custom Waistband",
        "Professional Hem Tape",
      ],
      techniques: [
        "Pattern Matching",
        "Pleat Construction",
        "Waistband Assembly",
        "Hand Finishing",
        "Precision Hemming",
      ],
      images: [
        "/images/sewing-projects/IMG_4460.jpeg",
        "/images/sewing-projects/IMG_4467.jpeg",
        "/images/sewing-projects/IMG_4472.jpeg",
        "/images/sewing-projects/IMG_4465.jpeg",
        "/images/sewing-projects/IMG_4466.jpeg",
      ],
      inspiration: "Classic tailoring with contemporary styling",
    },
    {
      id: 3,
      title: "Blue Evening Gown",
      year: "2024",
      description:
        "An elegant evening gown in rich sapphire blue with a gathered skirt and fitted bodice. This piece demonstrates mastery of draping and construction of flowing silhouettes. The gown features a scoop neckline, sleeveless design, and a full skirt with subtle beading details that catch the light. The construction shows precise waistband assembly and professional hem finishing for a polished, wearable garment.",
      materials: [
        "Sapphire Blue Taffeta",
        "Beading & Embellishments",
        "Custom Waistband",
        "Lining",
      ],
      techniques: [
        "Bodice Construction",
        "Gathered Skirt Assembly",
        "Beading & Embellishment",
        "Neckline Finishing",
        "Professional Hemming",
      ],
      images: [
        "/images/sewing-projects/IMG_4518.jpeg",
        "/images/sewing-projects/IMG_4522.jpeg",
        "/images/sewing-projects/IMG_4523.jpeg",
        "/images/sewing-projects/IMG_4526.jpeg",
      ],
      inspiration: "Formal evening wear with elegant draping",
    },
    {
      id: 4,
      title: "Wedding Dress",
      year: "2024",
      description:
        "A stunning bridal gown featuring a fitted bodice with a gathered skirt and elegant train. This piece showcases advanced garment construction techniques including precise bodice fitting, professional seaming, and careful hem finishing. The dress features a scoop neckline and sleeveless design, with the focus on clean lines and impeccable tailoring. The construction demonstrates the technical skill required for formal bridal wear.",
      materials: [
        "White Silk Taffeta",
        "Lining",
        "Custom Waistband",
        "Professional Hem Tape",
      ],
      techniques: [
        "Fitted Bodice Construction",
        "Gathered Skirt Assembly",
        "Scoop Neckline Finishing",
        "Train Construction",
        "Professional Hemming",
        "Seam Finishing",
      ],
      images: [
        "/images/sewing-projects/IMG_4531.jpeg",
        "/images/sewing-projects/IMG_4532.jpeg",
        "/images/sewing-projects/IMG_4533.jpeg",
        "/images/sewing-projects/IMG_4534.jpeg",
      ],
      inspiration: "Formal bridal wear with elegant simplicity",
    },
    {
      id: 5,
      title: "Plaid Cape with Button Detail",
      year: "2024",
      description:
        "A structured cape garment featuring plaid patterning and careful button placement. This piece demonstrates understanding of how to construct outerwear with proper drape and structural integrity. The button details show precision finishing work, and the overall construction reflects professional-level garment assembly. The cape silhouette showcases dramatic tailoring and attention to detail.",
      materials: ["Plaid Wool Blend", "Buttons", "Interfacing"],
      techniques: [
        "Cape Construction",
        "Button Placement",
        "Structured Drape",
        "Finishing Details",
      ],
      images: [
        "/images/sewing-projects/IMG_4480.jpeg",
        "/images/sewing-projects/IMG_4481.jpeg",
      ],
      inspiration: "Structured outerwear design",
    },
    {
      id: 6,
      title: "Pink Embellished Dress",
      year: "2024",
      description:
        "A romantic dress in soft pink velvet featuring scattered beaded embellishments and puffed sleeves. This piece showcases the ability to work with delicate fabrics and add intricate detail work. The construction includes careful placement of beads and sequins, precise sleeve setting, and professional finishing. The gathered skirt and fitted bodice demonstrate control over multiple construction techniques.",
      materials: [
        "Pink Velvet",
        "Beads & Sequins",
        "Custom Interfacing",
        "Lining",
      ],
      techniques: [
        "Puffed Sleeve Construction",
        "Beading & Embellishment",
        "Gathered Skirt Assembly",
        "Bodice Fitting",
        "Professional Finishing",
      ],
      images: ["/images/sewing-projects/IMG_4517.jpeg"],
      inspiration: "Romantic embellished evening wear",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/images/logo-monogram.png"
              alt="Addison Moore"
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link
              href="/hand-drawn"
              className="hover:text-accent transition-colors"
            >
              Hand Drawn
            </Link>
            <Link href="/sewing" className="hover:text-accent transition-colors">
              Sewing
            </Link>
            <Link
              href="/digital"
              className="hover:text-accent transition-colors"
            >
              Digital
            </Link>
            <Link
              href="/artwork"
              className="hover:text-accent transition-colors"
            >
              Artwork
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">
            Sewing Projects
          </h1>
          <p className="text-lg text-foreground/70">
            Realized 3D garments and constructed pieces
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid md:grid-cols-2 gap-12 items-start"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Images */}
                <div
                  className={`space-y-4 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg h-96 bg-secondary/30">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {project.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.slice(1).map((img, idx) => (
                        <div
                          key={idx}
                          className="relative overflow-hidden rounded-lg h-48 bg-secondary/30"
                        >
                          <img
                            src={img}
                            alt={`${project.title} detail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="mb-4">
                    <span className="text-accent font-raleway text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="text-4xl font-cormorant font-bold mb-2">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-lg text-accent font-raleway mb-4">
                      {project.subtitle}
                    </p>
                  )}
                  <div className="w-12 h-1 bg-accent mb-6" />

                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.inspiration && (
                    <div className="mb-6 p-4 bg-accent/10 border-l-2 border-accent rounded">
                      <p className="text-sm font-raleway text-accent font-semibold mb-1">
                        Inspiration
                      </p>
                      <p className="text-foreground/70">{project.inspiration}</p>
                    </div>
                  )}

                  {/* Materials */}
                  <div className="mb-6">
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-3 uppercase tracking-wide">
                      Materials
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material) => (
                        <span
                          key={material}
                          className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-sm text-foreground/70"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Techniques */}
                  <div className="mb-8">
                    <h3 className="text-sm font-raleway font-semibold text-accent mb-3 uppercase tracking-wide">
                      Techniques
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techniques.map((technique) => (
                        <span
                          key={technique}
                          className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-foreground"
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-center">
            Craftsmanship & Construction
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Every garment I construct represents a commitment to precision,
              technical excellence, and thoughtful design. My sewing practice
              encompasses traditional tailoring techniques combined with
              contemporary design sensibilities.
            </p>

            <p>
              From pattern matching on plaid fabrics to constructing structured
              silhouettes with proper interfacing and support, each piece
              demonstrates mastery of fundamental garment construction. I focus
              on the details that distinguish couture-level work: hand-finished
              hems, precise seam placement, and professional button attachment.
            </p>

            <p>
              My approach to sewing is informed by my background in costume
              design and fashion studies. I understand how garments function on
              the body, how fabrics behave, and how construction choices impact
              the final aesthetic and wearability of a piece.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">
            Commission Custom Work
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            I accept commissions for custom garments, alterations, and bespoke
            pieces. Whether you're looking for a specific design or need expert
            tailoring, I'd love to discuss your project.
          </p>
          <a
            href="mailto:addieviola05@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
          >
            Request a Commission
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
