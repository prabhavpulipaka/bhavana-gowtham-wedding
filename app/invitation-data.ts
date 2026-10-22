export type InvitationSide = "bride" | "groom";

export type WeddingEvent = {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  art: string;
  symbol: string;
  image: string;
  calendarStart: string;
  calendarEnd: string;
  mapUrl?: string;
  calendarLocation?: string;
  calendarNote?: string;
  details?: string;
};

export type InvitationConfig = {
  side: InvitationSide;
  slug: string;
  coupleNames: string;
  firstName: string;
  secondName: string;
  location: string;
  heroDateStart: string;
  heroDateEnd: string;
  weddingDate: string;
  weddingDateDisplay: string;
  copy: {
    top: string;
    invitation: string;
    subtitle: string;
    button: string;
    kicker: string;
    heading: string;
    description: string;
    footer: string;
    made: string;
  };
  events: WeddingEvent[];
  contacts: { name: string; phone: string }[];
};

const sharedCopy = {
  top: "THE WEDDING CELEBRATION",
  invitation: "TOGETHER WITH THEIR FAMILIES,",
  subtitle: "Joyfully invite you to celebrate their union.",
  button: "DISCOVER THE CELEBRATION",
  heading: "A celebration in chapters.",
  description:
    "Every gathering has a story. We would be delighted to share these beautiful moments with you.",
  footer: "With love,",
  made: "MADE WITH LOVE",
};

const brideEvents: WeddingEvent[] = [
  {
    id: "carnival",
    name: "Carnival",
    date: "12 November 2026",
    time: "11:00 AM onwards",
    venue: "Golden Serene Farm House, Hyderabad",
    art: "carnival",
    symbol: "✺\uFE0E",
    image: "/artwork/carnival.webp",
    calendarStart: "20261112T053000Z",
    calendarEnd: "20261112T113000Z",
    mapUrl:
      "https://www.google.com/maps/place/Golden+Serene+Farm+House/@17.7414375,78.6089375,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcc7f0a543f0443:0xb90f4a940e49cee5!8m2!3d17.7414375!4d78.6089375!16s%2Fg%2F11w1b_sgsr?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    calendarNote: "Lunch follows.",
    details:
      "Dark florals, Kalamkari, animal, or Bandhani prints; carnival-ready style for everyone. Lunch follows.",
  },
  {
    id: "sangeeth",
    name: "Sangeeth",
    date: "13 November 2026",
    time: "7:00 PM onwards",
    venue: "Advaya Convention, ORR Exit 6, Muneerabad",
    art: "sangeeth",
    symbol: "✳\uFE0E",
    image: "/artwork/sangeeth.webp",
    calendarStart: "20261113T133000Z",
    calendarEnd: "20261113T173000Z",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Advaya+Convention+Munirabad+ORR+Exit+6",
    calendarNote: "Dinner follows.",
    details:
      "For him: vibrant prints and party-ready style. For her: fancy lehengas, gowns, or statement sarees. Dinner follows.",
  },
  {
    id: "mehandi",
    name: "Mehandi",
    date: "14 November 2026",
    time: "3:00 PM onwards",
    venue: "Groom's and bride's residences",
    art: "mehandi",
    symbol: "❋\uFE0E",
    image: "/artwork/mehandi.webp",
    calendarStart: "20261114T093000Z",
    calendarEnd: "20261114T123000Z",
    mapUrl:
      "https://www.google.com/maps/place/The+Ananda/@17.4313625,78.648669,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9f54c270f3eb:0x31b49b00ab1703ff!8m2!3d17.4313625!4d78.6512439!16s%2Fg%2F11smgl8_5w?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    details: "Indo-Western attire.",

  },
  {
    id: "pelli",
    name: "Pelli",
    date: "15 November 2026",
    time: "Muhurtham: 9:15 PM · Dinner: 7:30 PM",
    venue: "Jenvi Convention, ORR Exit 6, Thumukunta",
    art: "pelli",
    symbol: "✺\uFE0E",
    image: "/artwork/pelli.webp",
    calendarStart: "20261115T140000Z",
    calendarEnd: "20261115T180000Z",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jenvi+Conventions+Thumukunta+Hyderabad",
    details: "Indian traditional attire.",
  },
];

