import { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  className?: string;
};

export default function Label({
  children,
  className = "",
}: LabelProps) {
  return (
    <p
      className={`font-inter text-xs uppercase tracking-[0.28em] font-medium text-neutral-500 ${className}`}
    >
      {children}
    </p>
  );
}