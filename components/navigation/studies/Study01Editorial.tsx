import Heading from "@/components/typography/Heading";
import Metadata from "@/components/typography/Metadata";
import SectionDivider from "../shared/SectionDivider";

const destinations = [
  {
    title: "Store",
    subtitle: "Objects • Furniture • Wear",
  },
  {
    title: "Archive",
    subtitle: "Research • Projects • Field Notes",
  },
  {
    title: "About",
    subtitle: "Story • Philosophy • Ethics",
  },
  {
    title: "Food",
    subtitle: "Recipes • Community",
  },
];

export default function Study01Editorial() {
  return (
    <section>

      <SectionDivider
        number="01"
        title="Editorial"
        description="Minimal navigation through hierarchy."
      />

      <div className="mt-10 border-t border-neutral-300">

        {destinations.map((item) => (

          <button
            key={item.title}
            className="
            group
            w-full
            border-b
            border-neutral-300
            py-7
            text-left
            transition-all
            duration-200
            hover:pl-4
          "
          >

            <div className="flex items-end justify-between">

              <Heading
                className="
                text-5xl
                md:text-6xl
                transition-all
                duration-200
                group-hover:tracking-[0.06em]
              "
              >
                {item.title}
              </Heading>

              <Metadata
                className="
                opacity-0
                transition-all
                duration-200
                group-hover:opacity-100
              "
              >
                {item.subtitle}
              </Metadata>

            </div>

          </button>

        ))}

      </div>

    </section>
  );
}