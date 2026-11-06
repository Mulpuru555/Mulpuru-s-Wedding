"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { GoldDivider, CentralMandala, CornerFlourish } from "./DecorativeMandala";
import { Sparkles } from "lucide-react";

export default function RingExchange() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-burgundy-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Subtle decorative mandala behind couple illustration */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
            <CentralMandala size={460} />
          </div>

          {/* Luxury 3D Couple Sticker Showcase Frame */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-md sm:max-w-lg mx-auto rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-burgundy-900/90 via-burgundy-900/80 to-burgundy-950 border-2 border-gold-400/40 shadow-card-luxury overflow-hidden group"
          >
            {/* Outer golden halo glow */}
            <div className="absolute -inset-2 bg-gradient-to-b from-gold-400/25 via-burgundy-600/15 to-gold-500/25 rounded-3xl blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Corner flourishes */}
            <CornerFlourish className="absolute top-1 left-1 w-8 h-8 opacity-60" />
            <CornerFlourish className="absolute top-1 right-1 w-8 h-8 rotate-90 opacity-60" />
            <CornerFlourish className="absolute bottom-1 left-1 w-8 h-8 -rotate-90 opacity-60" />
            <CornerFlourish className="absolute bottom-1 right-1 w-8 h-8 rotate-180 opacity-60" />

            {/* 3D Couple Ring Exchange Artwork Container */}
            <div className="relative rounded-2xl overflow-hidden bg-burgundy-950/80 border border-gold-400/30 aspect-square w-full flex items-center justify-center">
              <Image
                src={EVENT_DATA.assets.ringExchangeCouple}
                alt="3D Illustrated Couple Ring Exchange — Mulpuru Ashok Rathna & Nalluri Anusha"
                fill
                sizes="(max-width: 640px) 90vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />

              {/* Gentle ambient vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-black/15 pointer-events-none" />

              {/* Romantic Bottom Label */}
              <div className="absolute bottom-3 inset-x-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-950/90 border border-gold-400/40 backdrop-blur-md shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-widest text-gold-300 uppercase">
                    Sacred Exchange of Rings
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Romantic Copy Exactly as Requested */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <blockquote className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-champagne-100 max-w-2xl mx-auto leading-relaxed font-medium">
            “TWO HEARTS,<br />
            TWO FAMILIES,<br />
            ONE BEAUTIFUL BEGINNING.”
          </blockquote>

          <GoldDivider />

          {/* Couple Names */}
          <div className="pt-2 space-y-2">
            <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-gold-300">
              {EVENT_DATA.groom.fullName}
            </h3>
            <p className="font-script text-3xl sm:text-4xl text-champagne-300">
              &
            </p>
            <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-gold-300">
              {EVENT_DATA.bride.fullName}
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
