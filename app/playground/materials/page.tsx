import Paper from "@/components/materials/Paper";
import Carbon from "@/components/materials/Carbon";
import Canvas from "@/components/materials/Canvas";
import Aluminum from "@/components/materials/Aluminum";
import Glass from "@/components/materials/Glass";
import Solar from "@/components/materials/Solar";
import Moss from "@/components/materials/Moss";
import Monarch from "@/components/materials/Monarch";
import Bark from "@/components/materials/Bark";
import LightMoss from "@/components/materials/LightMoss";

import Display from "@/components/typography/Display";
import Heading from "@/components/typography/Heading";
import Body from "@/components/typography/Body";
import Label from "@/components/typography/Label";
import Metadata from "@/components/typography/Metadata";

export default function MaterialsPage() {
  return (
    <Paper>

      <main className="mx-auto max-w-7xl px-12 py-20">

        <Label>
          STUDY 003
        </Label>

        <div className="mt-5">

          <Display>
            Digital Materials
          </Display>

          <Body className="mt-6 max-w-2xl">
            A study exploring how physical materials can be translated into a
            digital interface through abstraction rather than realism.
          </Body>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <MaterialCard
            title="Paper"
            description="Warm, calm, slightly fibrous."
          >
            <Paper className="h-56 rounded-xl border border-neutral-300" />
          </MaterialCard>

          <MaterialCard
            title="Canvas"
            description="Warm, calm, slightly fibrous."
          >
            <Canvas className="h-56 rounded-xl border border-neutral-300" />
          </MaterialCard>

          <MaterialCard
            title="Carbon"
            description="Primary text and structural contrast."
          >
            <Carbon className="h-56 rounded-xl" />
          </MaterialCard>

          <MaterialCard
            title="Aluminum"
            description="Industrial, brushed, optimistic."
          >
            <Aluminum className="h-56 rounded-xl" />
          </MaterialCard>

          <MaterialCard
            title="Glass"
            description="Reveal rather than obscure."
          >
            <Glass className="h-56 rounded-xl border border-white/30" />
          </MaterialCard>

          <MaterialCard
            title="Solar"
            description="Energy and optimism."
          >
            <Solar className="h-56 rounded-xl" />
          </MaterialCard>

          <MaterialCard
            title="Moss"
            description="Growth and ecology."
          >
            <Moss className="h-56 rounded-xl" />
          </MaterialCard>

          <MaterialCard
            title="Monarch"
            description="Warmth and humanity."
          >
            <Monarch className="h-56 rounded-xl" />
          </MaterialCard>

          <MaterialCard
            title="Bark"
            description="Grounded and tactile."
          >
            <Bark className="h-56 rounded-xl" />
          </MaterialCard>

          <MaterialCard
            title="LightMoss"
            description="Playful."
          >
            <LightMoss className="h-56 rounded-xl" />
          </MaterialCard>

        </div>

      </main>

    </Paper>
  );
}

type MaterialCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function MaterialCard({
  title,
  description,
  children,
}: MaterialCardProps) {
  return (
    <section>

      <div className="mb-4">

        <Heading>
          {title}
        </Heading>

        <Metadata className="mt-2">
          {description}
        </Metadata>

      </div>

      {children}

    </section>
  );
}