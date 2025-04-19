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
        <Image
          src="/images/bg01.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <Header />

      <main className="flex-1">
        <section className="container max-w-5xl py-28 md:py-40">
          <h2>
            Products
            <span>製品情報</span>
          </h2>

          <section className="mb-5">
            <h3 className="text-4xl md:text-5xl mb-5 md:mb-20">
              圧倒的インパクト！{mainData.keyWords}
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
                  <source src="/videos/06.mp4" type="video/mp4" />
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
                  <source src="/videos/06.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
              <div key="high-brightness" className="animate-fadeInUp">
                <h3 className="mb-3">高輝度パネル</h3>
                <p>
                  液晶ディスプレイと比較して非常に明るいため、部屋を暗くすることなく画面の隅々まで発色の良い映像表現が可能です。
                </p>
              </div>
              <div
                key="color-reproduction"
                className="animate-fadeInUp delay-100"
              >
                <h3 className="mb-3">色調再現性</h3>
                <p>
                  プロジェクターや液晶ディスプレイとは違い、LED一粒一粒を発光させているため、色の再現性が高く、よりリアリティのある映像を実感できます。
                </p>
              </div>
              <div
                key="seamless-display"
                className="animate-fadeInUp delay-200"
              >
                <h3 className="mb-3">シームレスな大画面</h3>
                <p>
                  液晶ディスプレイを複数組み合わせると画面端の枠による違和感が生じますが、LEDパネルは画面の繋ぎ目なく組み上げるため、大迫力の映像を再現することが可能です。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-5 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <div className="relative pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/iVgYeIn_QgY?si=xc_QGA86iySh4G9C"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <h2 className="mb-4 animate-fadeInUp">LEDビジュアルウォール</h2>
                <p>自社でLEDヴィジュアルウォールを展示した時の映像です。</p>
                <p>
                  サイネージとウェブカメラを利用したスロットゲームを自社で制作してみました！来場者の方にも遊んで頂き、イベントなどで使ってみたいと喜んで頂けました！弊社では、映像だけでなくプログラムによるコンテンツもご提供可能です！
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/about/01.jpg"
                    className="w-full"
                    alt="Customer Image 1"
                  />
                  <img
                    src="/images/about/01.jpg"
                    className="w-full"
                    alt="Customer Image 2"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5 md:mb-20">
            <div className="mb-5">
              <h2 className="text-center">Example</h2>
              <div className="text-center">
                Youtubeに掲載されているLEDビジョン・デジタルサイネージの事例をご紹介します。
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/aR5HAAkCVeo?&autoplay=1&mute=1&loop=1&playlist=aR5HAAkCVeo&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="relative pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/qqLldBLY7-4?&autoplay=1&mute=1&loop=1&playlist=qqLldBLY7-4&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="relative pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/F2qP1P5oMFM?&autoplay=1&mute=1&loop=1&playlist=F2qP1P5oMFM&controls=0"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5 md:mb-20">
            <h2>
              Specifications
              <span>製品仕様</span>
            </h2>

            <p>※横にスクロールできます</p>
            <div className="overflow-x-auto rounded-lg shadow-lg relative">
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

          <section className="mb-5 md:mb-20">
            <h2>
              Features
              <span>製品の特徴</span>
            </h2>
          </section>

          <section className="mb-5 md:mb-20">
            <h2>
              Installation
              <span>設置方法</span>
            </h2>
          </section>
        </section>

        <Cta />
      </main>
      <Footer />
    </div>
  );
}
