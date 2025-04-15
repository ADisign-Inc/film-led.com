import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Cta } from "@/components/ui/Cta";
import { faqData } from "@/app/data/faq";

export const dynamic = "force-dynamic";

export default function FAQPage() {
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
        <div className="container max-w-6xl py-28 md:py-40">
          <h2>
            FAQ
            <span>よくあるご質問</span>
          </h2>

          <section className="max-w-3xl mx-auto">
            <Accordion type="multiple" className="w-full">
              {faqData.map((item) => (
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
          </section>
        </div>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
