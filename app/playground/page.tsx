import Link from "next/link";

import Paper from "@/components/materials/Paper";

import Display from "@/components/typography/Display";
import Heading from "@/components/typography/Heading";
import Body from "@/components/typography/Body";
import Label from "@/components/typography/Label";
import Metadata from "@/components/typography/Metadata";

const experiments = [
  {
    id: "001",
    title: "Reveal",
    description: "How information uncovers itself.",
    href: "/playground/reveal",
    status: "In Progress",
  },
  {
    id: "002",
    title: "Grid",
    description: "Structure before decoration.",
    href: "/playground/grids",
    status: "Planned",
  },
  {
    id: "003",
    title: "Materials",
    description: "Paper, glass, aluminum, fabric.",
    href: "/playground/materials",
    status: "Planned",
  },
  {
    id: "004",
    title: "Motion",
    description: "Meaningful transitions.",
    href: "/playground/motion",
    status: "Planned",
  },
  {
    id: "005",
    title: "Navigation",
    description: "Movement through Arkau.",
    href: "/playground/navigation",
    status: "Planned",
  },
  {
    id: "006",
    title: "Typography",
    description: "Hierarchy and rhythm.",
    href: "/playground/typography",
    status: "Complete",
  },
  {
    id: "007",
    title: "Sound",
    description: "Tactility through audio.",
    href: "/playground/sound",
    status: "Planned",
  },
];

export default function Playground() {
  return (
    <Paper>
      <main className="mx-auto max-w-6xl px-10 py-20">

        {/* Header */}

        <section className="mb-24">

          <Label>
            ARKAU DIGITAL MATERIALS LAB
          </Label>

          <div className="mt-4 flex justify-between items-end">

            <Display>
              Playground
            </Display>

            <Metadata>
              Edition 0.1
            </Metadata>

          </div>

          <div className="mt-10 h-px bg-neutral-300" />

          <div className="mt-8 max-w-xl">

            <Body>
              A growing collection of experiments exploring materials,
              observation, interaction, and the digital language of Arkau.
            </Body>

          </div>

        </section>

        {/* Experiment List */}

        <section>

          {experiments.map((experiment) => (

            <Link
              key={experiment.id}
              href={experiment.href}
              className="group block border-b border-neutral-300 py-8 transition-colors duration-300 hover:bg-black/[0.02]"
            >

              <div className="grid grid-cols-[80px_1fr_auto] items-start gap-8">

                <Metadata>
                  {experiment.id}
                </Metadata>

                <div>

                  <Heading>
                    {experiment.title}
                  </Heading>

                  <div className="mt-2">

                    <Body>
                      {experiment.description}
                    </Body>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <Metadata>
                    {experiment.status}
                  </Metadata>

                  <div className="h-px w-0 bg-black transition-all duration-300 group-hover:w-12" />

                </div>

              </div>

            </Link>

          ))}

        </section>

      </main>
    </Paper>
  );
}