"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CornerFlourish, CentralMandala } from "./DecorativeMandala";
import { Sparkles, ChevronDown } from "lucide-react";

interface OpeningExperienceProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function OpeningExperience({
  onOpen,
  isOpen,
}: OpeningExperienceProps) {
  // Opening state: 'closed' | 'opening' | 'entered'
  const [doorState, setDoorState] = useState<"closed" | "opening" | "entered">("closed");

  // Floating particles & flower petals state
  const [ambientElements, setAmbientElements] = useState<
    { id: number; left: number; top: number; size: number; delay: number; duration: number; type: "gold" | "petal" }[]
  >([]);

  useEffect(() => {
    // Generate ambient golden dust and gentle floating rose petals
    const items = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: i % 4 === 0 ? Math.random() * 8 + 6 : Math.random() * 3 + 1.5,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 4,
      type: (i % 4 === 0 ? "petal" : "gold") as "gold" | "petal",
    }));
    setAmbientElements(items);
  }, []);

  const handleEnterClick = () => {
    if (doorState !== "closed") return;

    // Trigger golden celebration sparkle burst
    try {
      confetti({
        particleCount: 55,
        spread: 90,
        origin: { y: 0.55 },
        colors: ["#d4af37", "#f3e5ab", "#861841", "#aa841f", "#fff"],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }

    setDoorState("opening");

    // After doors swing open and light bursts forth, transition to main site
    setTimeout(() => {
      setDoorState("entered");
      onOpen();
    }, 2200);
  };

  const handleSkip = () => {
    onOpen();
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-radial-burgundy px-4 sm:px-6 select-none overflow-hidden"
      >
        {/* SCENE 1: Ambient deep royal burgundy atmosphere with floating gold particles & rose petals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {ambientElements.map((item) => (
            <motion.div
              key={item.id}
              className={`absolute rounded-full ${
                item.type === "petal"
                  ? "bg-gradient-to-br from-burgundy-500 via-burgundy-700 to-gold-600/40 opacity-70"
                  : "bg-gold-300 shadow-[0_0_8px_rgba(212,175,55,0.9)] opacity-80"
              }`}
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                width: `${item.size}px`,
                height: `${item.type === "petal" ? item.size * 1.3 : item.size}px`,
                borderRadius: item.type === "petal" ? "50% 0 50% 50%" : "50%",
              }}
              animate={{
                opacity: [0.2, 0.9, 0.2],
                y: [0, -35, 0],
                rotate: item.type === "petal" ? [0, 180, 360] : 0,
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Soft atmospheric radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-burgundy-700/25 rounded-full blur-3xl pointer-events-none" />

        {/* Delicate Indian ornamental corner flourishes */}
        <div className="absolute inset-3 sm:inset-6 border border-gold-500/20 rounded-3xl pointer-events-none">
          <CornerFlourish className="absolute -top-1 -left-1" />
          <CornerFlourish className="absolute -top-1 -right-1 rotate-90" />
          <CornerFlourish className="absolute -bottom-1 -left-1 -rotate-90" />
          <CornerFlourish className="absolute -bottom-1 -right-1 rotate-180" />
        </div>

        {/* Top Bar with Skip Intro Button */}
        <div className="relative z-30 w-full max-w-5xl flex justify-end pt-4 sm:pt-6">
          <button
            onClick={handleSkip}
            className="text-xs font-sans tracking-widest text-champagne-300/70 hover:text-gold-200 transition-colors py-1.5 px-4 rounded-full border border-gold-400/20 bg-burgundy-950/60 backdrop-blur-md hover:border-gold-400/50"
            aria-label="Skip royal opening intro"
          >
            Skip Intro →
          </button>
        </div>

        {/* SCENES 2, 3, 4 & 5: The Royal Mulpuru Gateway Container */}
        <div className="relative z-10 max-w-4xl w-full my-auto flex flex-col items-center justify-center text-center py-4">
          {/* SCENE 2 & 3: Family Crest & Identity Reveal */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="mb-4 sm:mb-6 space-y-1.5 flex flex-col items-center"
          >
            {/* Animated Golden Mandala with Central "M" Monogram */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2">
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <CentralMandala size={110} className="w-full h-full text-gold-400/50" />
              </motion.div>

              {/* Central Golden Medallion */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-burgundy-800 to-burgundy-950 border-2 border-gold-400 shadow-gold-glow flex flex-col items-center justify-center">
                <span className="font-cinzel text-xl sm:text-2xl font-bold bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent tracking-widest pl-0.5">
                  M
                </span>
              </div>
            </div>

            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] text-gold-400 uppercase font-semibold">
              The Auspicious Occasion Of
            </span>

            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold tracking-[0.2em] text-ivory">
              MULPURU FAMILY
            </h1>

            <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-champagne-200 font-normal">
              A Celebration of Love, Family & New Beginnings
            </p>
          </motion.div>

          {/* SCENE 4: Royal Ceremonial Gateway Arch & Carved Doors */}
          <div className="relative w-full max-w-[360px] sm:max-w-[480px] md:max-w-[540px] aspect-[16/11] sm:aspect-[16/10] my-2 perspective-[1400px]">
            {/* Gateway Outer Frame with Golden Pillars & Grand Arch */}
            <div className="relative w-full h-full rounded-t-full bg-gradient-to-b from-burgundy-900/95 via-burgundy-950 to-burgundy-950 border-4 border-gold-400/60 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.25)] p-3 sm:p-4 flex items-center justify-center overflow-hidden">
              {/* Traditional Ornamental Arch Top (Toran / Mughal Kiosk curve) */}
              <div className="absolute top-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-b from-burgundy-800/90 to-transparent border-b border-gold-400/30 flex items-center justify-center pointer-events-none z-20">
                <div className="flex items-center gap-2 text-gold-300">
                  <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
                  <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                  <span className="font-cinzel text-[9px] sm:text-[11px] tracking-[0.3em] uppercase text-gold-300">
                    ROYAL CEREMONIAL GATEWAY
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                  <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
                </div>
              </div>

              {/* Glowing Diyas / Hanging Temple Lanterns on Both Pillars */}
              <div className="absolute top-14 left-2 sm:left-4 z-20 flex flex-col items-center">
                <div className="w-0.5 h-6 bg-gold-400/50" />
                <div className="w-5 h-6 rounded-b-full bg-gradient-to-b from-gold-400 to-gold-600 border border-gold-300 shadow-[0_0_15px_rgba(251,191,36,0.9)] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
                </div>
              </div>

              <div className="absolute top-14 right-2 sm:right-4 z-20 flex flex-col items-center">
                <div className="w-0.5 h-6 bg-gold-400/50" />
                <div className="w-5 h-6 rounded-b-full bg-gradient-to-b from-gold-400 to-gold-600 border border-gold-300 shadow-[0_0_15px_rgba(251,191,36,0.9)] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
                </div>
              </div>

              {/* BEHIND THE DOORS: Divine Golden Light Burst that radiates when doors open */}
              <motion.div
                className="absolute inset-0 bg-radial-burgundy-light flex flex-col items-center justify-center z-0 pointer-events-none"
                animate={
                  doorState === "opening"
                    ? {
                        opacity: 1,
                        scale: [1, 1.25],
                        transition: { duration: 1.8, ease: "easeOut" },
                      }
                    : { opacity: 0.2, scale: 1 }
                }
              >
                {/* Sunburst golden radiant rays */}
                <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-gold-300/30 via-gold-500/40 to-champagne-200/30 blur-2xl animate-spin-slow" />
                <div className="relative z-10 space-y-2 text-center px-4">
                  <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-300 uppercase font-bold">
                    Welcome to the Celebration
                  </p>
                  <p className="font-cormorant text-xl sm:text-2xl text-ivory font-semibold italic">
                    Mulpuru Ashok Rathna & Nalluri Anusha
                  </p>
                </div>
              </motion.div>

              {/* SCENE 4 & 5: DOUBLE CARVED CEREMONIAL GATEWAY DOORS */}
              <div className="relative w-full h-full flex z-10 pt-10 sm:pt-14 pb-2 px-1">
                {/* LEFT GATE DOOR */}
                <motion.div
                  className="w-1/2 h-full rounded-tl-3xl bg-gradient-to-br from-burgundy-850 via-burgundy-900 to-burgundy-950 border-2 border-r-0 border-gold-400/70 shadow-2xl p-2 sm:p-3 flex flex-col justify-between overflow-hidden"
                  style={{
                    transformOrigin: "left center",
                  }}
                  animate={
                    doorState === "opening"
                      ? {
                          rotateY: -85,
                          opacity: 0.15,
                          transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1] },
                        }
                      : { rotateY: 0, opacity: 1 }
                  }
                >
                  {/* Traditional Jali / Filigree Carving on Left Door */}
                  <div className="w-full h-full border border-gold-400/30 rounded-t-2xl p-2 flex flex-col justify-between bg-burgundy-950/40">
                    <div className="space-y-1">
                      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
                      <div className="h-0.5 w-3/4 mx-auto bg-gold-400/30" />
                    </div>

                    {/* Left Brass Door Handle & Studs */}
                    <div className="flex items-center justify-end pr-1 sm:pr-2">
                      <div className="w-4 h-10 sm:w-5 sm:h-14 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 border border-gold-200 shadow-gold-glow flex items-center justify-center">
                        <span className="w-1 h-4 rounded-full bg-burgundy-950" />
                      </div>
                    </div>

                    <div className="text-left text-[9px] font-cinzel text-gold-400/60 tracking-widest pl-1 uppercase">
                      Gate • Left
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT GATE DOOR */}
                <motion.div
                  className="w-1/2 h-full rounded-tr-3xl bg-gradient-to-bl from-burgundy-850 via-burgundy-900 to-burgundy-950 border-2 border-l-0 border-gold-400/70 shadow-2xl p-2 sm:p-3 flex flex-col justify-between overflow-hidden"
                  style={{
                    transformOrigin: "right center",
                  }}
                  animate={
                    doorState === "opening"
                      ? {
                          rotateY: 85,
                          opacity: 0.15,
                          transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1] },
                        }
                      : { rotateY: 0, opacity: 1 }
                  }
                >
                  {/* Traditional Jali / Filigree Carving on Right Door */}
                  <div className="w-full h-full border border-gold-400/30 rounded-t-2xl p-2 flex flex-col justify-between bg-burgundy-950/40">
                    <div className="space-y-1">
                      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
                      <div className="h-0.5 w-3/4 mx-auto bg-gold-400/30" />
                    </div>

                    {/* Right Brass Door Handle & Studs */}
                    <div className="flex items-center justify-start pl-1 sm:pr-2">
                      <div className="w-4 h-10 sm:w-5 sm:h-14 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 border border-gold-200 shadow-gold-glow flex items-center justify-center">
                        <span className="w-1 h-4 rounded-full bg-burgundy-950" />
                      </div>
                    </div>

                    <div className="text-right text-[9px] font-cinzel text-gold-400/60 tracking-widest pr-1 uppercase">
                      Gate • Right
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Central Golden Lock / Toran Medallion joining both doors */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                animate={
                  doorState === "opening"
                    ? {
                        scale: [1, 1.4, 0],
                        opacity: 0,
                        transition: { duration: 0.8 },
                      }
                    : { scale: 1, opacity: 1 }
                }
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 border-2 border-gold-200 shadow-gold-glow-lg flex items-center justify-center text-burgundy-950 font-cinzel font-bold text-sm sm:text-base">
                  M
                </div>
              </motion.div>
            </div>
          </div>

          {/* SCENE 5: "ENTER THE CELEBRATION" Action Button */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-col items-center gap-3 w-full"
          >
            <button
              onClick={handleEnterClick}
              disabled={doorState !== "closed"}
              className="group relative inline-flex items-center justify-center px-10 py-4 text-xs sm:text-sm font-cinzel font-bold tracking-[0.25em] uppercase text-burgundy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-full shadow-gold-glow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] active:scale-95 disabled:opacity-85"
            >
              <span>{doorState === "closed" ? "ENTER THE CELEBRATION" : "OPENING THE ROYAL GATEWAY..."}</span>
              <span className="ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
            </button>

            <span className="text-[11px] font-sans tracking-widest text-champagne-300/60 uppercase">
              Wed, 18 Nov 2026 • SVS Function Hall, Guntur
            </span>
          </motion.div>
        </div>

        {/* Bottom subtle guidance indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-20 pb-4 flex flex-col items-center text-gold-400/60 text-[10px] tracking-widest uppercase pointer-events-none"
        >
          <span>Tap to open the Ceremonial Gateway</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce mt-0.5" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
