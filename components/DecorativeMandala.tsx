"use client";

import React from "react";

export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-16 h-16 md:w-24 md:h-24 text-gold-400 pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        d="M5 95 C 5 45, 45 5, 95 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 95 C 12 52, 52 12, 95 12"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />
      <path
        d="M20 95 C 20 60, 60 20, 95 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Corner leaf motifs */}
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <circle cx="25" cy="8" r="2" fill="currentColor" />
      <circle cx="8" cy="25" r="2" fill="currentColor" />
      <path
        d="M8 8 Q 30 15, 45 8 Q 15 30, 8 45 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <circle cx="95" cy="5" r="2" fill="currentColor" />
      <circle cx="5" cy="95" r="2" fill="currentColor" />
    </svg>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-gold-400 to-gold-500" />
      <div className="flex items-center gap-1.5 text-gold-400">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60" />
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 fill-gold-400 animate-pulse-subtle"
        >
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60" />
      </div>
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-gold-400 to-gold-500" />
    </div>
  );
}

export function CentralMandala({
  className = "",
  size = 280,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`text-gold-400/25 pointer-events-none select-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      {/* Concentric rings */}
      <circle cx="100" cy="100" r="92" strokeWidth="0.6" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="84" strokeWidth="1" />
      <circle cx="100" cy="100" r="76" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="58" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="42" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="24" strokeWidth="1.2" />

      {/* Petals 12-fold symmetry */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path
              d="M100 16 C 108 34, 116 52, 100 68 C 84 52, 92 34, 100 16 Z"
              fill="currentColor"
              fillOpacity="0.08"
              strokeWidth="0.8"
            />
            <circle cx="100" cy="16" r="2.2" fill="currentColor" fillOpacity="0.8" />
            <path
              d="M100 42 C 105 52, 105 60, 100 68 C 95 60, 95 52, 100 42 Z"
              fill="currentColor"
              fillOpacity="0.12"
            />
          </g>
        );
      })}

      {/* Inner 8-fold star petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        return (
          <g key={`inner-${i}`} transform={`rotate(${angle} 100 100)`}>
            <path
              d="M100 58 Q 107 72 100 84 Q 93 72 100 58"
              strokeWidth="0.7"
              fill="currentColor"
              fillOpacity="0.1"
            />
          </g>
        );
      })}

      {/* Center jewel */}
      <circle cx="100" cy="100" r="6" fill="currentColor" fillOpacity="0.4" />
      <circle cx="100" cy="100" r="2" fill="currentColor" />
    </svg>
  );
}

export function FamilyMonogramCrest({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer luminous ring */}
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-gold-400/40 p-1 flex items-center justify-center shadow-gold-glow relative bg-burgundy-900/60 backdrop-blur-sm">
        {/* Decorative rotating dotted ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-gold-300/30 animate-spin-slow pointer-events-none" />

        {/* Inner solid border */}
        <div className="w-full h-full rounded-full border border-gold-400/70 flex flex-col items-center justify-center bg-gradient-to-b from-burgundy-800 to-burgundy-950">
          {/* Small crown/crest accent */}
          <svg
            viewBox="0 0 24 16"
            className="w-5 h-3 text-gold-300 mb-0.5 fill-current opacity-80"
          >
            <path d="M12 0L15 6L21 2L19 14H5L3 2L9 6L12 0Z" />
          </svg>
          <span className="font-cinzel text-2xl md:text-3xl font-bold bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent tracking-widest pl-1">
            M
          </span>
          <span className="text-[9px] font-sans tracking-[0.25em] text-gold-300/80 uppercase -mt-0.5">
            EST. 2026
          </span>
        </div>
      </div>
    </div>
  );
}
