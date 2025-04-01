import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { cases } from "@/data/cases";

export default function CasesPage() {
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
            Case Studies
            <span>活用事例</span>
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cases.map((case_) => (
              <div
                key={case_.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={case_.image}
                    alt={case_.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{case_.title}</h3>
                  <p className="text-muted-foreground">{case_.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
