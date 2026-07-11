import { ReactNode } from "react";

type DisplayProps = {
  children: ReactNode;
  className?: string;
};

export default function Display({
  children,
  className = "",
}: DisplayProps) {
  return (
    <h1
      className={`font-alte-haas text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] ${className}`}
      >
        {children}
    </h1>
  );
}