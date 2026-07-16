"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

// Generates a scalloped SVG path: bumps point outward on all 4 sides
function scallop(W: number, H: number, nX: number, nY: number, a: number) {
  const bw = W / nX, bh = H / nY, t = 0.25;
  let d = `M 0 0 `;
  for (let i = 0; i < nX; i++) {
    const x = i * bw;
    d += `C ${x + bw * t} ${-a} ${x + bw * (1 - t)} ${-a} ${x + bw} 0 `;
  }
  for (let i = 0; i < nY; i++) {
    const y = i * bh;
    d += `C ${W + a} ${y + bh * t} ${W + a} ${y + bh * (1 - t)} ${W} ${y + bh} `;
  }
  for (let i = 0; i < nX; i++) {
    const x = W - i * bw;
    d += `C ${x - bw * t} ${H + a} ${x - bw * (1 - t)} ${H + a} ${x - bw} ${H} `;
  }
  for (let i = 0; i < nY; i++) {
    const y = H - i * bh;
    d += `C ${-a} ${y - bh * t} ${-a} ${y - bh * (1 - t)} 0 ${y - bh} `;
  }
  return d + "Z";
}

const CW = 75, CH = 100, AMP = 6;
const FB = 11; // timber frame border thickness (viewBox units)
const WOOD = "#8a5c35"; // warm timber brown
const SCALLOP = scallop(CW, CH, 5, 7, AMP);
const VB = `${-AMP} ${-AMP} ${CW + AMP * 2} ${CH + AMP * 2}`;

