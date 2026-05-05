/**
 * AnimatedHeroScene
 *
 * A custom SVG illustration: layered mountain ridges at dawn, a low sun,
 * cattle silhouettes drifting and grazing across the foreground hill.
 *
 * Designed to be used as a full-bleed hero background. Pure SVG + CSS,
 * no external assets, no photo-licensing risk. Honors prefers-reduced-motion
 * via animation rules in globals.css (.km-scene class).
 */

const Cattle = ({ scale = 1 }: { scale?: number }) => (
  <g transform={`scale(${scale})`}>
    {/* body */}
    <rect x="0" y="0" width="56" height="20" rx="6" />
    {/* legs */}
    <rect x="6"  y="20" width="3.5" height="14" />
    <rect x="14" y="20" width="3.5" height="14" />
    <rect x="38" y="20" width="3.5" height="14" />
    <rect x="46" y="20" width="3.5" height="14" />
    {/* head */}
    <ellipse cx="-4" cy="6" rx="9.5" ry="7.5" />
    {/* ears / horn nubs */}
    <path d="M-9,-1 L-12,-5" strokeWidth="1.6" stroke="currentColor" />
    <path d="M-1,-1 L1,-5"   strokeWidth="1.6" stroke="currentColor" />
    {/* tail */}
    <path d="M56,6 Q60,12 58,18" stroke="currentColor" strokeWidth="2" fill="none" />
  </g>
);

export default function AnimatedHeroScene() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full km-scene"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Sky gradient — warm dawn */}
        <linearGradient id="km-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#f5e9c8" />
          <stop offset="35%"  stopColor="#f0dfb3" />
          <stop offset="65%"  stopColor="#e6c89a" />
          <stop offset="100%" stopColor="#d8b685" />
        </linearGradient>

        {/* Sun glow */}
        <radialGradient id="km-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#f9e3a4" stopOpacity="1" />
          <stop offset="55%" stopColor="#e8b86b" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#e8b86b" stopOpacity="0" />
        </radialGradient>

        {/* Distant mountain — pale */}
        <linearGradient id="km-mtn-far" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#a9b6a3" />
          <stop offset="100%" stopColor="#bcc5b1" />
        </linearGradient>

        {/* Mid mountain — moss */}
        <linearGradient id="km-mtn-mid" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#5e7a63" />
          <stop offset="100%" stopColor="#3e5945" />
        </linearGradient>

        {/* Foreground hill — deep forest */}
        <linearGradient id="km-hill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#2b4334" />
          <stop offset="100%" stopColor="#1a2a20" />
        </linearGradient>

        {/* Atmospheric haze */}
        <linearGradient id="km-haze" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#f5e9c8" stopOpacity="0" />
          <stop offset="100%" stopColor="#f5e9c8" stopOpacity="0.45" />
        </linearGradient>

        {/* Cattle silhouette — single source of truth */}
        <symbol id="km-cattle" viewBox="-15 -10 80 40" overflow="visible">
          <Cattle />
        </symbol>
      </defs>

      {/* ───────── Sky ───────── */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#km-sky)" />

      {/* ───────── Sun ───────── */}
      <g className="sun" style={{ transformOrigin: "1080px 620px" }}>
        <circle cx="1080" cy="620" r="220" fill="url(#km-sun)" />
        <circle cx="1080" cy="620" r="90" fill="#f6d68b" opacity="0.9" />
      </g>

      {/* ───────── Birds ───────── */}
      <g fill="none" stroke="#3d3623" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round">
        <g className="bird" transform="translate(0,180)">
          <path d="M0,0 q5,-4 10,0 q5,-4 10,0" />
        </g>
        <g className="bird-2" transform="translate(0,240)">
          <path d="M0,0 q4,-3 8,0 q4,-3 8,0" />
        </g>
      </g>

      {/* ───────── Far mountains ───────── */}
      <g className="mtn-far">
        <path
          d="M0,540 L80,460 L160,500 L260,420 L360,470 L480,400 L580,450 L700,390 L820,440 L960,410 L1080,450 L1240,400 L1380,440 L1520,400 L1600,430 L1600,900 L0,900 Z"
          fill="url(#km-mtn-far)"
          opacity="0.85"
        />
      </g>

      {/* ───────── Atmospheric haze across far mountains ───────── */}
      <g className="haze">
        <rect x="0" y="380" width="1600" height="280" fill="url(#km-haze)" />
      </g>

      {/* ───────── Mid mountains ───────── */}
      <path
        d="M0,640 L120,540 L240,580 L380,500 L520,540 L660,470 L800,520 L940,470 L1080,510 L1240,460 L1380,520 L1520,490 L1600,520 L1600,900 L0,900 Z"
        fill="url(#km-mtn-mid)"
      />

      {/* ───────── Foreground hill ───────── */}
      <path
        d="M0,720 C200,680 320,720 460,700 C600,680 720,720 880,710 C1040,700 1180,720 1320,705 C1460,690 1540,710 1600,700 L1600,900 L0,900 Z"
        fill="url(#km-hill)"
      />

      {/* ───────── Cattle layer 1 — distant herd, grazing ───────── */}
      <g fill="#21372a" opacity="0.92">
        <g transform="translate(380,665)">
          <g className="graze-1">
            <use href="#km-cattle" transform="scale(0.55)" />
          </g>
        </g>
        <g transform="translate(450,672)">
          <g className="graze-2">
            <use href="#km-cattle" transform="scale(0.5)" />
          </g>
        </g>
        <g transform="translate(540,668)">
          <g className="graze-1">
            <use href="#km-cattle" transform="scale(0.6)" />
          </g>
        </g>
      </g>

      {/* ───────── Cattle layer 2 — mid hill, walking ───────── */}
      <g fill="#1a2a20" opacity="0.95">
        <g transform="translate(0,705)">
          <g className="walk-r">
            <use href="#km-cattle" transform="scale(0.85)" />
          </g>
        </g>
        <g transform="translate(0,712)">
          <g className="walk-r-2">
            <use href="#km-cattle" transform="scale(0.8) translate(140,0)" />
          </g>
        </g>
      </g>

      {/* ───────── Cattle layer 3 — foreground, drifting and grazing ───────── */}
      <g fill="#0f1f15">
        <g transform="translate(180,790)">
          <g className="graze-1">
            <use href="#km-cattle" transform="scale(1.1)" />
          </g>
        </g>
        <g transform="translate(900,800)">
          <g className="graze-2">
            <use href="#km-cattle" transform="scale(1.2)" />
          </g>
        </g>
        <g transform="translate(0,820)">
          <g className="walk-l">
            <use href="#km-cattle" transform="scale(1.4) scale(-1,1)" />
          </g>
        </g>
      </g>

      {/* ───────── Foreground film grain mask — subtle ───────── */}
      <rect
        x="0" y="0" width="1600" height="900"
        fill="url(#km-haze)" opacity="0.18"
      />
    </svg>
  );
}
