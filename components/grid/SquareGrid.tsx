"use client";

import GridMotion from "./GridMotion";
import useGridViewport from "./useGridViewport";

export default function SquareGrid() {
  const { width, height } = useGridViewport();

  const spacing = 40;

  const lines = [];

  for (let x = 0; x <= width; x += spacing) {
    lines.push(
      <line
        key={`v${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={height}
        stroke="rgba(31,32,29,.10)"
      />
    );
  }

  for (let y = 0; y <= height; y += spacing) {
    lines.push(
      <line
        key={`h${y}`}
        x1={0}
        y1={y}
        x2={width}
        y2={y}
        stroke="rgba(31,32,29,.10)"
      />
    );
  }

  return (
    <GridMotion>

      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >

        {lines}

      </svg>

    </GridMotion>
  );
}