"use client";

import { useEffect, useRef } from "react";

export default function ContourLines() {
  const lines = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    function move(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      lines.current.forEach((line, i) => {
        if (!line) return;

        const t = i / 21;

        // Bottom lines move more than top lines
        const strength = (1 - t) * 26 + 2;

        line.style.transform = `translate(${x * strength}px, ${
          y * strength * 0.55
        }px)`;
      });
    }

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  function noise(x: number, seed: number) {
    return (
      Math.sin(x * 0.013 + seed * 1.73) * 32 +
      Math.sin(x * 0.031 + seed * 0.91) * 14 +
      Math.sin(x * 0.072 + seed * 2.43) * 6
    );
  }

  const width = 1000;
  const total = 22;

  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
    >
      {Array.from({ length: total }).map((_, i) => {
        const t = i / (total - 1);

        const baseY = 620 - Math.pow(t, 1.45) * 520;

        const amplitude = 42 * (1 - t) + 6;

        let d = `M -80 ${baseY}`;

        for (let x = 0; x <= width + 80; x += 24) {
          const y = baseY + noise(x, i) * (amplitude / 50);

          d += ` L ${x} ${y}`;
        }

        return (
          <path
            key={i}
            ref={(el) => {
              if (el) lines.current[i] = el;
            }}
            d={d}
            fill="none"
            stroke="rgba(31,32,29,.12)"
            strokeWidth={1.2}
            style={{
              transition: "transform 180ms ease-out",
              transformOrigin: "center",
            }}
          />
        );
      })}
    </svg>
  );
}