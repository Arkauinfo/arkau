import ContourLines from "./ContourLines";
import SurveyPoints from "./SurveyPoints";

type Props = {
  children?: React.ReactNode;
};

export default function Terrain({ children }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[42px]">

        <div
        className="absolute inset-0"
        style={{
            background: `
            radial-gradient(circle at 50% -20%, rgba(255,255,255,.92), transparent 55%),
            radial-gradient(circle at 75% 25%, rgba(255,255,255,.35), transparent 45%),
            linear-gradient(
                180deg,
                #faf8f3 0%,
                #f4f1e8 35%,
                #ece8dd 100%
            )
            `,
        }}
        />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top,
            rgba(255,255,255,.65),
            transparent 55%),

            #F5F2EA
          `,
        }}
      />

      {/* Fog */}

      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, rgba(255,255,255,.55), transparent 55%)",
        }}
      />

        <div
        className="absolute inset-0 pointer-events-none"
        style={{
            background:
            "linear-gradient(to top, transparent 0%, rgba(245,242,234,.05) 40%, rgba(245,242,234,.45) 78%, rgba(245,242,234,.92) 100%)",
        }}
        />

      <ContourLines />

      <SurveyPoints />

      {children}

    </div>
  );
}