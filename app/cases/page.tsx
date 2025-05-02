import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Cta } from "../../components/Cta";
import { Button } from "../../components/Button";
import { mainData } from "../../data/main";
import { caseData } from "../../data/cases";

export default function CasesPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="fixed inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/bg01.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Case Studies
            <span>活用事例</span>
          </h2>

          <section className="bg-white/85 text-black px-5 md:px-16 py-16 md:py-20 mb-10 md:mb-20">
            <div className="mb-10">
              {caseData.map((cases_) => (
                <div className="mb-10 md:mb-16 last:mb-0">
                  <div className="mb-5 md:mb-8">
                    <h4 className="mb-5 md:mb-8">
                      <span className="text-yellow-400 mr-2">●</span>
                      <span className="relative inline-block font-bold">
                        {cases_.title}
                        <span className="absolute bottom-0 left-0 w-full h-4 bg-yellow-400 -z-10"></span>
                      </span>
                    </h4>
                    <p
                      className="px-10"
                      dangerouslySetInnerHTML={{
                        __html: cases_.description.replace(/\n/g, "<br />"),
                      }}
                    ></p>
                  </div>
                  <div className="flex justify-center gap-5 px-10 mb-3">
                    <div className="flex justify-center gap-5 mb-3">
                      <Image
                        src={cases_.image[0]}
                        alt={cases_.title}
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex justify-center gap-5 mb-3">
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
            <div className="bg-gray-300 inline-block px-10 py-4 mt-10">
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
          </section>

          <Link href={mainData.contact.url}>
            <Button>
              無料相談・お申し込みはこちら
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
