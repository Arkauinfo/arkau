import EmailSignup from "@/components/EmailSignup";
import { mono } from "./mono";
import styles from "./home.module.css";

const microText = `${mono.className} text-xs uppercase tracking-[0.04em]`;

export default function Home() {
  return (
    <div className={`${styles.paper} min-h-screen text-[#26332b]`}>
      <header className="border-b border-[#26332b]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-6 lg:px-10 lg:py-6">
          <p className="font-alte-haas text-[32px] font-bold leading-none tracking-[-0.045em] lg:text-[40px]">
            Arkau
          </p>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.04em] sm:text-xs`}>
            Living well, together.
          </p>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-14 pt-10 md:grid-cols-2 md:items-start md:gap-8 md:px-6 md:pt-16 lg:gap-16 lg:px-10 lg:pb-16 lg:pt-[72px]">
          <div>
            <p className={microText}>Softgoods / Homegoods / Fragrances</p>
            <h1
              className="font-alte-haas mt-6 font-bold leading-[0.94] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)" }}
            >
              Living well.
              <br />
              By design.
            </h1>
            <p className="font-inter mt-6 text-lg leading-[1.45]">
              Thoughtful everyday goods. For you, your community, and the world
              we share. Join for first access to limited drops and pre-orders.
            </p>
            <EmailSignup />
          </div>

          {/* Artwork: photo with white construction lines (decorative) */}
          <figure className="border border-[#26332b]">
            <div
              className={`${mono.className} flex justify-between gap-4 bg-[#27322a] px-4 py-3 text-xs uppercase tracking-[0.04em] text-[#e8e6dc]`}
            >
              <span>Personal / Communal / Ecological</span>
              <span>Arkau</span>
            </div>
            <div className="relative aspect-[0.93] overflow-hidden md:aspect-[0.83] lg:aspect-[1.08]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/background-photo.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                className="absolute inset-0 h-full w-full [&_*]:[vector-effect:non-scaling-stroke]"
              >
                <g strokeOpacity="0.3">
                  <line x1="25" y1="-10" x2="25" y2="110" />
                  <line x1="75" y1="-10" x2="75" y2="110" />
                  <line x1="-10" y1="25" x2="110" y2="25" />
                  <line x1="-10" y1="75" x2="110" y2="75" />
                </g>
                <g strokeOpacity="0.75">
                  <line x1="50" y1="-10" x2="50" y2="110" />
                  <line x1="-10" y1="50" x2="110" y2="50" />
                </g>
                <g strokeOpacity="0.9">
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="20" />
                  <rect
                    x="23.13"
                    y="23.13"
                    width="53.74"
                    height="53.74"
                    transform="rotate(45 50 50)"
                  />
                </g>
                <rect
                  x="43"
                  y="43.5"
                  width="14"
                  height="13"
                  fill="#d4c895"
                  fillOpacity="0.92"
                  stroke="none"
                />
              </svg>
            </div>
            <figcaption className={`${microText} border-t border-[#26332b] px-4 py-3.5`}>
              A shared world. Not a disposable one.
            </figcaption>
          </figure>
        </section>

        {/* Brand statement */}
        <section className="bg-[#27322a] text-[#e8e6dc]">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 md:grid-cols-[0.525fr_1fr] md:px-6 lg:gap-12 lg:px-10 lg:py-14">
            <p className={`${microText} text-[#b9c9a7]`}>
              Independent design. / Collective futures.
            </p>
            <div>
              <h2 className="font-inter text-[32px] font-medium leading-tight tracking-[-0.02em] md:text-4xl">
                Not more of the same.
              </h2>
              <p className="mt-6 text-lg leading-[1.45]">
                We&rsquo;re bringing a future worth living in into the
                everyday. Bags, homegoods, and fragrances designed to unite
                beauty, function, and responsibility&mdash;not trade one for
                another. Better things to live with. A better world to live in.
              </p>
              <p className={`${microText} mt-8 text-[#b9c9a7]`}>
                Bags
                <span aria-hidden className="mx-3">/</span>
                Homegoods
                <span aria-hidden className="mx-3">/</span>
                Fragrances
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div
          className={`${microText} mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-5 md:px-6 lg:px-10`}
        >
          <p>&copy; Arkau 2026</p>
          <p>Less extraction. More connection.</p>
        </div>
      </footer>
    </div>
  );
}
