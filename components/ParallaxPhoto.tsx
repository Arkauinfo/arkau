"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  logo: string;
  logoAlt?: string;
};

/* Photo with a fixed frame and a moving image inside it.
   - The frame (and the logo on top) never move.
   - The image is 16% larger than the frame and shifts inside it:
     opposite the mouse (up to ~3% each way), and upward as the page scrolls
     (up to ~4.5% over the first screen of scrolling).
   - Movement is eased, and skipped for people who prefer reduced motion. */
export default function ParallaxPhoto({ src, logo, logoAlt = "Arkau" }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = frame.current;
    const img = layer.current;
    if (!box || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let width = 0;
    let height = 0;
    let mx = 0; // mouse, -0.5..0.5
    let my = 0;
    let scroll = 0; // 0..1 over the first screen of scrolling
    let x = 0; // eased position
    let y = 0;
    let raf = 0;

    const measure = () => {
      const r = box.getBoundingClientRect();
      width = r.width;
      height = r.height;
    };
    const onMouse = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.05;
      my = e.clientY / window.innerHeight - 0.05;
    };
    const onScroll = () => {
      scroll = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
    };
    const tick = () => {
      const tx = -mx * width * 0.01;
      const ty = -my * height * 0.05 - scroll * height * 0.15;
      x += (tx - x) * 0.01;
      y += (ty - y) * 0.01;
      img.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(box);
    measure();
    onScroll();
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={frame} className="relative h-full w-full overflow-hidden">
      <div ref={layer} className="absolute -inset-[8%] will-change-transform">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={logoAlt}
        className="absolute left-1/2 top-1/2 h-auto w-[30%] min-w-[96px] max-w-[320px] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}