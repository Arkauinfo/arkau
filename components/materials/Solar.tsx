import MaterialSurface from "./MaterialSurface";
import { colors } from "@/design-system/colors";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Solar({
  children,
  className = "",
}: Props) {
  return (
    <MaterialSurface
      background={colors.solar}
      foreground={colors.carbon}
      className={className}
    >
      {children}
    </MaterialSurface>
  );
}