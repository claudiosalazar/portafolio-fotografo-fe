import { ReactNode } from "react";
import type { Metadata } from "next";
// import { generateBaseMetadata } from "@/libs/metadata";

/*export const metadata: Metadata = generateBaseMetadata(
  "Portafolio | Claudio Salazar - UI Developer",
  "Descubre mis proyectos destacados en diseño UI y desarrollo frontend. Trabajos seleccionados de diseño y programación web.",
  "/portafolio",
  ["portafolio diseño", "proyectos frontend", "UI", "UX", "desarrollo web", "diseño interfaces", "proyectos destacados"]
);*/

interface GaleriaLayoutProps {
  children: ReactNode;
}

export default function GaleriaLayout({ children }: GaleriaLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}