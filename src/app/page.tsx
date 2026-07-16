"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const creamHeight = useTransform(scrollY, [0, 500], ["50vh", "0vh"]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const el = titleRef.current;
      if (!el) return;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      // Measure at 100px then scale to viewport width
      const family = getComputedStyle(el).fontFamily;
      ctx.font = `bold 100px ${family}`;
      const metrics = ctx.measureText("COASTAL X BERRY");
      // Use actual ink bounds for true edge-to-edge
      const inkWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
      el.style.fontSize = `${(window.innerWidth / inkWidth) * 100}px`;
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
            <h1
              ref={titleRef}
              className="whitespace-nowrap font-serif font-bold"
              style={{ color: "#1a1916", fontSize: "13vw", lineHeight: 1 }}
            >
              COASTAL X BERRY
            </h1>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
