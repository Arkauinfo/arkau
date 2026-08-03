type Props = {
  open: boolean;
};

export default function FoldLine({ open }: Props) {
  return (
    <div
      className="transition-all duration-300"
      style={{
        height: "1px",
        width: open ? "100%" : "72px",
        background: "#1F201D",
        opacity: open ? 1 : .35,
      }}
    />
  );
}