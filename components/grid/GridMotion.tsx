"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GridMotion({
  children,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tx = 0;
    let ty = 0;

    let x = 0;
    let y = 0;

    function mouse(e: MouseEvent) {
      tx = (e.clientX / window.innerWidth - 0.5) * 8;
      ty = (e.clientY / window.innerHeight - 0.5) * 8;
    }

    let frame: number;

    function animate() {
      const element = ref.current;

      if (!element) return;

      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;

      element.style.transform = `
        translate(calc(-50% + ${x}px), calc(-50% + ${y}px))
      `;

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    window.addEventListener("mousemove", mouse);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", mouse);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={ref}
        className={`absolute left-1/2 top-1/2 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}