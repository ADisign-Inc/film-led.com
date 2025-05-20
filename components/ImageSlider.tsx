"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  autoSlideInterval?: number;
}

export function ImageSlider({
  images,
  autoSlideInterval = 3000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesCount = images.length;
  const sliderRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imagesCount) % imagesCount);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesCount);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [imagesCount, autoSlideInterval]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <div
        ref={sliderRef}
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full h-full flex-shrink-0"
            style={{ minWidth: "100%" }}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={idx === currentIndex}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 px-1 py-2 text-white hover:bg-black/70 z-10"
        aria-label="前のスライドを表示"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 px-1 py-2 text-white hover:bg-black/70 z-10"
        aria-label="次のスライドを表示"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`スライド${idx + 1}を表示`}
          />
        ))}
      </div>
    </div>
  );
}
