"use client";

import React, { useState } from "react";
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
  const [isOpened, setIsOpened] = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("skipIntro") === "true") {
        setIsOpened(true);
      }
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-burgundy-950 text-ivory overflow-x-hidden selection:bg-burgundy-700 selection:text-gold-200">
      {/* 1. Elegant Opening Experience Overlay */}
      <OpeningExperience
        isOpen={isOpened}
        onOpen={() => setIsOpened(true)}
      />

      {/* Main Invitation Website Content */}
      <div className={`transition-opacity duration-1000 ${isOpened ? "opacity-100" : "opacity-90"}`}>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Live Countdown Section */}
        <Countdown />

        {/* 4. Ring-Exchange Moment */}
        <RingExchange />

        {/* 5. Invitation Message */}
        <InvitationMessage />

        {/* 6. Event Details */}
        <EventDetails />

        {/* 7. Signature Animated Location Section */}
        <AnimatedLocation />

        {/* 8. Official Invitation Artwork Card & Lightbox */}
        <InvitationCard />

        {/* 9. Sharing Options */}
        <ShareInvitation />

        {/* 10. QR Code Section */}
        <QRCodeSection />

        {/* 11. Footer */}
        <Footer />

        {/* Ambient Raga / Tanpura Drone Audio Control */}
        <AmbientMusic />
      </div>
    </main>
  );
}
