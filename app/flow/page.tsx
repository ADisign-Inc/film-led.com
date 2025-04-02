import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function FlowPage() {
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
        <section className="container max-w-6xl py-10 md:py-40">
          <h2>
            Flow
            <span>導入までの流れ</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />

              <div className="relative z-10 flex gap-6 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-4 border-white">
                  <span className="text-xl font-bold text-blue-700">1</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold mb-2">
                    無料相談・デモ体験
                  </h3>
                  <p className="text-muted-foreground">
                    まずはお気軽にご相談ください。実際にデモを体験し、導入イメージを確認していただけます。オンラインでのご相談も可能です。
                  </p>
                  <Button variant="default" className="mt-4">
                    デモ予約する
                  </Button>
                </div>
              </div>

              <div className="relative z-10 flex gap-6 mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-4 border-white">
                  <span className="text-xl font-bold text-blue-700">2</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold mb-2">
                    最適プランのご提案
                  </h3>
                  <p className="text-muted-foreground">
                    お客様の目的や予算、設置環境に合わせた最適なプランをご提案します。コンテンツ制作についてもご相談に応じます。
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-4 border-white">
                  <span className="text-xl font-bold text-blue-700">3</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold mb-2">
                    設置・運用サポート
                  </h3>
                  <p className="text-muted-foreground">
                    専門スタッフが設置から運用までしっかりサポート。コンテンツの更新方法もレクチャーします。アフターフォローも万全の体制でご安心ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
