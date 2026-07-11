import { ReactNode } from "react";

type MaterialSurfaceProps = {
  children?: ReactNode;
  className?: string;

  background: string;
  foreground: string;

  grain?: boolean;
  brushed?: boolean;
  ribs?: boolean;
  highlight?: boolean;
};

export default function MaterialSurface({
  children,
  className = "",

  background,
  foreground,

  grain = true,
  brushed = false,
  ribs = false,
  highlight = true,
}: MaterialSurfaceProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: background,
        color: foreground,
        boxShadow:
          `
          inset 0 1px rgba(255,255,255,.35),
          inset 0 -1px rgba(0,0,0,.08),
          0 0 0 1px rgba(0,0,0,.04)
          `,
      }}
    >
      {/* -------------------------------- */}
      {/* Large Material Variation */}
      {/* -------------------------------- */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.24,
          backgroundImage: `
            radial-gradient(circle at 18% 22%, rgba(255,255,255,.30), transparent 42%),
            radial-gradient(circle at 82% 70%, rgba(0,0,0,.12), transparent 38%),
            radial-gradient(circle at 42% 84%, rgba(255,255,255,.16), transparent 30%)
          `,
        }}
      />

      {/* -------------------------------- */}
      {/* Soft Vertical Lighting */}
      {/* -------------------------------- */}

      {highlight && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.18,
            background: `
              linear-gradient(
                180deg,
                rgba(255,255,255,.30),
                transparent 28%,
                rgba(255,255,255,.08) 65%,
                transparent
              )
            `,
          }}
        />
      )}

      {/* -------------------------------- */}
      {/* Paper / Pigment Grain */}
      {/* -------------------------------- */}

      {grain && (
        <div
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            opacity: 0.055,

            backgroundImage: `
              radial-gradient(circle, rgba(0,0,0,.22) .35px, transparent .6px)
            `,

            backgroundSize: "7px 7px",
          }}
        />
      )}

      {/* -------------------------------- */}
      {/* Brushed Aluminum */}
      {/* -------------------------------- */}

      {brushed && (
        <>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.10,
              background: `
                repeating-linear-gradient(
                  96deg,
                  rgba(255,255,255,.28),
                  rgba(255,255,255,.28) 1px,
                  transparent 4px,
                  transparent 11px
                )
              `,
            }}
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.18,
              background: `
                linear-gradient(
                  105deg,
                  transparent 15%,
                  rgba(255,255,255,.45) 48%,
                  transparent 82%
                )
              `,
            }}
          />
        </>
      )}

      {/* -------------------------------- */}
      {/* Ribbed Glass */}
      {/* -------------------------------- */}

      {ribs && (
        <>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.10,
              background: `
                repeating-linear-gradient(
                  90deg,
                  rgba(255,255,255,.30),
                  rgba(255,255,255,.30) 2px,
                  transparent 12px
                )
              `,
            }}
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.22,
              background: `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,.45),
                  transparent 40%
                )
              `,
            }}
          />
        </>
      )}

      {/* -------------------------------- */}
      {/* Edge Falloff */}
      {/* -------------------------------- */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow:
            "inset 0 0 50px rgba(0,0,0,.04)",
        }}
      />

      {/* -------------------------------- */}

      <div className="relative h-full w-full">
        {children}
      </div>
    </div>
  );
}