"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { archiveData } from "../../data/archives";

const mediaList = [
  ...archiveData[0].mediaData.video.map((src) => ({ type: "video", src })),
  ...archiveData[0].mediaData.image.map((src) => ({ type: "image", src })),
].flat();

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full h-[80%]"
      >
        {mediaList.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Slide ${index + 1}`} />
            ) : (
              <div className="relative w-full pb-[56.25%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full h-[20%] box-border pt-5"
      >
        {mediaList.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Slide ${index + 1}`} />
            ) : (
              <div className="relative w-full pb-[56.25%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
