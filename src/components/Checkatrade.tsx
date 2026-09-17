import { CHECKATRADE } from "@/lib/site";
import { StarIcon } from "./Icons";

type Props = {
  /** "line" sits inside body copy, "block" is the stacked footer/contact variant. */
  variant?: "line" | "block";
  className?: string;
};

/** Link through to the Checkatrade profile. Text only, so no third-party logo is reproduced. */
export function Checkatrade({ variant = "line", className }: Props) {
  const stars = Math.round(CHECKATRADE.rating);
  return (
    <a
      className={`cat cat--${variant}${className ? ` ${className}` : ""}`}
      href={CHECKATRADE.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="cat__stars" aria-hidden="true">
        {Array.from({ length: stars }, (_, i) => <StarIcon key={i} />)}
      </span>
      <span className="cat__text">{CHECKATRADE.label}</span>
    </a>
  );
}
