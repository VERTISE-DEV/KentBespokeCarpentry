import Image from "next/image";
import Link from "next/link";

const STEPS = [
  {
    n: "01 / First fix", tone: "slide--navy", src: "/assets/pergola-octagon.jpg", alt: "Timber frame under construction before the finishing trades arrive",
    title: "The carpentry that disappears behind the walls.",
    copy: "Stud partitions, floor joists, roof carcassing, door linings and window boards. Nobody sees first fix once the plaster is on, which is exactly why it has to be square, level and right first time.",
    cta: { href: "/about", label: "What we cover", cls: "pill pill--outline-white-soft" },
  },
  {
    n: "02 / Second fix", tone: "slide--white", src: "/assets/staircase.jpg", alt: "Staircase and balustrade being fitted during second fix carpentry",
    title: "The part you see every day, finished properly.",
    copy: "Doors hung so they close first time, skirting and architrave with mitres that meet, stair parts, loft hatches and kitchen fitting. Clean lines, tight joins, nothing left to snag.",
    cta: { href: "/projects", label: "See recent work", cls: "pill pill--navy" },
  },
  {
    n: "03 / Bespoke", tone: "slide--black", src: "/assets/fireplace-wall.jpg", alt: "Finished bespoke fireplace media wall with lit alcoves",
    title: "One-off pieces, made to fit the room you have.",
    copy: "Media walls, fitted wardrobes, alcove units, staircases and garden structures. Drawn around your space and your measurements, not ordered from a catalogue and made to fit.",
    cta: { href: "/contact", label: "Get a quote", cls: "pill pill--white-on-black" },
  },
];

const IMG_SIZES = "(min-width: 768px) 50vw, 100vw";

/**
 * First fix › Second fix › Bespoke. In browsers with scroll-driven animation support this is a sticky
 * counter-scroll (side by side on desktop, image-over-text on mobile; see globals.css).
 * Everywhere else it is three stacked cards, each with its own image.
 */
export function Showcase() {
  return (
    <section className="showcase" aria-label="What we do: first fix, second fix and bespoke joinery">
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
