import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { mainData } from "../data/main";

export function HeroSection() {
  return (
    <section className="relative mb-28 md:mb-40">
      <div className="relative w-full pb-[140%] xs:pb-[100%] md:pb-[58.25%] lg:pb-[64.25%] xl:pb-[48.25%] 2xl:pb-[45.25%] bg-transparent overflow-hidden mb-10 md:mb-20">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-[0.2]"
          >
            <source src="/videos/film02.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center md:justify-end">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[140%] md:h-[150%] w-auto"
          >
            <source src="/videos/film02.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-10 xs:bottom-20 md:bottom-auto top-auto md:top-24 lg:top-32 xl:top-40 2xl:top-48 left-3 xs:left-5 sm:left-10 xl:left-0 right-0 max-w-7xl mx-auto">
        <h1 className="text-[29px] xs:text-3xl sm:text-5xl lg:text-6xl !leading-relaxed 2xl:!leading-loose xs:tracking-widest font-bold text-center md:text-start [&_span]:text-yellow-300 [&_span]:font-bold">
          貼るだけ、<span>空間が広告に。</span>
          <br />
          広告・店舗集客に革新を。
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl font-semibold !leading-loose !tracking-widest [&_span]:text-yellow-300 text-center md:text-start my-8 md:my-10 lg:my-14">
          視界を遮らず、空間と一体化する
          <br className="sm:hidden" />
          <span>{mainData.keyWords}。</span>
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
