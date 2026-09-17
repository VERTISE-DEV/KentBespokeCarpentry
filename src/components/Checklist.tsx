/** Three-column "what it covers" grid used on the service pages. */
export function Checklist({ groups, heading }: { groups: { group: string; items: string[] }[]; heading: string }) {
  return (
    <section className="section checklist" aria-labelledby="checklist-h">
      <h2 id="checklist-h" className="h-md" data-reveal="">{heading}</h2>
      <div className="cols-3" style={{ gap: "clamp(24px, 3vw, 48px)" }}>
        {groups.map((g, i) => (
          <div key={g.group} className="checklist__col" data-reveal="" style={{ transitionDelay: `${i * 0.1}s` }}>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
