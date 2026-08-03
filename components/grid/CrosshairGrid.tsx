"use client";

import GridMotion from "./GridMotion";
import useGridViewport from "./useGridViewport";

export default function CrosshairGrid() {
  const { width, height } = useGridViewport();

  const spacing = 40;
  const arm = 3.5;

  const elements = [];

  // Draw a small crosshair at every grid intersection
  for (let y = 0; y <= height; y += spacing) {
    for (let x = 0; x <= width; x += spacing) {
      elements.push(
        <g key={`${x}-${y}`}>

          <line
            x1={x - arm}
            y1={y}
            x2={x + arm}
            y2={y}
            stroke="rgba(31,32,29,.22)"
            strokeWidth={1}
            strokeLinecap="round"
          />

          <line
            x1={x}
            y1={y - arm}
            x2={x}
            y2={y + arm}
            stroke="rgba(31,32,29,.22)"
            strokeWidth={1}
            strokeLinecap="round"
          />

        </g>
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
        {elements}
      </svg>
    </GridMotion>
  );
}