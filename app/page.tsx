import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackgroundImages } from "../components/BackgroundImage";
import { ProductsFeatures } from "../components/products/ProductsFeatures";
import { BlogList } from "../components/blog/BlogList";
import { Button } from "../components/Button";
import { Cta } from "../components/Cta";
import { ImageSlider } from "../components/ImageSlider";
import { HeroSection } from "../components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";

import { mainData } from "../data/main";
import { benefitData } from "../data/benefits";
import { caseData } from "../data/cases";
import { blogData } from "../data/blog";
import { faqData } from "../data/faq";

export const dynamic = "force-dynamic";

export default async function LandingPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col relative">
        <BackgroundImages />

        <Header />

        <main className="flex-1">
          <HeroSection />

          {/* What's this ? */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              What's this ?<span>{mainData.keyWords}とは？</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-10 mb-16 md:mb-24">
              <div className="w-full md:w-1/2">
                <ImageSlider
                  images={[
                    "/images/about/01.jpg",
                    "/images/about/02.jpg",
                    "/images/about/07.jpg",
                    "/images/about/08.jpg",
                  ]}
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-2xl md:text-3xl font-mincho font-bold text-yellow-300 !leading-normal mb-5 md:mb-10">
                  革新的なディスプレイ技術
                </p>
                <div className="[&_p]:text-base md:[&_p]:text-lg">
                  <p className="mb-5 md:mb-10">
                    {mainData.keyWords}
                    は、ガラスやアクリルなどの透明素材に貼り付けて使用する最先端のディスプレイ技術です。
                  </p>
                  <p className="mb-5 md:mb-10">
                    これにより、空間デザインを損なうことなく、鮮やかな映像を表示でき、視界を遮ることなく、広告やインフォメーションを発信できます。
                  </p>
                  <p>
                    この技術は、空間を開放的に保ちながらも、強力な訴求力を持つ映像を提供します。
                    <br />
                    昼と夜で異なる印象を与えることができるのも魅力です。
                  </p>
                </div>
              </div>
            </div>

            <Link href="/blog/about-film-led">
              <Button>
                {mainData.keyWords} を詳しく知る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* Benefits */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              Benefits<span>導入のメリット</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 md:mb-24">
              {benefitData.map((benefit) => (
                <div key={benefit.id} className="relative mx-auto">
                  <h4 className="text-lg sm:text-lg md:text-2xl text-white text-center">
                    <span className="text-yellow-300">{benefit.title}</span>
                  </h4>

                  <div className="flex gap-10 my-5 md:my-8">
                    {benefit.mediaType === "image" ? (
                      <Image
                        src={benefit.mediaUrl}
                        alt={benefit.title}
                        width={500}
                        height={500}
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="relative w-full pb-[56.25%] overflow-hidden">
                        <div className="absolute inset-0">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className={`w-full h-full object-cover ${
                              benefit.videoType === "sideways"
                                ? "brightness-[0.3]"
                                : ""
                            }`}
                          >
                            <source src={benefit.mediaUrl} type="video/mp4" />
                          </video>
                        </div>
                        {benefit.videoType === "sideways" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="h-[150%] w-auto"
                            >
                              <source src={benefit.mediaUrl} type="video/mp4" />
                            </video>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <p
                    className="px-2"
                    dangerouslySetInnerHTML={{
                      __html: benefit.description.replace(/\n/g, "<br />"),
                    }}
                  ></p>
                </div>
              ))}
            </div>

            <Link href="/services">
              <Button>
                {mainData.keyWords} を詳しく知る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* Case Studies */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              Case Studies
              <span>活用事例</span>
            </h2>

            <div className="grid gap-10 xs:gap-5 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 mb-16 md:mb-24">
              {caseData.slice(0, 3).map((case_) => (
                <div key={case_.id} className="">
                  <div className="flex items-center justify-center mb-3 md:mb-5">
                    <Image
                      src={case_.image[0]}
                      alt={case_.title}
                      width={400}
                      height={400}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-xl md:text-xl text-yellow-300 mb-3">
                    {case_.title}
                  </h3>
                  <p
                    className="px-2"
                    dangerouslySetInnerHTML={{
                      __html: case_.description
                        .replace(/\n/g, "<br />")
                        .replace(/<strong>/g, "<strong>"),
                    }}
                  ></p>
                </div>
              ))}
            </div>

            <Link href="/cases">
              <Button variant="default">
                活用事例について詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* Products */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              Products
              <span>製品情報</span>
            </h2>

            <ProductsFeatures />

            <div className="mt-20 md:mt-28">
              <Link href="/products">
                <Button>
                  製品情報を詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Service */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              Service
              <span>サービス内容</span>
            </h2>

            <div className="mb-10 md:mb-24">
              <div className="relative flex flex-col lg:flex-row items-stretch md:mb-20">
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/about/01.jpg"
                    alt="LED Display"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="w-full lg:w-1/2 relative -z-10 px-8 md:px-10 md:pt-20">
                  <div className="absolute top-0 left-0 right-0 bottom-0 lg:w-[112%] bg-white/15 -z-10 md:-translate-x-10 -translate-y-8 lg:translate-y-10"></div>
                  <div className="relative flex flex-col justify-end h-full py-8 md:py-12 md:pt-0 lg:py-0 mb-10">
                    <div className="flex items-baseline mb-5 md:mb-14">
                      <h3 className="text-yellow-300 text-4xl md:text-5xl leading-none">
                        Sales
                      </h3>
                      <p className="text-yellow-300/80 text-xs md:text-base font-bold leading-none font-mincho ml-3">
                        販売
                      </p>
                    </div>
                    <p className="mb-8 md:mb-14">
                      屋内・屋外用のLEDビジョンを幅広く取り扱っています。
                      <br />
                      シースルービジョンや高解像度屋内LEDビジョン、一体型LEDビジョンなど、様々なニーズに応える最先端の製品と、最適な映像ソリューションをご提案しています。
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col lg:flex-row items-stretch">
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/about/02.jpg"
                    alt="LED Display"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="w-full lg:w-1/2 relative -z-10 px-8 md:px-10 md:pt-20">
                  <div className="absolute top-0 left-0 right-0 bottom-0 lg:w-[112%] bg-white/15 -z-10 md:-translate-x-10 -translate-y-8 lg:translate-y-10"></div>
                  <div className="relative flex flex-col justify-end h-full py-8 md:py-12 md:pt-0 lg:py-0 mb-10">
                    <div className="flex items-baseline mb-5 md:mb-14">
                      <h3 className="text-yellow-300 text-4xl md:text-5xl leading-none">
                        Create
                      </h3>
                      <p className="text-yellow-300/80 text-xs md:text-base font-bold leading-none font-mincho ml-3">
                        映像コンテンツ制作
                      </p>
                    </div>

                    <p className="mb-8 md:mb-14">
                      お客様のご予算に合わせた最適な映像コンテンツをご提案し、プロフェッショナルな映像をご提供いたします。
                      <br />
                      簡単なヒアリングでお見積りのみも可能ですので、お気軽にお問い合わせください。
                    </p>

                    <Link href="/products">
                      <Button variant="default">
                        コンテンツ制作について
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flow */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              Flow
              <span>導入の流れ</span>
            </h2>

            <div className="grid gap-10 md:gap-8 grid-cols-1 md:grid-cols-3 md:pt-10 mb-10 md:mb-14">
              <div className="relative">
                <p className="absolute -top-[1.4rem] md:-top-7 left-0 text-yellow-300 text-3xl md:text-4xl font-bold">
                  Step 1
                </p>
                <div className="absolute top-5 right-5 md:right-8">
                  <Image
                    src="/images/icons/step01.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                    priority
                  />
                </div>
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12">
                  <h3 className="text-start text-yellow-300 mb-8">
                    お問い合わせ
                  </h3>
                  <p>
                    24時間無料でお受付しています。ご要望をヒアリングし、お客様に最適な製品をご提案いたします。
                  </p>
                </div>
              </div>

              <div className="relative">
                <p className="absolute -top-[1.4rem] md:-top-7 left-0 text-yellow-300 text-3xl md:text-4xl font-bold">
                  Step 2
                </p>
                <div className="absolute top-5 right-5 md:right-8">
                  <Image
                    src="/images/icons/step02.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                    priority
                  />
                </div>
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12">
                  <h3 className="text-start text-yellow-300 mb-8">ご発注</h3>
                  <p>
                    お見積もりやご提案内容にご納得いただけましたら、ご発注手続きを進めさせていただきます。
                  </p>
                </div>
              </div>

              <div className="relative">
                <p className="absolute -top-[1.4rem] md:-top-7 left-0 text-yellow-300 text-3xl md:text-4xl font-bold">
                  Step 3
                </p>
                <div className="absolute top-5 right-5 md:right-8">
                  <Image
                    src="/images/icons/step03.svg"
                    alt=""
                    width={90}
                    height={90}
                    className="object-contain w-20 md:w-24 h-20 md:h-24"
                    priority
                  />
                </div>
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12">
                  <h3 className="text-start text-yellow-300 mb-8">
                    導入・施工
                  </h3>
                  <p>
                    弊社の専門スタッフが現地で施工を行います。安全・確実な導入を第一に、丁寧にご対応いたします。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-5xl h-12 md:h-14 mx-auto text-white text-center flex items-center justify-center font-bold mb-6 md:mb-10">
              <div
                className="absolute inset-0 0"
                style={{
                  clipPath: "polygon(0 0, 97% 0, 100% 50%, 97% 100%, 0 100%)",
                  backgroundImage:
                    "linear-gradient(to right, #000000 0%, #000000 2%, #14532d 40%, #facc15 100%)",
                }}
              ></div>
              <span className="z-10 text-lg sm:text-xl md:text-2xl font-mincho font-bold tracking-wider px-2">
                ご発注から最短20日で導入完了
              </span>
            </div>

            <p className="text-xs md:text-sm text-center mb-16 md:mb-32">
              ※
              導入完了後も安心してお使いいただけるよう、製品には2年間の保証をお付けしています。
            </p>

            <Link href="/flow">
              <Button variant="default">
                導入の流れを詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* Faq */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              FAQ
              <span>よくあるご質問</span>
            </h2>

            <div className="max-w-3xl mx-auto mb-24">
              <Accordion type="multiple" className="w-full">
                {faqData.slice(0, 3).map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg">
                      {item.answer.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.answer.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Link href="/faq">
              <Button variant="default">
                よくある質問を詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* LED BLOG */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <h2>
              Blog
              <span>ブログ</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mb-28">
              {blogData
                .filter((post) => post.isVisible)
                .slice(0, 3)
                .map((post) => (
                  <div key={post.id}>
                    <BlogList post={post} />
                  </div>
                ))}
            </div>

            <Link href="/blog">
              <Button variant="default">
                ブログ一覧へ
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* CTA */}
          <Cta />
        </main>

        <Footer />
      </div>
    </>
  );
}
