import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
import { ProductsFeatures } from "../../components/products/ProductsFeatures";

import { mainData } from "../../data/main";
import { productSpecData } from "../../data/products-spec";
import { Installation } from "../../data/installation";

export const metadata: Metadata = {
  title: `製品情報`,
  description:
    "FILM LEDの製品情報ページです。LEDビジュアルウォールの特徴や仕様をご紹介します。",
};

export default async function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-36">
          <h2>
            Products
            <span>製品情報</span>
          </h2>

          <section className="mb-28 md:mb-40">
            <h3 className="text-2xl md:text-3xl lg:text-4xl md:!leading-loose mb-8 md:mb-10">
              圧倒的なインパクトで
              <br className="xs:hidden" />
              周囲と差をつける。
            </h3>

            <h3 className="text-3xl md:text-4xl lg:text-5xl text-yellow-300 text-center font-bold font-mincho mb-12 md:mb-20">
              {mainData.keyWords}ビジョン
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
                  <source src="/videos/film02.mp4" type="video/mp4" />
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
                  <source src="/videos/film02.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>

          <section className="mb-28 md:mb-40">
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold [&_span]:text-yellow-300 !leading-relaxed font-mincho mb-8 md:mb-12">
                <span>視界を遮らない。</span>
                <br />
                <span>空間と調和</span>
                しながら、
                <span>強烈な印象を残す</span>
                、次世代型LEDビジョン。
              </p>

              <p>
                {mainData.keyWords}
                ディスプレイは、ガラス面に直接設置できる超薄型フィルム製のLEDビジョンです。
                <br />
                従来の大型サイネージと異なり、高い透明性（最大92%）を維持しながらも、映像表現はフルカラーで鮮やか。
                <br />
                内装や外観デザインを損なわず、昼夜を問わず印象的な映像演出が可能です。
                <br />
                LED素子は透明PETフィルム上に直接実装されており、軽量かつ柔軟性に優れた構造を実現。
                <br />
                曲面ガラスや狭いスペースにも柔軟に対応できます。
                <br />
                <br />
                また、COB（Chip On
                Board）技術により、小さなピッチでも高い透明度と安定性を両立しています。
                <br />
                粘着フィルムで直接貼り付けられるため、設置は非常にシンプル。
                <br />
                電源とコンテンツ送信機器を接続すれば、すぐに映像配信が可能です。
                <br />
                コンテンツの変更もPCやスマートフォンから簡単に行えます。
                <br />
                <br />
                屋外・屋内問わず、店舗のウィンドウ、ショッピングモール、展示会、イベント空間など、あらゆるシーンでインパクトある広告展開を実現。
                <br />
                透明だからこそ可能になる、“空間の中に溶け込む広告”という新しい体験を提供します。
                <br />
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex justify-center">
                <Image
                  src="/images/products01.png"
                  alt={`${mainData.keyWords}`}
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/products/02.webp.png"
                  alt={`${mainData.keyWords}`}
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mb-28 md:mb-40">
            <h2>
              Features
              <span>製品の特徴</span>
            </h2>

            <ProductsFeatures />
          </section>

          <section className="mb-28 md:mb-40">
            <h2 className="text-center">
              Example
              <span>活用事例</span>
            </h2>

            <p className="text-center mb-12 md:mb-20">
              Youtubeに掲載されている{mainData.keyWords}
              ・デジタルサイネージの事例をご紹介します。
              <br />
              <br />
              <span className="text-[0.9em]">
                ※当サイトでは、より分かりやすい情報提供のため、YouTube動画を引用・埋め込み形式で掲載しています。著作権は各権利者に帰属します。
              </span>
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

          <section className="mb-28 md:mb-40">
            <h2>
              Specifications
              <span>製品仕様</span>
            </h2>

            <p className="text-end mb-3">※ 表は横にスクロールできます</p>

            <div className="overflow-x-auto shadow-lg relative border border-white/20 bg-black/80">
              <div className="min-w-[1200px]">
                <table className="w-full table-auto border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-left font-bold text-yellow-300 [&_th]:text-sm [&_th]:md:text-base [&_th]:lg:text-xl [&_th]:font-bold [&_th]:px-4 [&_th]:md:px-6 [&_th]:md:py-2 [&_span]:text-xs [&_span]:md:text-sm">
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
                      <th>
                        輝度
                        <br />
                        <span>Brightness</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="[&_td]:px-4 [&_td]:md:px-6 [&_td]:py-2">
                    {productSpecData.map((product, idx) => (
                      <tr
                        key={product.model}
                        className={idx % 2 === 0 ? "bg-white/10" : "bg-white/5"}
                      >
                        <td className="text-base md:text-lg font-bold">
                          {product.model}
                        </td>
                        <td>{product.price}</td>
                        <td>{product.pitch} mm</td>
                        <td>{product.maxSize} mm</td>
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

          <section className="mb-28 md:mb-40">
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

            {/* <div className=""> これ綺麗 動画編集して欲しい
              <div className="relative pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/aB1SdfCJpLg?si=o1tEKDG7lwYLUwAN&autoplay=1&mute=1&loop=1&playlist=aB1SdfCJpLg&controls=0"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div> */}

            <div className="max-w-3xl mx-auto">
              <ul className="grid grid-cols-1 gap-4">
                {Installation.map((installation) => (
                  <li>
                    <div key={installation.number} className="p-4 md:p-8 ">
                      <h4 className="mb-3 md:mb-4">
                        {installation.number}.
                        <span className="text-yellow-300 pl-3">
                          {installation.title}
                        </span>
                      </h4>

                      <p className="indent-6">{installation.description}</p>
                    </div>

                    {/* <div className="w-[0.5px] h-10 md:h-16 bg-gray-600 mx-auto" /> */}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>

        <div>
          <Link href="/">
            <Button>TOPへ戻る</Button>
          </Link>
        </div>

        <Cta />
      </main>
      <Footer />
    </div>
  );
}
