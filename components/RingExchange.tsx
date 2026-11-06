"use client";

import React from "react";
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
        {/* Subtle decorative mandala behind rings */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
            <CentralMandala size={420} />
          </div>

          {/* Luxury Illustrated Ring Exchange Moment Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-xl mx-auto rounded-3xl p-4 sm:p-6 bg-gradient-to-b from-burgundy-900/90 via-burgundy-900/80 to-burgundy-950 border-2 border-gold-400/40 shadow-card-luxury overflow-hidden"
          >
            {/* Corner flourishes */}
            <CornerFlourish className="absolute top-1 left-1 w-8 h-8 opacity-60" />
            <CornerFlourish className="absolute top-1 right-1 w-8 h-8 rotate-90 opacity-60" />
            <CornerFlourish className="absolute bottom-1 left-1 w-8 h-8 -rotate-90 opacity-60" />
            <CornerFlourish className="absolute bottom-1 right-1 w-8 h-8 rotate-180 opacity-60" />

            {/* Custom Luxury Vector Illustration: Traditional Mehndi Hand & Groom's Embroidered Sleeve with Ring */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
              <svg
                viewBox="0 0 600 360"
                className="w-full h-full drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                fill="none"
              >
                <defs>
                  {/* Gold Gradients */}
                  <linearGradient id="goldSleeve" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff9e6" />
                    <stop offset="40%" stopColor="#eed383" />
                    <stop offset="80%" stopColor="#c59b27" />
                    <stop offset="100%" stopColor="#f7e7b4" />
                  </linearGradient>

                  <linearGradient id="goldBangle" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fff0b3" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#8d6d13" />
                  </linearGradient>

                  <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5d6ba" />
                    <stop offset="100%" stopColor="#dca680" />
                  </linearGradient>

                  <linearGradient id="diamondSparkle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>

                  <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Mughal Arch Window Frame in Gold */}
                <path
                  d="M 50 340 L 50 160 C 50 70, 160 30, 300 20 C 440 30, 550 70, 550 160 L 550 340"
                  stroke="url(#goldSleeve)"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  opacity="0.45"
                />
                <path
                  d="M 70 340 L 70 170 C 70 95, 170 50, 300 40 C 430 50, 530 95, 530 170 L 530 340"
                  stroke="url(#goldSleeve)"
                  strokeWidth="1.2"
                  opacity="0.3"
                />

                {/* GROOM'S HAND & IVORY/GOLD EMBROIDERED SLEEVE (Left) */}
                <motion.g
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  {/* Groom's Ivory & Champagne-Gold Embroidered Sherwani Cuff */}
                  <path
                    d="M 20 130 C 70 140, 120 150, 160 170 L 140 250 C 90 230, 50 220, 10 210 Z"
                    fill="#faf6ee"
                    stroke="url(#goldSleeve)"
                    strokeWidth="3"
                  />
                  {/* Intricate Sherwani Zari Embroidery Pattern */}
                  <path
                    d="M 50 145 C 80 155, 110 165, 140 180 M 60 175 C 90 185, 120 195, 145 210"
                    stroke="url(#goldSleeve)"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                  />
                  <circle cx="85" cy="165" r="4" fill="url(#goldSleeve)" />
                  <circle cx="115" cy="180" r="4" fill="url(#goldSleeve)" />

                  {/* Groom's Hand & Fingers holding the ring */}
                  <path
                    d="M 155 175 C 190 185, 230 190, 275 185 C 295 183, 305 195, 290 205 C 260 220, 215 220, 145 240 Z"
                    fill="url(#skinTone)"
                    stroke="#c48a66"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M 270 186 C 285 188, 298 193, 292 201 C 275 208, 250 208, 235 204"
                    fill="none"
                    stroke="#c48a66"
                    strokeWidth="1.2"
                  />
                </motion.g>

                {/* BRIDE'S HAND WITH TRADITIONAL MEHNDI & GOLD BANGLES (Right) */}
                <motion.g
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  {/* Bride's Hand with Henna/Mehndi Art */}
                  <path
                    d="M 580 270 C 510 250, 460 230, 390 205 C 345 190, 310 188, 305 198 C 300 208, 325 220, 375 240 C 425 260, 480 280, 560 310 Z"
                    fill="url(#skinTone)"
                    stroke="#b45309"
                    strokeWidth="1.2"
                  />

                  {/* Bride's Fingers extended gracefully */}
                  <path
                    d="M 390 205 C 360 195, 325 192, 312 195 C 306 197, 308 204, 318 206 C 345 212, 375 220, 395 225"
                    fill="url(#skinTone)"
                    stroke="#b45309"
                    strokeWidth="1.2"
                  />

                  {/* Traditional Henna / Mehndi Patterns on Bride's Hand */}
                  <g stroke="#78350f" strokeWidth="1.1" fill="none" opacity="0.85">
                    {/* Mandala / Paisley Henna motif */}
                    <circle cx="430" cy="235" r="12" strokeDasharray="2 2" />
                    <circle cx="430" cy="235" r="6" />
                    <circle cx="430" cy="235" r="2" fill="#78350f" />
                    {/* Finger lace vines */}
                    <path d="M 330 200 Q 345 203 360 208 Q 375 212 390 216" strokeDasharray="1 3" />
                    <path d="M 350 204 Q 355 198 360 206" />
                    <path d="M 370 210 Q 375 204 380 212" />
                    {/* Palm leaf curves */}
                    <path d="M 450 240 Q 470 248 490 252" strokeDasharray="2 3" />
                    <path d="M 440 250 Q 460 258 480 262" strokeDasharray="2 3" />
                  </g>

                  {/* Traditional Gold Bangles (Kangan & Chooda) */}
                  <g>
                    <rect x="500" y="222" width="12" height="65" rx="3" fill="url(#goldBangle)" stroke="#fff0b3" strokeWidth="0.8" transform="rotate(18 500 222)" />
                    <rect x="518" y="228" width="8" height="68" rx="2" fill="#861841" stroke="url(#goldBangle)" strokeWidth="1" transform="rotate(18 518 228)" />
                    <rect x="532" y="234" width="14" height="70" rx="3" fill="url(#goldBangle)" stroke="#fff0b3" strokeWidth="0.8" transform="rotate(18 532 234)" />
                    <rect x="552" y="240" width="8" height="72" rx="2" fill="#861841" stroke="url(#goldBangle)" strokeWidth="1" transform="rotate(18 552 240)" />
                    <rect x="566" y="246" width="12" height="74" rx="3" fill="url(#goldBangle)" stroke="#fff0b3" strokeWidth="0.8" transform="rotate(18 566 246)" />
                  </g>
                </motion.g>

                {/* ANIMATED SOLITAIRE ENGAGEMENT RING moving gracefully onto the finger */}
                <motion.g
                  initial={{ x: -15, y: -10, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                >
                  {/* Glowing Gold Ring Band */}
                  <ellipse
                    cx="308"
                    cy="197"
                    rx="12"
                    ry="8"
                    fill="none"
                    stroke="url(#goldSleeve)"
                    strokeWidth="4"
                    filter="url(#goldGlow)"
                  />
                  <ellipse
                    cx="308"
                    cy="197"
                    rx="12"
                    ry="8"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeOpacity="0.7"
                  />

                  {/* Radiant Brilliant Cut Diamond Solitaire */}
                  <g transform="translate(308, 189)">
                    <circle cx="0" cy="0" r="10" fill="#bae6fd" opacity="0.3" filter="url(#goldGlow)" />
                    <polygon
                      points="0,-7 6,-1 0,5 -6,-1"
                      fill="url(#diamondSparkle)"
                      stroke="#ffffff"
                      strokeWidth="0.8"
                    />
                    {/* Sparkle Star rays */}
                    <path
                      d="M 0 -14 L 1.5 -4 L 8 -2 L 2 1 L 3 8 L 0 3 L -3 8 L -2 1 L -8 -2 L -1.5 -4 Z"
                      fill="#ffffff"
                      opacity="0.9"
                    />
                    <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                  </g>
                </motion.g>

                {/* Floating Gold Sparkle Stars */}
                <g fill="url(#goldSleeve)" opacity="0.85">
                  <path d="M 280 150 L 282 156 L 288 158 L 282 160 L 280 166 L 278 160 L 272 158 L 278 156 Z" />
                  <path d="M 335 155 L 336 160 L 341 161 L 336 163 L 335 168 L 334 163 L 329 161 L 334 160 Z" />
                  <path d="M 310 230 L 311 234 L 315 235 L 311 237 L 310 241 L 309 237 L 305 235 L 309 234 Z" />
                  <circle cx="295" cy="165" r="1.8" />
                  <circle cx="325" cy="225" r="1.8" />
                </g>
              </svg>
            </div>

            <div className="mt-2 text-center">
              <span className="font-cinzel text-[10px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
                Sacred Exchange of Rings
              </span>
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
