import { Link } from "wouter";
import { ChevronLeft, Download } from "lucide-react";

export default function Resume() {
  const resumeUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663254082411/peRmZtJqohAdxRUY.png";

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

      {/* Resume Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container">
          <Link href="/about">
            <div className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors cursor-pointer mb-6">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Back to About</span>
            </div>
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-4">Resume</h1>
              <p className="text-xl text-foreground/70">Costume Designer | Fashion Design</p>
            </div>
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Resume Display */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-secondary/30 rounded-lg border border-border overflow-hidden">
            <img
              src={resumeUrl}
              alt="Addison Moore Resume"
              className="w-full h-auto"
            />
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
