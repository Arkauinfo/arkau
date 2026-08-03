"use client";

import FocusEdge from "./FocusEdge";

export type FocusCardData = {
  id: string;
  title: string;
};

type FocusCardProps = {
  data: FocusCardData;
  isActive: boolean;
  angle: number; // rotateX in degrees, hinged at the bottom edge
  y: number; // fixed vertical slot, px — stays put on hover; neighbors move instead
  z: number; // depth offset, px
  zIndex: number;
  thickness: number; // px
  titleX: string; // fixed horizontal label position for this slot, e.g. "12%"
  width: number;
  height: number;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void; // click = actual navigation, separate from the hover preview
};

// How far down from the card's own top edge the title sits. Paired with
// FocusRack's GAP_BASE: the gap is what the next (nearer) card leaves
// uncovered, so this offset decides how much of the glyph height falls
// inside that uncovered strip. Nudge these two together.
const TITLE_TOP = 24;

export default function FocusCard({
  data,
  isActive,
  angle,
  y,
  z,
  zIndex,
  thickness,
  titleX,
  width,
  height,
  onHover,
  onLeave,
  onSelect,
}: FocusCardProps) {
  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onSelect}
      aria-current={isActive}
      aria-label={data.title}
      className="absolute left-1/2 top-0 cursor-pointer select-none appearance-none border-0 bg-transparent p-0 outline-none"
      style={{
        width,
        height,
        zIndex,
        marginLeft: -width / 2,
        transformStyle: "preserve-3d",
        transformOrigin: "bottom center",
        transform: `translate3d(0px, ${y}px, ${z}px) rotateX(${angle}deg)`,
        transition:
          "transform 380ms cubic-bezier(.16,.84,.32,1), filter 380ms ease",
      }}
    >
      {/* front face: what we read, hinged at its own bottom edge */}
      <div
        className="absolute inset-0 overflow-hidden rounded-sm"
        style={{
          background: isActive ? "#e0d9c9" : "#22572b", // canvas : moss
          boxShadow: isActive
            ? "0 26px 46px rgba(31,32,29,0.28), inset 0 1px 0 rgba(242,247,240,0.6)"
            : "0 10px 18px rgba(31,32,29,0.28), inset 0 1px 0 rgba(242,247,240,0.08)",
          transition: "background 380ms ease, box-shadow 380ms ease",
        }}
      >
        <span
          className="absolute whitespace-nowrap font-mono font-semibold uppercase tracking-[0.08em]"
          style={{
            left: titleX,
            top: TITLE_TOP,
            transform: "translateX(-50%)",
            color: isActive ? "#1F201D" : "#f2f7f0", // carbon : paper
            fontSize: 40,
            transition: "color 380ms ease",
          }}
        >
          {data.title}
        </span>
      </div>

      <FocusEdge thickness={thickness} isActive={isActive} />
    </button>
  );
}