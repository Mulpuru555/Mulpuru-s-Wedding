# ANTIGRAVITY MASTER PROMPT — MULPURU FAMILY ENGAGEMENT WEBSITE

Act as a senior creative director, luxury wedding web designer, motion designer and production frontend engineer.

Build a complete, polished, responsive digital engagement invitation website for the Mulpuru family. This is a real event website, not a generic template or static mockup. Use the supplied assets in `public/images/` and preserve all event details exactly.

## Event details — source of truth
- Family: MULPURU FAMILY
- Groom: MULPURU ASHOK RATHNA
- Bride: NALLURI ANUSHA
- Event: Engagement Ceremony
- Date: Wednesday, 18 November 2026
- Time: 6:00 PM onwards
- Time zone: Asia/Kolkata
- Venue: SVS Function Hall, Guntur, Andhra Pradesh, India
- Google Maps destination: https://maps.app.goo.gl/1xRrgjNEFRNTgzZG9
- Language: English only

Do not change spellings, date, time, venue, or map URL. Do not invent parents' names, RSVP phone numbers, bride photographs, or other personal details.

## Supplied assets
- `public/images/groom-portrait.png` — approved edited portrait of Ashok in an ivory and champagne-gold embroidered sherwani with burgundy stole.
- `public/images/engagement-invitation.png` — approved final burgundy-and-antique-gold invitation artwork. It includes the corrected name ASHOK RATHNA and time 6:00 PM.
- `public/images/ring-exchange-reference.png` — crop from the invitation artwork for visual reference. It is a reference only; do not stretch it or treat it as a standalone photograph.

Use the actual supplied groom portrait and invitation image. Do not substitute stock groom images. Do not fabricate a realistic bride portrait. Use tasteful ring-exchange artwork/illustration only if needed.

## Creative direction
Create a cinematic luxury Indian engagement experience:
- Deep wine / royal burgundy backgrounds.
- Antique gold and champagne-gold accents.
- Ivory typography.
- Delicate Indian floral / filigree / mandala ornaments used sparingly.
- Elegant serif headings (Playfair Display or Cormorant Garamond) and clean sans-serif body text (Inter or Poppins).
- Premium editorial composition, generous spacing, excellent visual hierarchy.
- Sophisticated motion, not excessive effects.
- The supplied invitation artwork is the visual identity reference. The website must feel like its digital companion.

Avoid generic SaaS layouts, excessive cards, neon colors, clutter, cartoon graphics, random stock photos, and fake map routes.

## Required sections and behavior

### 1. Opening experience
Create a short, elegant opening animation:
- Dark burgundy canvas with subtle gold particles.
- A refined M monogram / family crest reveal.
- “MULPURU FAMILY”
- “A Celebration of Love, Family & New Beginnings”
- “OPEN INVITATION” button.
Allow users to skip the intro. Do not trap visitors in the animation. Respect `prefers-reduced-motion`.

### 2. Hero
Create a striking first screen with:
- “MULPURU FAMILY”
- “CORDIALLY INVITES YOU”
- “ENGAGEMENT CEREMONY”
- “MULPURU ASHOK RATHNA”
- “with”
- “NALLURI ANUSHA”
- “Wednesday, 18 November 2026”
- “6:00 PM onwards”
Use `groom-portrait.png` with a refined frame, tasteful crop, subtle reveal and excellent mobile presentation. Preserve the man's identity and do not alter the supplied photo.

### 3. Live countdown
Build a real countdown to 18 November 2026 at 6:00 PM in `Asia/Kolkata`.
Show days, hours, minutes and seconds. Calculate from the real current time; do not hardcode a countdown value. Handle event day and post-event states gracefully. Avoid timezone bugs; use a reliable timezone-aware implementation.

### 4. Ring-exchange moment
Create a romantic visual section with a tasteful illustrated ring exchange, gold ring motif, floral details and subtle motion. Do not create or imply an actual photograph of the bride. Copy:
“Two hearts, two families, one beautiful beginning.”
Then show both names exactly.

