import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, Geist, Rubik } from "next/font/google";
import { alteHaas } from "./fonts"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Arkau",
  description: "Nature. Materials. Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${ibmPlex.variable}
          ${geist.variable}
          ${rubik.variable}
          ${alteHaas.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}