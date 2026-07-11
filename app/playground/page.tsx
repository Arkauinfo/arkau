import Link from "next/link";
import Paper from "../../components/materials/Paper"

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
    status: "Planned",
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
    <main className="min-h-screen bg-[#F6F2EA] text-neutral-900">
      <div className="mx-auto max-w-6xl px-12 py-20">

        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Arkau Digital Materials Lab
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-tight">
            PLAYGROUND
          </h1>

          <p className="mt-6 max-w-xl text-neutral-600 leading-relaxed">
            A collection of ongoing interface experiments exploring material,
            observation, motion, and interaction.
          </p>
        </div>

        <div className="border-t border-neutral-300">

          {experiments.map((experiment) => (

            <Link
              key={experiment.id}
              href={experiment.href}
              className="group flex items-center justify-between border-b border-neutral-300 py-8 transition-all duration-300 hover:bg-black/[0.025]"
            >

              <div className="flex items-start gap-10">

                <span className="w-10 text-sm text-neutral-400">
                  {experiment.id}
                </span>

                <div>

                  <h2 className="text-2xl font-medium">
                    {experiment.title}
                  </h2>

                  <p className="mt-2 text-neutral-500">
                    {experiment.description}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <span className="text-sm uppercase tracking-widest text-neutral-400">
                  {experiment.status}
                </span>

                <div className="h-px w-0 bg-black transition-all duration-300 group-hover:w-10" />

              </div>

            </Link>

          ))}

        </div>

      </div>
    </main>
  );
}