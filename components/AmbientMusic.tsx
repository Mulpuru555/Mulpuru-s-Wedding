"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function AmbientMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sa - Pa (D4, A4, D5) traditional Tanpura harmonics
  const NOTES = [293.66, 440.0, 587.33, 739.99]; // D4, A4, D5, F#5

  const startDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base drone chords (Tanpura simulation)
      NOTES.slice(0, 2).forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq / 2, ctx.currentTime);

        // Slow tremolo / vibrato
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.2 + idx * 0.1;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.03;
        lfo.connect(lfoGain.gain);

        oscGain.gain.value = 0.08;
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        lfo.start();
        oscillatorsRef.current.push(osc);
      });

      // Gentle intermittent chime notes
      intervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "suspended") return;
        const chimeFreq = NOTES[Math.floor(Math.random() * NOTES.length)];
        const chimeOsc = audioCtxRef.current.createOscillator();
        const chimeGain = audioCtxRef.current.createGain();

        chimeOsc.type = "triangle";
        chimeOsc.frequency.setValueAtTime(chimeFreq, audioCtxRef.current.currentTime);

        chimeGain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 3.5);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(masterGain);

        chimeOsc.start();
        chimeOsc.stop(audioCtxRef.current.currentTime + 3.6);
      }, 3500);

      setIsPlaying(true);
    } catch {
      // AudioContext policy
    }
  };

  const stopDrone = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(
        0.00001,
        audioCtxRef.current.currentTime + 0.5
      );
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        oscillatorsRef.current = [];
        setIsPlaying(false);
      }, 500);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMusic}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md border text-xs font-cinzel tracking-wider shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
          isPlaying
            ? "bg-gold-500/90 text-burgundy-950 border-gold-300 font-semibold shadow-gold-glow"
            : "bg-burgundy-900/90 text-gold-300 border-gold-400/40 hover:border-gold-300"
        }`}
        aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 animate-pulse" />
            <span className="hidden sm:inline">Music: On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-champagne-300/80" />
            <span className="hidden sm:inline text-champagne-200">Ambient Music</span>
          </>
        )}
      </button>
    </div>
  );
}
