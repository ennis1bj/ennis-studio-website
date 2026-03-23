// ============================================================
// MARKETPLACE INTEGRATION NOTE
// All notionUrl fields currently point to the live Notion .site
// preview pages. Once Stripe checkout is connected on Notion
// Marketplace, Gumroad, and/or Lemon Squeezy, replace each
// notionUrl with the direct checkout URL for that platform.
// No other file in the project needs to change.
// ============================================================

export interface Template {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  idealFor: string;
  complexity: string;
  badges: string[];
  featured: boolean;
  notionUrl: string;
  databases: string[];
  views: string[];
  useCases: string[];
  implementationTime: string;
}

export const templatesConfig: Template[] = [
  {
    slug: "insureflow",
    name: "InsureFlow",
    tagline: "The complete Notion OS for independent insurance professionals.",
    description:
      "InsureFlow is a fully relational Notion workspace built for insurance agents and brokers. Manage your client pipeline, policy renewals, follow-up tasks, and compliance notes in one structured system — no spreadsheets, no scattered docs.",
    price: "$39",
    idealFor: "Independent insurance agents & brokers",
    complexity: "Intermediate",
    badges: ["Industry-specific", "Client management", "Renewal tracking"],
    featured: true,
    notionUrl:
      "https://shimmering-quark-7cd.notion.site/InsureFlow-Home-322f22489895813e85f0c3f6a372efff",
    databases: [
      "Clients (policy status, renewal dates, contact info)",
      "Policies (linked to Clients)",
      "Tasks & follow-ups (linked to Clients and Policies)",
      "Renewals pipeline (filtered by urgency)",
      "Compliance & notes log",
    ],
    views: [
      "Active clients board",
      "Renewals due this month — filtered table",
      "Follow-up task queue",
      "Client 360 (linked views per client record)",
      "Compliance log timeline",
    ],
    useCases: [
      "Track every client's policy status and renewal date in one place",
      "Never miss a renewal with a filtered urgency pipeline",
      "Log compliance notes and call summaries directly on client records",
      "Manage follow-up tasks linked to specific policies",
      "Onboard new clients with a templated intake workflow",
    ],
    implementationTime: "1–2 hours to set up fully",
  },
  {
    slug: "vetos",
    name: "VetOS",
    tagline: "A Notion operating system purpose-built for veterinary practices.",
    description:
      "VetOS gives independent vet practices and small clinics a structured Notion workspace to manage patients, appointments, staff tasks, inventory, and client communications — all connected through a relational database architecture.",
    price: "$35",
    idealFor: "Independent vet practices & clinic operators",
    complexity: "Intermediate",
    badges: ["Industry-specific", "Patient management", "Team-ready"],
    featured: true,
    notionUrl:
      "https://shimmering-quark-7cd.notion.site/VetOS-Home-322f22489895819abb0bf0932a961d05",
    databases: [
      "Patients (species, owner, visit history)",
      "Appointments (linked to Patients and Staff)",
      "Staff tasks & shift notes",
      "Inventory & supplies tracker",
      "Client communications log",
    ],
    views: [
      "Today's appointments calendar",
      "Patient records table with owner contact",
      "Open staff tasks board",
      "Low inventory alerts (filtered view)",
      "Client follow-up queue",
    ],
    useCases: [
      "Keep every patient's history, owner info, and upcoming visits in one record",
      "Manage daily appointment schedules across staff",
      "Track inventory levels and flag items running low",
      "Log post-visit notes and client communication in context",
      "Assign and track staff tasks linked to specific patients or appointments",
    ],
    implementationTime: "2–3 hours to set up for a full practice",
  },
  {
    slug: "therapist-os",
    name: "Therapist OS",
    tagline:
      "A private, structured Notion workspace for solo therapists and counselors.",
    description:
      "Therapist OS is an opinionated Notion system for solo practitioners managing caseloads, session notes, treatment goals, and scheduling — built with privacy-first naming conventions and a clean, low-distraction workspace.",
    price: "$29",
    idealFor: "Solo therapists, counselors & mental health practitioners",
    complexity: "Intermediate",
    badges: ["Industry-specific", "Solo-friendly", "Privacy-first"],
    featured: true,
    notionUrl:
      "https://shimmering-quark-7cd.notion.site/Therapist-OS-Home-322f2248989581eb83e5df0084dfde60",
    databases: [
      "Caseload (coded or anonymous client IDs, status, start date)",
      "Session notes (linked to caseload, date-stamped)",
      "Treatment goals & progress tracking",
      "Appointments & scheduling",
      "Resources & referrals library",
    ],
    views: [
      "Active caseload table",
      "Upcoming sessions calendar",
      "Session notes timeline per client",
      "Goals & progress tracker board",
      "Referrals and resources gallery",
    ],
    useCases: [
      "Maintain structured, date-stamped session notes linked to each client record",
      "Track treatment goals and log progress over time",
      "Manage your weekly schedule without a separate calendar tool",
      "Build a personal referral and resources library",
      "Keep your full caseload visible at a glance with status filters",
    ],
    implementationTime: "1–2 hours to personalize and go live",
  },
];
