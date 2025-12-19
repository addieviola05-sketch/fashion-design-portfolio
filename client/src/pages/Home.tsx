import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Home Page - Fashion & Costume Designer Portfolio
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 * Color Palette: Warm whites, deep charcoal, gold accents
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioSections = [
    {
      id: "about",
      title: "About / Bio",
      description: "Discover my journey, philosophy, and expertise in fashion and costume design.",
      icon: "👤",
    },
    {
      id: "hand-drawn",
      title: "Hand Drawn / Rendered Collections",
      description: "Explore my design sketches, technical drawings, and digital renderings.",
      icon: "✏️",
    },
    {
      id: "sewing",
      title: "Sewing Projects",
      description: "View my constructed garments, tailoring work, and sewing expertise.",
      icon: "🪡",
    },
    {
      id: "digital",
      title: "Digital Projects",
      description: "Discover my digital design work, 3D modeling, and technical projects.",
      icon: "💻",
    },
    {
      id: "artwork",
      title: "Artwork",
      description: "Explore my artistic creations and creative expressions.",
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/logo-monogram.png" alt="Addison Moore" className="h-12 w-auto" />
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-accent transition-colors">About</a>
            <a href="/hand-drawn" className="hover:text-accent transition-colors">Hand Drawn</a>
            <a href="/sewing" className="hover:text-accent transition-colors">Sewing</a>
            <a href="/digital" className="hover:text-accent transition-colors">Digital</a>
            <a href="/moodboards" className="hover:text-accent transition-colors">Moodboards</a>
            <a href="/artwork" className="hover:text-accent transition-colors">Artwork</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero-backdrop.jpg)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <img src="/images/logo-full.png" alt="Addison Moore" className="h-32 md:h-40 w-auto mx-auto drop-shadow-lg" />
          </div>
          <p className="text-xl md:text-2xl text-amber-50/85 font-raleway mb-8 drop-shadow-md">
            Design as Narrative
          </p>
          <p className="text-lg text-amber-50/75 font-raleway max-w-2xl mx-auto drop-shadow-md">
            Exploring the intersection of costume design, fashion, and artistic expression through
            sketches, garments, and digital creations.
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-amber-50/60" />
          </div>
        </div>
      </section>

      {/* Portfolio Sections Preview */}
      <section id="collections" className="py-24 bg-background relative" style={{
        backgroundImage: 'url(/images/my-work-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">
              My Work
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse facets of my creative practice, from conceptual sketches to
              finished garments and digital explorations.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {portfolioSections.map((section, index) => {
              const routeMap: { [key: string]: string } = {
                'about': '/about',
                'hand-drawn': '/hand-drawn',
                'sewing': '/sewing',
                'digital': '/digital',
                'artwork': '/artwork',
              };
              return (
              <a key={section.id} href={routeMap[section.id] || '/'} className="block">
                <div
                  className="group cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-secondary/50 p-8 md:p-12 hover:bg-secondary transition-all duration-300 border border-border hover:border-accent">
                    {/* Icon */}
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300 h-20 w-20">
                      <img
                        src={`/images/icon-${section.id}.png`}
                        alt={section.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-cormorant font-bold mb-3 group-hover:text-accent transition-colors">
                      {section.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 mb-6 group-hover:text-foreground transition-colors">
                      {section.description}
                    </p>

                    {/* Arrow */}
                    <div className="inline-flex items-center gap-2 text-accent font-raleway font-semibold group-hover:gap-3 transition-all">
                      Explore <span>→</span>
                    </div>
                  </div>
                </div>
              </a>
            );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-24 bg-secondary/30 relative" style={{
        backgroundImage: 'url(/images/about-me-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg h-96 md:h-full min-h-96">
              <img
                src="/images/about-me.jpg"
                alt="Addison Moore - Fashion Designer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold mb-6">
                About Me
              </h2>
              <div className="w-12 h-1 bg-accent mb-6" />

              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                I am a passionate costume and fashion designer dedicated to bringing stories to
                life through fabric, form, and meticulous craftsmanship. With expertise spanning
                from historical costume design to contemporary fashion, I blend technical skill
                with artistic vision.
              </p>

              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                My practice encompasses hand-drawn design sketches, digital renderings, sewing
                and garment construction, and artistic explorations. Each project is an
                opportunity to explore the intersection of narrative, character, and wearable art.
              </p>

              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity">
                Read Full Bio <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold mb-6">
            Let's Collaborate
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12">
            I'm always interested in discussing new projects, creative ideas, and opportunities
            to bring stories to life through design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@example.com"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="/resume"
              className="px-8 py-3 border border-accent text-accent rounded-lg font-raleway font-semibold hover:bg-accent/10 transition-colors"
            >
              View Resume
            </a>
          </div>
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
