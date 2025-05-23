import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/Accordion";

import { mainData } from "../../data/main";
import { faqData } from "../../data/faq";

export const metadata: Metadata = {
  title: `よくあるご質問 `,
  description: "よくあるご質問ページです。",
};

export const dynamic = "force-dynamic";

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <div className="container max-w-6xl py-20 md:py-40">
          <h2>
            FAQ
            <span>よくあるご質問</span>
          </h2>

          <section className="max-w-3xl mx-auto">
            <Accordion type="multiple" className="w-full">
              {faqData.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg">
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
          </section>

          <div className="mt-20 md:mt-40 text-center">
            <Link href="/">
              <Button variant="default">TOPへ戻る</Button>
            </Link>
          </div>
        </div>

        
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
