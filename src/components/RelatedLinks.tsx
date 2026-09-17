import Link from "next/link";

type Item = { href: string; label: string; note?: string };

/** Card row of internal links: nearby areas, other services, the two sector pages. */
export function RelatedLinks({ heading, items, lead }: { heading: string; items: Item[]; lead?: string }) {
  return (
    <section className="section related" aria-labelledby="related-h">
      <h2 id="related-h" className="h-md" data-reveal="">{heading}</h2>
      {lead && <p className="lede d1" data-reveal="" style={{ maxWidth: "62ch" }}>{lead}</p>}
      <ul className="related__grid">
        {items.map((it, i) => (
          <li key={it.href} data-reveal="" style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
            <Link href={it.href}>
              <span className="related__label">{it.label}</span>
              {it.note && <span className="related__note">{it.note}</span>}
              <span className="related__arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
