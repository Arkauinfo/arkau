import SectionDivider from "../shared/SectionDivider";

import Terrain from "../shared/Terrain";
import ParallaxScene from "../shared/ParallaxScene";
import Marker from "../shared/Marker";

export default function Study02Spatial() {
  return (
    <section className="py-28">

      <SectionDivider
        number="02"
        title="Spatial Navigation"
        description="A landscape instead of a menu."
      />

      <div className="mt-12">

        <ParallaxScene>

          <Terrain>

            <Marker
              x={22}
              y={24}
              title="STORE"
              subtitle="Furniture · Objects"
            />

            <Marker
              x={70}
              y={30}
              title="ARCHIVE"
              subtitle="Projects · Research"
            />

            <Marker
              x={34}
              y={66}
              title="ABOUT"
              subtitle="Story · Philosophy"
            />

            <Marker
              x={76}
              y={74}
              title="FOOD"
              subtitle="Recipes · Future"
            />

          </Terrain>

        </ParallaxScene>

      </div>

    </section>
  );
}