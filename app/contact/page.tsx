import { ContactForm } from "@/components/contact/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
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
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Contact
            <span>お申し込み・お問い合わせ</span>
          </h2>

          <p className="max-w-2xl mx-auto mb-8 md:mb-16">
            革新的な透明フィルムLED型LEDビジョンで、あなたのビジネスの集客力を最大化しませんか？まずは無料相談・デモ体験からお気軽にお問い合わせください。
          </p>
          <div className="max-w-2xl mx-auto bg-white/80 rounded-lg p-10 text-left">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
