"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ZoomIn } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: LightboxModalProps) {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
        >
          {/* Top Control Bar */}
          <div
            className="absolute top-4 right-4 z-50 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={imageSrc}
              download="Mulpuru-Ashok-Rathna-Engagement-Invitation.png"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-900/90 border border-gold-400/50 text-gold-200 hover:text-white hover:bg-burgundy-800 transition-colors text-xs font-cinzel font-medium shadow-lg"
              title="Download Invitation Image"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-burgundy-900/90 border border-gold-400/50 text-gold-200 hover:text-white hover:bg-burgundy-800 transition-colors flex items-center justify-center shadow-lg"
              aria-label="Close enlarged invitation view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Content Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold-400/40 shadow-2xl bg-burgundy-950 max-h-[85vh]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1199}
                height={1312}
                className="w-auto h-auto max-h-[85vh] max-w-full object-contain mx-auto"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
