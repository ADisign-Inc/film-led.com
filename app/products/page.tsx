import Image from "next/image";
import { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Cta } from "../../components/Cta";
import { mainData } from "../../data/main";
import { productData } from "../../data/products";

export const metadata: Metadata = {
  title: "製品情報 | FILM LED",
  description:
    "FILM LEDの製品情報ページです。LEDビジュアルウォールの特徴や仕様をご紹介します。",
};

export default async function ProductsPage() {
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
        <section className="container max-w-6xl py-28 md:py-36">
          <h2>
            Products
            <span>製品情報</span>
          </h2>

          <section className="mb-10 md:mb-24">
            <h3 className="text-2xl md:text-4xl !leading-loose mb-5 md:mb-20">
              圧倒的インパクトで周囲と差をつける！
              <br />
              <span className="text-yellow-300 font-bold text-4xl md:text-5xl">
                {mainData.keyWords}
              </span>
            </h3>

            <div className="relative w-full pb-[56.25%] bg-transparent overflow-hidden mb-10 md:mb-20">
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover brightness-[0.3]"
                >
                  <source src="/videos/02.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[150%] w-auto"
                >
                  <source src="/videos/02.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-24">
            <h2>
              Features
              <span>製品の特徴</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 [&_h3]:text-yellow-300 md:gap-10 mb-20">
              <div>
                <h3 className="mb-4">COB (Chip on board)</h3>
                <p>
                  LED
                  RGB発光素子を透明PETフィルムに直接搭載する技術で、LEDが小さく薄くなって小さなピッチでも高い透明度を維持することができます。
                  <br />
                  ※最小ピッチ：3.75mm
                </p>
              </div>
              <div>
                <h3 className="mb-4">高い透明性と可視性</h3>
                <p>
                  50~92%の透明度で、コンテンツを送出している時も光の透過ができます。{" "}
                  <br />
                  ディスプレーを点灯してない状態では、設置面の反対側がそのまま見える高い透明度を持ちます。{" "}
                  <br />
                  また、コンテンツ映像と同時に内部の環境または製品を見せることができ、ショッピングモールや展示場などで有用に使うことができます。
                </p>
              </div>
              <div>
                <h3 className="mb-4">優れた熱放出と安定性</h3>
                <p>
                  COBパッケージは、従来のIC内蔵型LEDより発熱が少なく、LEDフィルムの表面温度が周辺温度と約2°C程度高いため、室内での使用に適しています。{" "}
                  <br />
                  また、損傷しやすい敏感な部品の外部露出を最小化し、過酷な環境でも高い安定性を持ちます。
                </p>
              </div>
              <div>
                <h3 className="mb-4">柔軟性</h3>
                <p>
                  透明Filmの上に直接LED素子を搭載し、光学透明粘着剤など柔軟な材料を使用し、曲面設置に非常に容易です。{" "}
                  <br />
                  ※輸送中は平面状態を維持してください。衝撃によってPCBが損傷する恐れがあります。
                </p>
              </div>
              <div>
                <h3 className="mb-4">簡単なインストールと管理</h3>
                <p>
                  フィルムの表面に粘着層があり、別途の器具なしで取り付けたいところへ直接簡単に取り付けることができます。{" "}
                  <br />
                  脱着が容易で、メンテナンス管理も便利です。また、設置環境に合わせて粘着強度を調節して製作することが可能です。
                </p>
              </div>
              <div>
                <h3 className="mb-4">多様な活用シーンへの対応力</h3>
                <p>
                  ショーウィンドウや商業施設、イベント会場、企業受付、展示ブースなど、さまざまな用途に柔軟に対応可能です。
                  <br />
                  デザイン性と情報発信力を両立し、インテリアと調和しながらも高い広告効果を発揮します。
                  <br />
                  屋内外問わず幅広く活用されており、次世代型ディスプレイとして注目を集めています。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-24">
            <h2 className="text-center">
              Example
              <span>活用事例</span>
            </h2>
            <p className="text-center mb-10">
              Youtubeに掲載されているLEDビジョン・デジタルサイネージの事例をご紹介します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative pb-[56.25%]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/EalnRpIz5_0?si=5UO4RQ97XPqqs5bX&autoplay=1&mute=1&loop=1&playlist=EalnRpIz5_0&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative pb-[56.25%]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/XiQNHVCSc7s?si=s2A0x3lD0fKbEiBC&autoplay=1&mute=1&loop=1&playlist=XiQNHVCSc7s&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative pb-[56.25%]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/EEeoLUP7w_k?si=GbBqxkRltKfOwyxq&autoplay=1&mute=1&loop=1&playlist=EEeoLUP7w_k&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative pb-[56.25%]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/IX6B8wZrg2s?si=3lmO6ER-wnhdM89x&autoplay=1&mute=1&loop=1&playlist=IX6B8wZrg2s&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative pb-[56.25%]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zBL0-bmg3jk?si=h2JaOMiSotPBARUF&autoplay=1&mute=1&loop=1&playlist=zBL0-bmg3jk&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="relative pb-[56.25%]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/5hsyfElA7DU?si=yVnsKglI17EhxhUJ&autoplay=1&mute=1&loop=1&playlist=5hsyfElA7DU&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-24">
            <h2>
              Specifications
              <span>製品仕様</span>
            </h2>

            <p className="text-end mb-3">※横にスクロールできます</p>
            <div className="overflow-x-auto shadow-lg relative border border-white/50 bg-black/80">
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
                    {productData.map((product, idx) => (
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
          </section>

          <section className="mb-10 md:mb-24">
            <h2>
              Installation
              <span>設置方法</span>
            </h2>

            <div className="relative w-full pb-[56.25%] bg-transparent overflow-hidden mb-10 md:mb-20">
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover brightness-[0.3]"
                >
                  <source src="/videos/construction/01.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[150%] w-auto"
                >
                  <source src="/videos/construction/01.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="">
              <div className="relative pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/aB1SdfCJpLg?si=o1tEKDG7lwYLUwAN&autoplay=1&mute=1&loop=1&playlist=aB1SdfCJpLg&controls=0"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </section>

        <Cta />
      </main>
      <Footer />
    </div>
  );
}
