import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface SlideLightboxProps {
  images: string[];
  initialIndex: number;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SlideLightbox({
  images,
  initialIndex,
  title,
  isOpen,
  onClose,
}: SlideLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Title */}
      <div className="absolute top-4 left-4 text-white">
        <h2 className="text-lg font-cormorant font-bold">{title}</h2>
        <p className="text-sm text-white/70">
          Slide {currentIndex + 1} of {images.length}
        </p>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-full flex items-center justify-center max-w-6xl">
        <img
          src={images[currentIndex]}
          alt={`${title} slide ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {/* Thumbnail Strip */}
        <div className="flex gap-1 overflow-x-auto max-w-xs">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-white"
                  : "border-white/30 hover:border-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard Instructions */}
      <div className="absolute bottom-20 text-white/60 text-sm text-center">
        <p>Use arrow keys to navigate • Press ESC to close</p>
      </div>
    </div>
  );
}
