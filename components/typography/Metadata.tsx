import { ReactNode } from "react";

type MetadataProps = {
  children: ReactNode;
  className?: string;
};

export default function Metadata({
  children,
  className = "",
}: MetadataProps) {
  return (
    <p
      className={`font-inter text-sm tracking-wide text-neutral-500 ${className}`}
    >
      {children}
    </p>
  );
}