import Link from "next/link";
import { BookButton } from "./BookButton";
import { Checkatrade } from "./Checkatrade";
import { CREDENTIALS, NAP } from "@/lib/site";

type Props = {
  eyebrow: string;
  /** Rendered as two lines, the second in the light weight. */
  h1: [string, string];
  intro: string;
  /** Show the credentials row under the buttons. */
  creds?: boolean;
};

/**
 * Head block for inner pages. A navy card rather than a photo hero: it matches the Contact page's
 * existing language, keeps the h1 as the LCP element on pages that have no dedicated photography,
 * and avoids shipping eighteen hero images for the area pages.
 */
export function PageHead({ eyebrow, h1, intro, creds = true }: Props) {
  return (
    <section className="phead" aria-labelledby="page-h1">
      <div className="phead__card">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-h1" className="h-display phead__h1">
          {h1[0]}<br /><span className="light">{h1[1]}</span>
        </h1>
        <p className="phead__intro">{intro}</p>
        <div className="phead__ctas">
          <BookButton className="pill pill--white">Book a free visit</BookButton>
          <a className="pill pill--outline-white-soft" href={NAP.phoneHref}>Call {NAP.phoneDisplay}</a>
        </div>
        {creds && (
          <div className="phead__creds">
            <span>{CREDENTIALS.yearsWord} years established</span>
            <span>{CREDENTIALS.family}</span>
            <Checkatrade variant="block" />
          </div>
        )}
      </div>
    </section>
  );
}

/** Breadcrumb-style back link used above inner page heads. */
export function Crumb({ href, label }: { href: string; label: string }) {
  return (
    <nav className="crumb" aria-label="Breadcrumb">
      <Link href={href}>← {label}</Link>
    </nav>
  );
}
