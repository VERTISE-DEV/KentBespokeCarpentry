"use client";

import { useId, useState } from "react";

/** Accordion for the question blocks on service, sector and area pages. */
export function Faqs({ items, heading = "Common questions" }: { items: { q: string; a: string }[]; heading?: string }) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const base = useId();
  return (
    <section className="section faqs" aria-labelledby={`${base}-h`}>
      <h2 id={`${base}-h`} className="h-md" data-reveal="">{heading}</h2>
      <div className="services__list">
        {items.map((f, i) => {
          const isOpen = !!open[i];
          const panelId = `${base}-p-${i}`;
          const btnId = `${base}-b-${i}`;
          return (
            <div key={f.q} className="acc faq" data-acc={isOpen ? "open" : "closed"} data-reveal="" style={{ transitionDelay: `${i * 0.05}s` }}>
              <h3 style={{ margin: 0 }}>
                <button type="button" id={btnId} className="acc__btn" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}>
                  <span className="faq__q">{f.q}</span>
                  <span className="acc__icon" aria-hidden="true"><span /><span /></span>
                </button>
              </h3>
              <div id={panelId} className="acc__panel" role="region" aria-labelledby={btnId} inert={!isOpen}>
                <div><p>{f.a}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
