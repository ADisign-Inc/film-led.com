import Image from "next/image";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Cta } from "../../components/Cta";
import { ProductsFeatures } from "../../components/products/ProductsFeatures";

import { mainData } from "../../data/main";
import { productSpecData } from "../../data/products-spec";
import { Installation } from "../../data/installation";

export const metadata: Metadata = {
  title: `製品情報 | ${mainData.siteName} `,
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
              <br />
            </h3>

            <p className="text-3xl md:text-4xl lg:text-5xl text-yellow-300 text-center font-bold font-mincho mb-12 md:mb-20">
              {mainData.keyWords}
            </p>

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
              ※当サイトでは、より分かりやすい情報提供のため、YouTube動画を引用・埋め込み形式で掲載しています。著作権は各権利者に帰属します。
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
              <ul>
                {Installation.map((installation) => (
                  <li>
                    <div
                      key={installation.number}
                      className="p-4 md:p-8 border border-gray-600"
                    >
                      <h4 className="text-yellow-300 mb-3 md:mb-4">
                        {installation.number}. {installation.title}
                      </h4>
                      <p className="indent-6">{installation.description}</p>
                    </div>
                    <div className="w-[0.5px] h-10 md:h-16 bg-gray-600 mx-auto" />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>

        <Cta />
      </main>
      <Footer />
    </div>
  );
}
