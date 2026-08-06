import Paper from "@/components/materials/Paper";
import Display from "@/components/typography/Display";
import Body from "@/components/typography/Body";
import Label from "@/components/typography/Label";

export default function Home() {
  return (
    <Paper>
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-8 text-center">

        <Label>
          ARKAU.STUDIO
        </Label>

        <div className="mt-6">

          <Display>
            Under Construction
          </Display>

        </div>

        <Body className="mt-8 max-w-xl">
          The Arkau website is currently under construction.
          <br />
          <br />
          For inquiries and previous work, please visit{" "}
          <a
            href="https://nicklankau.com"
            className="underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            nicklankau.com
          </a>.
        </Body>

      </main>
    </Paper>
  );
}