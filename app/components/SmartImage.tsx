"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "onLoad"> & {
  className?: string;
  treatmentClassName?: string;
};

/**
 * Wraps next/image with a fade-in + monochrome treatment that snaps to full
 * tone once loaded. Falls back gracefully if the image errors.
 */
export default function SmartImage({
  className = "",
  treatmentClassName = "km-img-mono",
  alt,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...rest}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={[
        treatmentClassName,
        loaded ? "is-loaded opacity-100" : "opacity-0",
        "transition-opacity duration-700",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
