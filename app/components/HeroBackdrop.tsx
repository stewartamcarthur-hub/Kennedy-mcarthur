"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cinematic hero backdrop.
 *
 * Layers (back to front):
 *   1. Animated CSS mesh gradient (always on)
 *   2. Optional looping video at /videos/hero.mp4 (if added to /public/videos/)
 *   3. Animated SVG topographic line art
 *   4. Subtle noise + edge vignette
 *
 * The video element fails silently if no source is present, so the page
 * works out-of-the-box and only gets richer when the user drops a video in.
 */
export default function HeroBackdrop({
  videoSrc = "/videos/hero.mp4",
  videoPoster = "/videos/hero-poster.jpg",
}: {
  videoSrc?: string;
  videoPoster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => setVideoReady(true);
    const onError = () => setVideoReady(false);
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("error", onError);
    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* 1. Mesh gradient base */}
      <div className="absolute inset-0 km-mesh" />

      {/* 2. Optional video — silently absent if /videos/hero.mp4 is missing */}
      <video
        ref={videoRef}
        className={[
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          videoReady ? "opacity-60" : "opacity-0",
        ].join(" ")}
        autoPlay
        muted
        loop
        playsInline
        poster={videoPoster}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* 3. Animated topographic SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="kmTopoGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#1f4a3f" stopOpacity="0.55" />
            <stop offset="0.55" stopColor="#1f4a3f" stopOpacity="0.18" />
            <stop offset="1" stopColor="#b85f3c" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <g
          stroke="url(#kmTopoGrad)"
          strokeWidth="1"
          fill="none"
          className="km-topo"
        >
          {/* Concentric drifting curves — eight bands */}
          {Array.from({ length: 9 }).map((_, i) => {
            const y = 120 + i * 95;
            const phase = i * 30;
            const amp = 60 + (i % 3) * 14;
            return (
              <path
                key={i}
                d={`M -100,${y} C 200,${y - amp} 500,${y + amp} 800,${y - amp / 1.4} S 1400,${y + amp} 1700,${y - amp / 2}`}
                style={{
                  animation: `km-topo-drift ${22 + i * 1.6}s ease-in-out ${
                    -phase
                  }s infinite alternate`,
                  transformOrigin: "center",
                  opacity: 0.6 - i * 0.04,
                }}
              />
            );
          })}
        </g>
      </svg>

      {/* 4. Noise + vignette */}
      <div className="absolute inset-0 km-grain" />
      <div className="absolute inset-0 km-vignette" />
    </div>
  );
}
