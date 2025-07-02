import Link from "next/link";
import { Metadata } from "next";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackgroundImages } from "../../components/BackgroundImage";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: `お問い合わせ `,
  description: "お問い合わせページです。",
};

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <BackgroundImages />

      <Header />

      <main className="flex-1">
        <div className="container max-w-6xl py-24 sm:py-28 md:py-40">
          <h2>
            Contact
            <span>お問い合わせ</span>
          </h2>

          <section className="max-w-3xl mx-auto">
            <ContactForm />
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
