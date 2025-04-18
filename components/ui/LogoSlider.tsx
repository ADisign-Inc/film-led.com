"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface LogoSliderProps {
  logos: {
    src: string;
    alt: string;
  }[];
}

export function LogoSlider({ logos }: LogoSliderProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center h-20">
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LogoSlider;