### 5. Invitation message
Use this exact copy:
“With the blessings of the Almighty and our beloved elders, we cordially invite you and your family to grace the engagement ceremony of our beloved first son, Mulpuru Ashok Rathna, with Nalluri Anusha.

As two families come together to celebrate love, happiness and the promise of a wonderful journey ahead.”

### 6. Event details
Present clearly:
- Wednesday, 18 November 2026
- 6:00 PM onwards
- SVS Function Hall, Guntur, Andhra Pradesh
Use elegant calendar, clock and location icons.

### 7. Signature animated location section
Make this a standout feature:
- Burgundy map-inspired background with subtle geographic grid.
- Animated gold location pin.
- A decorative route line that draws in on scroll.
- The venue name and address.
- Prominent “GET DIRECTIONS” button.
IMPORTANT: The animated route is decorative, not a verified road route. Do not show fake turn-by-turn directions or invented travel times. Use the exact supplied Google Maps short link as the button destination. Open it in a new tab / Maps app as appropriate. The map link must work on mobile and desktop. If embedding a map, only use the supplied destination and do not invent coordinates.

### 8. Invitation artwork
Show `engagement-invitation.png` in a dedicated section:
- Preserve its aspect ratio.
- No stretching or distortion.
- Click/tap to enlarge in an accessible lightbox.
- Provide a download button.
- Use a clear close control and keyboard accessibility.

### 9. Sharing
Implement functional:
- WhatsApp sharing with event details and the deployed page URL.
- Native Web Share API where supported.
- Copy-link button with clipboard fallback and user feedback.

WhatsApp message:
“You are cordially invited to the engagement ceremony of Mulpuru Ashok Rathna & Nalluri Anusha.

Date: 18 November 2026
Time: 6:00 PM onwards
Venue: SVS Function Hall, Guntur.

We look forward to celebrating this beautiful occasion with you!

Mulpuru Family”

Append the actual deployed website URL at runtime. Do not hardcode localhost into share messages.

### 10. QR code
Generate a QR code for the current public website URL only after deployment. If the site is running locally or no public URL is configured, explain that the QR will be ready after deployment; never generate a QR code for localhost. Provide a download option once configured.

### 11. Footer
Close with:
“WITH LOVE AND WARM REGARDS”
“THE MULPURU FAMILY”
“Your presence and blessings will make this occasion truly memorable.”

## Technical requirements
Preferred stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- A maintained React QR-code library if needed

Use stable compatible versions. Create reusable components, centralized event configuration, semantic HTML, accessible controls, optimized images and clean code. Keep event data in one config file.

Suggested components:
- OpeningExperience
- HeroSection
- Countdown
- RingExchange
- InvitationMessage
- EventDetails
- AnimatedLocation
- InvitationCard
- ShareInvitation
- QRCodeSection
- Footer

## Responsive and quality requirements
- Mobile-first; test narrow Android/iPhone widths, tablets and desktop.
- No horizontal overflow.
- No clipped text or distorted photos.
- Touch-friendly controls.
- Good contrast and readable text.
- Respect reduced motion.
- Avoid layout shifts.
- No broken links, missing assets, console errors or fake interactions.
- Do not add RSVP unless a real contact/collection workflow is supplied.
- No backend is required for the basic invitation.

## Vercel readiness
Prepare for Vercel deployment:
- Correct package scripts and Next.js configuration.
- README with local setup, asset locations and deployment instructions.
- Build and type-check successfully.
- Test map navigation, countdown, image lightbox, download, sharing and responsive layout.
- Do not claim deployment is complete until it has actually been deployed.

## Work process
1. Inspect the existing workspace before creating or overwriting files.
2. If it is an existing project, upgrade it in place; do not create an unrelated demo.
3. Verify all supplied assets exist and use them.
4. Implement the full website, not just a mockup.
5. Run lint/type checks and production build; fix all errors.
6. Provide a concise report listing files changed, tests run, build result, local preview command and exact Vercel deployment steps.
7. Clearly identify any remaining manual action.

Deliver a premium, memorable digital invitation that feels commissioned by a luxury Indian wedding design studio.
