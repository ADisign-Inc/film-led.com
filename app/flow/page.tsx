import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Flow } from "../../components/Flow";
import { Cta } from "../../components/Cta";
import { Button } from "../../components/Button";

import { mainData } from "../../data/main";
import { flowData } from "../../data/flow";

export const metadata: Metadata = {
  title: `導入の流れ`,
  description: "導入の流れページです。",
};

export default function FlowPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />
      <main className="flex-1">
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Flow
            <span>導入の流れ</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-white/80" />
              {flowData.map((flow) => (
                <Flow key={flow.number} flow={flow} />
              ))}
            </div>
          </div>
        </section>

        <div className="mt-20 md:mt-40 text-center">
          <Link href="/">
            <Button variant="default">TOPへ戻る</Button>
          </Link>
        </div>

        {/* CTA */}
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