export default function Home() {
  const { scrollY } = useScroll();
  const creamHeight = useTransform(scrollY, [0, 500], ["50vh", "0vh"]);
  const navOpacity = useTransform(scrollY, [0, 120], [1, 0]);
  const navPointer = useTransform(scrollY, [0, 120], ["auto", "none"]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      const el = heroRef.current;
      if (!el) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const base = 100;
      const gap = base * 0.38;

      ctx.font = `700 ${base}px ${FUTURA}`;
      const m1 = ctx.measureText("COASTAL");
      const w1 = m1.actualBoundingBoxLeft + m1.actualBoundingBoxRight;

      ctx.font = `700 ${base}px 'Playfair Display', serif`;
      const m2 = ctx.measureText("X");
      const w2 = m2.actualBoundingBoxLeft + m2.actualBoundingBoxRight;

      ctx.font = `700 ${base}px ${FUTURA}`;
      const m3 = ctx.measureText("BERRY");
      const w3 = m3.actualBoundingBoxLeft + m3.actualBoundingBoxRight;

      const total = w1 + gap + w2 + gap + w3;
      // 32px (px-8) each side = 64px total, matching navbar margin
      const scale = (window.innerWidth - 64) / total;
      const fs = base * scale;

      el.style.setProperty("--fs", `${fs}px`);
      el.style.setProperty("--gap", `${gap * scale}px`);
    };

    document.fonts.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <main>
      {/* Navbar — fades out on scroll */}
      <motion.nav
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ opacity: navOpacity, pointerEvents: navPointer }}
      >
        {[
          { label: "EXPERIENCE", href: "#" },
          { label: "ACCOMMODATION", href: "#accommodation" },
          { label: "OUR STOREY", href: "#" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "clamp(0.6rem, 1.1vw, 0.85rem)",
              letterSpacing: "0.18em",
              color: "#cd4747",
              textDecoration: "none",
            }}
          >
            {label}
          </a>
        ))}
      </motion.nav>

      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Full-bleed image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Trialimage.png')",
              backgroundColor: "#2c3529",
            }}
          />

          {/* Cream panel */}
          <motion.div
            className="absolute inset-x-0 top-0 overflow-hidden"
            style={{ height: creamHeight, backgroundColor: "#ffc0c0" }}
          >
            {/* Centred title */}
            <div className="absolute inset-0 flex items-center justify-center">
            <div
              ref={heroRef}
              className="flex items-baseline whitespace-nowrap"
              style={{ gap: "var(--gap, 0.38em)", lineHeight: 1 }}
            >
              {(["COASTAL", "X", "BERRY"] as const).map((word) => (
                <span
                  key={word}
                  style={{
                    fontFamily: word === "X"
                      ? "var(--font-playfair), 'Playfair Display', serif"
                      : FUTURA,
                    fontWeight: 700,
                    fontSize: "var(--fs, 13vw)",
                    color: "#cd4747",
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
            </div>

            {/* Subtitle — bottom-right */}
            <div className="absolute bottom-1 right-8 text-right">
              <p
                style={{
                  fontFamily: "Canela, serif",
                  fontSize: "clamp(1.1rem, 2vw, 2rem)",
                  color: "#cd4747",
                  opacity: 0.75,
                  lineHeight: 1.35,
                }}
              >
                DESIGNED
                <br />WITH PLEASURE
              </p>
            </div>

            {/* Subtitle — bottom-left, just above the image */}
            <div className="absolute bottom-1 left-8">
              <p
                style={{
                  fontFamily: "Canela, serif",
                  fontSize: "clamp(1.1rem, 2vw, 2rem)",
                  color: "#cd4747",
                  opacity: 0.75,
                  lineHeight: 1.35,
                }}
              >
                INTERIORS, OBJECTS
                <br />& ATMOSPHERES
              </p>
            </div>
          </motion.div>

        </div>
      </div>
      {/* Second full-page section */}
      <section
        className="relative flex h-screen w-full flex-col items-center justify-center px-8 text-center"
        style={{ backgroundColor: "#cd4747" }}
      >
        {/* Eyebrow — floated higher */}
        <p
          className="absolute"
          style={{
            top: "22%",
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)",
            letterSpacing: "0.22em",
            color: "#ffc0c0",
          }}
        >
          GLAD YOU CAN JOIN US
        </p>

        {/* Introduction — centred on page */}
        <p
          className="max-w-3xl"
          style={{
            fontFamily: "Canela, serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.5rem, 2.8vw, 2.8rem)",
            lineHeight: 1.4,
            color: "#ffc0c0",
          }}
        >
          Tucked into the hills above Berry on the New South Wales South
          Coast, The Coastal is a private estate of four stays — three
          villas and a four-bedroom house, each one distinct, all of them
          surrounded by bush, birdsong, and open sky. Come for the
          stillness. Stay for the kind of quiet that only comes when
          you&rsquo;ve properly left the city behind.
        </p>
      </section>

      {/* Four frames section */}
      <section
        id="accommodation"
        className="h-screen w-full"
        style={{ backgroundColor: "#ffc0c0", padding: "1.25rem" }}
      >
        <div
          className="grid grid-cols-4"
          style={{ gap: "1.5rem" }}
        >
          {[
            { n: 1, slug: "the-headland-house",   l1: "The Headland",  l2: "House" },
            { n: 2, slug: "the-eucalypt-villa",   l1: "The Eucalypt",  l2: "Villa" },
            { n: 3, slug: "the-fern-villa",        l1: "The Fern",      l2: "Villa" },
            { n: 4, slug: "the-paperbark-villa",  l1: "The Paperbark", l2: "Villa" },
          ].map(({ n, slug, l1, l2 }) => (
            <Link
              key={n}
              href={`/stays/${slug}`}
              className="group relative block"
              style={{ aspectRatio: `${CW + AMP * 2} / ${CH + AMP * 2}` }}
            >
              <svg
                viewBox={VB}
                width="100%"
                height="100%"
                style={{ display: "block", overflow: "visible" }}
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              >
                <defs>
                  <clipPath id={`sc${n}`}>
                    <path d={SCALLOP} />
                  </clipPath>
                </defs>

                <g clipPath={`url(#sc${n})`}>
                  {/* Timber frame fill */}
                  <rect
                    x={-AMP} y={-AMP}
                    width={CW + AMP * 2} height={CH + AMP * 2}
                    fill={WOOD}
                  />
                  {/* Inset rectangular image */}
                  <image
                    href={`/frame${n}.png`}
                    x={FB} y={FB}
                    width={CW - FB * 2} height={CH - FB * 2}
                    preserveAspectRatio="xMidYMid slice"
                  />
                  {/* Inner shadow at frame/image edge */}
                  <rect
                    x={FB} y={FB}
                    width={CW - FB * 2} height={CH - FB * 2}
                    fill="none"
                    stroke="rgba(0,0,0,0.3)"
                    strokeWidth={2}
                  />
                  {/* Shader over image — fades on hover */}
                  <rect
                    x={FB} y={FB}
                    width={CW - FB * 2} height={CH - FB * 2}
                    fill="black"
                    className="opacity-35 transition-opacity duration-700 group-hover:opacity-[0.03]"
                  />
                  {/* Name — two lines inside image, bottom-left */}
                  <text
                    fontSize="6"
                    style={{ fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300 }}
                    fill="#ffc0c0"
                  >
                    <tspan x={FB + 3} y={CH - FB - 9}>{l1}</tspan>
                    <tspan x={FB + 3} dy="7">{l2}</tspan>
                  </text>
                </g>
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiences section */}
      <section
        className="h-screen w-full flex flex-col"
        style={{ backgroundColor: "#cd4747", padding: "1.25rem", gap: "1.25rem" }}
      >
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexShrink: 0 }}>
          <div>
            <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.22em", color: "#ffc0c0", opacity: 0.6, marginBottom: "0.4rem" }}>
              EXPERIENCES
            </p>
            <h2 style={{ fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", color: "#ffc0c0", lineHeight: 1 }}>
              Berry & Beyond
            </h2>
          </div>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", color: "#ffc0c0", opacity: 0.45, textTransform: "uppercase" }}>
            THE SOUTH COAST, NSW
          </p>
        </div>

        {/* Editorial image grid: 1 large left + 4 smaller right */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "1.25rem",
            minHeight: 0,
          }}
        >
          {/* Large left — spans both rows */}
          <div style={{ gridRow: "span 2", position: "relative", overflow: "hidden", backgroundColor: "#b83c3c" }}>
            <img src="/exp1.png" alt="Berry, NSW" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* 4 smaller images */}
          {["/exp2.png", "/exp3.png", "/exp4.png", "/exp5.png"].map((src, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden", backgroundColor: "#b83c3c" }}>
              <img src={src} alt={`Berry experience ${i + 2}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
