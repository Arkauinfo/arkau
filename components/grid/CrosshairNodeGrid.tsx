"use client";

import GridMotion from "./GridMotion";
import useGridViewport from "./useGridViewport";

export default function CrosshairGrid() {
  const { width, height } = useGridViewport();

  const spacing = 40;
  const major = 4;

  const elements = [];

  // regular grid
  for (let x = 0; x <= width; x += spacing) {
    elements.push(
      <line
        key={`v-${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={height}
        stroke="rgba(31,32,29,.06)"
      />
    );
  }

  for (let y = 0; y <= height; y += spacing) {
    elements.push(
      <line
        key={`h-${y}`}
        x1={0}
        y1={y}
        x2={width}
        y2={y}
        stroke="rgba(31,32,29,.06)"
      />
    );
  }

  // crosshairs
  for (let y = 0; y <= height; y += spacing * major) {
    for (let x = 0; x <= width; x += spacing * major) {
      elements.push(
        <g key={`cross-${x}-${y}`}>

          <line
            x1={x - 8}
            y1={y}
            x2={x + 8}
            y2={y}
            stroke="rgba(31,32,29,.32)"
            strokeWidth={1.4}
          />

          <line
            x1={x}
            y1={y - 8}
            x2={x}
            y2={y + 8}
            stroke="rgba(31,32,29,.32)"
            strokeWidth={1.4}
          />

          <circle
            cx={x}
            cy={y}
            r={1.4}
            fill="rgba(31,32,29,.55)"
          />

        </g>
      );
    }
  }

  return (
    <GridMotion>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {elements}
      </svg>
    </GridMotion>
  );
}