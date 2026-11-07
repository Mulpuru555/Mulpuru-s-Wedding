import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mulpuru Family — Engagement Ceremony | Ashok Rathna & Anusha",
  description:
    "With the blessings of the Almighty and our beloved elders, we cordially invite you and your family to grace the engagement ceremony of Mulpuru Ashok Rathna with Nalluri Anusha on Wednesday, 18 November 2026 at SVS Function Hall, Guntur.",
  metadataBase: new URL("https://mulpuru-s-wedding.onrender.com"),
  openGraph: {
    title: "Engagement Ceremony — Mulpuru Ashok Rathna & Nalluri Anusha",
    description:
      "Cordially inviting you to celebrate the engagement ceremony of Mulpuru Ashok Rathna with Nalluri Anusha on Wednesday, 18 November 2026 at SVS Function Hall, Guntur.",
    images: [
      {
        url: "/images/engagement-invitation.png",
        width: 1200,
        height: 1800,
        alt: "Mulpuru Family Engagement Ceremony Invitation",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engagement Ceremony — Mulpuru Ashok Rathna & Nalluri Anusha",
    description:
      "Mulpuru Family cordially invites you on Wednesday, 18 November 2026 at SVS Function Hall, Guntur.",
    images: ["/images/engagement-invitation.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#130207",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-burgundy-950 text-ivory antialiased selection:bg-burgundy-600 selection:text-gold-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}
