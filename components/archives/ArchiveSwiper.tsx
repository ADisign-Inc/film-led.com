"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { archiveData } from "../../data/archives";

const mediaList = [
  ...archiveData[0].mediaData.image.map((src) => ({ type: "image", src })),
  ...archiveData[0].mediaData.video.map((src) => ({ type: "video", src })),
].flat();

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
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
  );
};

export default MySwiper;
