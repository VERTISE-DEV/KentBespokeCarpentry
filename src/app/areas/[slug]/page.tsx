import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Banner } from "@/components/Banner";
import { Faqs } from "@/components/Faqs";
import { JsonLd, faqJsonLd } from "@/components/JsonLd";
import { Crumb, PageHead } from "@/components/PageHead";
import { ProjectCard } from "@/components/ProjectCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { AREAS, areaBySlug } from "@/lib/areas";
import { SERVICE_PAGES } from "@/lib/services";
import { PROJECTS } from "@/lib/site";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) return {};
  const title = `Carpentry & Joinery in ${a.name} | ${a.county}`;
  return {
    title,
    description: `First fix, second fix and bespoke joinery in ${a.name}, ${a.county}. Family run, fifteen years established, 5 star reviewed on Checkatrade. Free site visit and a fixed quote.`,
    alternates: { canonical: `/areas/${a.slug}` },
    openGraph: { title, url: `/areas/${a.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) notFound();

  const nearby = a.nearby.map(areaBySlug).filter((x): x is NonNullable<typeof x> => !!x);

  const faqs = [
    a.faq,
    { q: `Do you charge for a quote in ${a.name}?`, a: "No. The site visit and the written quote are free, and the figure we give you is fixed rather than an estimate that moves once work starts." },
    { q: `How soon can you start?`, a: `It depends on the size of the job and what we already have booked in around ${a.name}. We give you a realistic date at quote stage rather than an optimistic one.` },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Crumb href="/areas" label="Areas we cover" />
      <PageHead
        eyebrow={`Carpentry in ${a.county}`}
        h1={["Carpentry and joinery", `in ${a.name}.`]}
        intro={a.intro}
      />

      <section className="section prose" aria-labelledby="housing-h">
        <h2 id="housing-h" className="h-md" data-reveal="">The property in {a.name}</h2>
        <div className="prose__body">
          <p className="body-lg" data-reveal="">{a.housing}</p>
          <p className="body-lg d1" data-reveal="">{a.work}</p>
          <p className="body-lg d2" data-reveal="">
            We cover {a.postcodes} and the surrounding villages. Every job starts with a free site visit and a
            written fixed quote, and the carpenter who measures it is the carpenter who builds and installs it.
          </p>
        </div>
      </section>

      <section className="section hoods" aria-labelledby="hoods-h">
        <h2 id="hoods-h" className="h-md" data-reveal="">Where we work around {a.name}</h2>
        <ul className="hoods__list" data-reveal="">
          {a.neighbourhoods.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </section>

      <RelatedLinks
        heading={`What we do in ${a.name}`}
        items={SERVICE_PAGES.map((s) => ({ href: `/services/${s.slug}`, label: s.label, note: s.eyebrow }))}
      />

      <section className="section projects" aria-labelledby="work-h">
        <h2 id="work-h" className="h-xl" data-reveal="">Recent work<br /><span className="light">across Kent</span></h2>
        <div className="projects__grid">
          {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} href="/projects" headingLevel="h3" />)}
        </div>
      </section>

      <RelatedLinks
        heading="Nearby areas we cover"
        lead={`We are on the road across ${a.county} and beyond most weeks, so if you are between these places it is still worth asking.`}
        items={[
          ...nearby.map((n) => ({ href: `/areas/${n.slug}`, label: n.name, note: n.postcodes })),
          { href: "/areas", label: "All areas", note: `${AREAS.length} places we cover` },
        ]}
      />

      <Faqs items={faqs} heading={`Working in ${a.name}`} />

      <Banner title={`Planning work in ${a.name}?`} sub="Let's talk it through." />
    </>
  );
}
