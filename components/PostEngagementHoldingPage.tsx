"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { FamilyMonogramCrest, CornerFlourish, CentralMandala, GoldDivider } from "./DecorativeMandala";
import { Sparkles, Heart, Calendar, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import InvitationCard from "./InvitationCard";

export default function PostEngagementHoldingPage() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-burgundy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <CentralMandala size={650} />
      </div>

      {/* Outer Luxury Border with Corner Flourishes */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-gold-500/20 rounded-3xl pointer-events-none">
        <CornerFlourish className="absolute -top-1 -left-1" />
        <CornerFlourish className="absolute -top-1 -right-1 rotate-90" />
        <CornerFlourish className="absolute -bottom-1 -left-1 -rotate-90" />
        <CornerFlourish className="absolute -bottom-1 -right-1 rotate-180" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center my-auto space-y-8">
        {/* Family Crest Monogram */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <FamilyMonogramCrest />
        </motion.div>

        {/* Header Tag & Family Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-burgundy-900/80 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-gold-400" />
            <span className="font-cinzel text-xs tracking-[0.3em] text-gold-300 uppercase font-medium">
              Celebrated With Immense Joy & Love
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.2em] text-ivory">
            {EVENT_DATA.family}
          </h1>

          <p className="font-cormorant italic text-xl sm:text-2xl text-champagne-200">
            A Celebration of Love, Family & New Beginnings
          </p>
        </motion.div>

        <GoldDivider />

        {/* Couple Names & Engagement Completion */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-300 tracking-wider">
              {EVENT_DATA.groom.fullName}
            </p>
            <p className="font-script text-3xl sm:text-4xl text-champagne-300">
              with
            </p>
            <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-300 tracking-wider">
              {EVENT_DATA.bride.fullName}
            </p>
          </div>

          {/* Heartfelt Thank You Note */}
          <div className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-burgundy-900/90 to-burgundy-950/95 border border-gold-400/30 shadow-card-luxury space-y-4 text-center">
            <p className="font-cormorant text-xl sm:text-2xl text-champagne-100 leading-relaxed font-normal">
              With the blessings of the Almighty and our beloved elders, our Engagement Ceremony was celebrated with grand joy, cherished memories, and togetherness on <strong>Wednesday, 18 November 2026</strong>.
            </p>

            <p className="font-sans text-xs sm:text-sm text-champagne-300/90 leading-relaxed">
              We extend our heartfelt gratitude to every family member, relative, and dear friend for your overwhelming love, gracious presence, and auspicious blessings that made this milestone truly unforgettable.
            </p>
          </div>
        </motion.div>

        {/* The Next Chapter: Grand Wedding Announcement Card */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-burgundy-900 via-burgundy-850 to-burgundy-900 border-2 border-gold-400/60 shadow-gold-glow-lg text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-gold-300 text-xs font-cinzel tracking-widest uppercase font-semibold">
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
            <span>The Next Chapter</span>
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
          </div>

          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-bold text-ivory">
            Grand Wedding Celebrations
          </h2>

          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />

          <p className="font-cinzel text-sm sm:text-base tracking-[0.2em] text-gold-300 uppercase font-semibold pt-1">
            Wedding Dates & Invitation Coming Soon
          </p>

          <p className="font-sans text-xs sm:text-sm text-champagne-300/80 max-w-md mx-auto">
            Our families are currently preparing for the sacred wedding ceremonies. This website will be updated with the wedding muhurtham, venue, and live invitation as the auspicious dates approach!
          </p>
        </motion.div>

        {/* Keepsake Archive Toggle */}
        <div className="pt-2">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-burgundy-900/80 border border-gold-400/40 text-champagne-200 hover:text-white hover:border-gold-400 text-xs font-cinzel tracking-wider transition-all shadow-md"
          >
            <span>{showArchive ? "Hide Engagement Invitation" : "View Engagement Invitation Keepsake"}</span>
            {showArchive ? <ChevronUp className="w-4 h-4 text-gold-400" /> : <ChevronDown className="w-4 h-4 text-gold-400" />}
          </button>
        </div>

        {/* Collapsible Engagement Card Archive */}
        <AnimatePresence>
          {showArchive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-4"
            >
              <InvitationCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full text-center pt-8 border-t border-gold-400/15 mt-8 space-y-2">
        <p className="font-cinzel text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold">
          WITH LOVE AND WARM REGARDS
        </p>
        <p className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-ivory">
          THE MULPURU FAMILY
        </p>
        <p className="text-[11px] text-champagne-300/60 font-sans">
          Guntur, Andhra Pradesh, India
        </p>
      </footer>
    </div>
  );
}
