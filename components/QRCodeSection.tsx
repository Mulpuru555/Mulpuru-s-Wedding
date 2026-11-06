"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { QrCode, Download, ExternalLink, Info, Check } from "lucide-react";

export default function QRCodeSection() {
  const [mounted, setMounted] = useState(false);
  const [isLocal, setIsLocal] = useState(true);
  const [liveUrl, setLiveUrl] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Production canonical deployment URL
  const PRODUCTION_CANONICAL_URL = "https://mulpuru-engagement.vercel.app";

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      const isLocalhost =
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname.endsWith(".local");

      setIsLocal(isLocalhost);
      // In production use window.location.href, otherwise show production target
      setLiveUrl(isLocalhost ? PRODUCTION_CANONICAL_URL : window.location.href);
    }
  }, []);

  const handleDownloadQR = () => {
    if (!qrRef.current) return;
    const svgElement = qrRef.current.querySelector("svg");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    canvas.width = 1000;
    canvas.height = 1000;

    img.onload = () => {
      if (ctx) {
        // Draw gold luxury background
        ctx.fillStyle = "#130207";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Draw margin
        ctx.drawImage(img, 100, 100, 800, 800);
        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "Mulpuru-Engagement-Website-QR.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl p-8 sm:p-10 md:p-12 bg-gradient-to-b from-burgundy-900/90 to-burgundy-950 border border-gold-400/30 shadow-card-luxury relative overflow-hidden"
      >
        <div className="w-12 h-12 rounded-full bg-burgundy-800 border border-gold-400/40 text-gold-300 mx-auto mb-4 flex items-center justify-center shadow-gold-glow">
          <QrCode className="w-6 h-6" />
        </div>

        <span className="font-cinzel text-xs tracking-[0.35em] text-gold-400 uppercase font-semibold block mb-2">
          Instant Mobile Access
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-3">
          Digital Invitation QR Code
        </h2>

        {/* Localhost notice vs Deployed notice */}
        {mounted && isLocal ? (
          <div className="max-w-md mx-auto mb-6 p-3.5 rounded-xl bg-burgundy-950/80 border border-gold-400/25 text-left text-xs text-champagne-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gold-200">Local Preview Mode: </span>
              As specified in requirements, QR codes are never generated for localhost addresses. Below is the preview generated for the production deployment URL ({PRODUCTION_CANONICAL_URL}). When deployed to Vercel, it automatically syncs with your live domain.
            </div>
          </div>
        ) : (
          <p className="font-sans text-xs sm:text-sm text-champagne-300 max-w-md mx-auto mb-6">
            Scan this QR code with any smartphone camera to open this digital invitation instantly.
          </p>
        )}

        {/* QR Code Container */}
        {mounted && (
          <div className="flex flex-col items-center">
            <div
              ref={qrRef}
              className="p-5 rounded-2xl bg-burgundy-950 border-2 border-gold-400/60 shadow-gold-glow-lg inline-block"
            >
              <QRCodeSVG
                value={liveUrl || PRODUCTION_CANONICAL_URL}
                size={180}
                bgColor="#130207"
                fgColor="#edd585"
                level="H"
                includeMargin={false}
              />
            </div>

            <p className="mt-4 font-mono text-[11px] sm:text-xs text-champagne-300/80 tracking-wider">
              {liveUrl || PRODUCTION_CANONICAL_URL}
            </p>

            {/* Download QR Code button */}
            <div className="mt-6">
              <button
                onClick={handleDownloadQR}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-burgundy-900 border border-gold-400/40 text-gold-200 hover:text-white hover:bg-burgundy-800 hover:border-gold-400 text-xs font-cinzel tracking-wider shadow-md transition-all"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>Download Print-Ready QR Code</span>
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
