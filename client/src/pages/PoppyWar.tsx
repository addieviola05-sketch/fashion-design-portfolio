import { Link } from "wouter";
import { Download, ExternalLink } from "lucide-react";

/**
 * The Poppy War Collection Page
 * Design Philosophy: Sophisticated Storytelling with Editorial Influence
 * Typography: EB Garamond (headlines) + Poppins (body)
 */

export default function PoppyWar() {
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
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">The Poppy War</h1>
          <p className="text-lg text-accent font-semibold mb-2">Deconstructed Androgynous Utilitarianism</p>
          <p className="text-foreground/70">Militarism, ritual, and psychological transformation</p>
          <div className="w-12 h-1 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Collection Description */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h2 className="text-4xl font-cormorant font-bold mb-4">Collection Overview</h2>
            <div className="w-8 h-1 bg-accent mb-8" />
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              A female-leaning androgynous deconstructed utilitarianism collection informed by militarism, ritual, and psychological transformation. Drawing from historical Chinese dress, military uniforms, and the profound cost of divinity, this collection is inspired by R.F. Kuang's "The Poppy War."
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sharp angles meet flowing fabrics; rigid military structures dissolve into organic silhouettes. This is fashion as a statement on power, vulnerability, and the price of transformation. Each piece tells a story of conflict, resilience, and rebirth.
            </p>
          </div>

          {/* Key Themes */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-3">Design Inspiration</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✦ Historical Chinese dress</li>
                <li>✦ Military uniforms</li>
                <li>✦ Ritual and ceremony</li>
                <li>✦ Psychological transformation</li>
                <li>✦ The Poppy War narrative</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-3">Construction Techniques</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✦ Deconstructed tailoring</li>
                <li>✦ Androgynous silhouettes</li>
                <li>✦ Utilitarian details</li>
                <li>✦ Asymmetrical cuts</li>
                <li>✦ Layered construction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-cormorant font-bold">Full Collection Presentation</h2>
            <a
              href="/pdfs/the-poppy-war.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          {/* PDF Embed */}
          <div className="bg-secondary/50 rounded-lg overflow-hidden border border-border" style={{aspectRatio: '8.5 / 11'}}>
            <iframe
              src="/pdfs/the-poppy-war.pdf"
              className="w-full h-full"
              title="The Poppy War Collection PDF"
            />
          </div>

          {/* Fallback Link */}
          <div className="mt-6 p-4 bg-secondary/30 rounded-lg border border-border text-center">
            <p className="text-foreground/70 mb-3">
              If the PDF viewer doesn't display properly, you can open it directly:
            </p>
            <a
              href="/pdfs/the-poppy-war.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              Open PDF in New Tab
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container text-center">
          <h3 className="text-3xl font-cormorant font-bold mb-4">Interested in This Collection?</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Explore the intersection of power, vulnerability, and transformation through fashion. Discuss custom collaborations inspired by this narrative.
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
