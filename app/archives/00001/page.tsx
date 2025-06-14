import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { BackgroundImages } from "../../../components/BackgroundImage";
import { Button } from "../../../components/Button";
import { Cta } from "../../../components/Cta";
import { Breadcrumb } from "../../../components/blog/Breadcrumb";

import { mainData } from "../../../data/main";
import { archiveData } from "../../../data/archives";

export const metadata: Metadata = {
  title: `${archiveData[0].clientName} | 導入実績 `,
  description: `${mainData.keyWords}の導入実績ページです。製品の特徴や仕様、導入のメリットをご紹介します。`,
};

const ArchiveSwiper = dynamic(
  () => import("../../../components/archives/ArchiveSwiper"),
  { ssr: false }
);

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "導入実績", href: "/archives" },
          { label: archiveData[0].clientName },
        ]}
      />

      <main className="flex-1 [scroll-behavior:smooth]">
        <div className="container max-w-5xl py-10 md:py-20">
          <article className="blog">
            <section>
              <h3 className="text-yellow-300">{archiveData[0].clientName}</h3>

              <p className="!text-xs mb-5 md:mb-14 -mt-5">
                {archiveData[0].category.map((cat, index) => (
                  <span
                    key={index}
                    className="bg-gray-300/20 text-yellow-300 font-bold !text-xs px-1.5 py-1 rounded mr-1.5"
                  >
                    {cat}
                  </span>
                ))}
              </p>

              <div className="md:w-1/2 space-y-4 mb-12 md:mb-20 [&_span]:text-[1.2em]">
                <div className="flex items-center gap-3 border-b-[0.1px] border-gray-300 pb-1">
                  <div className="flex justify-center">
                    <Image
                      src="/images/icons/date.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <p>
                    施工完了日：
                    <span> {archiveData[0].date}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 border-b-[0.1px] border-gray-300 pb-1">
                  <div className="flex justify-center">
                    <Image
                      src="/images/icons/place.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <p>
                    設置場所：
                    <span> {archiveData[0].place}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 border-b-[0.1px] border-gray-300 pb-1">
                  <div className="flex justify-center">
                    <Image
                      src="/images/icons/products.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <p>
                    製品：
                    <span> {archiveData[0].productName}</span>
                  </p>
                </div>
              </div>

              <div className="mb-12 md:mb-20">
                <ArchiveSwiper />
              </div>

              <p
                dangerouslySetInnerHTML={{
                  __html: archiveData[0].description,
                }}
                className="[&_span]:text-[1.8em] [&_span]:font-bold [&_span]:text-yellow-300"
              ></p>
            </section>
          </article>
        </div>

        {/* <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mb-40">
          {archiveData.map((post) => (
            <ArchiveList key={post.id} post={post} />
          ))}
        </div> */}

        <Cta />

        <div className="my-20 md:my-28 text-center">
          <Link href="/archives">
            <Button variant="default">導入実績一覧へ</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
