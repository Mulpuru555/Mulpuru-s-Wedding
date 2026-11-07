"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function AmbientMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fallback Web Audio context
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isWebAudioRunning = useRef(false);

  useEffect(() => {
    // Create HTML5 audio element
    const audio = new Audio("/audio/wedding-ambient.wav");
    audio.loop = true;
    audio.volume = 0.75;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = "";
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Web Audio Fallback synthesizer if file fails to play
  const startWebAudioFallback = async () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = audioCtxRef.current || new AudioCtx();
      audioCtxRef.current = ctx;

      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.35, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base Tanpura Drone (Sa, Pa, Sa)
      [130.81, 196.0, 261.63].forEach((freq) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        oscGain.gain.value = 0.25;
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
      });

      isWebAudioRunning.current = true;
      setIsPlaying(true);
    } catch {
      // Audio context restricted
    }
  };

  const stopWebAudioFallback = () => {
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
      isWebAudioRunning.current = false;
      setIsPlaying(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (isPlaying) {
      if (audio && !audio.paused) {
        audio.pause();
      }
      if (isWebAudioRunning.current) {
        stopWebAudioFallback();
      }
      setIsPlaying(false);
    } else {
      if (audio) {
        try {
          // Play the Indian classical audio track
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
            return;
          }
        } catch {
          // HTML5 audio blocked or failed, fall back to Web Audio synth
          await startWebAudioFallback();
        }
      } else {
        await startWebAudioFallback();
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMusic}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md border text-xs font-cinzel tracking-wider shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
          isPlaying
            ? "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-burgundy-950 border-gold-300 font-bold shadow-gold-glow-lg animate-pulse-subtle"
            : "bg-burgundy-900/95 text-gold-300 border-gold-400/40 hover:border-gold-300 hover:bg-burgundy-850"
        }`}
        aria-label={isPlaying ? "Pause ambient music" : "Play ambient Indian wedding music"}
        title={isPlaying ? "Mute music" : "Play authentic Indian wedding music"}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-burgundy-950 animate-bounce" />
            <span className="inline font-semibold">Music: Playing 🎵</span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-gold-400" />
            <VolumeX className="w-3.5 h-3.5 text-champagne-300/70 -ml-1" />
            <span className="inline text-champagne-200">Play Music</span>
          </>
        )}
      </button>
    </div>
  );
}
