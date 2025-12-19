import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CollectionCarouselProps {
  images: string[];
  title: string;
}

export default function CollectionCarousel({ images, title }: CollectionCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="relative bg-secondary/50 rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full aspect-video bg-background flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`${title} slide ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm text-foreground/70">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? "border-accent"
                : "border-border hover:border-accent/50"
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
  );
}
