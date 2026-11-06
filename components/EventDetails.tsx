"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

export default function EventDetails() {
  const details = [
    {
      icon: Calendar,
      title: "Date",
      primary: EVENT_DATA.date.display,
      secondary: "Auspicious Muhurtham & Celebration",
      tag: "Save The Date",
    },
    {
      icon: Clock,
      title: "Time",
      primary: EVENT_DATA.time.display,
      secondary: "Indian Standard Time (Asia/Kolkata)",
      tag: "Evening Ceremony",
    },
    {
      icon: MapPin,
      title: "Venue",
      primary: EVENT_DATA.venue.name,
      secondary: `${EVENT_DATA.venue.city}, ${EVENT_DATA.venue.state}`,
      tag: "Grand Celebration Hall",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-cinzel text-xs tracking-[0.35em] text-gold-400 uppercase font-semibold block mb-2">
          Ceremony Essentials
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
          Event Details & Schedule
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {details.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-burgundy-900/90 to-burgundy-950 border border-gold-400/25 shadow-card-luxury flex flex-col items-center text-center group hover:border-gold-400/60 transition-all duration-300"
            >
              {/* Badge */}
              <div className="mb-6 px-3 py-1 rounded-full bg-burgundy-800/80 border border-gold-400/30 text-[10px] font-cinzel tracking-widest text-gold-300 uppercase">
                {item.tag}
              </div>

              {/* Icon Container with gold ring */}
              <div className="w-16 h-16 rounded-full bg-burgundy-800/70 border border-gold-400/40 flex items-center justify-center text-gold-300 mb-6 shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
                <Icon className="w-7 h-7" />
              </div>

              <span className="font-cinzel text-xs tracking-[0.25em] text-champagne-300/80 uppercase font-medium mb-1">
                {item.title}
              </span>

              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-ivory mb-2">
                {item.primary}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-champagne-200/80">
                {item.secondary}
              </p>

              {/* Decorative bottom spark */}
              <div className="mt-6 pt-4 border-t border-gold-400/10 w-full flex justify-center">
                <Sparkles className="w-3.5 h-3.5 text-gold-400/50" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
