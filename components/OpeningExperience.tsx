"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CornerFlourish, CentralMandala } from "./DecorativeMandala";
import { Sparkles, ChevronDown } from "lucide-react";
import { EVENT_DATA } from "@/lib/event-data";

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

  // Animation phase state: 'closed' | 'opening' | 'revealed'
  const [envelopeState, setEnvelopeState] = useState<"closed" | "opening" | "revealed">("closed");

  useEffect(() => {
    // Generate gold sparkles on client mount
    const p = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3.5 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(p);
  }, []);

  const handleOpenClick = () => {
    if (envelopeState !== "closed") return;

    // Trigger golden celebratory confetti burst
    try {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#f3e5ab", "#861841", "#f9f4ea", "#aa841f"],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore fallback
    }

    // Step 1: Open envelope flap and slide card out
    setEnvelopeState("opening");

    // Step 2: Show revealed artwork majestically
    setTimeout(() => {
      setEnvelopeState("revealed");
    }, 1200);

    // Step 3: Transition smoothly into main site
    setTimeout(() => {
      onOpen();
    }, 2800);
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
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-radial-burgundy px-4 sm:px-6 select-none overflow-hidden"
      >
        {/* SCENE 1: Ambient royal burgundy background & gold particles */}
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
                boxShadow: "0 0 10px rgba(212, 175, 55, 0.9)",
              }}
              animate={{
                opacity: [0.1, 0.9, 0.1],
                scale: [0.8, 1.5, 0.8],
                y: [0, -30, 0],
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

        {/* Ambient lighting glows */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-burgundy-700/25 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <CentralMandala size={650} />
        </div>

        {/* Outer Corner Flourishes */}
        <div className="absolute inset-4 sm:inset-8 border border-gold-500/20 rounded-3xl pointer-events-none">
          <CornerFlourish className="absolute -top-1 -left-1" />
          <CornerFlourish className="absolute -top-1 -right-1 rotate-90" />
          <CornerFlourish className="absolute -bottom-1 -left-1 -rotate-90" />
          <CornerFlourish className="absolute -bottom-1 -right-1 rotate-180" />
        </div>

        {/* SCENE 2 & 3: Family Crest Header + Royal Invitation Envelope */}
        <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center my-auto py-6">
          {/* SCENE 2: Family Title Reveal */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-burgundy-900/80 backdrop-blur-md mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-cinzel text-[11px] md:text-xs tracking-[0.3em] text-gold-300 uppercase">
                Auspicious Invitation
              </span>
            </div>

            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.22em] text-ivory">
              MULPURU FAMILY
            </h1>

            <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-champagne-200">
              A Celebration of Love, Family & New Beginnings
            </p>
          </motion.div>

          {/* SCENE 3 & 4: Royal Burgundy Envelope & Card Reveal */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[240px] sm:h-[280px] perspective-[1200px] flex items-center justify-center">
            {/* The Envelope Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full h-full rounded-2xl bg-gradient-to-b from-burgundy-850 via-burgundy-900 to-burgundy-950 border-2 border-gold-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.2)] overflow-hidden flex flex-col justify-between p-4 sm:p-6"
            >
              {/* Gold filigree decorative frame inside envelope */}
              <div className="absolute inset-2 border border-gold-400/30 rounded-xl pointer-events-none">
                <CornerFlourish className="absolute -top-1 -left-1 w-6 h-6 opacity-60" />
                <CornerFlourish className="absolute -top-1 -right-1 w-6 h-6 rotate-90 opacity-60" />
                <CornerFlourish className="absolute -bottom-1 -left-1 w-6 h-6 -rotate-90 opacity-60" />
                <CornerFlourish className="absolute -bottom-1 -right-1 w-6 h-6 rotate-180 opacity-60" />
              </div>

              {/* Envelope Flap Animation */}
              <motion.div
                className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-burgundy-800 to-burgundy-900 border-b border-gold-400/40 origin-top flex items-center justify-center shadow-lg z-20"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
                animate={
                  envelopeState !== "closed"
                    ? {
                        rotateX: 180,
                        opacity: 0.15,
                        transition: { duration: 0.8, ease: "easeInOut" },
                      }
                    : { rotateX: 0 }
                }
              >
                {/* Gold wax seal on flap */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 border-2 border-gold-200 shadow-gold-glow flex items-center justify-center text-burgundy-950 font-cinzel font-bold text-sm sm:text-base -mt-3">
                  M
                </div>
              </motion.div>

              {/* Interior Invitation Card (slides out smoothly during reveal) */}
              <motion.div
                className="absolute inset-x-4 inset-y-4 rounded-xl overflow-hidden bg-burgundy-950 border border-gold-400 shadow-2xl z-10 flex items-center justify-center"
                animate={
                  envelopeState === "opening"
                    ? { y: -110, scale: 1.08, zIndex: 30, transition: { duration: 1.2, ease: "easeOut" } }
                    : envelopeState === "revealed"
                    ? { y: -120, scale: 1.15, zIndex: 30, opacity: 1 }
                    : { y: 0, scale: 0.94 }
                }
              >
                <div className="relative w-full h-full aspect-[935/1024]">
                  <Image
                    src={EVENT_DATA.assets.invitationCard}
                    alt="Official Mulpuru Family Engagement Invitation"
                    fill
                    sizes="(max-width: 640px) 340px, 420px"
                    priority
                    className="object-contain"
                  />
                  {/* Subtle golden shimmer overlay on the card */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-400/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Envelope Header Text */}
              <div className="relative z-10 text-center pt-8">
                <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] text-gold-300/90 uppercase font-semibold">
                  YOU ARE CORDIALLY INVITED
                </span>
              </div>

              {/* Envelope Footer Accent */}
              <div className="relative z-10 text-center pb-2">
                <p className="font-cinzel text-[11px] sm:text-xs tracking-widest text-champagne-300/80">
                  Mulpuru Ashok Rathna & Nalluri Anusha
                </p>
              </div>
            </motion.div>
          </div>

          {/* Action Button & Skip Intro */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-3 w-full"
          >
            <button
              onClick={handleOpenClick}
              disabled={envelopeState !== "closed"}
              className="group relative inline-flex items-center justify-center px-10 py-4 text-xs sm:text-sm font-cinzel font-bold tracking-[0.25em] uppercase text-burgundy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-full shadow-gold-glow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] active:scale-95 disabled:opacity-80"
            >
              <span>{envelopeState === "closed" ? "OPEN INVITATION" : "ENTERING CELEBRATION..."}</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={handleSkip}
              className="text-xs font-sans tracking-widest text-champagne-300/60 hover:text-champagne-200 transition-colors py-1.5 px-4 rounded"
              aria-label="Skip introduction animation and enter website"
            >
              Skip Intro
            </button>
          </motion.div>
        </div>

        {/* Bottom subtle hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-5 flex flex-col items-center text-gold-400/60 text-[10px] tracking-widest uppercase pointer-events-none"
        >
          <span>Tap open to unseal the Royal Invitation</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce mt-0.5" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
