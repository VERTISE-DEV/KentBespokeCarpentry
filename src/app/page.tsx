import type { Metadata } from "next";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Showcase } from "@/components/Showcase";
import { Checkatrade } from "@/components/Checkatrade";
import { CREDENTIALS, PROJECTS } from "@/lib/site";
import heroImage from "../../public/assets/loft-roof-frame.jpg";
import heroImageMobile from "../../public/assets/roof-ridge.webp";

export const metadata: Metadata = {
  title: { absolute: "Carpentry & Joinery in Kent | First Fix, Second Fix & Bespoke" },
  description: "First fix, second fix and bespoke joinery across Kent and the South East. Family run, fifteen years established, 5 star reviewed on Checkatrade. Free site visit and a fixed quote.",
  alternates: { canonical: "/" },
  openGraph: { title: "Carpentry & Joinery in Kent | Kent Bespoke Carpentry", url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        src={heroImage}
        alt="Loft conversion floor and rafters framed up by Kent Bespoke Carpentry"
        eyebrow="Carpentry and joinery across Kent"
        mobileSrc={heroImageMobile}
        objectPosition="50% 58%"
        objectPositionMobile="50% 76%"
        sub="Fifteen years of first fix, second fix and bespoke joinery across Kent."
        reviews
        trust={["15 years", "Family run", "Fixed quotes"]}
        words={[
          { text: "First", delay: 0.55 },
          { text: "fix", delay: 0.65 },
          { text: "to", delay: 0.75, br: true },
          { text: "final", delay: 0.85, light: true },
          { text: "finish.", delay: 0.95, light: true },
        ]}
      />

      <section className="section intro" aria-labelledby="intro-h">
        <h2 id="intro-h" className="h-md" data-reveal="" style={{ maxWidth: "24ch" }}>
          Every stage of the carpentry,<br /><span className="light">by one team.</span>
        </h2>
        <p className="lede d15" data-reveal="">
          We carry out the <Link className="ilink" href="/services/first-fix-carpentry">structural first fix</Link>, the{" "}
          <Link className="ilink" href="/services/second-fix-carpentry">second fix finishing</Link> and the{" "}
          <Link className="ilink" href="/services/bespoke-joinery">bespoke joinery</Link> in between, for{" "}
          <Link className="ilink" href="/residential">homeowners</Link> and{" "}
          <Link className="ilink" href="/commercial">main contractors</Link> alike. Each project is measured on site, priced as a fixed quote, and completed by the carpenters who drew it, so the standard stays consistent from the frame through to the final coat.
        </p>
        <div className="creds d2" data-reveal="">
          <span>{CREDENTIALS.yearsWord} years established</span>
          <span>{CREDENTIALS.family}</span>
          <Checkatrade />
        </div>
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

      <Banner title="Planning a project?" sub="Let's talk it through." />
    </>
  );
}
