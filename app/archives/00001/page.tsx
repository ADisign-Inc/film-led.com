import { X, Check } from "lucide-react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { BackgroundImages } from "../../../components/BackgroundImage";
import { Button } from "../../../components/Button";
import { Cta } from "../../../components/Cta";
import { ArchiveHeader } from "../../../components/archives/ArchiveHeader";

import { mainData } from "../../../data/main";
import { archiveData } from "../../../data/archives";

export const metadata: Metadata = {
  title: `${mainData.keyWords}とは？ | 導入実績 | ${mainData.siteName} `,
  description:
    "FILM LEDの製品情報ページです。LEDビジュアルウォールの特徴や仕様をご紹介します。",
};

// SwiperはSSR非対応なので dynamic import（ssr: false）推奨
const MySwiper = dynamic(
  () => import("../../../components/archives/ArchiveSwiper"),
  { ssr: false }
);

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <nav className="container max-w-7xl pt-20 md:pt-32">
        <ul className="flex items-center gap-2 [&_li]:text-sm [&_li]:text-gray-300">
          <li className="hover:text-white hover:underline">
            <Link href="/">TOP</Link>
          </li>
          <li>＞</li>
          <li className="hover:text-white hover:underline">
            <Link href="/archives">導入実績</Link>
          </li>
          <li>＞</li>
          <li className="text-white">{archiveData[0].clientName}</li>
        </ul>
      </nav>

      <main className="flex-1 [scroll-behavior:smooth]">
        <div className="container max-w-7xl py-10 md:py-20">
          <div className="flex flex-col md:flex-row gap-4">
            <article className="blog w-full md:w-3/4 mb-10 md:mb-20">
              <section className="mb-20 md:mb-28">
                <h3 className="text-yellow-300">{archiveData[0].clientName}</h3>

                <p className="!text-xs mb-5 md:mb-14">
                  {archiveData[0].category.map((cat, index) => (
                    <span
                      key={index}
                      className="bg-gray-400/40 text-yellow-300 font-medium !text-xs px-1.5 py-1 rounded mr-1.5"
                    >
                      {cat}
                    </span>
                  ))}
                </p>

                <div className="md:w-1/2 space-y-4 mb-12 md:mb-20">
                  <div className="flex items-center gap-3 border-b border-gray-300 pb-1">
                    <div className="flex justify-center">
                      <Image
                        src="/images/icons/date.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <p>施工完了日：{archiveData[0].date}</p>
                  </div>

                  <div className="flex items-center gap-3 border-b border-gray-300 pb-1">
                    <div className="flex justify-center">
                      <Image
                        src="/images/icons/place.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <p>設置場所：{archiveData[0].place}</p>
                  </div>

                  <div className="flex items-center gap-3 border-b border-gray-300 pb-1">
                    <div className="flex justify-center">
                      <Image
                        src="/images/icons/products.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <p>製品名：{archiveData[0].productName}</p>
                  </div>
                </div>

                <div className="mb-12 md:mb-20">
                  <MySwiper />
                </div>

                <p className="mb-10 md:mb-16">{archiveData[0].description}</p>
              </section>
            </article>

            <div className="w-full md:w-1/4">
              {archiveData.map((post) => (
                <ArchiveHeader key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 text-center">
          <Link href="/">
            <Button variant="default">
              TOPへ
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
