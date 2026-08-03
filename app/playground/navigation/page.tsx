import Paper from "@/components/materials/Paper";

import Study01Editorial from "@/components/navigation/studies/Study01Editorial";
import Study02Spatial from "@/components/navigation/studies/Study02Spatial";
import Study03Unfolding from "@/components/navigation/studies/Study03Unfolding";
import Study04Focus from "@/components/navigation/study04/Study04Focus";
import Study05Graphic from "@/components/navigation/studies/Study05Graphic";

import Display from "@/components/typography/Display";
import Body from "@/components/typography/Body";
import Label from "@/components/typography/Label";

export default function NavigationPage() {
  return (
    <Paper>
      <main className="mx-auto max-w-7xl px-12 py-24">

        <Label>
          DIGITAL MATERIALS LAB
        </Label>

        <div className="mt-5 mb-28">

          <Display>
            Navigation
          </Display>

          <Body className="mt-6 max-w-2xl">
            A study exploring orientation, movement, hierarchy and spatial
            interaction.
          </Body>

        </div>

        <Study01Editorial />

        <Study02Spatial />

        <Study03Unfolding />

        <Study04Focus />

        <Study05Graphic />

      </main>
    </Paper>
  );
}