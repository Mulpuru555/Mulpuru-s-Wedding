"use client";

import React, { useState, useEffect } from "react";
import PostEngagementHoldingPage from "@/components/PostEngagementHoldingPage";
import OpeningExperience from "@/components/OpeningExperience";
import HeroSection from "@/components/HeroSection";
import Countdown from "@/components/Countdown";
import RingExchange from "@/components/RingExchange";
import InvitationMessage from "@/components/InvitationMessage";
import EventDetails from "@/components/EventDetails";
import AnimatedLocation from "@/components/AnimatedLocation";
import InvitationCard from "@/components/InvitationCard";
import ShareInvitation from "@/components/ShareInvitation";
import QRCodeSection from "@/components/QRCodeSection";
import Footer from "@/components/Footer";
import AmbientMusic from "@/components/AmbientMusic";

export default function Home() {
  const [viewMode, setViewMode] = useState<"holding" | "full">("holding");
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("fullInvitation") === "true") {
        setViewMode("full");
      }
      if (params.get("skipIntro") === "true") {
        setIsOpened(true);
      }
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-burgundy-950 text-ivory overflow-x-hidden selection:bg-burgundy-700 selection:text-gold-200">
      {viewMode === "holding" ? (
        /* Post-Engagement Thank You & Marriage Update Holding View */
        <PostEngagementHoldingPage />
      ) : (
        /* Full Engagement Archive View */
        <>
          <OpeningExperience
            isOpen={isOpened}
            onOpen={() => setIsOpened(true)}
          />
          <div className={`transition-opacity duration-1000 ${isOpened ? "opacity-100" : "opacity-90"}`}>
            <HeroSection />
            <Countdown />
            <RingExchange />
            <InvitationMessage />
            <EventDetails />
            <AnimatedLocation />
            <InvitationCard />
            <ShareInvitation />
            <QRCodeSection />
            <Footer />
          </div>
        </>
      )}

      {/* Ambient Indian Classical Music Player */}
      <AmbientMusic />
    </main>
  );
}
