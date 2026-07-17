"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";


export default function Home() {
  const { scrollY } = useScroll();
  const creamHeight = useTransform(scrollY, [0, 500], ["50vh", "0vh"]);
  const navOpacity = useTransform(scrollY, [0, 120], [1, 0]);
  const navPointer = useTransform(scrollY, [0, 120], ["auto", "none"]);
  const heroRef = useRef<HTMLDivElement>(null);

  const EXP_IMAGES = ["/exp1.jpg", "/exp2.jpg", "/exp3.jpg"];
  const [expIdx, setExpIdx] = useState(0);
  const prevExpIdx = useRef(-1);

  const goTo = (next: number) => {
    prevExpIdx.current = expIdx;
    setExpIdx(next);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setExpIdx((i) => {
        prevExpIdx.current = i;
        return (i + 1) % EXP_IMAGES.length;
      });
    }, 5000);
    return () => clearInterval(t);
  }, []);

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

      {/* Four stays section */}
      <section
        id="accommodation"
        className="h-screen w-full"
        style={{ backgroundColor: "#ffc0c0", padding: "1.25rem" }}
      >
        <div className="grid grid-cols-4 h-full" style={{ gap: "1.5rem", paddingTop: "12vh" }}>
          {[
            { n: 1, slug: "the-headland-house",  l1: "The Headland",  l2: "House",   summary: "Four bedrooms, a heated pool, and open sky above Berry. The estate's gathering place." },
            { n: 2, slug: "the-eucalypt-villa",  l1: "The Eucalypt",  l2: "Villa",   summary: "Set among old gums. High ceilings, a timber bathtub, and a private deck at dusk." },
            { n: 3, slug: "the-fern-villa",       l1: "The Fern",      l2: "Villa",   summary: "Tucked into a fern gully. A private courtyard, wood fire, and slow morning light." },
            { n: 4, slug: "the-paperbark-villa", l1: "The Paperbark", l2: "Villa",   summary: "The estate's most intimate stay. One bedroom, a stone fireplace, a deep stone bath." },
          ].map(({ n, slug, l1, l2, summary }) => (
            <Link
              key={n}
              href={`/stays/${slug}`}
              className="group flex flex-col"
            >
              {/* Image — top half of section */}
              <div className="relative overflow-hidden" style={{ height: "50%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/frame${n}.png`}
                  alt={`${l1} ${l2}`}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s ease",
                  }}
                  className="group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-700 opacity-30 group-hover:opacity-0"
                  style={{ background: "black" }}
                />
              </div>

              {/* Name and summary — centred below image */}
              <div className="flex flex-col items-center px-2" style={{ gap: "0.6rem", marginTop: "2.5rem" }}>
                <div className="flex flex-col items-center" style={{ lineHeight: 1.2 }}>
                  <p style={{
                    fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
                    fontSize: "clamp(1rem, 1.4vw, 1.4rem)", color: "#cd4747",
                  }}>
                    {l1}
                  </p>
                  <p style={{
                    fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
                    fontSize: "clamp(1rem, 1.4vw, 1.4rem)", color: "#cd4747",
                  }}>
                    {l2}
                  </p>
                </div>
                <p style={{
                  fontFamily: FUTURA, fontWeight: 400,
                  fontSize: "clamp(0.55rem, 0.75vw, 0.72rem)",
                  letterSpacing: "0.04em",
                  color: "#cd4747", opacity: 0.65,
                  textAlign: "center", lineHeight: 1.6,
                }}>
                  {summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiences section — fullscreen wipe slideshow */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* All 3 images always rendered; current wipes in over prev, others stay hidden */}
        {EXP_IMAGES.map((src, i) => {
          const isCurrent = i === expIdx;
          const isPrev = i === prevExpIdx.current;
          return (
            <motion.div
              key={i}
              initial={{ clipPath: i === 0 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
              animate={{ clipPath: isCurrent || isPrev ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
              transition={{ duration: isCurrent ? 0.9 : 0, ease: [0.77, 0, 0.18, 1] }}
              style={{ position: "absolute", inset: 0, zIndex: isCurrent ? 3 : isPrev ? 2 : 1 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </motion.div>
          );
        })}

        {/* Dot navigation — bottom right */}
        <div className="absolute bottom-0 right-0 p-10 flex gap-2 items-center" style={{ zIndex: 10 }}>
          {EXP_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === expIdx ? "1.8rem" : "0.45rem",
                height: "0.45rem",
                borderRadius: "9999px",
                backgroundColor: "#ffc0c0",
                opacity: i === expIdx ? 1 : 0.5,
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#cd4747", padding: "5rem 4rem 3rem" }}>
        {/* Top row — brand + nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "5rem" }}>
          {/* Brand */}
          <div>
            <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "clamp(1.2rem, 2vw, 1.6rem)", letterSpacing: "0.18em", color: "#ffc0c0", marginBottom: "0.5rem" }}>
              THE COASTAL
            </p>
            <p style={{ fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", color: "#ffc0c0", opacity: 0.65, lineHeight: 1.5 }}>
              Berry, New South Wales
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "4rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.22em", color: "#ffc0c0", opacity: 0.45, marginBottom: "0.25rem" }}>STAYS</p>
              {["The Headland House", "The Eucalypt Villa", "The Fern Villa", "The Paperbark Villa"].map((name) => (
                <Link key={name} href={`/stays/${name.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", color: "#ffc0c0", opacity: 0.7, textDecoration: "none" }}>
                  {name.toUpperCase()}
                </Link>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.22em", color: "#ffc0c0", opacity: 0.45, marginBottom: "0.25rem" }}>EXPLORE</p>
              {["Experience", "Our Storey", "Accommodation"].map((label) => (
                <a key={label} href="#"
                  style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", color: "#ffc0c0", opacity: 0.7, textDecoration: "none" }}>
                  {label.toUpperCase()}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.22em", color: "#ffc0c0", opacity: 0.45, marginBottom: "0.25rem" }}>CONTACT</p>
              <a href="mailto:hello@thecoastal.com.au"
                style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", color: "#ffc0c0", opacity: 0.7, textDecoration: "none" }}>
                HELLO@THECOASTAL.COM.AU
              </a>
              <a href="tel:+61200000000"
                style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", color: "#ffc0c0", opacity: 0.7, textDecoration: "none" }}>
                +61 2 0000 0000
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,192,192,0.2)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: "#ffc0c0", opacity: 0.35 }}>
            © {new Date().getFullYear()} THE COASTAL. ALL RIGHTS RESERVED.
          </p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {["Instagram", "Facebook"].map((s) => (
              <a key={s} href="#" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: "#ffc0c0", opacity: 0.35, textDecoration: "none" }}>
                {s.toUpperCase()}
              </a>
            ))}
            <a href="https://sanjstudio.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: "#ffc0c0", opacity: 0.35, textDecoration: "none" }}>
              WEBSITE BY SANJSTUDIO
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
