"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  // Cream panel gone by 500px of scroll (well before sticky breaks)
  const creamHeight = useTransform(scrollY, [0, 500], ["50vh", "0vh"]);

  return (
    <main>
      {/* 200vh gives the image time to sit full-screen before user scrolls past */}
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

          {/* Cream panel — slides up then gone */}
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
