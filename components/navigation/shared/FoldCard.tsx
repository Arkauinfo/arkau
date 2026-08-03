"use client";

import { useState } from "react";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";

import FoldLine from "./FoldLine";
import FoldContent from "./FoldContent";

type Props = {
  number: string;
  title: string;
  children: React.ReactNode;
};

export default function FoldCard({
  number,
  title,
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="w-full text-left"
    >
      <div
        className="rounded-3xl border border-neutral-300 bg-white/50 p-10 backdrop-blur-sm transition-all duration-500"
        style={{
          transform: open
            ? "translateY(-6px)"
            : "translateY(0px)",
        }}
      >
        <Label>{number}</Label>

        <div className="mt-5">

          <Heading>

            {title}

          </Heading>

        </div>

        <div className="mt-7">

          <FoldLine open={open} />

        </div>

        <FoldContent open={open}>

          {children}

        </FoldContent>

      </div>
    </button>
  );
}