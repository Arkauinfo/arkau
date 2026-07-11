import MaterialSurface from "./MaterialSurface";
import { colors } from "@/design-system/colors";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Canvas({
  children,
  className = "",
}: Props) {
  return (
    <MaterialSurface
      background={colors.canvas}
      foreground={colors.carbon}
      className={className}
    >
      {children}
    </MaterialSurface>
  );
}