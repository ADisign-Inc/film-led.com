"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeInStagger } from "../components/FadeInStagger";
import { BackgroundImages } from "../components/BackgroundImage";
import { ProductsFeatures } from "../components/products/ProductsFeatures";
import { BlogList } from "../components/blog/BlogList";
import { Button } from "../components/Button";
import { Cta } from "../components/Cta";
import { HeroSection } from "../components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/FaqAccordion";

import { mainData } from "../data/main";
import { benefitData } from "../data/benefits";
import { caseData } from "../data/cases";
import { videoList } from "../data/video";
import { flowStep } from "../data/flow";
import { blogData } from "../data/blog";
import { faqData } from "../data/faq";

export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col relative">
        <BackgroundImages />

        <Header />

        <main className="flex-1">
          <HeroSection />

          {/* What's this ? */}
          <section className="mb-28 md:mb-40">
            {/* <FadeInStagger delay={0} staggerDelay={200}> */}
            <h2 className="container max-w-6xl text-3xl sm:text-4xl md:text-6xl text-start after:opacity-0 mb-5">
              <span className="text-xs sm:text-sm md:text-base mb-8">
                {mainData.keyWords}とは？
              </span>
              What's this ?
            </h2>
            {/* </FadeInStagger> */}

            <div className="flex items-end w-5/6 md:w-3/4 ml-auto mb-10 md:mb-14">
              <div className="relative w-full pb-[56.25%] md:pb-[50%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/film01.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="flex items-center md:items-end md:w-3/4 md:ml-auto px-6 md:px-0">
              <div className="max-w-4xl">
                <p className="text-2xl md:text-4xl font-mincho font-bold text-yellow-300 !leading-normal mb-5 md:mb-10">
                  革新的なディスプレイ技術
                </p>
                <div className="[&_p]:text-base md:[&_p]:text-lg">
                  <p className="mb-3 md:mb-4">
                    {mainData.keyWords}
                    は、<strong>ガラスやアクリルなどの透明素材</strong>に
                    <strong>貼り付けて使用</strong>
                    する最先端のディスプレイ技術です。
                  </p>
                  <p className="mb-3 md:mb-4">
                    これにより、空間デザインを損なうことなく、鮮やかな映像を表示でき、視界を遮ることなく、広告やインフォメーションを発信できます。
                  </p>
                  <p className="mb-3 md:mb-4">
                    この技術は、空間を開放的に保ちながらも、
                    <strong>強力な訴求力</strong>を持つ映像を提供します。
                  </p>
                  <p>
                    また、昼と夜で異なる印象を与えることができるのも魅力のひとつです。
                  </p>
                </div>

                <div className="flex justify-start mt-10">
                  <Link href="/blog/about-film-led">
                    <Button>{mainData.keyWords} を詳しく知る</Button>
                  </Link>
                </div>
              </div>
            </div>
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
              <Button>{mainData.keyWords} を詳しく知る</Button>
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
                      className="object-cover w-full"
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
              <Button>活用事例を詳しく見る</Button>
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
                <Button>製品情報を詳しく見る</Button>
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
                    src="/images/products/02.webp"
                    alt="LED Display"
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="w-full lg:w-1/2 relative -z-10 px-8 md:px-10 md:pt-20">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full lg:w-[110%] bg-white/10 -z-10 md:-translate-x-10 -translate-y-8 lg:translate-y-10"></div>
                  <div className="relative flex flex-col justify-end h-full py-5 md:py-12 md:pt-0 lg:py-0 mb-10">
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

              <div className="relative flex flex-col lg:flex-row items-stretch mb-20 md:mb-40">
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full pb-[56.25%] overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${videoList[0].id}?si=TfzwpYAiFIQj3DvJ&autoplay=1&mute=1&loop=1&playlist=${videoList[0].id}&modestbranding=1&showinfo=0&controls=0&rel=0&iv_load_policy=3&origin=https://film-led.com&widget_referrer=https://film-led.com`}
                      title={videoList[0].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      style={{ pointerEvents: "none" }}
                    ></iframe>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 relative -z-10 px-8 md:px-10 md:pt-20">
                  <div className="absolute top-0 left-0 right-0 bottom-0 lg:w-[110%] bg-white/10 -z-10 md:-translate-x-10 -translate-y-8 lg:translate-y-10"></div>
                  <div className="relative flex flex-col justify-end h-full py-5 md:py-12 md:pt-0 lg:py-0 mb-10">
                    <div className="flex items-baseline mb-5 md:mb-14">
                      <h3 className="text-yellow-300 text-4xl md:text-5xl leading-none">
                        Create
                      </h3>
                      <p className="text-yellow-300/80 text-xs md:text-base font-bold leading-none font-mincho ml-3">
                        映像コンテンツ制作
                      </p>
                    </div>

                    <p className="mb-8 md:mb-14">
                      WEB制作現場において培ったバナー・広告動画のノウハウを駆使して、
                      お客様のご予算に合わせた最適な映像コンテンツをご提案し、プロフェッショナルな映像をご提供いたします。
                      <br />
                      簡単なヒアリングでお見積りのみも可能ですので、お気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contents">
                <Button>コンテンツ制作について</Button>
              </Link>
            </div>
          </section>

          {/* Flow */}
          <section className="container max-w-6xl mb-28 md:mb-40">
            <FadeInStagger delay={0} staggerDelay={200}>
              <h2>
                Flow
                <span>導入の流れ</span>
              </h2>
            </FadeInStagger>

            <div className="grid gap-10 md:gap-8 grid-cols-1 md:grid-cols-3 md:pt-10 mb-10 md:mb-14">
              {flowStep.map((step) => (
                <div key={step.id} className="relative">
                  <p className="absolute -top-[1.4rem] md:-top-7 left-0 text-yellow-300 text-3xl md:text-4xl font-bold">
                    {step.step}
                  </p>
                  <div className="absolute top-2 sm:top-5 right-5 md:right-8">
                    <img
                      src={step.icon}
                      alt=""
                      width={90}
                      height={90}
                      className="object-contain w-20 md:w-24 h-20 md:h-24"
                    />
                  </div>

                  <div className="border-[0.5px] border-yellow-300 px-6 md:px-8 py-8 md:py-12">
                    <h3 className="text-start text-yellow-300 mb-5 sm:mb-8">
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
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

            <p className="text-[0.9em] text-center mb-16 md:mb-32">
              ※
              導入完了後も安心してお使いいただけるよう、製品には2年間の保証をお付けしています。
            </p>

            <Link href="/flow">
              <Button>導入の流れを詳しく見る</Button>
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
                    <AccordionContent>
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
              <Button>よくあるご質問一覧へ</Button>
            </Link>
          </section>

          {/* BLOG */}
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
              <Button>ブログ一覧へ</Button>
            </Link>
          </section>

          <Cta />
        </main>

        <Footer />
      </div>
    </>
  );
}
