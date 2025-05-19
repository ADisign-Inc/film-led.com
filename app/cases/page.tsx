import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Cta } from "../../components/Cta";
import { Button } from "../../components/Button";

import { mainData } from "../../data/main";
import { caseData } from "../../data/cases";

export const metadata: Metadata = {
  title: `活用事例 `,
  description:
    "FILM LEDの製品情報ページです。LEDビジュアルウォールの特徴や仕様をご紹介します。",
};

export default function CasesPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Case Studies
            <span>活用事例</span>
          </h2>

          <section className="mb-20 md:mb-28">
            <div className="mb-10 md:mb-20">
              {caseData.map((cases_) => (
                <div className="mb-12 sm:mb-20 md:mb-28 last:mb-0">
                  <h4 className="mb-8 md:mb-12">
                    <span className="text-yellow-400 mr-1">●</span>
                    <span className="relative inline-block font-bold px-1">
                      {cases_.title}
                      <span className="absolute bottom-0 left-0 w-full h-4 bg-yellow-400/15 -z-10"></span>
                    </span>
                  </h4>

                  <p
                    className="md:pl-6 mb-8 md:mb-12"
                    dangerouslySetInnerHTML={{
                      __html: cases_.description,
                    }}
                  ></p>

                  {cases_.link && (
                    <div className="my-8 md:my-12">
                      <Link
                        href={cases_.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          {cases_.link.text}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  )}

                  <div className="flex justify-center gap-2 md:gap-5 md:pl-6 mb-3">
                    <div>
                      <Image
                        src={cases_.image[0]}
                        alt={cases_.title}
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Image
                        src={cases_.image[1]}
                        alt={cases_.title}
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-white/10 inline-block px-10 py-4">
                <p>
                  関連記事 :
                  <span className="ml-2">
                    <a
                      href="/blog/about-film-led"
                      className="border-b border-black hover:border-gray-500 transition-colors"
                    >
                      {mainData.keyWords}とは？主な特徴と技術的な仕組み
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </section>

          <Link href={mainData.contact.url}>
            <Button>
              無料相談・お申し込み
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </section>

        {/* CTA */}
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
