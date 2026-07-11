import MaterialSurface from "./MaterialSurface";
import { colors } from "@/design-system/colors";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Aluminum({
  children,
  className = "",
}: Props) {
  return (
    <MaterialSurface
      background={colors.aluminum}
      foreground={colors.carbon}
      brushed
      className={className}
    >
      {children}
    </MaterialSurface>
  );
}