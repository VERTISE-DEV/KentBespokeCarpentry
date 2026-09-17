import type { Metadata } from "next";
import { SectorView } from "@/components/SectorView";
import { sectorBySlug } from "@/lib/sectors";

const sector = sectorBySlug("residential")!;

export const metadata: Metadata = {
  title: sector.title,
  description: sector.description,
  alternates: { canonical: "/residential" },
  openGraph: { title: sector.title, url: "/residential" },
};

export default function Page() {
  return <SectorView sector={sector} />;
}
