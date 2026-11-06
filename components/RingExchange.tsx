"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { GoldDivider, CentralMandala } from "./DecorativeMandala";

export default function RingExchange() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Subtle decorative mandala behind rings */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <CentralMandala size={340} />
          </div>

          {/* Intertwined Gold Rings Luxury Vector Illustration */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <defs>
                <linearGradient id="ringGold1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff2be" />
                  <stop offset="40%" stopColor="#d4af37" />
                  <stop offset="70%" stopColor="#9a7b1b" />
                  <stop offset="100%" stopColor="#f5e08b" />
                </linearGradient>

                <linearGradient id="ringGold2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fcedb6" />
                  <stop offset="35%" stopColor="#e3bf4a" />
                  <stop offset="75%" stopColor="#8d6f14" />
                  <stop offset="100%" stopColor="#ffd875" />
                </linearGradient>

                <filter id="diamondGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Groom's Classic Band (Left) */}
              <circle
                cx="80"
                cy="110"
                r="42"
                fill="none"
                stroke="url(#ringGold1)"
                strokeWidth="7"
                className="opacity-95"
              />
              <circle
                cx="80"
                cy="110"
                r="44"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeDasharray="1 8"
              />

              {/* Bride's Solitaire Engagement Ring (Right) */}
              <circle
                cx="120"
                cy="95"
                r="42"
                fill="none"
                stroke="url(#ringGold2)"
                strokeWidth="6"
                className="opacity-95"
              />

              {/* Diamond Solitaire Setting on Bride's Ring */}
              <g transform="translate(120, 52)">
                {/* Prong Setting */}
                <path
                  d="M-5 12 L0 5 L5 12 Z"
                  fill="url(#ringGold2)"
                />
                {/* Brilliant Cut Diamond */}
                <polygon
                  points="0,-8 9,0 0,8 -9,0"
                  fill="#ffffff"
                  filter="url(#diamondGlow)"
                />
                <polygon
                  points="0,-8 9,0 5,3 -5,3 -9,0"
                  fill="#e0f2fe"
                  opacity="0.8"
                />
                <polygon
                  points="0,8 9,0 5,3 -5,3 -9,0"
                  fill="#bae6fd"
                  opacity="0.9"
                />
                {/* Diamond Sparkle Stars */}
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                <path
                  d="M0 -15 L1.5 -5 L7 -4 L2 0 L4 6 L0 2 L-4 6 L-2 0 L-7 -4 L-1.5 -5 Z"
                  fill="#fff"
                  opacity="0.7"
                />
              </g>

              {/* Interlocking highlight */}
              <path
                d="M102 78 A 42 42 0 0 1 114 118"
                fill="none"
                stroke="url(#ringGold2)"
                strokeWidth="6.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Romantic Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="font-cinzel text-xs md:text-sm tracking-[0.35em] text-gold-400 uppercase font-medium">
            Sacred Promises & Eternal Union
          </p>

          <blockquote className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-champagne-100 max-w-2xl mx-auto leading-relaxed">
            “Two hearts, two families, one beautiful beginning.”
          </blockquote>

          <GoldDivider />

          {/* Both names displayed exactly */}
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
