import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Cta } from "../../components/Cta";
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
        <section className="container max-w-6xl py-28 md:py-40">
          <h2>
            Company
            <span>会社概要</span>
          </h2>
        </section>

        <div>
          <Link href="/">
            <Button>
              TOPページへ
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* CTA */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
