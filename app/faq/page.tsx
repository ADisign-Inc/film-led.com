import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <span>よくある質問（FAQ）</span>
          </h2>

          <section className="bg-black/60 px-5 py-5 md:py-10">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    設置可能な場所はどのような場所ですか？
                  </AccordionTrigger>
                  <AccordionContent>
                    ガラス窓、ショーウィンドウ、ガラスパーティション、アクリル板など、透明な面であれば基本的に設置可能です。設置前に環境調査を行い、最適な設置方法をご提案いたします。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    レンタルと購入の違いは何ですか？
                  </AccordionTrigger>
                  <AccordionContent>
                    レンタルは期間限定のイベントやキャンペーン、試験導入に適しています。初期費用を抑えられるメリットがあります。購入は長期的な利用を前提とし、ランニングコストを抑えたい場合におすすめです。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    コンテンツの変更は簡単にできますか？
                  </AccordionTrigger>
                  <AccordionContent>
                    はい、専用のコントロールシステムを使って簡単に変更可能です。定期的なコンテンツ更新プランもご用意しておりますので、ご相談ください。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    屋外での使用は可能ですか？
                  </AccordionTrigger>
                  <AccordionContent>
                    基本的には屋内での使用を推奨していますが、環境によっては屋外での使用も可能です。ただし、直射日光が強い場所では視認性が低下する場合があります。詳細はお問い合わせください。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    設置から運用開始までどのくらいの期間がかかりますか？
                  </AccordionTrigger>
                  <AccordionContent>
                    標準的なケースでは、お申し込みから約2週間程度で設置・運用開始が可能です。ただし、カスタムコンテンツの制作や特殊な設置環境の場合は、別途期間を要する場合があります。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
