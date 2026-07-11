export default function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-[0.06]">

      {/* Vertical */}

      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-black"
          style={{
            left: `${(100 / 16) * i}%`,
          }}
        />
      ))}

      {/* Horizontal */}

      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-black"
          style={{
            top: `${(100 / 10) * i}%`,
          }}
        />
      ))}

    </div>
  );
}