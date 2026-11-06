export interface EventConfig {
  family: string;
  familyDisplay: string;
  groom: {
    name: string;
    fullName: string;
    role: string;
  };
  bride: {
    name: string;
    fullName: string;
    role: string;
  };
  eventTitle: string;
  date: {
    display: string;
    dayOfWeek: string;
    day: number;
    month: string;
    year: number;
    isoDate: string; // Target in Asia/Kolkata
  };
  time: {
    display: string;
    timeZone: string;
    timeZoneLabel: string;
  };
  venue: {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    fullDisplay: string;
    mapUrl: string;
  };
  invitationMessage: {
    paragraph1: string;
    paragraph2: string;
  };
  shareText: {
    whatsappTemplate: string;
  };
  assets: {
    groomPortrait: string;
    invitationCard: string;
    ringExchangeReference: string;
  };
}

export const EVENT_DATA: EventConfig = {
  family: "MULPURU FAMILY",
  familyDisplay: "The Mulpuru Family",
  groom: {
    name: "Mulpuru Ashok Rathna",
    fullName: "MULPURU ASHOK RATHNA",
    role: "Beloved First Son of the Mulpuru Family",
  },
  bride: {
    name: "Nalluri Anusha",
    fullName: "NALLURI ANUSHA",
    role: "Beloved Daughter of the Nalluri Family",
  },
  eventTitle: "Engagement Ceremony",
  date: {
    display: "Wednesday, 18 November 2026",
    dayOfWeek: "Wednesday",
    day: 18,
    month: "November",
    year: 2026,
    // 18 November 2026 at 18:00:00 Asia/Kolkata (UTC+5:30) => 2026-11-18T12:30:00.000Z
    isoDate: "2026-11-18T18:00:00+05:30",
  },
  time: {
    display: "6:00 PM onwards",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Indian Standard Time (IST)",
  },
  venue: {
    name: "SVS Function Hall",
    address: "SVS Function Hall, Guntur",
    city: "Guntur",
    state: "Andhra Pradesh",
    country: "India",
    fullDisplay: "SVS Function Hall, Guntur, Andhra Pradesh",
    mapUrl: "https://maps.app.goo.gl/U82VqzMEfGEK3Zvx8",
  },
  invitationMessage: {
    paragraph1:
      "With the blessings of the Almighty and our beloved elders, we cordially invite you and your family to grace the engagement ceremony of our beloved first son, Mulpuru Ashok Rathna, with Nalluri Anusha.",
    paragraph2:
      "As two families come together to celebrate love, happiness and the promise of a wonderful journey ahead.",
  },
  shareText: {
    whatsappTemplate:
      "You are cordially invited to the engagement ceremony of Mulpuru Ashok Rathna & Nalluri Anusha.\n\nDate: 18 November 2026\nTime: 6:00 PM onwards\nVenue: SVS Function Hall, Guntur.\n\nWe look forward to celebrating this beautiful occasion with you!\n\nMulpuru Family",
  },
  assets: {
    groomPortrait: "/images/groom-portrait.png",
    invitationCard: "/images/engagement-invitation.png",
    ringExchangeReference: "/images/ring-exchange-reference.png",
  },
};
