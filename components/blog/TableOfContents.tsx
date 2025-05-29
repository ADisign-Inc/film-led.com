import React from "react";
import Link from "next/link";

type TableOfContentsProps = {
  items: string[];
};

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <section className="index md:w-2/3 mx-auto bg-white/10 backdrop-blur-sm p-10 md:p-16">
      <p className="text-lg md:text-xl lg:text-2xl text-center font-semibold mb-6 md:mb-10">
        目 次
      </p>
      <ul className="list-decimal ml-5 space-y-6">
        {items.map((title, index) => (
          <li key={index}>
            <Link href={`#section${String(index).padStart(1, "0")}`}>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
