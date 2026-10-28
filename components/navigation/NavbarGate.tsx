"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

// The homepage has its own header and no other pages exist yet, so the global
// navbar is hidden on "/" only. Remove this check once other pages are live.
export default function NavbarGate() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Navbar />;
}
