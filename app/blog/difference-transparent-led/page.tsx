import Image from "next/image";
import { Metadata } from "next";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { BackgroundImages } from "../../../components/BackgroundImage";
import { Button } from "../../../components/Button";
import { Cta } from "../../../components/Cta";

import { mainData } from "../../../data/main";

export const metadata: Metadata = {
  title: ` | ブログ`,
  description:
    "FILM LEDの製品情報ページです。LEDビジュアルウォールの特徴や仕様をご紹介します。",
};

export default async function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <div className="flex justify-center mb-5 md:mb-12">
          <Image
            src="/images/test01.png"
            alt=""
            width={700}
            height={300}
            className="object-cover"
          />
        </div>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
