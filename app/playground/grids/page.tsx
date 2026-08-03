import Paper from "@/components/materials/Paper";

import Display from "@/components/typography/Display";
import Label from "@/components/typography/Label";
import Metadata from "@/components/typography/Metadata";
import Body from "@/components/typography/Body";

import GridSection from "@/components/grid/GridSection";
import SquareGrid from "@/components/grid/SquareGrid";
import DotGrid from "@/components/grid/DotGrid";
import HorizontalGrid from "@/components/grid/HorizontalGrid";
import VerticalGrid from "@/components/grid/VerticalGrid";
import CircleNodeGrid from "@/components/grid/CircleNodeGrid";
import SquareNodeGrid from "@/components/grid/SquareNodeGrid";
import CrosshairNodeGrid from "@/components/grid/CrosshairNodeGrid";
import CrosshairGrid from "@/components/grid/CrosshairGrid";

export default function GridStudy() {
  return (
    <Paper>
      <main className="mx-auto max-w-5xl px-10 py-20">

        {/* Header */}

        <section className="mb-20">

          <Label>
            ARKAU DIGITAL MATERIALS LAB
          </Label>

          <div className="mt-4 flex items-end justify-between">

            <Display>
              Study 005
            </Display>

            <Metadata>
              Grid Systems
            </Metadata>

          </div>

          <div className="mt-8 h-px bg-neutral-300" />

          <div className="mt-8 max-w-xl">

            <Body>
              Exploration of modular grids, drafting systems,
              surveying graphics and subtle spatial motion for the
              Arkau interface.
            </Body>

          </div>

        </section>

        {/* Studies */}

        <div className="space-y-16">

          <GridSection
            title="Square Grid"
            description="Traditional drafting grid."
          >
            <SquareGrid />
          </GridSection>

            <GridSection
            title="HorizontalGrid"
            description="2:1 horizontal drafting grid."
            >
            <HorizontalGrid />
            </GridSection>

            <GridSection
            title="VerticalGrid"
            description="2:1 vertical drafting grid."
            >
            <VerticalGrid />
            </GridSection>

            <GridSection
            title="DotGrid"
            description="Subtle point matrix."
            >
            <DotGrid />
            </GridSection>

            <GridSection
            title="CircleNodeGrid"
            description="Circle Nodes on Square Grid."
            >
            <CircleNodeGrid />
            </GridSection>

          <GridSection
          title="SquareNodeGrid"
          description="Square Nodes on a Square Grid"
          >
            <SquareNodeGrid />
          </GridSection>

          <GridSection
          title="CrosshairNodeGrid"
          description="Crosshair Grid."
          >
            <CrosshairNodeGrid />
          </GridSection>

          <GridSection
          title="CrosshairGrid"
          description="Crosshair Grid."
          >
            <CrosshairGrid />
          </GridSection>



        </div>

      </main>
    </Paper>
  );
}