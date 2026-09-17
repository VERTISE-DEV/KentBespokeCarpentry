import Image from "next/image";
import Link from "next/link";

const STEPS = [
  {
    n: "01 / Design", tone: "slide--navy", src: "/assets/media-wall.jpg", alt: "Bespoke media wall with lit display niches",
    title: "Surveyed, drawn and priced before any work begins.",
    copy: "Every project starts with a site visit and a set of drawings, whether that is a stud partition going in or a media wall coming out. We work through dimensions, materials and finish with you, then issue a fixed quote, so the figure you agree is the figure you pay.",
    cta: { href: "/about", label: "How we work", cls: "pill pill--outline-white-soft" },
  },
  {
    n: "02 / Build", tone: "slide--white", src: "/assets/pergola-octagon.jpg", alt: "Timber frame under construction",
    title: "First fix, second fix and the bespoke work in between.",
    copy: "The structural carpentry that goes in ahead of the plasterer, the finishing work that follows the decorator, and the made-to-measure pieces in between. Built in the workshop where that gives the better result, and on site where it does not.",
    cta: { href: "/projects", label: "See recent builds", cls: "pill pill--navy" },
  },
  {
    n: "03 / Install", tone: "slide--black", src: "/assets/fireplace-wall.jpg", alt: "Finished fireplace media wall with lit alcoves",
    title: "Installed precisely and handed over clean.",
    copy: "Floors protected, work areas kept tidy, and a final inspection walked through with you before the project is signed off. We do not leave a job until the finish is right.",
    cta: { href: "/contact", label: "Get a quote", cls: "pill pill--white-on-black" },
  },
];

const IMG_SIZES = "(min-width: 768px) 50vw, 100vw";

/**
 * Design › Build › Install. In browsers with scroll-driven animation support this is a sticky
 * counter-scroll (side by side on desktop, image-over-text on mobile; see globals.css).
 * Everywhere else it is three stacked cards, each with its own image.
 */
export function Showcase() {
  return (
    <section className="showcase" aria-label="How we work: design, build, install">
      <div className="showcase__sticky">
        <div className="showcase__wrap">
          <div className="showcase__col showcase__col--left">
            <div className="showcase__track showcase__track--left">
            {STEPS.map((s, i) => (
              <article key={s.n} className={`slide ${s.tone}`}>
                <div className="slide__mobimg" data-drift="">
                  <Image src={s.src} alt={s.alt} fill sizes="100vw" quality={72} style={{ objectFit: "cover" }} />
                </div>
                <div className="slide__body" data-fade={i + 1}>
                  <p className="eyebrow" data-reveal="">{s.n}</p>
                  <h2 className="h-sm d1" data-reveal="">{s.title}</h2>
                  <p className="copy d2" data-reveal="">{s.copy}</p>
                  <div className="d3" data-reveal=""><Link href={s.cta.href} className={s.cta.cls}>{s.cta.label}</Link></div>
                </div>
              </article>
            ))}
            </div>
          </div>
          <div className="showcase__col showcase__col--right" aria-hidden="true">
            <div className="showcase__track showcase__track--right">
            {[...STEPS].reverse().map((s) => (
              <div key={s.n} className="showcase__img">
                <Image src={s.src} alt="" fill sizes={IMG_SIZES} quality={72} style={{ objectFit: "cover" }} />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
