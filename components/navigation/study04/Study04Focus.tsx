"use client";

import FocusRack from "./FocusRack";
import type { FocusCardData } from "./FocusCard";

const PAGES: FocusCardData[] = [
  { id: "home", title: "Home" },
  { id: "archive", title: "Archive" },
  { id: "store", title: "Store" },
  { id: "about", title: "About" },
];

export default function Study04Focus() {
  // Wire this up to your router when you're ready — hover previews,
  // click commits to the page.
  function handleSelect(index: number) {
    console.log("navigate to", PAGES[index].id);
  }

  return (
    <div
      className="flex w-full items-start justify-center overflow-hidden"
      style={{
        background: "#f2f7f0", // paper
        height: 480, // crops every card's bottom out of frame, on purpose
        paddingTop: 48,
        perspective: 2000, // flatter/less dramatic than before — more straight-on
        perspectiveOrigin: "50% 20%", // camera just barely above the cards
      }}
    >
      <FocusRack items={PAGES} onSelect={handleSelect} />
    </div>
  );
}