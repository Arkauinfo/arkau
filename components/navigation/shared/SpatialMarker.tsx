"use client";

import { useState } from "react";

import Heading from "@/components/typography/Heading";
import Metadata from "@/components/typography/Metadata";

type Props = {
  title: string;
  subtitle: string;
};

export default function SpatialMarker({
  title,
  subtitle,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="absolute text-left"
      style={{
        transform: `
          translate(-50%,-100%)
          translateZ(${hover ? 24 : 0}px)
          scale(${hover ? 1.03 : 1})
        `,
        transition: "all .18s cubic-bezier(.2,.85,.2,1)",
      }}
    >
      {/* Guide line */}

      <div className="absolute left-3 top-full h-7 w-px bg-neutral-500/35" />

      <Heading className="text-5xl tracking-tight">
        {title}
      </Heading>

      <Metadata
        className={`
          mt-2
          transition-all
          duration-150
          ${
            hover
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }
        `}
      >
        {subtitle}
        <br />
        X·12&nbsp;&nbsp;Y·08
      </Metadata>
    </button>
  );
}