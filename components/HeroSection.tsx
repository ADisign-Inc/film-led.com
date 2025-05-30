"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { mainData } from "../data/main";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideos = async () => {
      if (videoRef1.current) {
        try {
          await videoRef1.current.play();
        } catch (error) {
          console.log("Video 1 autoplay failed:", error);
        }
      }
      if (videoRef2.current) {
        try {
          await videoRef2.current.play();
        } catch (error) {
          console.log("Video 2 autoplay failed:", error);
        }
      }
    };

    playVideos();
  }, []);

  return (
    <section className="relative mb-28 md:mb-40">
      <div className="relative w-full pb-[140%] xs:pb-[100%] md:pb-[72.25%] lg:pb-[68.25%] xl:pb-[60.25%] 2xl:pb-[45.25%] bg-transparent overflow-hidden mb-10 md:mb-20">
        <div className="absolute inset-0">
          <video
            ref={videoRef1}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover brightness-[0.2]"
          >
            <source src="/videos/film02.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center md:justify-end">
          <video
            ref={videoRef2}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-[140%] md:h-[150%] w-auto"
          >
            <source src="/videos/film02.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-10 xs:bottom-20 md:bottom-auto top-auto md:top-36 lg:top-40 xl:top-48 2xl:top-48 left-1 xs:left-3 md:left-8 2xl:left-0 right-0 max-w-7xl mx-auto">
        <h1
          className="text-xl sm:text-4xl lg:text-5xl !leading-loose xs:tracking-widest text-center md:text-start 
                     [&_span]:text-3xl [&_span]:sm:text-5xl [&_span]:lg:text-6xl [&_span]:text-yellow-300 [&_span]:font-bold"
        >
          貼るだけ、<span>空間が広告に。</span>
          <br />
          次世代
          <span className="px-2">{mainData.keyWords}</span>で
          <br />
          広告・店舗集客に革新を。
        </h1>

        <p className="text-sm sm:text-lg lg:text-xl font-semibold !leading-loose !tracking-widest [&_span]:text-yellow-300 text-center md:text-start my-10 md:my-12 lg:my-14">
          視界を遮らず、空間と一体化する
          <br className="sm:hidden" />
          <span className="text-xl sm:text-3xl lg:text-4xl font-mincho px-1">
            {mainData.keyWords}
          </span>
          。
          <br />
          国内最安値で圧倒的な集客を実現。
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href={mainData.contact.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              無料相談・お申し込み
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
