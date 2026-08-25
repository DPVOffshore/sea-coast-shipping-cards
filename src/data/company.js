// ============================================================
//  COMPANY INFO  —  edit these once; every card uses them.
// ============================================================

export const company = {
  name: "Sea Coast Shipping LLC",
  shortName: "Sea Coast Shipping",
  tagline: "Sea Coast Shipping LLC · Dubai, U.A.E.",

  // No public website on the printed card yet.
  // Add it here (e.g. "https://www.seacoastshipping.com") and a
  // "Website" row appears on every card automatically.
  website: "",

  logoLockup: "/logo-lockup.png", // icon + wordmark, full colour (light backgrounds)
  logoLockupWhite: "/logo-lockup-white.png", // icon + wordmark, white (navy hero)
  logoFull: "/logo-full.png", // stacked logo, full colour

  // How the "Email" button behaves:
  //   "mailto"  -> opens the visitor's default mail app (Outlook if it's their default). Recommended.
  //   "outlook" -> always opens Outlook on the web compose window.
  emailMode: "mailto",

  // Office address shown on every card + saved into the contact.
  address: {
    label: "Head Office",
    street: "Maritime Business 2, DMC Tower, 3rd Floor, Room No. 308",
    city: "Dubai",
    region: "",
    postal: "",
    country: "United Arab Emirates",
    // Tapping "Show on map" opens this link. Replace with a
    // Google Maps share link for the exact office if you have one.
    mapUrl:
      "https://maps.google.com/?q=DMC+Tower,+Dubai+Maritime+City,+Dubai,+UAE",
  },

  // Shown as chips at the bottom of every card.
  services: [
    "Chartering",
    "Bunkering",
    "SNP",
    "Technical management",
    "Crew management",
    "Drydocking",
    "Commercial management",
    "Procurement management",
    "Ship recycling",
    "Marine consultation",
  ],

  // Optional. Add locations here and a "Where we operate" row appears
  // under the services, e.g. ["Dubai", "Fujairah", "Singapore"].
  countries: [],
};
