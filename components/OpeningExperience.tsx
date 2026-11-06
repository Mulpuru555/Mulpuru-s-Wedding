"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FamilyMonogramCrest } from "./DecorativeMandala";
import { Sparkles, ChevronDown } from "lucide-react";

interface OpeningExperienceProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function OpeningExperience({
  onOpen,
  isOpen,
}: OpeningExperienceProps) {
  const [particles, setParticles] = useState<
    { id: number; top: number; left: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Generate gold sparkles on client mount
    const p = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(p);
  }, []);

  const handleOpen = () => {
    try {
      // Golden celebratory burst
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#d4af37", "#f3e5ab", "#861841", "#f9f4ea"],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore if confetti fails
    }
    onOpen();
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-radial-burgundy px-6 select-none overflow-hidden"
      >
        {/* Subtle gold particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-gold-300"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: "0 0 8px rgba(212, 175, 55, 0.8)",
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [0.8, 1.4, 0.8],
                y: [0, -25, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Ambient background glow rings */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-burgundy-700/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
          {/* Family Crest Monogram Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <FamilyMonogramCrest />
          </motion.div>

          {/* Family Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3"
          >
            <p className="font-cinzel text-xs md:text-sm tracking-[0.35em] text-gold-400 uppercase font-medium">
              The Auspicious Occasion Of
            </p>

            <h1 className="font-cinzel text-3xl md:text-5xl font-bold tracking-[0.2em] text-ivory">
              MULPURU FAMILY
            </h1>

            <div className="flex items-center justify-center gap-3 pt-2">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
            </div>

            <p className="font-cormorant italic text-xl md:text-2xl text-champagne-200 font-normal pt-2">
              A Celebration of Love, Family & New Beginnings
            </p>
          </motion.div>

          {/* Action Buttons: OPEN INVITATION & Skip */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col items-center gap-4 w-full"
          >
            <button
              onClick={handleOpen}
              className="group relative inline-flex items-center justify-center px-10 py-4 text-xs md:text-sm font-cinzel font-semibold tracking-[0.25em] uppercase text-burgundy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-full shadow-gold-glow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 focus:ring-offset-burgundy-950 active:scale-95"
            >
              <span>OPEN INVITATION</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={handleOpen}
              className="text-xs font-sans tracking-widest text-champagne-300/60 hover:text-champagne-200 transition-colors py-2 px-4 rounded"
              aria-label="Skip introduction animation"
            >
              Skip Intro
            </button>
          </motion.div>
        </div>

        {/* Bottom subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center text-gold-400/60 text-[10px] tracking-widest uppercase"
        >
          <span>Tap to enter</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
