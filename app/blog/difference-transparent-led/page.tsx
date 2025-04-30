import Image from "next/image";
import { X, Check } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/Button";
import { Cta } from "../../../components/Cta";
import { mainData } from "../../../data/main";
import { caseData } from "../../../data/cases";

export default async function AboutPage() {
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
        <div className="flex justify-center mb-5 md:mb-12">
          <Image
            src="/images/test01.png"
            alt=""
            width={700}
            height={300}
            className="object-cover"
          />
        </div>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
