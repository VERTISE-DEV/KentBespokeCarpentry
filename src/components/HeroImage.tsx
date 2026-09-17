"use client";

import type { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, type CSSProperties } from "react";

/** Mirrors images.deviceSizes in next.config.ts. */
const DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1440, 1920, 2560];
const QUALITY = 78;

const optimised = (src: string, w: number) =>
  `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${QUALITY}`;
const srcSetFor = (src: string) =>
  DEVICE_SIZES.map((w) => `${optimised(src, w)} ${w}w`).join(", ");

type Props = {
  src: StaticImageData;
  alt: string;
  objectPosition: string;
  objectPositionMobile: string;
  /** Portrait-native alternative used below 768px, where the desktop crop does not work. */
  mobileSrc?: StaticImageData;
};

/**
 * The hero's LCP image.
 *
 * Uses a plain <picture> rather than next/image so the two art-directed crops can be chosen by
 * media query: the browser downloads exactly one of them. next/image cannot do art direction, and
 * rendering two of its components downloads both and costs roughly 0.4s of LCP on mobile.
 * The srcset still points at Next's image optimiser, so AVIF/WebP and per-width resizing are
 * unchanged. The <img> is server-rendered, so the preload scanner finds it immediately.
 *
 * The card's mask wipe and text stagger wait for this image to decode (data-loaded="true" on
 * .hero__card), so the wipe always reveals the photo and never a navy box. A 4s safety timer
 * starts the reveal regardless, so a failed image can't hide the H1.
 */
export function HeroImage({ src, alt, objectPosition, objectPositionMobile, mobileSrc }: Props) {
  const ref = useRef<HTMLImageElement>(null);

  const reveal = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.ready = "true";
    el.closest(".hero__card")?.setAttribute("data-loaded", "true");
  }, []);

  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) reveal();
    const t = window.setTimeout(reveal, 4000);
    return () => window.clearTimeout(t);
  }, [reveal]);

  const style = {
    objectFit: "cover",
    "--obj": objectPosition,
    "--obj-m": objectPositionMobile,
    backgroundImage: `url(${mobileSrc?.blurDataURL ?? src.blurDataURL})`,
  } as CSSProperties;

  return (
    <picture>
      {mobileSrc && <source media="(max-width: 767px)" srcSet={srcSetFor(mobileSrc.src)} sizes="100vw" />}
      <source media="(min-width: 768px)" srcSet={srcSetFor(src.src)} sizes="100vw" />
      <img
        ref={ref}
        className="hero__img"
        src={optimised(src.src, 1200)}
        srcSet={srcSetFor(src.src)}
        sizes="100vw"
        alt={alt}
        width={src.width}
        height={src.height}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        style={style}
        onLoad={reveal}
      />
    </picture>
  );
}
