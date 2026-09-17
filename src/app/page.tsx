import type { Metadata } from "next";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Showcase } from "@/components/Showcase";
import { Checkatrade } from "@/components/Checkatrade";
import { PROJECTS } from "@/lib/site";
import heroImage from "../../public/assets/pergola-deck.jpg";
import heroImageMobile from "../../public/assets/garden-bar.jpg";

export const metadata: Metadata = {
  title: { absolute: "Carpentry & Joinery in Kent | First Fix, Second Fix & Bespoke" },
  description: "First fix and second fix carpentry plus bespoke joinery across Kent. Stud work, joists, doors, skirting, staircases, media walls, wardrobes and pergolas. Free visit, fixed quote.",
  alternates: { canonical: "/" },
  openGraph: { title: "Carpentry & Joinery in Kent | Kent Bespoke Carpentry", url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        src={heroImage}
        alt="Timber pergola and decking built by Kent Bespoke Carpentry"
        eyebrow="Carpentry & joinery across Kent"
        mobileSrc={heroImageMobile}
        objectPositionMobile="50% 38%"
        sub="First fix, second fix and bespoke joinery for homes across Kent."
        reviews
        trust={["Free visit", "Fixed quote", "One team"]}
        words={[
          { text: "First", delay: 0.55 },
          { text: "fix", delay: 0.65 },
          { text: "to", delay: 0.75, br: true },
          { text: "final", delay: 0.85, light: true },
          { text: "finish.", delay: 0.95, light: true },
        ]}
      />

      <section className="section intro" aria-labelledby="intro-h">
        <h2 id="intro-h" className="h-md" data-reveal="" style={{ maxWidth: "22ch" }}>
          The whole job,<br /><span className="light">not just the visible bit.</span>
        </h2>
        <p className="lede d15" data-reveal="">
          Most carpenters take one end of a job. We do the stud walls and joists that disappear behind the plaster, the doors and skirting you look at every day, and the bespoke pieces in between. One team, one number to call, from the frame to the final coat.
        </p>
        <div className="d2" data-reveal=""><Checkatrade /></div>
      </section>

      <Showcase />

      <section className="section projects" aria-labelledby="recent-h">
        <div className="projects__head">
          <h2 id="recent-h" className="h-xl" data-reveal="">Recent work<br /><span className="light">across Kent</span></h2>
          <Link href="/projects" className="ul-link" data-reveal=""><span>View all projects →</span><span /></Link>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} href="/projects" headingLevel="h3" />
          ))}
        </div>
      </section>

      <Banner title="Got a job that needs a carpenter?" sub="Let's talk it through." />
    </>
  );
}
