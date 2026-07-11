import MaterialSurface from "./MaterialSurface";
import { colors } from "@/design-system/colors";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Bark({
  children,
  className = "",
}: Props) {
  return (
    <MaterialSurface
      background={colors.bark}
      foreground={colors.paper}
      className={className}
    >
      {children}
    </MaterialSurface>
  );
}