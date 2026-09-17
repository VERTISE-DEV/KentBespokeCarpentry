import type { Metadata } from "next";
import { SectorView } from "@/components/SectorView";
import { sectorBySlug } from "@/lib/sectors";

const sector = sectorBySlug("commercial")!;

export const metadata: Metadata = {
  title: sector.title,
  description: sector.description,
  alternates: { canonical: "/commercial" },
  openGraph: { title: sector.title, url: "/commercial" },
};

export default function Page() {
  return <SectorView sector={sector} />;
}