const groomEvents: WeddingEvent[] = [
  {
    id: "pellikoduku",
    name: "Pellikoduku",
    date: "11 November 2026",
    time: "6:03 AM · 7:00 AM · 10:00 AM",
    venue: "726 Defence Colony, Sainikpuri",
    art: "pellikoduku",
    symbol: "❋\uFE0E",
    image: "/artwork/pellikoduku.webp",
    calendarStart: "20261111T003300Z",
    calendarEnd: "20261111T060000Z",
    mapUrl: "https://www.google.com/maps/place/TIARA+LABELS/@17.4895784,78.5340729,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9be256e63333:0x23e7eb4607c6b03a!8m2!3d17.4895784!4d78.5366478!16s%2Fg%2F11vzc__bb2?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
    calendarNote: "Ceremonies at 6:03 AM, 7:00 AM, and 10:00 AM. Lunch follows.",
    details:
      "Mangalasnanam, Pandiri Rata, and Pellikoduku ceremonies. Lunch follows. Indian traditional outfits featuring Ikkat, Banarasi, Bandhini, or Patola patterns.",
  },
  {
    id: "carnival",
    name: "Carnival",
    date: "12 November 2026",
    time: "11:00 AM onwards",
    venue: "Golden Serene Farm House, Hyderabad",
    art: "carnival",
    symbol: "✺\uFE0E",
    image: "/artwork/carnival.webp",
    calendarStart: "20261112T053000Z",
    calendarEnd: "20261112T113000Z",
    mapUrl:
      "https://www.google.com/maps/place/Golden+Serene+Farm+House/@17.7414375,78.6089375,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcc7f0a543f0443:0xb90f4a940e49cee5!8m2!3d17.7414375!4d78.6089375!16s%2Fg%2F11w1b_sgsr?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    calendarNote: "Lunch follows.",
    details:
      "Dark florals, Kalamkari, animal, or Bandhani prints; carnival-ready style for everyone. Lunch follows.",
  },
  {
    id: "sangeeth",
    name: "Sangeeth",
    date: "13 November 2026",
    time: "7:00 PM onwards",
    venue: "Advaya Convention, ORR Exit 6, Muneerabad, Hyderabad",
    art: "sangeeth",
    symbol: "✳\uFE0E",
    image: "/artwork/sangeeth.webp",
    calendarStart: "20261113T133000Z",
    calendarEnd: "20261113T173000Z",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Advaya+Convention+Munirabad+ORR+Exit+6",
    calendarNote: "Dinner follows.",
    details:
      "For him: vibrant prints and party-ready style. For her: fancy lehengas, gowns, or statement sarees. Dinner follows.",
  },
  {
    id: "mehandi",
    name: "Mehandi",
    date: "14 November 2026",
    time: "3:00 PM onwards",
    venue:
      "Groom's residence: 726 Defence Colony, Sainikpuri",
    art: "mehandi",
    symbol: "❋\uFE0E",
    image: "/artwork/mehandi.webp",
    calendarStart: "20261114T093000Z",
    calendarEnd: "20261114T123000Z",
    calendarLocation: "Mehandi location details to be confirmed",
    mapUrl:
      "https://www.google.com/maps/place/TIARA+LABELS/@17.4895784,78.5340729,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9be256e63333:0x23e7eb4607c6b03a!8m2!3d17.4895784!4d78.5366478!16s%2Fg%2F11vzc__bb2?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
    details: "Indo-Western attire.",
  },
  {
    id: "pelli",
    name: "Pelli",
    date: "15 November 2026",
    time: "Dinner: 8:00 PM · Muhurtham: 9:15 PM",
    venue: "Jenvi Convention, ORR Exit 6, Thumukunta, Hyderabad",
    art: "pelli",
    symbol: "✺\uFE0E",
    image: "/artwork/pelli.webp",
    calendarStart: "20261115T140000Z",
    calendarEnd: "20261115T180000Z",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jenvi+Conventions+Thumukunta+Hyderabad",
    calendarNote: "Dinner at 8:00 PM; muhurtham at 9:15 PM.",
    details: "Indian traditional attire.",
  },
  {
    id: "satyanarayana-vratam",
    name: "Satyanarayana Vratam",
    date: "16 November 2026",
    time: "9:00 AM onwards",
    venue: "726 Defence Colony, Sainikpuri",
    art: "vratam",
    symbol: "✧\uFE0E",
    image: "/artwork/vratham.webp",
    calendarStart: "20261116T033000Z",
    calendarEnd: "20261116T073000Z",
    mapUrl: "https://www.google.com/maps/place/TIARA+LABELS/@17.4895784,78.5340729,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9be256e63333:0x23e7eb4607c6b03a!8m2!3d17.4895784!4d78.5366478!16s%2Fg%2F11vzc__bb2?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
    calendarNote: "Lunch follows.",
    details: "A family prayer ceremony. Lunch follows.",
  },
  {
    id: "wedding-reception",
    name: "Wedding Reception",
    date: "22 November 2026",
    time: "7:30 PM onwards",
    venue: "Family residence, Rajahmundry",
    art: "reception",
    symbol: "✺\uFE0E",
    image: "/artwork/rep.webp",
    calendarStart: "20261122T140000Z",
    calendarEnd: "20261122T180000Z",
    calendarNote: "Dinner follows.",
  },
];

export const invitations: Record<InvitationSide, InvitationConfig> = {
  bride: {
    side: "bride",
    slug: "bride-side",
    coupleNames: "Bhavana & Gowtham",
    firstName: "Bhavana",
    secondName: "Gowtham",
    location: "HYDERABAD · 2026",
    heroDateStart: "12",
    heroDateEnd: "15",
    weddingDate: "2026-11-15T21:15:00+05:30",
    weddingDateDisplay: "15 · 11 · 2026",
    copy: { ...sharedCopy, kicker: "FOUR EVENTS · A LIFETIME OF MEMORIES" },
    events: brideEvents,
    contacts: [
      { name: "Keertana Pochiraju", phone: "+91 93926 41578" },
      { name: "Raghunath Pochiraju", phone: "+91 72072 93153" },
    ],
  },
  groom: {
    side: "groom",
    slug: "groom-side",
    coupleNames: "Gowtham & Bhavana",
    firstName: "Gowtham",
    secondName: "Bhavana",
    location: "HYDERABAD · 2026",
    heroDateStart: "11",
    heroDateEnd: "22",
    weddingDate: "2026-11-15T21:15:00+05:30",
    weddingDateDisplay: "15 · 11 · 2026",
    copy: {
      ...sharedCopy,
      kicker: "SEVEN EVENTS · A LIFETIME OF MEMORIES",
    },
    events: groomEvents,
    contacts: [
      { name: "Bala Rao", phone: "+91 98667 95252" },
      { name: "Charvi", phone: "+91 89779 04088" },
    ],
  },
};

export const activeInvitation =
  invitations[
    process.env.NEXT_PUBLIC_INVITATION_SIDE === "groom" ? "groom" : "bride"
  ];