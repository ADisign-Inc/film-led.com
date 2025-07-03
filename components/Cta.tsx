"use client";

import { getAnalytics, logEvent } from "firebase/analytics";
import Image from "next/image";
import Link from "next/link";

import { mainData } from "../data/main";

// Analytics クリックイベント 計測
const handleClick = () => {
  const analytics = getAnalytics();
  logEvent(analytics, "button_click", {
    button_name: "link_url",
  });
};

const products = [
  {
    id: "01",
    enTitle: "LED Visual Wall Signage",
    title: "LEDヴィジュアルウォール",
    image: "/images/products/visual-wall-signage.webp",
    url: "https://adisignage.com/product_0.html",
  },
  {
    id: "02",
    enTitle: "See-Through LED Signage",
    title: "透明シースルー LED",
    image: "/images/products/see-through-signage.webp",
    url: "https://adisignage.com/product_1.html",
  },
  {
    id: "03",
    enTitle: "Digital Signage Poster",
    title: "LEDビジョンポスター",
    image: "/images/products/poster-signage.webp",
    url: "https://adisignage.com/product_2.html",
  },
  {
    id: "04",
    enTitle: "LED Stand Signage",
    title: "LEDスタンドサイネージ",
    image: "/images/products/stand-signage01.webp",
    url: "https://adisignage.com/product_3.html",
  },
  {
    id: "05",
    enTitle: "LED Stand Signage",
    title: "LEDスタンドサイネージ",
    image: "/images/products/stand-signage02.webp",
    url: "https://adisignage.com/product_3.html",
  },
  {
    id: "06",
    enTitle: "LED Cube Signage",
    title: "LEDキューブサイネージ",
    image: "/images/products/cube-signage.webp",
    url: "https://adisignage.com/product_4.html",
  },
];

export function Cta() {
  return (
    <>
      <section className="container max-w-6xl mt-10 md:mt-40">
        <div className="bg-white/15 px-5 xs:px-10 lg:px-20 xl:px-32 pt-14 md:pt-20 pb-14 md:pb-20 mb-10 md:mb-20">
          <h2>
            Contact
            <span>お問い合わせ・お申し込み</span>
          </h2>

          <p className="text-center mb-10 md:mb-16 !-mt-5">
            店舗やイベントの集客に、{mainData.keyWords}
            という選択肢。
            <br />
            動画制作だけでも、LEDディスプレイ導入、施工とのセットでもご対応可能です。
            <br />
            まずは無料相談からお気軽にお問い合わせください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
            <div className="group">
              <a
                className="flex flex-col bg-white border border-gray-200 rounded hover:bg-transparent transition-all group-hover:shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                href={mainData.contact.url}
                target="_blank"
                onClick={handleClick}
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between gap-x-3">
                    <div className="grow">
                      <div className="flex justify-center items-center gap-x-3 md:gap-x-5">
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                          <Image
                            src="/images/icons/mail-dark.svg"
                            alt="メールでお問合せ"
                            width={60}
                            height={60}
                            className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                            priority
                          />
                          <Image
                            src="/images/icons/mail-white.svg"
                            alt="メールでお問合せ"
                            width={60}
                            height={60}
                            className="w-full h-full absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            priority
                          />
                        </div>
                        <div className="grow [&_p]:text-black space-y-2">
                          <p className="group-hover:text-white">
                            メールでお問合せ
                          </p>
                          <p className="text-lg xs:text-xl md:text-2xl font-semibold group-hover:text-yellow-400 transition-all">
                            お問合せフォーム
                          </p>
                          <p className="group-hover:text-white !text-xs md:text-sm !leading-normal">
                            内容確認後、迅速にご返信いたします
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="group">
              <a
                className="flex flex-col bg-white border border-gray-200 rounded hover:bg-transparent transition-all group-hover:shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                href={`tel:${mainData.contact.telFukuoka}`}
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center gap-x-3">
                    <div className="grow">
                      <div className="flex justify-center items-center gap-x-3 md:gap-x-5">
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                          <Image
                            src="/images/icons/phone-dark.svg"
                            alt="お電話でのお問い合わせ"
                            width={60}
                            height={60}
                            className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                            priority
                          />
                          <Image
                            src="/images/icons/phone-white.svg"
                            alt="お電話でのお問い合わせ"
                            width={60}
                            height={60}
                            className="w-full h-full absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            priority
                          />
                        </div>
                        <div className="grow [&_p]:text-black space-y-2">
                          <p className="group-hover:text-white">
                            お電話でお問い合わせ
                          </p>
                          <p className="text-lg xs:text-xl md:text-2xl font-semibold group-hover:text-yellow-400 transition-all">
                            {mainData.contact.telFukuoka}
                          </p>
                          <p className="group-hover:text-white text-xs md:text-sm !leading-normal">
                            受付時間：{mainData.contact.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <div className="relative w-40 sm:w-48 md:w-52 mx-auto mb-8 md:mb-10">
          <Link
            href="https://adisignage.com/products.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/images/logo-dark.svg"
              alt="Logo"
              className="w-full h-auto"
            />
          </Link>
        </div>

        <p className="text-center mb-8 md:mb-16">
          その他の製品情報はこちらからチェック
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 justify-center items-center">
            {products.map((product) => (
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                key={product.id}
              >
                <div
                  key={product.id}
                  className="relative w-28 xs:w-40 md:w-44 lg:w-40 h-auto hover:scale-105 transition-all duration-300 group"
                >
                  <Image
                    src={product.image}
                    alt={product.enTitle + " " + product.title}
                    width={100}
                    height={100}
                    className="w-full h-full"
                    priority
                  />
                  <p className="text-center text-[0.6em] md:text-[0.8em] mt-2 md:mt-3 group-hover:text-yellow-300 transition-all">
                    {product.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
