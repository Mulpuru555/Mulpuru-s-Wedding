"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { Calendar, Clock, Bell, Sparkles } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  isToday: boolean;
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
    isToday: false,
  });

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date(EVENT_DATA.date.isoDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        // Event is in progress or completed
        const hoursPassed = Math.abs(difference) / (1000 * 60 * 60);
        const isToday = hoursPassed < 24;

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: !isToday,
          isToday: isToday,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPast: false,
        isToday: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Engagement Ceremony: Mulpuru Ashok Rathna & Nalluri Anusha");
    const details = encodeURIComponent(
      `Mulpuru Family cordially invites you to the Engagement Ceremony of Mulpuru Ashok Rathna with Nalluri Anusha.\n\nVenue: SVS Function Hall, Guntur, Andhra Pradesh\nMaps: ${EVENT_DATA.venue.mapUrl}`
    );
    const location = encodeURIComponent("SVS Function Hall, Guntur, Andhra Pradesh, India");
    // Start: 20261118T123000Z (6:00 PM IST), End: 20261118T173000Z (11:00 PM IST)
    const dates = "20261118T123000Z/20261118T173000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Download .ics for Apple / Outlook
  const downloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mulpuru Family//Engagement Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:mulpuru-engagement-20261118@mulpuru.family",
      "DTSTAMP:20261106T120000Z",
      "DTSTART:20261118T123000Z",
      "DTEND:20261118T173000Z",
      "SUMMARY:Engagement Ceremony: Mulpuru Ashok Rathna & Nalluri Anusha",
      `DESCRIPTION:Mulpuru Family cordially invites you to the Engagement Ceremony of Mulpuru Ashok Rathna with Nalluri Anusha.\\n\\nVenue: SVS Function Hall, Guntur.\\nMaps: ${EVENT_DATA.venue.mapUrl}`,
      "LOCATION:SVS Function Hall, Guntur, Andhra Pradesh, India",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Mulpuru-Ashok-Rathna-Engagement.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 mb-10"
      >
        <span className="font-cinzel text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold">
          Count Every Blessed Moment
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
          Counting Down to the Auspicious Day
        </h2>
        <p className="text-sm md:text-base text-champagne-300 max-w-xl mx-auto font-sans">
          Wednesday, 18 November 2026 • 6:00 PM IST • Guntur
        </p>
      </motion.div>

      {/* Countdown Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINUTES", value: timeLeft.minutes },
          { label: "SECONDS", value: timeLeft.seconds },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-b from-burgundy-900/90 to-burgundy-950/95 border border-gold-400/30 shadow-card-luxury flex flex-col items-center justify-center overflow-hidden group hover:border-gold-400/60 transition-all duration-300"
          >
            {/* Top gold shine accent */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

            <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-300 tracking-wider">
              {mounted ? String(item.value).padStart(2, "0") : "00"}
            </span>

            <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-champagne-300/80 font-medium uppercase mt-2">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Special event state banner if today or past */}
      {mounted && (timeLeft.isToday || timeLeft.isPast) && (
        <div className="mb-8 p-4 rounded-xl bg-burgundy-900/90 border border-gold-400 text-gold-200 font-cinzel text-base md:text-lg tracking-widest flex items-center justify-center gap-2 shadow-gold-glow">
          <Sparkles className="w-5 h-5 text-gold-300 animate-spin-slow" />
          <span>TODAY WE CELEBRATE LOVE AND TOGETHERNESS.</span>
        </div>
      )}

      {/* Calendar reminder actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 text-xs font-cinzel tracking-wider"
      >
        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-burgundy-900 border border-gold-400/40 text-gold-200 hover:text-white hover:bg-burgundy-800 hover:border-gold-400 transition-all shadow-md group"
        >
          <Calendar className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
          <span>Add to Google Calendar</span>
        </a>

        <button
          onClick={downloadIcs}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-burgundy-900 border border-gold-400/40 text-gold-200 hover:text-white hover:bg-burgundy-800 hover:border-gold-400 transition-all shadow-md group"
        >
          <Bell className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
          <span>Download Apple / Outlook Reminder (.ics)</span>
        </button>
      </motion.div>
    </section>
  );
}
