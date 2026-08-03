"use client";

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function ParallaxScene({ children }: Props) {
  const layers = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!layers.current) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    layers.current.style.transform = `
        translate3d(${x * -6}px, ${y * -4}px, 0)
    `;
  }

  return (
    <div
      onMouseMove={handleMove}
      className="relative h-[760px] overflow-hidden rounded-[42px]"
    >
      <div
        ref={layers}
        className="absolute inset-0 transition-transform duration-200 ease-out"
      >
        {children}
      </div>
    </div>
  );
}