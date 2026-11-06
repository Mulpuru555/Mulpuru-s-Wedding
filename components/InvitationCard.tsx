"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { CornerFlourish, GoldDivider } from "./DecorativeMandala";
import LightboxModal from "./LightboxModal";
import { ZoomIn, Download, Sparkles } from "lucide-react";

export default function InvitationCard() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <span className="font-cinzel text-xs tracking-[0.35em] text-gold-400 uppercase font-semibold block mb-2">
            Traditional Keepsake
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
            The Official Invitation Card
          </h2>
          <p className="font-sans text-xs sm:text-sm text-champagne-300 mt-2">
            Tap the card to view in full resolution or download a personal copy.
          </p>
          <GoldDivider />
        </div>

        {/* Card Display Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-lg mx-auto"
        >
          {/* Outer glowing border */}
          <div className="absolute -inset-2 bg-gradient-to-b from-gold-400/30 via-burgundy-700/20 to-gold-500/30 rounded-3xl blur-md opacity-60 hover:opacity-100 transition-opacity" />

          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800 shadow-2xl">
            <div
              onClick={() => setLightboxOpen(true)}
              className="group relative rounded-2xl overflow-hidden bg-burgundy-950 border border-gold-400/50 cursor-pointer shadow-inner"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setLightboxOpen(true);
                }
              }}
              aria-label="Enlarge invitation artwork"
            >
              {/* Preserved Aspect Ratio Image */}
              <div className="relative w-full aspect-[1199/1312]">
                <Image
                  src={EVENT_DATA.assets.invitationCard}
                  alt="Mulpuru Family Official Engagement Invitation Artwork"
                  fill
                  sizes="(max-width: 640px) 95vw, 600px"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-burgundy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <span className="px-4 py-2 rounded-full bg-burgundy-900/90 border border-gold-400 text-gold-200 text-xs font-cinzel tracking-wider flex items-center gap-2 shadow-lg">
                  <ZoomIn className="w-4 h-4" /> Tap to Enlarge
                </span>
              </div>

              {/* Corner Accents */}
              <CornerFlourish className="absolute top-1 left-1 w-8 h-8 opacity-70" />
              <CornerFlourish className="absolute top-1 right-1 w-8 h-8 rotate-90 opacity-70" />
              <CornerFlourish className="absolute bottom-1 left-1 w-8 h-8 -rotate-90 opacity-70" />
              <CornerFlourish className="absolute bottom-1 right-1 w-8 h-8 rotate-180 opacity-70" />
            </div>
          </div>

          {/* Action buttons below the card */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy-900/90 border border-gold-400/40 text-gold-200 hover:text-white hover:bg-burgundy-800 hover:border-gold-400 text-xs font-cinzel tracking-wider transition-all shadow-md group"
            >
              <ZoomIn className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>View Full Size</span>
            </button>

            <a
              href={EVENT_DATA.assets.invitationCard}
              download="Mulpuru-Ashok-Rathna-Engagement-Invitation.png"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-burgundy-950 font-cinzel text-xs font-bold tracking-wider hover:brightness-110 transition-all shadow-gold-glow group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Invitation Artwork</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={EVENT_DATA.assets.invitationCard}
        imageAlt="Mulpuru Family Engagement Invitation"
      />
    </section>
  );
}
