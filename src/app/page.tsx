"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Cream panel shrinks from 50% to 0 as you scroll
  const creamHeight = useTransform(scrollYProgress, [0, 0.65], ["50%", "0%"]);
  // Subtle image scale as cream reveals it
  const imageScale = useTransform(scrollYProgress, [0, 0.65], [1.06, 1]);

  return (
    <main>
      {/* Scroll container — 220vh gives plenty of scroll travel */}
      <div ref={containerRef} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Full-bleed background image */}
          <motion.div
            className="absolute inset-0 origin-center"
            style={{ scale: imageScale }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/Trialimage.png')",
                backgroundColor: "#2c3529",
              }}
            />
          </motion.div>

          {/* Cream panel — slides up on scroll */}
          <motion.div
            className="absolute inset-x-0 top-0 flex flex-col items-center justify-end overflow-hidden"
            style={{ height: creamHeight, backgroundColor: "#f5f0e8" }}
          >
            <div className="pb-10 text-center">
              <p
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ color: "#1a1916", opacity: 0.45 }}
              >
                Berry · New South Wales
              </p>
              <h1
                className="mt-3 font-serif text-4xl font-normal tracking-wide sm:text-5xl"
                style={{ color: "#1a1916" }}
              >
                The Coastal
              </h1>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
