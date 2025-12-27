"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Trabajo de maquillaje 1" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Trabajo de maquillaje 2" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Trabajo de maquillaje 3" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Trabajo de maquillaje 4" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Trabajo de maquillaje 5" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Trabajo de maquillaje 6" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Trabajo de maquillaje 7" },
  { src: "/images/gallery/gallery-8.jpg", alt: "Trabajo de maquillaje 8" },
  { src: "/images/gallery/gallery-9.jpg", alt: "Trabajo de maquillaje 9" },
  { src: "/images/gallery/gallery-10.jpg", alt: "Trabajo de maquillaje 10" },
];

interface GallerySectionProps {
  showAll?: boolean;
}

export default function GallerySection({ showAll = false }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="galeria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="section-title mb-6">Mis trabajos</h2>
            <div className="separator" />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 flex items-center justify-center border-2 border-[#c9a87c] transition-all duration-300 ${canScrollLeft ? "text-[#c9a87c] hover:bg-[#c9a87c] hover:text-white cursor-pointer" : "text-[#e8e4df] border-[#e8e4df] cursor-not-allowed"
                }`}
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 flex items-center justify-center border-2 border-[#c9a87c] transition-all duration-300 ${canScrollRight ? "text-[#c9a87c] hover:bg-[#c9a87c] hover:text-white cursor-pointer" : "text-[#e8e4df] border-[#e8e4df] cursor-not-allowed"
                }`}
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[30%] lg:w-[25%] snap-start"
            >
              <button
                onClick={() => setSelectedImage(image.src)}
                className="relative aspect-[3/4] w-full overflow-hidden group cursor-pointer block border border-[#f0f0f0]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform scale-90 group-hover:scale-100">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center md:hidden">
            <Link
              href="/galeria"
              className="btn-primary inline-block"
            >
              Ver galería completa
            </Link>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full h-[85vh] max-w-5xl">
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              fill
              className="object-contain"
              sizes="100vw"
              quality={95}
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

