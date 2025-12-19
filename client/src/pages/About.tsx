import { Link } from "wouter";

/**
 * About Page - Professional Bio and Background
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function About() {
  const skills = [
    "Industrial & Domestic Machine Operation",
    "Patternmaking & Draping",
    "Fitting & Alterations",
    "Hand Sewing & Embroidery",
    "Garment Construction & Restoration",
    "Fabric Sourcing & Textile Knowledge",
    "Budgeting & Production Collaboration",
    "Moodboarding",
    "Presentation Development",
    "Visual Storytelling",
    "Rendering & Illustration",
    "Research-Driven Design Process",
  ];

  const experience = [
    {
      title: "Costume Dresser / Production Assistant",
      organization: "Hale Center World-Class Theatre",
      period: "Dec 2025 - Present",
      description: "Repair, fit, and alter garments for performances. Assist actors in dressing and undressing during quick changes. Organize costumes and accessories backstage for efficient access during productions.",
    },
    {
      title: "Vintage Reseller & Poshmark Ambassador",
      organization: "@addieviola",
      period: "Mar 2023 - Present",
      description: "Curate, restore, and market vintage clothing with over 250 listings and $1K in sales. Execute detailed garment restoration through hand-sewing, beading, and embroidery. Manage sourcing, pricing, and customer satisfaction.",
    },
    {
      title: "Fashion Designer Assistant",
      organization: "Hudson Valley Fashion Week",
      period: "Sep 2024 - Sep 2025",
      description: "Prep garments and accessories backstage; assist in model dressing under live-show deadlines. Coordinate look completion and final garment readiness for runway presentation.",
    },
    {
      title: "Costume Designer",
      organization: "Marist Children's Theatre",
      period: "Aug 2024 - Dec 2024",
      description: "Design and style costumes for 50-member ensemble. Create original sketches, look boards, and color pathways. Lead costume team through fittings and manage production budget.",
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
            <Link href="/">
              <a className="hover:text-accent transition-colors">Home</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-accent transition-colors">About</a>
            </Link>
            <Link href="/hand-drawn">
              <a className="hover:text-accent transition-colors">Hand Drawn</a>
            </Link>
            <Link href="/sewing">
              <a className="hover:text-accent transition-colors">Sewing</a>
            </Link>
            <Link href="/digital">
              <a className="hover:text-accent transition-colors">Digital</a>
            </Link>
            <Link href="/artwork">
              <a className="hover:text-accent transition-colors">Artwork</a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border" style={{
        backgroundImage: 'url(/images/about-header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">About Me</h1>
          <p className="text-lg text-foreground/70">
            Costume Designer & Fashion Design Student
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
          <Link href="/resume">
            <a className="inline-block mt-8 px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold">
              View Resume
            </a>
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-20">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I am a costume and fashion designer originally from Oregon, currently pursuing a BFA in Fashion Design with minors in Cinema Studies and Product Development at Marist University. My work is shaped by early experience in ballet and theatre costuming in the Pacific Northwest, where I developed a strong foundation in garment alteration, restoration, and performance-based design.
              </p>

              <p>
                My design practice centers on character-driven wardrobe built through research, construction, and narrative logic. I am especially interested in how costume communicates power, psychology, and transformation over time, drawing from historical references, mythic structures, and cinematic language. I gravitate toward designs that feel restrained, intentional, and lived-in—where clothing functions as part of the world rather than as spectacle.
              </p>

              <p>
                Across theatre productions, fashion week environments, and independent vintage restoration work, I have gained hands-on experience in fittings, quick changes, pattern drafting, and garment repair under live production constraints. I bring a detail-oriented, collaborative approach to design, with a particular strength in translating concept into wearable, functional pieces that support performers and story alike.
              </p>

              <p className="text-base text-accent font-semibold mt-8 pt-6 border-t border-border">
                ✦ (541) 280-9231 | ✦ addison.ogcoaicloud.com
              </p>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="mb-20 bg-secondary/30 p-8 rounded-lg border border-border relative" style={{
            backgroundImage: 'url(/images/design-philosophy-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="absolute inset-0 bg-black/50 rounded-lg" />
            <div className="relative z-10">
            <h2 className="text-3xl font-cormorant font-bold mb-6">Design Philosophy</h2>
            <div className="w-12 h-1 bg-accent mb-6" />

            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                <strong>Character-Driven:</strong> Every garment tells a story. I design costumes that reveal character psychology, status, and transformation through fabric, silhouette, and detail.
              </p>
              <p>
                <strong>Research-Based:</strong> My process is grounded in historical research, mythic structures, and cinematic language. I believe informed design choices create authenticity and depth.
              </p>
              <p>
                <strong>Restrained & Intentional:</strong> I favor designs that feel lived-in and functional—where clothing serves the story rather than distracting from it.
              </p>
              <p>
                <strong>Collaborative:</strong> Costume design is inherently collaborative. I work closely with directors, performers, and production teams to realize a unified vision.
              </p>
            </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-20 relative" style={{
            backgroundImage: 'url(/images/core-competencies-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '2rem',
            borderRadius: '0.5rem',
          }}>
            <div className="absolute inset-0 bg-black/50 rounded" />
            <div className="relative z-10">
            <h2 className="text-4xl font-cormorant font-bold mb-6">Core Competencies</h2>
            <div className="w-12 h-1 bg-accent mb-8" />

            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-secondary/30 rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <p className="font-raleway font-semibold text-foreground">{skill}</p>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-20">
            <h2 className="text-4xl font-cormorant font-bold mb-6">Experience</h2>
            <div className="w-12 h-1 bg-accent mb-8" />

            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.title} className="border-l-2 border-accent pl-6 py-2">
                  <div className="mb-2">
                    <h3 className="text-2xl font-cormorant font-bold">{exp.title}</h3>
                    <span className="text-accent font-raleway text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-accent font-raleway font-semibold mb-3">
                    {exp.organization}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="mb-16 bg-accent/10 p-8 rounded-lg border border-accent/30 relative" style={{
            backgroundImage: 'url(/images/vision-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="absolute inset-0 bg-black/50 rounded-lg" />
            <div className="relative z-10">
            <h2 className="text-3xl font-cormorant font-bold mb-4">Vision</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My goal is to continue working in film and television costume design, contributing to productions where wardrobe is integral to character, atmosphere, and storytelling. I seek opportunities to create costumes that elevate narrative and support performers in bringing complex characters to life.
            </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8 border-t border-border">
            <h3 className="text-2xl font-cormorant font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-foreground/70 mb-6">
              Let's discuss your next project or creative vision.
            </p>
            <a
              href="mailto:addison.ogcoaicloud.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-raleway font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
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
