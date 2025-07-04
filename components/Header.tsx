"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { mainData } from "../data/main";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isScrolled ? "bg-black/80" : "bg-transparent"
          }`}
        />
      </div>

      <div className="xl:container px-3 md:px-5">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center w-28 sm:w-32 md:w-40">
            <Link href="/">
              <Image
                src="/images/logo-dark.svg"
                alt={mainData.companyName}
                width={160}
                height={40}
                className="w-full h-auto"
              />
            </Link>
          </div>

          <Navigation />
        </div>
      </div>
    </header>
  );
}
