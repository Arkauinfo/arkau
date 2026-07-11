export default function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-[0.08]">

      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px bg-black"
          style={{
            left: `${(100 / 16) * i}%`,
          }}
        />
      ))}

    </div>
  );
}