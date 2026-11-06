"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EVENT_DATA } from "@/lib/event-data";
import { Share2, Copy, Check, MessageCircle, ExternalLink } from "lucide-react";

export default function ShareInvitation() {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [canWebShare, setCanWebShare] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.origin + window.location.pathname;
      setCurrentUrl(url);

      if ("share" in navigator && typeof navigator.share === "function") {
        setCanWebShare(true);
      }
    }
  }, []);

  const getCleanShareUrl = () => {
    // If running on localhost or empty, provide a clean production fallback or current URL
    if (typeof window !== "undefined") {
      const isLocal =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";
      if (!isLocal && window.location.origin) {
        return window.location.origin;
      }
    }
    return "https://mulpuru-engagement.vercel.app";
  };

  const getFullShareMessage = () => {
    const url = getCleanShareUrl();
    return `${EVENT_DATA.shareText.whatsappTemplate}\n\nWebsite: ${url}`;
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getFullShareMessage());
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleNativeShare = async () => {
    if ("share" in navigator && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: "Engagement Ceremony — Mulpuru Ashok Rathna & Nalluri Anusha",
          text: EVENT_DATA.shareText.whatsappTemplate,
          url: getCleanShareUrl(),
        });
      } catch {
        // User dismissed share dialog
      }
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = getCleanShareUrl();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl p-8 sm:p-10 md:p-12 bg-gradient-to-b from-burgundy-900/80 to-burgundy-950 border border-gold-400/25 shadow-card-luxury relative overflow-hidden"
      >
        <span className="font-cinzel text-xs tracking-[0.35em] text-gold-400 uppercase font-semibold block mb-2">
          Spread the Joy
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-3">
          Share With Family & Friends
        </h2>
        <p className="font-sans text-xs sm:text-sm text-champagne-300 max-w-lg mx-auto mb-8">
          Help us invite your loved ones by forwarding the digital invitation directly via WhatsApp or copying the link.
        </p>

        {/* Share Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* WhatsApp Share Button */}
          <button
            onClick={handleWhatsAppShare}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] font-sans font-semibold text-xs sm:text-sm tracking-wider shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Native Web Share API if supported on mobile devices */}
          {canWebShare && (
            <button
              onClick={handleNativeShare}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-burgundy-800 border border-gold-400/50 text-gold-200 hover:text-white hover:bg-burgundy-700 font-cinzel text-xs sm:text-sm tracking-wider shadow-md transition-all transform hover:scale-105 active:scale-95"
            >
              <Share2 className="w-4 h-4 text-gold-300" />
              <span>Share Invitation</span>
            </button>
          )}

          {/* Copy Link Button with Toast */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-burgundy-900 border border-gold-400/40 text-champagne-200 hover:text-white hover:border-gold-400 font-cinzel text-xs sm:text-sm tracking-wider shadow-md transition-all transform hover:scale-105 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Link Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold-400" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button>
        </div>

        {/* Toast confirmation notification */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 inline-block px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-sans"
          >
            ✓ Link ready to paste anywhere
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
