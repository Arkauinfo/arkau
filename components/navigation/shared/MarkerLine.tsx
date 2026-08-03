type Props = {
  active: boolean;
};

export default function MarkerLine({ active }: Props) {
  return (
    <div
      className="origin-left transition-all duration-300"
      style={{
        width: active ? "92px" : "56px",
        height: "1px",
        background: "#1F201D",
        opacity: active ? 1 : 0.45,
      }}
    />
  );
}