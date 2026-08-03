import { ReactNode } from "react";

import Heading from "@/components/typography/Heading";
import Metadata from "@/components/typography/Metadata";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function GridSection({
  title,
  description,
  children,
}: Props) {
  return (
    <section>

      <div className="mb-5">

        <Heading>

          {title}

        </Heading>

        <Metadata className="mt-2">

          {description}

        </Metadata>

      </div>

      <div
        className="
          relative
          h-72
          overflow-hidden
          rounded-xl
          border
          border-neutral-300
          bg-white
        "
      >

        {children}

      </div>

    </section>
  );
}