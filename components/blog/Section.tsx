import React from "react";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({
  id,
  title,
  children,
  className = "",
}: SectionProps) => {
  return (
    <section id={id} className={`mb-20 md:mb-36 ${className}`}>
      <h2>
        <span></span>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

type SubSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const SubSection = ({
  title,
  children,
  className = "",
}: SubSectionProps) => {
  return (
    <div className={`mb-10 md:mb-16 ${className}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
