import Heading from "@/components/typography/Heading";
import Metadata from "@/components/typography/Metadata";

type Props = {
  title: string;
  subtitle: string;
  active: boolean;
};

export default function MarkerLabel({
  title,
  subtitle,
  active,
}: Props) {
  return (
    <div
      className="transition-all duration-300"
      style={{
        transform: active
          ? "translateY(-6px) scale(1.08)"
          : "translateY(0px) scale(1)",
        transformOrigin: "left bottom",
      }}
    >
      <Heading className="leading-none">
        {title}
      </Heading>

      <Metadata
        className={`mt-3 transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-40"
        }`}
      >
        {subtitle}
      </Metadata>
    </div>
  );
}