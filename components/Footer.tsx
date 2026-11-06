"use client";

import React from "react";
import { EVENT_DATA } from "@/lib/event-data";
import { FamilyMonogramCrest, GoldDivider } from "./DecorativeMandala";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-6 bg-gradient-to-b from-burgundy-950 via-burgundy-900/60 to-burgundy-950 border-t border-gold-400/20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Monogram Crest */}
        <div className="mb-6">
          <FamilyMonogramCrest />
        </div>

        {/* Closing Copy as explicitly requested in Master Prompt */}
        <div className="space-y-3 mb-6">
          <p className="font-cinzel text-xs md:text-sm tracking-[0.35em] text-gold-400 uppercase font-semibold">
            WITH LOVE AND WARM REGARDS
          </p>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] text-ivory">
            THE MULPURU FAMILY
          </h2>

          <GoldDivider />

          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-champagne-100 max-w-xl mx-auto leading-relaxed">
            “Your presence and blessings will make this occasion truly memorable.”
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="mt-6 mb-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-burgundy-900/80 border border-gold-400/30 text-champagne-300 hover:text-white hover:border-gold-400 text-xs font-cinzel tracking-wider transition-all shadow-md group"
          aria-label="Back to top of invitation"
        >
          <ArrowUp className="w-3.5 h-3.5 text-gold-400 group-hover:-translate-y-0.5 transition-transform" />
          <span>Back to Top</span>
        </button>

        {/* Event Date & Location footer note */}
        <div className="pt-6 border-t border-gold-400/10 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-champagne-300/60 gap-4 font-sans">
          <p>
            {EVENT_DATA.date.display} • SVS Function Hall, Guntur
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span>for the Mulpuru Family</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
