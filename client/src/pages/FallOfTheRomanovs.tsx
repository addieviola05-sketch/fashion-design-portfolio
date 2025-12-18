import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function FallOfTheRomanovs() {
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

      {/* Collection Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container">
          <Link href="/hand-drawn">
            <div className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors cursor-pointer mb-6">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Back to Collections</span>
            </div>
          </Link>
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Fall of the Romanovs</h1>
          <p className="text-xl text-foreground/70 mb-6">A day into evening collection exploring the contradicting aesthetics of Russian monarchy's decadence and the transition into Soviet brutalism.</p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-secondary/50 border border-accent/30 rounded-full text-sm text-foreground/70">Russian Monarchy</span>
            <span className="px-4 py-2 bg-secondary/50 border border-accent/30 rounded-full text-sm text-foreground/70">Soviet Brutalism</span>
            <span className="px-4 py-2 bg-secondary/50 border border-accent/30 rounded-full text-sm text-foreground/70">Decadence</span>
            <span className="px-4 py-2 bg-secondary/50 border border-accent/30 rounded-full text-sm text-foreground/70">Transformation</span>
            <span className="px-4 py-2 bg-secondary/50 border border-accent/30 rounded-full text-sm text-foreground/70">Edwardian Fashion</span>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-secondary/30 rounded-lg border border-border overflow-hidden">
            <iframe
              src="https://docs.google.com/gview?url=https://storage.googleapis.com/manus-prod-public/uploads/romanov.pdf&embedded=true"
              style={{width: '100%', height: '800px', border: 'none'}}
              title="Fall of the Romanovs Collection"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://storage.googleapis.com/manus-prod-public/uploads/romanov.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Download Full PDF
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container text-center text-foreground/60 text-sm">
          <p>© 2025 Addison Moore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
