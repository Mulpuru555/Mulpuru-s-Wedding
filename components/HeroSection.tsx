"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { CornerFlourish, CentralMandala, GoldDivider } from "./DecorativeMandala";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Central Mandala watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <CentralMandala size={700} className="w-[450px] md:w-[700px] h-[450px] md:h-[700px]" />
      </div>

      {/* Decorative Outer Border with Corner Flourishes */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-gold-500/20 rounded-2xl pointer-events-none">
        <CornerFlourish className="absolute -top-1 -left-1" />
        <CornerFlourish className="absolute -top-1 -right-1 rotate-90" />
        <CornerFlourish className="absolute -bottom-1 -left-1 -rotate-90" />
        <CornerFlourish className="absolute -bottom-1 -right-1 rotate-180" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left / Top Text Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Header intro badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-burgundy-900/60 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] text-gold-300 uppercase">
                {EVENT_DATA.family}
              </span>
            </div>

            <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] text-champagne-300 uppercase mb-2">
              CORDIALLY INVITES YOU
            </p>

            <h2 className="font-cinzel text-sm md:text-base tracking-[0.35em] text-gold-400 uppercase font-semibold mb-6">
              TO THE CELEBRATION OF
            </h2>

            <div className="relative mb-6">
              <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-ivory leading-tight">
                ENGAGEMENT CEREMONY
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mx-auto lg:mx-0 mt-3" />
            </div>

            {/* Couple Names */}
            <div className="my-6 w-full text-center lg:text-left">
              <div className="space-y-2">
                <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-300 tracking-wider">
                  {EVENT_DATA.groom.fullName}
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-4 py-1">
                  <span className="h-[1px] w-8 bg-gold-400/50" />
                  <span className="font-script text-3xl sm:text-4xl text-champagne-300 px-2">
                    with
                  </span>
                  <span className="h-[1px] w-8 bg-gold-400/50" />
                </div>

                <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-300 tracking-wider">
                  {EVENT_DATA.bride.fullName}
                </p>
              </div>
            </div>

            <GoldDivider className="lg:justify-start my-6" />

            {/* Date, Time & Venue quick pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-champagne-200">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-burgundy-900/80 border border-gold-400/20 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-medium tracking-wide">
                  {EVENT_DATA.date.display}
                </span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-burgundy-900/80 border border-gold-400/20 backdrop-blur-sm">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-medium tracking-wide">
                  {EVENT_DATA.time.display}
                </span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-burgundy-900/80 border border-gold-400/20 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-medium tracking-wide">
                  {EVENT_DATA.venue.name}, Guntur
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Groom Portrait Column (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            {/* Luxury Portrait Frame */}
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer decorative glow and border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-gold-400/30 via-burgundy-600/20 to-gold-500/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden bg-burgundy-950 border border-gold-400/40 aspect-[3/4]">
                  <Image
                    src={EVENT_DATA.assets.groomPortrait}
                    alt="Mulpuru Ashok Rathna - Groom Portrait"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  />

                  {/* Gentle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-black/10 pointer-events-none" />

                  {/* Corner flourishes on photo */}
                  <CornerFlourish className="absolute top-1 left-1 w-10 h-10 opacity-75" />
                  <CornerFlourish className="absolute top-1 right-1 w-10 h-10 rotate-90 opacity-75" />
                  <CornerFlourish className="absolute bottom-1 left-1 w-10 h-10 -rotate-90 opacity-75" />
                  <CornerFlourish className="absolute bottom-1 right-1 w-10 h-10 rotate-180 opacity-75" />

                  {/* Label overlay at bottom of portrait */}
                  <div className="absolute bottom-4 inset-x-4 text-center">
                    <div className="inline-block px-5 py-2 rounded-full bg-burgundy-950/90 border border-gold-400/40 backdrop-blur-md shadow-lg">
                      <p className="font-cinzel text-xs font-bold tracking-widest text-gold-300 uppercase">
                        MULPURU ASHOK RATHNA
                      </p>
                      <p className="text-[10px] tracking-wider text-champagne-300/80 uppercase font-sans">
                        The Groom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
