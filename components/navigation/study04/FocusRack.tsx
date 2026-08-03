"use client";

import { useState } from "react";
import FocusCard, { FocusCardData } from "./FocusCard";

type FocusRackProps = {
  items: FocusCardData[];
  onSelect: (index: number) => void;
};

// ---------------------------------------------------------------------
// Tunables
// ---------------------------------------------------------------------
const CARD_WIDTH = 960; // ~2x — gives long titles room so they stop clipping
const CARD_HEIGHT = 320; // tall on purpose — the bottom is meant to run off-frame

const THICKNESS = 70; // a flat-on card can't show any edge no matter the number —
                       // see ANGLE_RESTING below, that's what actually sells it

// Resting cards need *some* obliquity or the edge is invisible (a plane viewed
// straight-on always reads as paper-thin, regardless of its real thickness).
// The active card stays closer to flat/rectangular, since that's the one
// you're meant to be reading head-on.
const ANGLE_RESTING = -22;
const ANGLE_ACTIVE = -8;

// Fixed spacing between resting card tops. This also controls how much of a
// resting card's title peeks out before the next (nearer) card covers it —
// see TITLE_TOP in FocusCard.tsx, tune the two together.
const GAP_BASE = 40;

// How much extra room neighbors give the active card. Kept modest on purpose:
// this amount gets applied to *every* card on that side (see yPositions below),
// so a big number here sends far-away cards drifting a long way from their
// resting spot. Small values keep everything clustered close to where it
// already sits at rest.
const GAP_AROUND_ACTIVE = 140;

const TITLE_X_MIN = 14; // %
const TITLE_X_MAX = 86; // %

function titleXForSlot(i: number, n: number): string {
  if (n <= 1) return `${(TITLE_X_MIN + TITLE_X_MAX) / 2}%`;
  const t = i / (n - 1);
  return `${TITLE_X_MIN + t * (TITLE_X_MAX - TITLE_X_MIN)}%`;
}

export default function FocusRack({ items, onSelect }: FocusRackProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const n = items.length;

  // Every card's baseline Y is fixed by its list index alone — it never
  // depends on hover state, so a card's own slot can't jump the instant
  // the mouse enters it.
  const baseY = items.map((_, i) => i * GAP_BASE);

  // Only the *other* cards get pushed further away to open space.
  const extra = GAP_AROUND_ACTIVE - GAP_BASE;
  const yPositions = items.map((_, i) => {
    if (hoveredIndex === null || i === hoveredIndex) return baseY[i];
    return i > hoveredIndex ? baseY[i] + extra : baseY[i] - extra;
  });

  return (
    <div
      className="relative"
      style={{
        width: CARD_WIDTH,
        height: baseY[n - 1] + CARD_HEIGHT,
        transformStyle: "preserve-3d",
      }}
    >
      {items.map((item, i) => (
        <FocusCard
          key={item.id}
          data={item}
          isActive={i === hoveredIndex}
          angle={i === hoveredIndex ? ANGLE_ACTIVE : ANGLE_RESTING}
          y={yPositions[i]}
          z={i === hoveredIndex ? 24 : 0}
          zIndex={i === hoveredIndex ? n + 10 : i}
          thickness={THICKNESS}
          titleX={titleXForSlot(i, n)}
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex((cur) => (cur === i ? null : cur))}
          onSelect={() => onSelect(i)}
        />
      ))}
    </div>
  );
}