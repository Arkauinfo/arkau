"use client";

import { useState } from "react";

import Paper from "@/components/materials/Paper";

import Display from "@/components/typography/Display";
import Heading from "@/components/typography/Heading";
import Body from "@/components/typography/Body";
import Label from "@/components/typography/Label";
import Metadata from "@/components/typography/Metadata";

const fonts = [
  {
    id: "helvetica",
    label: "Helvetica",
    className: "font-sans",
  },
  {
    id: "inter",
    label: "Inter",
    className: "font-[Inter]",
  },
  {
    id: "geist",
    label: "Geist",
    className: "font-[Geist]",
  },
  {
    id: "ibm",
    label: "IBM Plex",
    className: "font-[IBM_Plex_Sans]",
  },
  {
    id: "alte",
    label: "Alte Haas",
    className: "font-[AlteHaas]",
  },
  {
    id: "rubik",
    label: "Rubik",
    className: "font-[Rubik]",
  },

];

export default function TypographyStudy() {
    const [selectedFont, setSelectedFont] = useState(fonts[0]);
  return (
    <Paper>
      <main className="mx-auto max-w-5xl px-10 py-20">

        {/* Header */}

        <section className="mb-20">

          <Label>
            ARKAU DIGITAL MATERIALS LAB
          </Label>

          <div className="mt-4 flex justify-between items-end">

            <Display>
              Study 006
            </Display>

            <Metadata>
              Typography
            </Metadata>

          </div>

          <div className="mt-8 h-px bg-neutral-300" />

          <div className="mt-8 max-w-xl">

            <Body>
              Exploration of hierarchy, rhythm and readability
              across the Arkau design system.
            </Body>

          </div>

        </section>

        <div className="mt-10 flex flex-wrap gap-3">

            {fonts.map((font) => (

                <button
                    key={font.id}
                    onClick={() => setSelectedFont(font)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all

                ${
                selectedFont.id === font.id
                    ? "bg-black text-white border-black"
                    : "border-neutral-300 hover:border-black"
                }`}
            >
                {font.label}
            </button>

            ))}

        </div>


        <div className={selectedFont.className}>

            {/* Display */}

            <section className="mb-20">

            <Label>Display</Label>

            <div className="mt-6">

                <Display>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </Display>

                <div className="mt-6">

                <Display>
                    abcdefghijklmnopqrstuvwxyz
                </Display>

                </div>

                <div className="mt-6">

                <Display>
                    0123456789
                </Display>

                </div>

            </div>

            </section>

            {/* Heading */}

            <section className="mb-20">

            <Label>Heading</Label>

            <div className="mt-6">

                <Heading>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </Heading>

                <div className="mt-4">

                <Heading>
                    abcdefghijklmnopqrstuvwxyz
                </Heading>

                </div>

                <div className="mt-4">

                <Heading>
                    0123456789
                </Heading>

                </div>

            </div>

            </section>

            {/* Body */}

            <section className="mb-20">

            <Label>Body</Label>

            <div className="mt-6 max-w-2xl space-y-6">

                <Body>
                The quick brown fox jumps over the lazy dog.
                </Body>

                <Body>
                Design is the process of giving form to values.
                Every decision communicates something, whether
                intentional or accidental.
                </Body>

                <Body>
                Arkau explores sustainable goods, systems,
                and environments inspired by the efficiency
                and elegance of nature.
                </Body>

            </div>

            </section>

            {/* Labels */}

            <section className="mb-20">

            <Label>Label</Label>

            <div className="mt-6 space-y-4">

                <Label>FIELD NOTES</Label>

                <Label>MATERIAL STUDY</Label>

                <Label>PLAYGROUND</Label>

                <Label>DIGITAL MATERIALS LAB</Label>

            </div>

            </section>

            {/* Metadata */}

            <section>

            <Label>Metadata</Label>

            <div className="mt-6 flex flex-col gap-3">

                <Metadata>
                Updated July 2026
                </Metadata>

                <Metadata>
                Version 0.1
                </Metadata>

                <Metadata>
                Edition 001
                </Metadata>

                <Metadata>
                In Progress
                </Metadata>

            </div>

            </section>

        </div>


      </main>
    </Paper>
  );
}