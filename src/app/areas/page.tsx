import type { Metadata } from "next";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { Crumb, PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { AREAS, areasByCounty } from "@/lib/areas";
import { SERVICE_PAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Areas We Cover in Kent & the South East",
  description:
    "Carpentry and joinery across Kent, South East London and the East Sussex border. First fix, second fix and bespoke joinery in Maidstone, Canterbury, Medway, Tunbridge Wells, Bromley and more.",
  alternates: { canonical: "/areas" },
  openGraph: { title: "Areas we cover | Kent Bespoke Carpentry", url: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <Crumb href="/" label="Home" />
      <PageHead
        eyebrow="Where we work"
        h1={["Areas we cover", "across the South East."]}
        intro={`We work throughout Kent and over the borders into South East London and East Sussex. Below are ${AREAS.length} of the places we are asked to work most often, with a note on what the property in each is actually like. If you are just outside one of them, ask anyway.`}
      />

      {areasByCounty().map(([county, areas]) => (
        <section key={county} className="section related" aria-labelledby={`c-${county.replace(/\s+/g, "")}`}>
          <h2 id={`c-${county.replace(/\s+/g, "")}`} className="h-md" data-reveal="">{county}</h2>
          <ul className="related__grid">
            {areas.map((a, i) => (
              <li key={a.slug} data-reveal="" style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
                <Link href={`/areas/${a.slug}`}>
                  <span className="related__label">{a.name}</span>
                  <span className="related__note">{a.postcodes}</span>
                  <span className="related__arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <RelatedLinks
        heading="What we do"
        items={[
          ...SERVICE_PAGES.map((s) => ({ href: `/services/${s.slug}`, label: s.label, note: s.eyebrow })),
          { href: "/residential", label: "Residential", note: "Work in people's homes" },
          { href: "/commercial", label: "Commercial", note: "Contractors and landlords" },
        ]}
      />

      <Banner title="Not sure if we reach you?" sub="Ask us, it costs nothing." />
    </>
  );
}
