import type { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recent carpentry projects across Kent",
  description: "Carpentry and joinery completed by Kent Bespoke Carpentry across Kent: media walls, staircases, fitted storage, pergolas, decking and garden structures.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Recent projects | Kent Bespoke Carpentry", url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="projects" style={{ padding: "clamp(110px,12vw,150px) var(--gutter) clamp(40px,6vw,80px)" }} aria-labelledby="page-h1">
        <h1 id="page-h1" className="h-display" data-reveal="">Recent work<br /><span className="light">across Kent</span></h1>
        <p className="body-lg d1" data-reveal="" style={{ maxWidth: "56ch", lineHeight: 1.55, color: "rgba(10,10,10,.72)" }}>
          A selection of what we&apos;ve built for homes around the county, from structural first fix through to the finished bespoke piece. Every one measured on site, made by us, and fitted by the same hands.
        </p>
        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} headingLevel="h2" />
          ))}
        </div>
      </section>
      <Banner title="Something similar in mind?" sub="We'd like to hear about it." />
    </>
  );
}
