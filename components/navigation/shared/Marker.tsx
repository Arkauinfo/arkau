"use client";

import { useState } from "react";

import MarkerLine from "./MarkerLine";
import MarkerLabel from "./MarkerLabel";

type Props = {
  title: string;
  subtitle: string;
  x: number;
  y: number;
};

export default function Marker({
  title,
  subtitle,
  x,
  y,
}: Props) {
  const [active, setActive] = useState(false);

  return (
    <button
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="absolute text-left"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%,-50%)",
      }}
    >
      {/* Survey Point */}

      <div className="flex items-center gap-5">

        <div className="relative">

          <div className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-neutral-700/60" />

          <div className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-neutral-700/60" />

          <div
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 transition-all duration-300"
            style={{
              transform: active
                ? "translate(-50%,-50%) scale(1.8)"
                : "translate(-50%,-50%) scale(1)",
            }}
          />

        </div>

        <MarkerLine active={active} />

        <MarkerLabel
          title={title}
          subtitle={subtitle}
          active={active}
        />

      </div>
    </button>
  );
}