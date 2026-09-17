import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Banner } from "@/components/Banner";
import { Faqs } from "@/components/Faqs";
import { JsonLd, faqJsonLd } from "@/components/JsonLd";
import { Crumb, PageHead } from "@/components/PageHead";
import { ProjectCard } from "@/components/ProjectCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { AREAS, areaBySlug } from "@/lib/areas";
import { serviceBySlug } from "@/lib/services";
import { PROJECTS, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) return {};
  return {
    title: { absolute: a.title },
    description: a.description,
    alternates: { canonical: `/areas/${a.slug}` },
    openGraph: { title: a.title, description: a.description, url: `/areas/${a.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) notFound();

  const nearby = a.nearby.map(areaBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  // Services are ordered by what this area actually asks for, so the page leads with the
  // right one rather than the same one everywhere.
  const services = a.serviceOrder.map(serviceBySlug).filter((x): x is NonNullable<typeof x> => !!x);

  // Service-area markup, which is what local packs read.
  const areaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Carpentry and joinery",
    provider: { "@type": "HomeAndConstructionBusiness", name: "Kent Bespoke Carpentry Ltd", "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "Place", name: `${a.name}, ${a.county}`, address: { "@type": "PostalAddress", addressLocality: a.name, addressRegion: a.county, addressCountry: "GB" } },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Carpentry in ${a.name}`,
      itemListElement: a.topJobs.map((j) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: j.job, description: j.why } })),
    },
  };

  return (
    <>
      <JsonLd data={areaJsonLd} />
      <JsonLd data={faqJsonLd(a.faqs)} />
      <Crumb href="/areas" label="Areas we cover" />
      <PageHead eyebrow={a.eyebrow} h1={a.h1} intro={a.intro} />

      <section className="section mix" aria-labelledby="mix-h">
        <h2 id="mix-h" className="h-md" data-reveal="">What the housing stock is like</h2>
        <p className="lede d1" data-reveal="" style={{ maxWidth: "62ch" }}>{a.marketSummary}</p>
        <ul className="mix__list">
          {a.propertyMix.map((p, i) => (
            <li key={p.type} data-reveal="" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className={`mix__weight mix__weight--${p.weight.toLowerCase()}`}>{p.weight}</span>
              <h3>{p.type}</h3>
              <p>{p.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section jobs" aria-labelledby="jobs-h">
        <h2 id="jobs-h" className="h-md" data-reveal="">What we are asked for most in {a.inName}</h2>
        <ol className="jobs__list">
          {a.topJobs.map((j, i) => (
            <li key={j.job} data-reveal="" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="jobs__n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{j.job}</h3>
                <p>{j.why}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {a.demand.map((sec, i) => (
        <section key={sec.heading} className="section prose" aria-labelledby={`d-${i}`}>
          <h2 id={`d-${i}`} className="h-md" data-reveal="">{sec.heading}</h2>
          <div className="prose__body">
            {sec.body.map((p, j) => (
              <p key={j} className="body-lg" data-reveal="" style={{ transitionDelay: `${j * 0.1}s` }}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="section hoods" aria-labelledby="hoods-h">
        <h2 id="hoods-h" className="h-md" data-reveal="">Where we work around {a.inName}</h2>
        <p className="lede d1" data-reveal="" style={{ maxWidth: "62ch" }}>
          We cover {a.postcodes} and the surrounding villages. Every job starts with a free site visit and a
          written fixed quote, and the carpenter who measures it is the carpenter who builds and installs it.
        </p>
        <ul className="hoods__list" data-reveal="">
          {a.neighbourhoods.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </section>

      <RelatedLinks
        heading={`Carpentry services in ${a.inName}`}
        items={services.map((s) => ({ href: `/services/${s.slug}`, label: s.label, note: s.eyebrow }))}
      />

      <section className="section projects" aria-labelledby="work-h">
        <h2 id="work-h" className="h-xl" data-reveal="">Recent work<br /><span className="light">across the South East</span></h2>
        <div className="projects__grid">
          {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} href="/projects" headingLevel="h3" />)}
        </div>
      </section>

      <Faqs items={a.faqs} heading={`Working in ${a.inName}`} />

      <RelatedLinks
        heading="Nearby areas we cover"
        lead={`We are on the road across ${a.county} and beyond most weeks, so if you are between these places it is still worth asking.`}
        items={[
          ...nearby.map((n) => ({ href: `/areas/${n.slug}`, label: n.name, note: n.postcodes })),
          { href: "/areas", label: "All areas", note: `${AREAS.length} places we cover` },
        ]}
      />

      <Banner title={`Planning work in ${a.inName}?`} sub="Let's talk it through." />
    </>
  );
}
