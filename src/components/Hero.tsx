import type { StaticImageData } from "next/image";
import { NAP } from "@/lib/site";
import { BookButton } from "./BookButton";
import { Checkatrade } from "./Checkatrade";
import { HeroImage } from "./HeroImage";
import { ChevronDown } from "./Icons";

type Word = { text: string; delay: number; light?: boolean; br?: boolean };

type Props = {
  src: StaticImageData;
  alt: string;
  eyebrow: string;
  words: Word[];
  /** Home variant: mask wipe, CTAs, Scroll tab. About variant: scale only. */
  variant: "home" | "about";
  objectPosition?: string;
  /** Crop focus below 768px, where the card is portrait rather than landscape. */
  objectPositionMobile?: string;
  /** Portrait-native photo used below 768px instead of the desktop one. */
  mobileSrc?: StaticImageData;
  /** One-line explainer, shown on mobile only so the desktop composition is unchanged. */
  sub?: string;
  /** Short proof points under the mobile CTAs. Mobile only. */
  trust?: readonly string[];
  /** Show the Checkatrade rating under the mobile CTAs. */
  reviews?: boolean;
};

export function Hero({ src, alt, eyebrow, words, variant, objectPosition = "50% 42%", objectPositionMobile, mobileSrc, sub, trust, reviews }: Props) {
  const home = variant === "home";
  return (
    <section className="hero" aria-labelledby="page-h1">
      <div className={home ? "hero__card hero__card--mask" : "hero__card"}>
        <div className={home ? "hero__img-wrap" : "hero__img-wrap hero__img-wrap--fast"}>
          <HeroImage src={src} alt={alt} objectPosition={objectPosition} objectPositionMobile={objectPositionMobile ?? objectPosition} mobileSrc={mobileSrc} />
        </div>
        <div className={home ? "hero__tint" : "hero__tint hero__tint--45"} />
        <div className="hero__content hero__gate">
          <p className={home ? "eyebrow" : "eyebrow eyebrow--early"}>{eyebrow}</p>
          <h1 id="page-h1" className="h-display hero__h1">
            {words.map((w, i) => (
              <span key={i}>
                <span className={w.light ? "hero__word light" : "hero__word"} style={{ animationDelay: `${w.delay}s` }}>{w.text}</span>
                {w.br ? <br /> : " "}
              </span>
            ))}
          </h1>
          {sub && <p className="hero__sub hide-d">{sub}</p>}
          {home && (
            <div className="hero__ctas">
              <BookButton className="pill pill--white">Book a free visit</BookButton>
              <a className="pill pill--outline-white" href={NAP.phoneHref}>Call {NAP.phoneDisplay}</a>
            </div>
          )}
          {home && reviews && <Checkatrade variant="block" className="hero__cat hide-d" />}
          {home && trust && trust.length > 0 && (
            <ul className="hero__trust hide-d">
              {trust.map((t) => <li key={t}>{t}</li>)}
            </ul>
          )}
        </div>
        {home && (
          <div className="hero__scroll hide-m" aria-hidden="true">
            <div><span>Scroll</span><ChevronDown /></div>
          </div>
        )}
      </div>
    </section>
  );
}
