import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Banner } from "@/components/Banner";
import { Checklist } from "@/components/Checklist";
import { Faqs } from "@/components/Faqs";
import { JsonLd, faqJsonLd } from "@/components/JsonLd";
import { Crumb, PageHead } from "@/components/PageHead";
import { ProjectCard } from "@/components/ProjectCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SERVICE_PAGES, serviceBySlug } from "@/lib/services";
import { PROJECTS } from "@/lib/site";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: { absolute: s.title },
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.title, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const others = SERVICE_PAGES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={faqJsonLd(s.faqs)} />
      <Crumb href="/" label="Home" />
      <PageHead eyebrow={s.eyebrow} h1={s.h1} intro={s.intro} />

      <section className="band" aria-hidden="true">
        <div className="band__img" data-drift="">
          <Image src={s.hero} alt={s.heroAlt} fill sizes="100vw" quality={74} style={{ objectFit: "cover" }} />
        </div>
      </section>

      {s.sections.map((sec, i) => (
        <section key={sec.heading} className="section prose" aria-labelledby={`s-${i}`}>
          <h2 id={`s-${i}`} className="h-md" data-reveal="">{sec.heading}</h2>
          <div className="prose__body">
            {sec.body.map((p, j) => (
              <p key={j} className="body-lg" data-reveal="" style={{ transitionDelay: `${j * 0.1}s` }}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <Checklist heading={`What ${s.label.toLowerCase()} covers`} groups={s.includes} />

      <section className="section projects" aria-labelledby="work-h">
        <h2 id="work-h" className="h-xl" data-reveal="">Recent work<br /><span className="light">across Kent</span></h2>
        <div className="projects__grid">
          {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} href="/projects" headingLevel="h3" />)}
        </div>
      </section>

      <Faqs items={s.faqs} />

      <RelatedLinks
        heading="The rest of the carpentry"
        lead="We cover every stage of a project, so the same team can take a job from structural work through to the finished piece."
        items={[
          ...others.map((o) => ({ href: `/services/${o.slug}`, label: o.label, note: o.eyebrow })),
          { href: "/residential", label: "Residential", note: "Work in people's homes" },
          { href: "/commercial", label: "Commercial", note: "Contractors and landlords" },
        ]}
      />

      <Banner title="Planning a project?" sub="Let's talk it through." />
    </>
  );
}
