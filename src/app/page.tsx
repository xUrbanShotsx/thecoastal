"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const creamHeight = useTransform(scrollY, [0, 500], ["50vh", "0vh"]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      const el = heroRef.current;
      if (!el) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const base = 100;
      const gap = base * 0.38;

      // COASTAL — Cormorant Garamond italic bold
      ctx.font = `italic 700 ${base}px 'Cormorant Garamond', serif`;
      const m1 = ctx.measureText("COASTAL");
      const w1 = m1.actualBoundingBoxLeft + m1.actualBoundingBoxRight;

      // X — Playfair Display bold
      ctx.font = `700 ${base}px 'Playfair Display', serif`;
      const m2 = ctx.measureText("X");
      const w2 = m2.actualBoundingBoxLeft + m2.actualBoundingBoxRight;

      // BERRY — Cormorant Garamond italic bold
      ctx.font = `italic 700 ${base}px 'Cormorant Garamond', serif`;
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
            className="absolute inset-x-0 top-0 flex items-center justify-center overflow-hidden"
            style={{ height: creamHeight, backgroundColor: "#f5f0e8" }}
          >
            <div
              ref={heroRef}
              className="flex items-baseline whitespace-nowrap"
              style={{ gap: "var(--gap, 0.38em)", lineHeight: 1 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "var(--fs, 13vw)",
                  color: "#1a1916",
                }}
              >
                COASTAL
              </span>
              <span
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "var(--fs, 13vw)",
                  color: "#1a1916",
                }}
              >
                X
              </span>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "var(--fs, 13vw)",
                  color: "#1a1916",
                }}
              >
                BERRY
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
