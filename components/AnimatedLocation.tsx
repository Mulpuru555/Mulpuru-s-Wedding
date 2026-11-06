"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { MapPin, Navigation, ExternalLink, Sparkles } from "lucide-react";

export default function AnimatedLocation() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Geographic Grid & Radial Glow */}
      <div className="absolute inset-0 bg-radial-burgundy-light opacity-60 pointer-events-none" />

      {/* Subtle Map Line Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d4af37 1px, transparent 1px),
            linear-gradient(to bottom, #d4af37 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs tracking-[0.35em] text-gold-400 uppercase font-semibold block mb-2">
            The Destination
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
            Venue & Directions
          </h2>
          <p className="font-sans text-xs sm:text-sm text-champagne-300 mt-2 max-w-md mx-auto">
            Join us in person to celebrate this auspicious milestone.
          </p>
        </div>

        {/* Interactive Map Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-burgundy-900/90 border border-gold-400/30 shadow-card-luxury p-6 sm:p-10 md:p-12"
        >
          {/* Animated Decorative SVG Journey Route with Pin */}
          <div className="relative w-full h-44 sm:h-52 mb-8 rounded-2xl bg-burgundy-950/80 border border-gold-400/20 overflow-hidden flex items-center justify-center">
            {/* Topographic style background contour lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="topoGrid"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topoGrid)" />
            </svg>

            {/* Decorative Animated S-curve route line drawing into the pin */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.path
                d="M 50 160 C 220 180, 260 40, 450 60 C 600 80, 680 140, 710 90"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <motion.path
                d="M 50 160 C 220 180, 260 40, 450 60 C 600 80, 680 140, 710 90"
                stroke="url(#routeGold)"
                strokeWidth="3.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="routeGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#f7e7b4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Start point dot */}
              <circle cx="50" cy="160" r="5" fill="#d4af37" opacity="0.6" />
            </svg>

            {/* Glowing Golden Destination Pin */}
            <div className="absolute right-[8%] sm:right-[11%] top-[35%] -translate-y-1/2 flex flex-col items-center">
              {/* Pulsing Beacon Waves */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-12 h-12 rounded-full bg-gold-400/30 animate-ping" />
                <span className="absolute w-8 h-8 rounded-full bg-gold-400/40" />

                <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 flex items-center justify-center shadow-gold-glow text-burgundy-950">
                  <MapPin className="w-5 h-5 fill-burgundy-950 stroke-gold-100" />
                </div>
              </div>

              {/* Destination Tag */}
              <div className="mt-2 px-3 py-1 rounded-md bg-burgundy-950/90 border border-gold-400/50 text-[10px] sm:text-xs font-cinzel font-semibold tracking-wider text-gold-300 shadow-md">
                SVS Function Hall
              </div>
            </div>

            {/* Starting marker caption */}
            <div className="absolute left-[5%] bottom-[12%] text-[10px] font-sans tracking-widest text-champagne-300/70 uppercase">
              Route to Celebration
            </div>
          </div>

          {/* Venue Information Block */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="font-cinzel text-xs tracking-widest text-gold-400 uppercase font-medium">
                  Official Venue
                </span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-bold text-ivory">
                {EVENT_DATA.venue.name}
              </h3>

              <p className="font-sans text-sm sm:text-base text-champagne-200">
                {EVENT_DATA.venue.address}, {EVENT_DATA.venue.state}, India
              </p>

              <p className="text-xs text-champagne-300/70 font-sans">
                Convenient parking and central accessibility in Guntur.
              </p>
            </div>

            {/* Prominent GET DIRECTIONS Button */}
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href={EVENT_DATA.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-burgundy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 shadow-gold-glow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map Iframe for instant in-page viewing */}
          <div className="mt-8 pt-6 border-t border-gold-400/20">
            <div className="rounded-xl overflow-hidden border border-gold-400/25 aspect-[16/9] sm:aspect-[21/9] w-full bg-burgundy-950">
              <iframe
                title="SVS Function Hall Guntur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1914.7!2d80.4498833!3d16.314072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7554414998c1%3A0x3fef0d099534db2d!2sSVS%20Function%20hall%20%2F%20Sathuluri%20Venkataratnam%20Subbaravamma%20Garla%20Kalyanamandapam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[1.05] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-2 text-right">
              <a
                href={EVENT_DATA.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold-300/80 hover:text-gold-200 underline font-sans inline-flex items-center gap-1"
              >
                Open directly in Google Maps App <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
