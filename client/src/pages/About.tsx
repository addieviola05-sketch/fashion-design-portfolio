import { Link } from "wouter";

/**
 * About Page - Professional Bio and Background
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: Cormorant Garamond (headlines) + Raleway (body)
 */

export default function About() {
  const skills = [
    "Costume Design",
    "Fashion Design",
    "Technical Drawing",
    "Pattern Making",
    "Garment Construction",
    "Fabric Sourcing",
    "Digital Design",
    "3D Modeling",
    "Historical Research",
    "Character Development",
  ];

  const experience = [
    {
      title: "Lead Costume Designer",
      organization: "Theater Company",
      period: "2022 - Present",
      description: "Designed costumes for 8+ theatrical productions, managing budgets and teams.",
    },
    {
      title: "Fashion Designer",
      organization: "Independent Practice",
      period: "2020 - Present",
      description: "Created multiple fashion collections and collaborated with brands.",
    },
    {
      title: "Costume Assistant",
      organization: "Film & Television",
      period: "2018 - 2021",
      description: "Assisted in costume design for film and television productions.",
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
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">About Me</h1>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container max-w-4xl">
          {/* Bio Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-cormorant font-bold mb-6">Professional Journey</h2>
            <div className="w-12 h-1 bg-accent mb-8" />

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I am a dedicated costume and fashion designer with a passion for storytelling
                through garment design. My practice bridges the worlds of theatrical costume
                design and contemporary fashion, allowing me to explore the full spectrum of
                wearable art.
              </p>

              <p>
                My design process begins with deep research and conceptualization. Whether
                designing historically accurate costumes for period dramas or creating
                contemporary fashion collections, I approach each project with meticulous
                attention to detail, understanding of character and narrative, and commitment to
                technical excellence.
              </p>

              <p>
                I specialize in multiple design disciplines: hand-drawn sketches and technical
                flats, digital design and 3D visualization, pattern making and garment
                construction, and fabric research and sourcing. This multifaceted approach allows
                me to realize designs from concept through final execution.
              </p>

              <p>
                Beyond the technical aspects, I believe in sustainable design practices,
                thoughtful material selection, and creating garments that empower the wearer or
                character. Every stitch, seam, and embellishment serves a purpose in the larger
                narrative.
              </p>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="mb-16 p-8 bg-secondary/30 rounded-lg border border-border">
            <h3 className="text-2xl font-cormorant font-bold mb-4">Design Philosophy</h3>
            <p className="text-foreground/80 leading-relaxed">
              "Design is the art of storytelling through fabric. Every garment tells a story—of
              character, of history, of intention. My role is to listen to that story and
              translate it into form, color, texture, and movement. Whether working in theater,
              film, or fashion, I believe that great design is invisible in its rightness; it
              simply feels true."
            </p>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mb-16">
            <h2 className="text-4xl font-cormorant font-bold mb-6">Core Competencies</h2>
            <div className="w-12 h-1 bg-accent mb-8" />

            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <p className="font-raleway font-semibold text-foreground">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="mb-16">
            <h2 className="text-4xl font-cormorant font-bold mb-6">Experience</h2>
            <div className="w-12 h-1 bg-accent mb-8" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={exp.title}
                  className="pb-8 border-b border-border last:border-b-0"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
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

          {/* CTA Section */}
          <div className="text-center pt-8 border-t border-border">
            <h3 className="text-2xl font-cormorant font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-foreground/70 mb-6">
              Let's discuss your next project or creative vision.
            </p>
            <a
              href="mailto:contact@example.com"
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
            transform: translateY(20px);
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
