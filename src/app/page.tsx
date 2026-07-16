"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

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
      const scale = window.innerWidth / total;
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
        {["EXPERIENCE", "ACCOMMODATION", "OUR STOREY"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "clamp(0.6rem, 1.1vw, 0.85rem)",
              letterSpacing: "0.18em",
              color: "#cd4747",
              textDecoration: "none",
            }}
          >
            {item}
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
        className="flex h-screen w-full flex-col items-center justify-center px-8 text-center"
        style={{ backgroundColor: "#cd4747" }}
      >
        <p
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)",
            letterSpacing: "0.22em",
            color: "#ffc0c0",
          }}
        >
          GLAD YOU CAN JOIN US
        </p>

        <p
          className="mt-8 max-w-2xl"
          style={{
            fontFamily: "Canela, serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
            lineHeight: 1.35,
            color: "#ffc0c0",
          }}
        >
          A private estate above Berry, New South Wales — where the bush
          meets the coast and time slows to something worth keeping.
        </p>
      </section>
    </main>
  );
}
