"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { CornerFlourish, GoldDivider } from "./DecorativeMandala";

export default function InvitationMessage() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-burgundy-900/90 via-burgundy-900/70 to-burgundy-950/90 border border-gold-400/30 shadow-card-luxury text-center overflow-hidden"
        >
          {/* Subtle Corner Flourishes */}
          <CornerFlourish className="absolute top-2 left-2 opacity-70" />
          <CornerFlourish className="absolute top-2 right-2 rotate-90 opacity-70" />
          <CornerFlourish className="absolute bottom-2 left-2 -rotate-90 opacity-70" />
          <CornerFlourish className="absolute bottom-2 right-2 rotate-180 opacity-70" />

          {/* Header Title */}
          <span className="font-cinzel text-xs tracking-[0.35em] text-gold-400 uppercase font-semibold block mb-2">
            Warm Invitation
          </span>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-2">
            In Celebration of Love & Union
          </h2>

          <GoldDivider />

          {/* Exact Copy Paragraphs */}
          <div className="space-y-6 pt-2 max-w-2xl mx-auto">
            <p className="font-cormorant text-xl sm:text-2xl md:text-2xl text-champagne-100 leading-relaxed font-normal">
              {EVENT_DATA.invitationMessage.paragraph1}
            </p>

            <p className="font-cormorant text-xl sm:text-2xl md:text-2xl text-champagne-100 leading-relaxed font-normal italic">
              {EVENT_DATA.invitationMessage.paragraph2}
            </p>
          </div>

          <div className="pt-8">
            <span className="font-cinzel text-xs md:text-sm tracking-[0.3em] text-gold-300 uppercase font-medium">
              — {EVENT_DATA.family} —
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
