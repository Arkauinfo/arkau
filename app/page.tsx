import Link from "next/link";
import type { CSSProperties } from "react";
import Canvas from "@/components/materials/Canvas";
import Paper from "@/components/materials/Paper";
import EmailSignup from "@/components/EmailSignup";
import MossOrbit from "@/components/MossOrbit";
import CrosshairNodeGrid from "@/components/grid/CrosshairNodeGrid";
import styles from "./home.module.css";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const micro =
  "font-inter text-[11px] font-extralight uppercase tracking-[0.3em]";

export default function Home() {
  return (
    <Canvas className="min-h-screen">
      <main className="text-[#1F201D]">
        {/* Hero: the world first */}
        <section
          className={`${styles.dots} relative isolate flex min-h-[70svh] flex-col justify-start overflow-hidden px-6 pb-20 pt-32 sm:px-12 sm:pt-36`}
        >
          <MossOrbit />

          <div className="relative">
            <p className={`${micro} ${styles.step} text-[#22572b]`} style={delay(0)}>
              Field note 001 / Arkau Studio
            </p>

            <div className="relative mt-6 max-w-5xl">
              {/* Crosshair grid, sitting just behind the headline */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-10 -inset-y-12 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]"
              >
                <CrosshairNodeGrid />
              </div>

              <h1 className="font-alte-haas text-5xl font-normal leading-[0.95] tracking-[-0.04em] text-[#22572b] sm:text-7xl lg:text-8xl">
                <span className={styles.step} style={delay(150)}>
                  Everyday goods
                </span>
                <br />
                <span className={styles.step} style={delay(400)}>
                  Designed to last
                </span>
              </h1>
            </div>

            <p
              className={`${styles.step} font-inter mt-8 max-w-md text-base leading-relaxed text-[#1F201D]/75`}
              style={delay(750)}
            >
              Objects from a solarpunk future, 
              <br />
              brought into the present.
            </p>
          </div>
        </section>

        {/* Drop list */}
        <section id="drop-list" className="px-6 pb-24 pt--80 sm:px-2">
          <Paper className="ml-auto -mr-6 max-w-4xl text-[#1F201D] sm:-mr-12">
            <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-2">
              <div>
                <p className={micro}>Drop list</p>
                <h2 className="font-alte-haas mt-4 text-4xl font-bold leading-none tracking-[-0.04em] text-[#22572b]">
                  Get the first look.
                </h2>
                <p className="font-inter mt-5 max-w-sm text-base leading-relaxed">
                  First access to each drop, plus field notes from the build.
                  We only write when there&rsquo;s something worth sending.
                </p>
              </div>
              <EmailSignup />
            </div>
          </Paper>
        </section>

        {/* About */}
        <section className="mx-auto max-w-4xl px-6 pb-32 sm:px-12">
          <p className={`${micro} text-[#22572b]`}>About</p>
          <p className="font-alte-haas mt-6 text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
            We exist to help create a future where personal, communal, and
            ecological health is effortless, simple, and the default way of
            life.
          </p>
          <Link
            href="/about"
            className="font-inter mt-8 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Read our story
          </Link>
        </section>
      </main>
    </Canvas>
  );
}