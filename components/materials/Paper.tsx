import GridOverlay from "./GridOverlay";

type PaperProps = {
  children: React.ReactNode;
};

export default function Paper({ children }: PaperProps) {
  return (
    <div className="bg-[#F6F2EA] text-neutral-900 min-h-screen">

      <GridOverlay />

      {children}

    </div>
  );
}


