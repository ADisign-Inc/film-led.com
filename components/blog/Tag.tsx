import React from "react";

type TagProps = {
  label: string;
};

export const Tag = ({ label }: TagProps) => {
  return (
    <span className="bg-gray-300/20 text-yellow-300 font-bold text-[0.8em] md:!text-xs px-1.5 py-1 rounded mr-1.5">
      {label}
    </span>
  );
};
