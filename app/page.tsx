import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlogList } from "../components/blog/BlogList";
import { productData, Product } from "../data/products";
import { Button } from "../components/Button";
import { Cta } from "../components/Cta";
import { ImageSlider } from "../components/ImageSlider";
import { LogoSlider } from "../components/LogoSlider";
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
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/bg01.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        <Header />

        <main className="flex-1">
          {/* Fv */}
          <section className="py-20 relative mb-20">
            <div className="absolute inset-0 -z-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/01.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="container relative z-10 mb-20">
              <div className="max-w-6xl mx-auto">
                <div className="mt-20 mb-10">
                  <h1 className="text-4xl sm:text-5xl md:text-5xl !leading-loose tracking-widest font-bold [&_span]:text-yellow-300 [&_span]:font-bold mb-10">
                    最先端技術で<span>視界を遮らず、</span>
                    <br />
                    <span>広告</span>・<span>店舗集客</span>に革新を。
                    <br />
                    屋外・大型対応の
                    <span>{mainData.keyWords}</span>
                    、
                    <br />
                    <span>最安値</span>でご用意。
                  </h1>

                  {/* <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-10">
                    {mainData.keyWords}【販売】
                  </p> */}
                  <p className="text-xl md:text-2xl font-semibold !leading-loose !tracking-widest">
                    ガラス面を広告空間に。
                    <br />
                    シンプルな空間に、ダイナミックな演出で圧倒的な集客効果を実現します。
                  </p>
                </div>

                <Link href={mainData.contact.url}>
                  <Button>
                    無料相談・お申し込みはこちら
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* <LogoSlider
              logos={[
                { src: "/images/logo-light.svg", alt: "Logo 1" },
                { src: "/images/logo-light.svg", alt: "Logo 2" },
                { src: "/images/logo-light.svg", alt: "Logo 3" },
                { src: "/images/logo-light.svg", alt: "Logo 4" },
                { src: "/images/logo-light.svg", alt: "Logo 5" },
              ]}
            /> */}
          </section>

          {/* What's this ? */}
          <section className="container max-w-6xl py-10 md:py-20 mb-10">
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
                <p className="text-3xl md:text-4xl font-bold !leading-normal mb-5 md:mb-10">
                  革新的な
                  <br className="xs:hidden" />
                  ディスプレイ技術
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

            <div className="flex justify-center">
              <Link href="/blog/aboutFilmLed">
                <Button>
                  {mainData.keyWords} について詳しく知る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Benefits */}
          <section className="container max-w-6xl py-10 md:py-20 mb-10">
            <h2>
              Benefits<span>導入のメリット</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-black mb-16 md:mb-24">
              {benefitData.map((benefit) => (
                <div
                  key={benefit.id}
                  className="relative mx-auto bg-white/90 py-4 md:py-6 px-4 md:px-8"
                >
                  <p
                    className="relative inline-block box-border w-[calc(100%+24px)] ml-[-2.3rem] md:ml-[-3.2rem] px-5 py-2.5 text-lg sm:text-lg md:text-xl text-white font-bold text-center mb-5
                             before:absolute before:top-full before:left-0 before:content-[''] before:border-b-[15px] before:border-b-transparent before:border-r-[20px] before:border-r-gray-700"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #000000 0%, #000000 2%, #14532d 40%, #facc15 100%)",
                    }}
                  >
                    {benefit.title}
                  </p>
                  <div className="flex gap-10 mb-5">
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
                  <p className="text-black">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/services">
                <Button>
                  {mainData.keyWords} について詳しく知る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Case Studies */}
          <section className="container max-w-6xl bg-white/15 px-5 md:px-10 py-14 md:py-20 mb-10">
            <h2>
              Case Studies
              <span>活用事例</span>
            </h2>

            <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mb-16 md:mb-24">
              {caseData.slice(0, 3).map((case_) => (
                <div key={case_.id} className="">
                  <div className=" flex items-center justify-center mb-3 md:mb-5">
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
                  <p className="px-3">{case_.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/cases">
                <Button variant="default">
                  活用事例について詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Product Lineup */}
          <section className="container max-w-6xl py-10 md:py-20 mb-10">
            <h2>
              Product
              <span>製品情報</span>
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-lg relative mb-20">
              <div className="min-w-[1200px]">
                <table className="w-full table-auto border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-left font-bold text-yellow-300 [&_th]:text-xl [&_th]:px-4 [&_th]:md:px-6 [&_th]:py-2 [&_span]:text-sm">
                      <th>
                        型名
                        <br />
                        <span>Model</span>
                      </th>
                      <th>
                        販売価格
                        <br />
                        <span>Sales Price</span>
                      </th>
                      <th>
                        ピッチ
                        <br />
                        <span>Pitch</span>
                      </th>
                      <th>
                        最大サイズ
                        <br />
                        <span>Max Size</span>
                      </th>

                      <th>
                        消費電力
                        <br />
                        <span>Power Consumption</span>
                        <div className="flex gap-1 mt-2">
                          <div className="w-1/2">
                            <p className="text-white">最大</p>
                          </div>
                          <div className="w-1/2">
                            <p className="text-white">平均</p>
                          </div>
                        </div>
                      </th>
                      <th className="px-4 py-2">
                        輝度
                        <br />
                        <span>Brightness</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_td]:px-4 [&_td]:md:px-6 [&_td]:py-2">
                    {productData.map((product: Product, idx: number) => (
                      <tr
                        key={product.model}
                        className={idx % 2 === 0 ? "bg-white/15" : "bg-white/5"}
                      >
                        <td className="text-base md:text-lg font-bold">
                          {product.model}
                        </td>
                        <td>{product.price}</td>
                        <td>{product.pitch} mm</td>
                        <td>{product.maxSize} Mm</td>
                        <td className="flex gap-1">
                          <div className="w-1/2">
                            {product.powerConsumption.max} W/㎡
                          </div>
                          <div className="w-1/2">
                            {product.powerConsumption.average} W/㎡
                          </div>
                        </td>
                        <td>{product.brightness} cd/㎡</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/products">
                <Button>
                  製品情報を詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Service */}
          <section className="py-10 md:py-20 mb-10">
            <h2>
              Service
              <span>サービス内容</span>
            </h2>

            <div className="mb-10 md:mb-24">
              <div className="relative flex flex-col lg:flex-row items-stretch mb-10 md:mb-20">
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/about/01.jpg"
                    alt="LED Display"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="w-full lg:w-1/2 relative -z-10 px-8 md:pt-20">
                  <div className="absolute top-0 left-0 right-0 bottom-0 lg:w-[112%] bg-white/15 -z-10 translate-x-4 -translate-y-4 lg:-translate-x-20 md:translate-y-10 lg:translate-y-20"></div>
                  <div className="relative flex flex-col justify-end h-full py-12 md:pt-0 lg:py-0">
                    <div className="flex items-baseline mb-8 md:mb-14">
                      <h3 className="text-yellow-300 text-4xl md:text-5xl font-bold leading-none">
                        販売
                      </h3>
                      <p className="text-yellow-300/80 text-xl md:text-2xl font-bold leading-none ml-3">
                        Sales
                      </p>
                    </div>
                    <p className="mb-10 md:mb-14">
                      屋内・屋外用のLEDビジョンを幅広く取り扱っています。
                      <br />
                      シースルービジョンや高解像度屋内LEDビジョン、一体型LEDビジョンなど、様々なニーズに応える最先端の製品と、最適な映像ソリューションをご提案しています。
                    </p>
                    <div>
                      <Link href="/services">
                        <Button variant="default">
                          販売について詳しく見る
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
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

                <div className="w-full lg:w-1/2 relative -z-10 px-8 md:pt-20">
                  <div className="absolute top-0 left-0 right-0 bottom-0 lg:w-[112%] bg-white/15 -z-10 translate-x-4 -translate-y-4 lg:-translate-x-20 md:translate-y-10 lg:translate-y-20"></div>
                  <div className="relative flex flex-col justify-end h-full py-12 md:pt-0 lg:py-0">
                    <div className="flex items-baseline mb-8 md:mb-14">
                      <h3 className="text-yellow-300 text-2xl md:text-4xl font-bold leading-none">
                        映像コンテンツ制作
                      </h3>
                      <p className="text-yellow-300/80 text-lg md:text-xl font-bold leading-none ml-3">
                        Create
                      </p>
                    </div>
                    <p className="mb-10 md:mb-14">
                      お客様のご予算に合わせた最適な映像コンテンツをご提案し、プロフェッショナルな映像をご提供いたします。
                      <br />
                      簡単なヒアリングでお見積りのみも可能ですので、お気軽にお問い合わせください。
                    </p>
                    <div>
                      <Link href="/services">
                        <Button variant="default">
                          コンテンツ制作について詳しく見る
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flow */}
          <section className="container max-w-6xl py-10 md:py-20 mb-10">
            <h2>
              Flow
              <span>導入の流れ</span>
            </h2>

            <div className="grid gap-10 md:gap-8 grid-cols-1 md:grid-cols-3 pt-14 mb-10">
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
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 shadow-[0_0_15px_rgba(255,255,255,0.6)]">
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
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 shadow-[0_0_15px_rgba(255,255,255,0.6)]">
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
                <div className="border-[0.5px] border-yellow-300 p-6 md:px-8 py-12 shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  <h3 className="text-start text-yellow-300 mb-8">
                    導入・施工
                  </h3>
                  <p>
                    弊社の専門スタッフが現地で施工を行います。安全・確実な導入を第一に、丁寧にご対応いたします。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-5xl h-16 mx-auto text-white text-center flex items-center justify-center font-bold mb-3">
              <div
                className="absolute inset-0 0"
                style={{
                  clipPath: "polygon(0 0, 97% 0, 100% 50%, 97% 100%, 0 100%)",
                  backgroundImage:
                    "linear-gradient(to right, #000000 0%, #000000 2%, #14532d 40%, #facc15 100%)",
                }}
              ></div>
              <span className="z-10 text-xl md:text-2xl tracking-wider px-2">
                ご注文から最短20日で導入完了！
              </span>
            </div>

            <p className="text-center mb-16 md:mb-32">
              ※導入完了後も安心してお使いいただけるよう、製品には2年間の保証をお付けしています。
            </p>

            <div className="flex justify-center">
              <Link href="/blog">
                <Button variant="default">
                  導入の流れを詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Faq */}
          <section className="container max-w-6xl py-10 md:py-20 mb-10">
            <h2>
              Faq
              <span>よくあるご質問</span>
            </h2>

            <div className="max-w-3xl mx-auto mb-24">
              <Accordion type="multiple" className="w-full">
                {faqData.slice(0, 3).map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-yellow-300">
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

            <div className="flex justify-center">
              <Link href="/blog">
                <Button variant="default">
                  よくある質問を詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* LED BLOG */}
          <section className="container max-w-6xl mb-10">
            <h2>
              LED BLOG
              <span>LED ブログ</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 md:mb-20">
              {blogData.slice(0, 3).map((post) => (
                <div key={post.id}>
                  <BlogList post={post} />
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/blog">
                <Button variant="default">
                  LED ブログ一覧へ
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <Cta />
        </main>

        <Footer />
      </div>
    </>
  );
}
