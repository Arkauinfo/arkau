"use client";

import { useEffect, useRef } from "react";
import GridMotion from "./GridMotion";
import useGridViewport from "./useGridViewport";

export default function DotGrid() {
  const { width, height } = useGridViewport();

  const dots = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    function move(e: MouseEvent) {
      const mx = e.clientX / window.innerWidth;
      const my = e.clientY / window.innerHeight;

      dots.current.forEach((dot, i) => {
        if (!dot) return;

        const wave =
          Math.sin(i * 0.3 + mx * 6 + my * 5) * 0.45;

        dot.setAttribute("r", `${1.8 + wave}`);
      });
    }

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const spacing = 40;

  const circles = [];

  let index = 0;

  for (let y = spacing; y < height; y += spacing) {
    for (let x = spacing; x < width; x += spacing) {
      circles.push(
        <circle
          key={`${x}-${y}`}
          ref={(el) => {
            if (el) dots.current[index] = el;
            index++;
          }}
          cx={x}
          cy={y}
          r={1.8}
          fill="rgba(31,32,29,.25)"
        />
      );
    }
  }

  return (
    <GridMotion>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {circles}
      </svg>
    </GridMotion>
  );
}