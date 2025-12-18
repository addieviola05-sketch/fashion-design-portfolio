import { Link } from "wouter";

export default function FallOfTheRomanovs() {
  const pdfUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663254082411/LGJfbEUuOBHbmHKZ.pdf";

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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-secondary/50 border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Fall of the Romanovs</h1>
          <p className="text-lg text-foreground/70">
            Decadence & Soviet Brutalism
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Collection Info */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-cormorant font-bold mb-4">Collection Overview</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              A day-to-evening collection exploring the contradicting aesthetics of Russian monarchy's decadence and the transition into Soviet brutalism. This collection juxtaposes ornate, opulent detailing with stark, geometric forms. Rich fabrics meet austere construction; embellishment clashes with minimalism. The result is a powerful visual narrative of political upheaval, cultural transformation, and the collision of two aesthetic worlds.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-cormorant font-bold mb-4">Design Inspiration</h3>
              <div className="flex flex-wrap gap-3">
                {["Russian Monarchy", "Edwardian Opulence", "Soviet Brutalism", "Political Transition", "Aesthetic Contrast"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-secondary border border-accent/30 rounded-full text-sm text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-secondary/50 rounded-lg border border-border overflow-hidden mb-8">
            <iframe
              src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
              width="100%"
              height="800px"
              style={{ border: "none" }}
              title="Fall of the Romanovs Collection"
            />
          </div>

          {/* Download Link */}
          <div className="text-center">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Download Full Collection PDF
            </a>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-cormorant font-bold mb-4">Design Philosophy</h2>
          <div className="w-8 h-1 bg-accent mb-8" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-4">Opulence</h3>
              <p className="text-foreground/80 leading-relaxed">
                Drawing from the extravagance of the Russian Imperial court, this collection features ornate beading, rich fabrics, and intricate embellishment. Each piece celebrates the craftsmanship and luxury that defined an era of unprecedented wealth and cultural refinement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-4">Brutalism</h3>
              <p className="text-foreground/80 leading-relaxed">
                Contrasting the ornate details, stark geometric forms and austere construction reference Soviet design principles. Sharp lines, minimal ornamentation, and architectural silhouettes create a visual tension that reflects the dramatic political and cultural shift.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-secondary/30 rounded-lg border border-border">
            <h3 className="text-xl font-cormorant font-bold mb-4">The Narrative</h3>
            <p className="text-foreground/80 leading-relaxed">
              This collection tells the story of transformation through fashion. The juxtaposition of opulent embellishment with brutalist form creates a visual dialogue between two worlds—the last gasp of imperial grandeur and the austere promise of revolution. Each garment is a battleground where beauty and ideology collide.
            </p>
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
