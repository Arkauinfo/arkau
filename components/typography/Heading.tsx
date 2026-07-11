import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h2
      className={`font-alte-haas text-2xl md:text-3xl font-semibold tracking-[-0.03em] leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}