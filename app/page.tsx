import Paper from "@/components/materials/Paper";

import Display from "@/components/typography/Display";
import Body from "@/components/typography/Body";
import Label from "@/components/typography/Label";
import Metadata from "@/components/typography/Metadata";

import DotGrid from "@/components/grid/DotGrid";

export default function Home() {
  return (
    <Paper>
      <main className="relative isolate min-h-screen overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0 opacity-[0.28]">
          <DotGrid />
        </div>

        {/* Content */}

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-10">

          <div className="grid w-full gap-24 lg:grid-cols-12">

            {/* Left */}

            <section className="lg:col-span-7">

              <Label>
                ARKAU.STUDIO
              </Label>

              <div className="mt-6">

                <Display>
                  Website
                  <br />
                  in Progress
                </Display>

              </div>

              <Body className="mt-10 max-w-xl leading-relaxed">

                A collection of objects, systems, and ideas exploring
                sustainable everyday goods designed to last.

                <br />
                <br />

                The full Arkau website is currently being built.

              </Body>

            </section>

            {/* Right */}

            <aside className="flex flex-col justify-end lg:col-span-5">

              <div className="max-w-sm">

                <Metadata className="uppercase tracking-[0.18em]">
                  ABOUT
                </Metadata>

                <Body className="mt-5">

                  Arkau is an ongoing design practice focused on products,
                  clothing, furniture, and digital systems that encourage a
                  more thoughtful relationship with the objects we live with.

                </Body>

                <div className="mt-12 h-px w-24 bg-neutral-300" />

                <Metadata className="mt-10 uppercase tracking-[0.18em]">
                  CONTACT
                </Metadata>

                <Body className="mt-5">

                  For inquiries and previous work:

                  <br />

                  <a
                    href="https://nicklankau.com"
                    className="mt-2 inline-block transition-opacity hover:opacity-60"
                  >
                    nicklankau.com
                  </a>

                </Body>

              </div>

            </aside>

          </div>

        </div>

      </main>
    </Paper>
  );
}