import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Metadata from "@/components/typography/Metadata";

type Props = {
  number: string;
  title: string;
  description: string;
};

export default function SectionDivider({
  number,
  title,
  description,
}: Props) {
  return (
    <section className="mt-36">

      <div className="border-t border-neutral-300 pt-8">

        <Label>
          STUDY {number}
        </Label>

        <div className="mt-3 flex items-end justify-between">

          <Heading>
            {title}
          </Heading>

          <Metadata>
            {description}
          </Metadata>

        </div>

      </div>

    </section>
  );
}