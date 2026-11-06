# Mulpuru Family — Digital Engagement Ceremony Invitation Website

A luxury, cinematic, mobile-first digital engagement invitation website designed and engineered for the **Mulpuru Family**, celebrating the engagement of **Mulpuru Ashok Rathna** with **Nalluri Anusha**.

---

## 💍 Event Details (Source of Truth)

- **Family**: MULPURU FAMILY
- **Groom**: MULPURU ASHOK RATHNA
- **Bride**: NALLURI ANUSHA
- **Event**: Engagement Ceremony
- **Date**: Wednesday, 18 November 2026
- **Time**: 6:00 PM onwards (`Asia/Kolkata` / IST)
- **Venue**: SVS Function Hall, Guntur, Andhra Pradesh, India
- **Google Maps**: [https://maps.app.goo.gl/1xRrgjNEFRNTgzZG9](https://maps.app.goo.gl/1xRrgjNEFRNTgzZG9)
- **Language**: English only

---

## ✨ Features & Architecture

1. **Opening Experience (`components/OpeningExperience.tsx`)**:
   - Deep royal burgundy canvas with floating golden particles.
   - Refined M Monogram / Family crest reveal.
   - Smooth entrance with interactive celebration sparkle and skip option.
   - Respects `prefers-reduced-motion`.

2. **Hero Section (`components/HeroSection.tsx`)**:
   - Editorial luxury composition featuring `groom-portrait.png` in an ornate antique-gold filigree frame.
   - Exact ceremony typography and hierarchy.
   - Quick event badges for Date, Time, and Venue.

3. **Live Countdown (`components/Countdown.tsx`)**:
   - Real-time countdown to Wednesday, 18 November 2026 at 6:00 PM IST (`Asia/Kolkata`).
   - Gracefully handles today/in-progress and post-event states.
   - One-click **Google Calendar** integration and **Apple / Outlook .ics reminder** download.

4. **Ring-Exchange Moment (`components/RingExchange.tsx`)**:
   - Custom luxury vector illustration with interlocking golden bands and brilliant solitaire diamond.
   - Quote: *"Two hearts, two families, one beautiful beginning."*
   - Display of both names with respectful aesthetics.

5. **Official Invitation Message (`components/InvitationMessage.tsx`)**:
   - Exact family blessings copy formatted in elegant royal parchment card style.

6. **Ceremony Essentials (`components/EventDetails.tsx`)**:
   - Distinct highlight cards for Date, Time, and Venue with golden badges and icons.

7. **Signature Location & Route Section (`components/AnimatedLocation.tsx`)**:
   - Burgundy map canvas with topographic contours and animated route trace.
   - Golden pulsing location beacon pin.
   - Prominent **GET DIRECTIONS** button opening the exact Google Maps URL.
   - Embedded Google Map for interactive browsing.

8. **Official Artwork Card & Accessible Lightbox (`components/InvitationCard.tsx`, `components/LightboxModal.tsx`)**:
   - High-fidelity presentation of `engagement-invitation.png` with preserved aspect ratio.
   - Tap-to-enlarge full-screen lightbox with escape key / overlay dismiss.
   - One-click original high-res artwork download.

9. **Functional Sharing (`components/ShareInvitation.tsx`)**:
   - Direct **WhatsApp** share with exact custom invitation message and live URL.
   - Native **Web Share API** on mobile devices.
   - **Copy Invitation Link** with clipboard toast confirmation.

10. **Digital QR Code (`components/QRCodeSection.tsx`)**:
    - QR Code component targeting the production deployed domain.
    - Local preview notice explaining automatic live URL binding.
    - One-click **Download Print-Ready QR Code** (PNG format) for physical envelopes or printing.

11. **Footer (`components/Footer.tsx`)**:
    - Family seal, official closing blessing, and smooth back-to-top navigation.

12. **Ambient Music (`components/AmbientMusic.tsx`)**:
    - Gentle Indian classical Tanpura drone and meditative bell harmonics synthesized via the Web Audio API (zero external network audio dependencies, instant playback, muted by default).

---

## 📂 Asset Locations

All supplied authentic assets are stored under `public/images/`:
- `public/images/groom-portrait.png` — Approved groom portrait (ivory/champagne sherwani).
- `public/images/engagement-invitation.png` — Approved final burgundy-and-gold invitation artwork.
- `public/images/ring-exchange-reference.png` — Visual reference artwork.

---

## 🛠️ Local Setup & Development

### Prerequisites
- Node.js 18+ (tested on Node.js v24.18.0)
- npm or pnpm

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the invitation.

### Production Build & Local Test
```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## 🚀 Deployment to Vercel

This project is built on Next.js App Router and is 100% Vercel-ready with zero configuration required.

### Option A: Deploy via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Mulpuru Family Engagement invitation website"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/<your-username>/mulpuru-engagement.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [Vercel](https://vercel.com/new).
4. Select the repository and click **Deploy**. Vercel will auto-detect Next.js and build it instantly.

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy directly from workspace
vercel
```

---

## 📋 Technology Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **QR Code**: [qrcode.react](https://github.com/zpao/qrcode.react)
- **Celebration Effects**: [canvas-confetti](https://github.com/catdad/canvas-confetti)
