"use client";
import * as React from "react";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  size?: string;
  className?: string;
  variant?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  size,
  className,
  variant,
  onClick,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center transition-colors duration-1000 rounded-lg ${
        isHovered ? "bg-black/60" : "bg-black"
      }`}
    >
      <button
        onClick={onClick}
        className={`relative group overflow-hidden px-8 py-2.5 text-white rounded-lg border border-white/20 uppercase tracking-wider transition-all duration-500 hover:bg-white/5 hover:border-yellow-300 whitespace-nowrap flex items-center gap-2 ${
          className || ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <span className="absolute inset-0 w-full h-full bg-white/10 transform rotate-45 -translate-x-full -translate-y-8 transition-all duration-700 group-hover:translate-x-full group-hover:-translate-y-16"></span>
      </button>
    </div>
  );
}
