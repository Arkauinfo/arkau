type FocusEdgeProps = {
  thickness: number;
  isActive: boolean;
};

// bark -> aluminum for the resting edge, monarch -> bark (with a solar glint) when active
export default function FocusEdge({ thickness, isActive }: FocusEdgeProps) {
  return (
    <div
      className="absolute left-0 w-full"
      style={{
        top: "100%",
        height: thickness,
        transformOrigin: "top center",
        transform: "rotateX(-90deg)",
        background: isActive
          ? "linear-gradient(to bottom, #966a23, #282c18)" // monarch -> bark
          : "linear-gradient(to bottom, #CAC8C1, #282c18)", // aluminum -> bark
        boxShadow: isActive
          ? "inset 0 1px 0 rgba(216,233,64,0.35)" // faint solar glint
          : "inset 0 1px 0 rgba(242,247,240,0.15)", // faint paper glint
        transition: "background 380ms ease",
      }}
    />
  );
}