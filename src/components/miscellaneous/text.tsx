import React from "react";

type SectionTextProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function Text({ children, id, className }: SectionTextProps) {
  return (
    <div
      id={id}
      className={`text-lg/snug font-medium sm:text-xl sm:font-medium ${className}`}
    >
      {children}
    </div>
  );
}
