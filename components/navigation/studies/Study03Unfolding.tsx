import SectionDivider from "../shared/SectionDivider";

import FoldCard from "../shared/FoldCard";

export default function Study03Unfolding() {
  return (
    <section className="py-28">

      <SectionDivider
        number="03"
        title="Unfolding"
        description="Information appears as layers rather than menus."
      />

      <div className="mt-12 grid gap-6">

        <FoldCard
          number="001"
          title="Store"
        >
          Furniture, objects, apparel and future collections gradually
          reveal themselves instead of overwhelming the visitor.
        </FoldCard>

        <FoldCard
          number="002"
          title="Archive"
        >
          Process work, research, experiments and previous projects all
          become part of the story rather than hidden pages.
        </FoldCard>

        <FoldCard
          number="003"
          title="About"
        >
          Philosophy unfolds from broad ideas into finer details without
          requiring separate navigation levels.
        </FoldCard>

        <FoldCard
          number="004"
          title="Food"
        >
          Eventually recipes, ingredients and ecological systems become
          another layer of Arkau's world.
        </FoldCard>

      </div>

    </section>
  );
}