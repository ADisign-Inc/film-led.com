"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export function ImageSlider({
  images,
  autoSlide = true,
  autoSlideInterval = 5000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);

    return () => {
      clearInterval(slideInterval);
      clearTimeoutRef();
    };
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <div className="relative w-full h-full flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full transition-transform duration-[2000ms] ease-in-out"
            style={{
              transform: `translateX(${-(index - currentIndex) * 100}%)`,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt=""
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority={index === currentIndex}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/70 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/70 z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
