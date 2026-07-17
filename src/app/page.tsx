"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";


export default function Home() {
  const { scrollY } = useScroll();
  const creamHeight = useTransform(scrollY, [0, 500], ["50vh", "0vh"]);
  const navOpacity = useTransform(scrollY, [0, 120], [1, 0]);
  const navPointer = useTransform(scrollY, [0, 120], ["auto", "none"]);
  const heroRef = useRef<HTMLDivElement>(null);

  const EXP_IMAGES = ["/exp1.png", "/exp2.png", "/exp3.png"];
  const [expIdx, setExpIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setExpIdx((i) => (i + 1) % EXP_IMAGES.length), 5000);
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

      {/* Experiences section — fullscreen slideshow */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Crossfading images */}
        <AnimatePresence>
          <motion.img
            key={expIdx}
            src={EXP_IMAGES[expIdx]}
            alt="Berry & Beyond"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>

        {/* Dark vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />

        {/* Text overlay — bottom left */}
        <div className="absolute bottom-0 left-0 p-10">
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.22em", color: "#ffc0c0", opacity: 0.7, marginBottom: "0.6rem" }}>
            EXPERIENCES
          </p>
          <h2 style={{ fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.5rem, 4.5vw, 5rem)", color: "#ffc0c0", lineHeight: 1 }}>
            Berry &amp; Beyond
          </h2>
        </div>

        {/* Dot navigation — bottom right */}
        <div className="absolute bottom-0 right-0 p-10 flex gap-2 items-center">
          {EXP_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setExpIdx(i)}
              style={{
                width: i === expIdx ? "1.8rem" : "0.45rem",
                height: "0.45rem",
                borderRadius: "9999px",
                backgroundColor: "#ffc0c0",
                opacity: i === expIdx ? 1 : 0.4,
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
