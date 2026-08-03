import Body from "@/components/typography/Body";

type Props = {
  open: boolean;
  children: React.ReactNode;
};

export default function FoldContent({
  open,
  children,
}: Props) {
  return (
    <div
      className="grid transition-all duration-500"
      style={{
        gridTemplateRows: open ? "1fr" : "0fr",
        opacity: open ? 1 : 0,
      }}
    >
      <div className="overflow-hidden">

        <Body className="mt-6 max-w-md leading-relaxed text-neutral-600">

          {children}

        </Body>

      </div>
    </div>
  );
}