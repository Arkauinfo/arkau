"use client";

import GridMotion from "./GridMotion";
import useGridViewport from "./useGridViewport";

export default function SquareNodeGrid() {
  const { width, height } = useGridViewport();

  const spacing = 40;
  const major = 4;

  const elements = [];

  for (let x = 0; x <= width; x += spacing) {
    elements.push(
      <line
        key={`v-${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={height}
        stroke="rgba(31,32,29,.08)"
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
        stroke="rgba(31,32,29,.08)"
      />
    );
  }

  for (let y = 0; y <= height; y += spacing * major) {
    for (let x = 0; x <= width; x += spacing * major) {
      elements.push(
        <rect
          key={`s-${x}-${y}`}
          x={x - 4}
          y={y - 4}
          width={8}
          height={8}
          fill="white"
          stroke="rgba(31,32,29,.28)"
          strokeWidth={1.3}
        />
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