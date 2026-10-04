"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { colors } from "@/design-system/colors";
import styles from "./Navbar.module.css";

/* -------------------------------------------------------------------------
   Arkau global navbar
   - Centered, lightened blur plate floating below the top of the page
   - A white square grid underneath the plate, peeking out ~10px
   - Logo: Alte Haas bold, 1px outline, no fill -> fills on hover
   - Logo and links are spaced evenly across the plate
   - Links: Inter; current page sits on a paper rectangle; one-frame glitch
     on hover (see Navbar.module.css)
   ------------------------------------------------------------------------- */

// Add or reorder pages here. The navbar updates everywhere.
const NAV_ITEMS = [
  { label: "Shop", href: "/shop" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
  { label: "Field Notes", href: "/field-notes" },
  { label: "Contact", href: "/contact" },
];

// The plate adapts to what is behind it. Over a bright background (above ~50%
// brightness) it darkens slightly with a faint moss tint and uses carbon ink;
// over a dark background it stays a light, clear plate with white ink.
// Detection is automatic (it reads the background color under the bar). To
// force it for an image or video section, add data-nav-bg="bright" or
// data-nav-bg="dark" to that section.
type Bg = "bright" | "dark";

const TONES: Record<Bg, Record<string, string>> = {
  bright: {
    "--nav-ink": colors.carbon,
    "--nav-grid": "rgba(255,255,255,0.5)",
    "--nav-glass": "rgba(255, 255, 240, 0.65)",
    "--nav-brightness": "0.94",
    "--nav-hover": "rgba(31,32,29,0.08)",
    "--nav-active-bg": colors.carbon,
    "--nav-active-ink": colors.paper,
  },
  dark: {
    "--nav-ink": "#ffffff",
    "--nav-grid": "rgba(255,255,255,0.5)",
    "--nav-glass": "rgba(255,255,255,0.14)",
    "--nav-brightness": "1",
    "--nav-hover": "rgba(255,255,255,0.16)",
    "--nav-active-bg": colors.paper,
    "--nav-active-ink": colors.carbon,
  },
};

const BLUR = "blur(8px) brightness(var(--nav-brightness))";

function brightnessOf(color: string): number | null {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const [r, g, b, a = "1"] = m[1].split(/[ ,/]+/).filter(Boolean);
  if (parseFloat(a) < 0.5) return null; // transparent: keep looking
  return (0.2126 * +r + 0.7152 * +g + 0.0722 * +b) / 255;
}

// Is whatever is painted at (x, y), behind the navbar, bright?
function isBrightAt(x: number, y: number): boolean {
  for (const el of document.elementsFromPoint(x, y)) {
    if (el.closest("[data-navbar]")) continue;
    let node: Element | null = el;
    while (node) {
      const override = node.getAttribute("data-nav-bg");
      if (override) return override === "bright";
      const value = brightnessOf(getComputedStyle(node).backgroundColor);
      if (value !== null) return value > 0.5;
      node = node.parentElement;
    }
  }
  return true;
}

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [bright, setBright] = useState(true);

  useEffect(() => {
    let frame = 0;
    const sample = () => {
      frame = 0;
      const nav = navRef.current;
      if (!nav) return;
      const r = nav.getBoundingClientRect();
      const y = r.top + r.height / 2;
      const votes = [0.15, 0.5, 0.85].filter((t) =>
        isBrightAt(r.left + r.width * t, y)
      ).length;
      setBright(votes >= 2);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(sample);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-6"
      data-navbar
      style={TONES[bright ? "bright" : "dark"] as CSSProperties}
    >
      <nav
        ref={navRef}
        aria-label="Primary"
        className="pointer-events-auto relative w-full max-w-4xl"
      >
        {/* Grid underneath the plate: only its tips peek out (see module css) */}
        <div aria-hidden className={`${styles.gridV} pointer-events-none absolute`} />
        <div aria-hidden className={`${styles.gridH} pointer-events-none absolute`} />

        {/* Blur plate */}
        <div
          aria-hidden
          className="absolute inset-0 transition-colors duration-300"
          style={{
            background: "var(--nav-glass)",
            backdropFilter: BLUR,
            WebkitBackdropFilter: BLUR,
          }}
        />

        {/* Grain */}
        <div aria-hidden className={`${styles.grain} pointer-events-none absolute inset-0`} />

        {/* Content: justify-between on a flat list = equal gaps between the
            logo and every link */}
        <ul className="relative flex h-[60px] items-center justify-between px-6 sm:px-10">
          <li>
            <Link
              href="/"
              aria-label="Arkau home"
              className="font-alte-haas block text-2xl font-bold leading-none tracking-[-0.04em] text-transparent transition-colors duration-200 hover:[color:var(--nav-ink)] focus-visible:[color:var(--nav-ink)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--nav-ink)] sm:text-3xl"
              style={{ WebkitTextStroke: "1px var(--nav-ink)" }}
            >
              Arkau
            </Link>
          </li>

          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${styles.link} group font-inter relative block text-xs leading-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--nav-ink)] sm:text-sm`}
                  style={{
                    color: active
                      ? "var(--nav-active-ink)"
                      : "var(--nav-ink)",
                  }}
                >
                  {/* Highlight sits behind the text and extends past it, so
                      spacing stays equal text-to-text. */}
                  <span
                    aria-hidden
                    className="absolute -inset-x-2 -inset-y-2 rounded-[3px] transition-colors duration-200 group-hover:bg-[var(--nav-hover)] sm:-inset-x-3.5"
                    style={
                      active
                        ? { backgroundColor: "var(--nav-active-bg)" }
                        : undefined
                    }
                  />
                  <span className={`${styles.label} relative`} data-text={item.label}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}