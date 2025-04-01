"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo-dark.svg"
                alt="Transparent Signage"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
