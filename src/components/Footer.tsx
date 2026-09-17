import Image from "next/image";
import Link from "next/link";
import { AREAS_SHOWN, NAP } from "@/lib/site";
import { Checkatrade } from "./Checkatrade";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link href="/" className="footer__logo" aria-label="Kent Bespoke Carpentry, home">
          <Image src="/assets/logo-navy.png" alt="Kent Bespoke Carpentry Ltd" width={144} height={72} />
        </Link>
        <div className="footer__nap">
          <div><span className="label">Call</span><a href={NAP.phoneHref}>{NAP.phoneDisplay}</a></div>
          <div><span className="label">Email</span><a href={NAP.emailHref}>{NAP.email}</a></div>
          <div><span className="label">Area</span><span className="val">Serving homes across Kent</span></div>
          <div><span className="label">Reviews</span><Checkatrade variant="block" /></div>
          <div><span className="label">Social</span><SocialLinks tone="navy" /></div>
        </div>
      </div>
      <p className="footer__areas">
        Carpentry and joinery across Kent, including {AREAS_SHOWN.slice(0, -1).join(", ")} and {AREAS_SHOWN[AREAS_SHOWN.length - 1]}.
      </p>
      <div className="footer__bottom">
        <div>
          <span>© {new Date().getFullYear()} Kent Bespoke Carpentry Ltd</span>
          <a className="footer__credit" href="https://claimyour.website" target="_blank" rel="noopener noreferrer">Website by VERTISE Studios</a>
        </div>
        <div>
          <Link href="/residential">Residential</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/areas">Areas</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
