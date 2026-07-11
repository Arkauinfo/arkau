import MaterialSurface from "./MaterialSurface";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Glass({
  children,
  className = "",
}: Props) {
  return (
    <MaterialSurface
      background="rgba(255,255,255,.18)"
      foreground="#1F201D"
      ribs
      className={`backdrop-blur-md border border-white/30 ${className}`}
    >
      {children}
    </MaterialSurface>
  );
}