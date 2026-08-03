const points = Array.from({ length: 140 }).map(() => {
  const depth = Math.random();

  return {
    x: Math.random() * 100,

    // horizon at the top, viewer at the bottom
    y: Math.pow(depth, 1.7) * 82 + 8,

    // bigger near the viewer
    s: depth * 6 + 1.5,

    // darker near the viewer
    opacity: depth * 0.45 + 0.08,
  };
});

export default function SurveyPoints() {
  return (
    <>
      {points.map((p, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity:p.opacity
          }}
        >
          <div
            className="absolute bg-neutral-600"
            style={{
              width: `${p.s}px`,
              height: "1px",
              left: `${-p.s / 2}px`,
            }}
          />

          <div
            className="absolute bg-neutral-600"
            style={{
              height: `${p.s}px`,
              width: "1px",
              top: `${-p.s / 2}px`,
            }}
          />
        </div>
      ))}
    </>
  );
}