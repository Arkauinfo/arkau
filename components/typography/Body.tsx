import { ReactNode } from "react";

type BodyProps = {
  children: ReactNode;
  className?: string;
};

export default function Body({
  children,
  className = "",
}: BodyProps) {
  return (
    <p
      className={`font-inter text-base leading-8 text-neutral-700 ${className}`}
    >
      {children}
    </p>
  );
}