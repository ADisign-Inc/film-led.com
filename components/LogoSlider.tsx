"use client";

import React from "react";
import Image from "next/image";
import "../styles/logo-slider.css";

// ロゴ画像のパス
const logoSlides = [
  "/images/logo-light.svg",
  "/images/logo-light.svg",
  "/images/logo-light.svg",
  "/images/logo-light.svg",
  "/images/logo-light.svg",
  "/images/logo-light.svg",
  "/images/logo-light.svg",
];

export default function LogoSlider() {
  const logos = [...logoSlides, ...logoSlides];

  return (
    <div className="w-full bg-white/60 py-3 overflow-hidden relative">
      <div className="w-full overflow-hidden relative">
        <div className="flex slider-track">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[180px] md:w-[200px] px-8 box-border"
            >
              <div className="relative w-full h-16">
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  fill
                  className="object-contain object-left"
                  priority={true}
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
