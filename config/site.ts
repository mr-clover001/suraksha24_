/**
 * Suraksha24 — single source of truth for editable site content.
 *
 * Update contact details, stats, services, testimonials and FAQ copy here.
 * Nothing in /app or /components should hardcode this information —
 * import from this file instead so the whole site stays in sync.
 *
 * Anything marked PLACEHOLDER must be replaced with a verified, real
 * value before launch (see README "Before you launch").
 */

export const siteConfig = {
  name: "Suraksha24",
  tagline: "Protection that never sleeps.",
  description:
    "Home healthcare for elderly parents in Kolkata — nurses, physiotherapists, caregivers and 24×7 emergency response, coordinated by one dedicated care manager for families, wherever they live.",
  url: "https://www.suraksha24.co.in",
  ogImage: "/og-image.jpg",
  locale: "en_IN",
};

export const contact = {
  phoneDisplay: "+91 98747 07070",
  phoneHref: "tel:+919874707070",
  whatsappNumber: "919874707070",
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  email: "care@suraksha24.co.in",
  address: "Saltlake, Sector 1, Block CF 271, Kolkata – 700064",
  availability: "Available 24×7",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Way We Care", href: "/services" },
  { label: "Blog", href: "/blog" },
  // { label: "Careers", href: "/career" },
  // { label: "Partners", href: "/partner" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const navFooter = [
  { label: "Home", href: "/" },
  { label: "Way We Care", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/career" },
  { label: "Partners", href: "/partner" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
/**
 * PLACEHOLDER social profile links — swap for the client's real handles
 * before launch. Rendered in the header utility bar and site footer via
 * components/layout/SocialLinks.tsx.
 */
export const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/suraksha24",
    icon: "facebook" as const,
    placeholder: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/suraksha24",
    icon: "instagram" as const,
    placeholder: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/suraksha24",
    icon: "linkedin" as const,
    placeholder: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@suraksha24",
    icon: "youtube" as const,
    placeholder: true,
  },
];

/** Countries the "Best time to call" + country-code copy is written for. */
export const servedRegions = [
  "the United States",
  "the United Kingdom",
  "Canada",
  "Singapore",
  "Australia",
  "the Gulf",
];

/**
 * PLACEHOLDER stats — neutral, easy-to-replace numbers for the trust strip.
 * Swap in verified figures before launch.
 */
export const trustStats = [
  { value: "10,000+", label: "Visits logged", placeholder: true },
  { value: "Verified", label: "& trained staff", placeholder: false },
  { value: "24×7", label: "Emergency line", placeholder: false },
  { value: "100%", label: "Report after every visit", placeholder: false },
  { value: "4.8★", label: "on Google", placeholder: true },
];

export const howItWorks = [
  {
    step: "01",
    title: "One call to set up",
    body: "A free home assessment; we understand your parents' health, home and routine.",
  },
  {
    step: "02",
    title: "Your dedicated care manager",
    body: "One trained professional who owns everything: nurses, doctors, medicines, emergencies.",
  },
  {
    step: "03",
    title: "Updates after every visit",
    body: "Vitals, mood, what was done, what's next — sent straight to your phone.",
  },
  {
    step: "04",
    title: "Emergencies handled end-to-end",
    body: "Ambulance, admission, paperwork, hospital coordination. We stay until family arrives.",
  },
];

export type Service = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  /** Short "is this right for me?" bullets shown on the service detail page. */
  idealFor: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "skilled-nursing-care",
    title: "Skilled Nursing Care",
    summary:
      "Expert medication management, wound care, and regular vitals monitoring, delivered with genuine compassion.",
    description:
      "Our nurses don't treat your parents like patients — they treat them like family. They take time to understand daily routines, preferences and little habits, so medication management, wound care and vitals monitoring are delivered with clinical care and genuine compassion, side by side.",
    includes: [
      "Medication administration & management",
      "Wound care & dressing changes",
      "Vitals monitoring (BP, sugar, oxygen, temperature)",
      "Injections & IV administration under clinical protocol",
      "Coordination with the family physician",
    ],
    idealFor: [
      "A parent managing diabetes, hypertension or another condition that needs regular monitoring",
      "Recovering after surgery and needing wound care or injections at home",
      "Families who want a clinical eye on daily medication routines",
    ],
  },
  {
    number: "02",
    slug: "companion-care",
    title: "Companion Care & Emotional Wellness",
    summary:
      "Real relationships built through patient listening and consistent presence; sometimes the greatest need is human connection.",
    description:
      "Sometimes the greatest need isn't medical — it's human connection. Our companions build real relationships through patient listening, meaningful conversation and consistent presence: shared meals, walks, hobbies, and the kind of familiarity that brings warmth and dignity to everyday life.",
    includes: [
      "Consistent, familiar caregiver (not a rotating roster)",
      "Conversation, meals & daily routine support",
      "Accompanied walks and light outdoor time",
      "Encouragement to stay engaged with hobbies & family calls",
      "A gentle, watchful presence throughout the day",
    ],
    idealFor: [
      "A parent living alone who would benefit from regular company",
      "Someone who has grown quieter or more withdrawn recently",
      "Families who want a familiar, consistent caregiver rather than a rotating roster",
    ],
  },
  {
    number: "03",
    slug: "physiotherapy",
    title: "Physiotherapy & Mobility Rehabilitation",
    summary:
      "Personalized, gentle programs at home, respecting each person's pace and goals.",
    description:
      "We help your parents regain strength, balance and confidence — one small victory at a time. Our physiotherapists build personalised, gentle programs delivered right at home, respecting each person's pace and goals, and celebrating every milestone along the way.",
    includes: [
      "In-home assessment & personalised care plan",
      "Post-surgical & post-fall rehabilitation",
      "Mobility, balance & fall-prevention exercises",
      "Chronic pain & stiffness management",
      "Progress tracked and shared after every session",
    ],
    idealFor: [
      "Regaining mobility after a fall, fracture or surgery",
      "Managing stiffness or pain from arthritis or a chronic condition",
      "Building strength and balance to reduce the risk of future falls",
    ],
  },
  {
    number: "04",
    slug: "emergency-response",
    title: "24×7 Emergency Response — Handled Start to Finish",
    summary:
      "Fully-equipped ambulances with trained staff, plus admission and paperwork coordination. One call, help is on the way.",
    description:
      "Peace of mind, round the clock. With just one call, a fully-equipped ambulance and trained medical staff are dispatched — day or night — so you're never left feeling helpless from a distance. From there, we coordinate hospital admission and paperwork, and stay on the ground until family arrives.",
    includes: [
      "24×7 emergency helpline, always answered",
      "Fully-equipped ambulance dispatch",
      "Hospital admission coordination",
      "Paperwork & documentation handled on your behalf",
      "On-ground support until family arrives or takes over",
    ],
    idealFor: [
      "Families who want a clear plan in place before an emergency happens, not during one",
      "A parent living alone with no one nearby who can respond quickly",
      "Situations needing an ambulance and hospital coordination without delay",
    ],
  },
  {
    number: "05",
    slug: "home-icu",
    title: "Home ICU & Critical Care",
    summary:
      "Hospital-grade equipment and round-the-clock critical care at home, with the dignity of familiar surroundings.",
    description:
      "Advanced critical care, in the comfort of home. We set up complete ICU-level facilities — ventilators, monitors, trained critical-care nurses — so your parents receive attentive, round-the-clock medical care while surrounded by familiar faces and the dignity of home rather than a hospital ward.",
    includes: [
      "Critical care nurses & attendants, round-the-clock",
      "Ventilator & advanced monitoring support",
      "Continuous vitals & clinical oversight",
      "Coordination with treating specialists",
      "Family briefed clearly at every shift change",
    ],
    idealFor: [
      "A patient discharged from hospital but still needing intensive monitoring",
      "Ventilator-dependent or critical care that doesn't require a hospital ward",
      "Families who want critical care with the comfort of familiar surroundings",
    ],
  },
  {
    number: "06",
    slug: "medical-equipment",
    title: "Medical Equipment — Sales, Rentals & Support",
    summary:
      "Hospital beds, oxygen concentrators, wheelchairs, patient monitors. We deliver, install, demonstrate and support.",
    description:
      "Hospital beds, oxygen concentrators, wheelchairs, patient monitors and more — we deliver, install, demonstrate and support every piece of equipment ourselves. You're never left struggling to set something up or figuring it out alone.",
    includes: [
      "Hospital beds, wheelchairs & mobility aids",
      "Oxygen concentrators & nebulisers",
      "Patient monitors & related diagnostics equipment",
      "Delivery, installation & demonstration included",
      "Flexible rental or purchase, with ongoing support",
    ],
    idealFor: [
      "Setting up a home for a parent after a hospital discharge",
      "Long-term equipment needs for a chronic condition",
      "Short-term rentals during recovery from surgery",
    ],
  },
  {
    number: "07",
    slug: "diagnostics",
    title: "Doorstep Diagnostics & Lab Testing",
    summary:
      "Blood tests, ECGs and diagnostics at home. No travel, no waiting rooms — reports by the next morning.",
    description:
      "Convenient, stress-free and accurate. Our trained technicians visit your parents at home for blood tests, ECGs and other diagnostics — no travel, no waiting rooms. Reports are usually delivered to your inbox by the next morning.",
    includes: [
      "Blood tests & routine lab panels",
      "ECG and other at-home diagnostics",
      "Scheduled visits at a convenient time",
      "Digital reports shared directly with family",
      "Follow-up coordination with the care manager",
    ],
    idealFor: [
      "Routine tests for a parent who finds travel to a clinic difficult",
      "Regular monitoring panels for an ongoing condition",
      "Getting quick, reliable results without a waiting room",
    ],
  },
  {
    number: "08",
    slug: "diagnostics Copy",
    title: "Doorstep Diagnostics & Lab Testing Copy",
    summary:
      "Blood tests, ECGs and diagnostics at home. No travel, no waiting rooms — reports by the next morning.",
    description:
      "Convenient, stress-free and accurate. Our trained technicians visit your parents at home for blood tests, ECGs and other diagnostics — no travel, no waiting rooms. Reports are usually delivered to your inbox by the next morning.",
    includes: [
      "Blood tests & routine lab panels",
      "ECG and other at-home diagnostics",
      "Scheduled visits at a convenient time",
      "Digital reports shared directly with family",
      "Follow-up coordination with the care manager",
    ],
    idealFor: [
      "Routine tests for a parent who finds travel to a clinic difficult",
      "Regular monitoring panels for an ongoing condition",
      "Getting quick, reliable results without a waiting room",
    ],
  },
];

export const reportingSample = {
  patientLabel: "Visit report — Mrs. Sharma",
  date: "Today, 9:40 AM",
  vitals: [
    { label: "Blood Pressure", value: "128/82" },
    { label: "Blood Sugar", value: "112 mg/dL" },
    { label: "Oxygen (SpO₂)", value: "97%" },
  ],
  mood: "Cheerful, asked about her garden",
  medication: "Morning dose given on time",
  nextVisit: "Tomorrow, 9:00 AM",
};

export const nurseNote = {
  quote:
    "We went through her morning routine together and checked her vitals — all steady. She's asking about her garden again. See you tomorrow.",
  name: "Anita",
  role: "Registered Nurse",
};

/**
 * PLACEHOLDER testimonials — clearly marked for the client to replace with
 * real, consented family stories before launch. Kept as an array so the
 * homepage carousel has more than one card to cycle through.
 */
export const testimonials = [
  {
    quote:
      "I'm in Toronto. My mother is in Kolkata. For the first time in years, I sleep through the night.",
    attribution:
      "Placeholder testimonial — to be replaced with a verified family story",
    placeholder: true,
  },
  {
    quote:
      "I'm in Bangalore for work and could only get home once a month. Now I get a report after every visit, so I actually know how my father is doing.",
    attribution:
      "Placeholder testimonial — to be replaced with a verified family story",
    placeholder: true,
  },
  {
    quote:
      "The weekly report is the first thing I check every Friday morning in London. It's become part of my routine, not a worry.",
    attribution:
      "Placeholder testimonial — to be replaced with a verified family story",
    placeholder: true,
  },
  {
    quote:
      "We live in the same city as my in-laws, but between work and the kids we couldn't visit as often as they needed. Suraksha24 fills that gap every day.",
    attribution:
      "Placeholder testimonial — to be replaced with a verified family story",
    placeholder: true,
  },
  {
    quote:
      "When my father was hospitalised, the care manager called me in Dubai before I'd even heard from the hospital.",
    attribution:
      "Placeholder testimonial — to be replaced with a verified family story",
    placeholder: true,
  },
];

export const whyUs = [
  {
    title: "Verified & trained staff",
    body: "Every caregiver and nurse is background-checked and trained before they visit your parents.",
  },
  {
    title: "Clinical oversight",
    body: "Care plans are reviewed by clinical staff, not left to a single caregiver's judgement alone.",
  },
  {
    title: "Transparent pricing, no hidden costs",
    body: "You see the full cost upfront — what's included, and what isn't.",
  },
  {
    title: "Pay from anywhere",
    body: "International cards and bank transfers accepted, so distance never delays care.",
  },
  {
    title: "Replacement guarantee",
    body: "If a caregiver isn't the right fit, we replace them — no long back-and-forth.",
  },
  {
    title: "Always-on support",
    body: "A 24×7 helpline and care team, ready for questions, changes or emergencies.",
  },
];

/**
 * PLACEHOLDER team members — random first names paired with stand-in
 * headshots until real names, photos and bios are supplied. Swap before
 * launch (see README "Before you launch").
 */
export const team = [
  {
    name: "Arjun",
    role: "Founder & Care Director",
    bio: "Reviews every care plan personally and sets the bar for how each nurse and caregiver treats your family — like their own.",
    photo: "/assests/MeetTeam/Person1.jpg",
    photoPosition: "50% 15%",
    placeholder: true,
  },
  {
    name: "Priya",
    role: "Head Nurse",
    bio: "Trains and audits every nurse before they visit a single home, so medication, wound care and vitals are never left to chance.",
    photo: "/assests/MeetTeam/Person2.jpg",
    photoPosition: "50% 12%",
    placeholder: true,
  },
  {
    name: "Kabir",
    role: "Lead Care Manager",
    bio: "Matches every family with one dedicated care manager, reachable directly — never a rotating call centre.",
    photo: "/assests/MeetTeam/Person3.jpg",
    photoPosition: "48% 10%",
    placeholder: true,
  },
];

/**
 * PLACEHOLDER coverage list — illustrative Kolkata neighbourhoods, not a
 * confirmed service boundary. Verify against real coverage before launch.
 */
export const serviceAreas = [
  "Salt Lake",
  "New Town",
  "Rajarhat",
  "Ballygunge",
  "Alipore",
  "Gariahat",
  "Behala",
  "Dum Dum",
  "Jadavpur",
  "Howrah",
  "Park Street",
  "Tollygunge",
];

export const faqs = [
  {
    question: "How will I know what's happening with my parents?",
    answer:
      "Your dedicated care manager sends a structured update after every visit — vitals, medication, mood and any concerns — at a time that works for you. You can also call or WhatsApp your care manager directly whenever you want an update.",
  },
  {
    question: "What happens in an emergency at night?",
    answer:
      "Our emergency line is answered 24×7, including nights and holidays. A trained team is dispatched immediately, and we coordinate the ambulance, hospital admission and paperwork — staying on the ground until a family member is reachable or arrives.",
  },
  {
    question: "Can I speak to the care manager directly?",
    answer:
      "Yes. You're introduced to your dedicated care manager at the start, and you can call, WhatsApp or email them directly — you are never routed through a general call centre for updates on your own parents.",
  },
  {
    question: "Which areas of Kolkata do you serve?",
    answer:
      "We are based in Salt Lake and serve Kolkata and the surrounding areas. Tell us your parents' neighbourhood on the first call and we'll confirm coverage and response times right away.",
  },
  {
    question: "Can I pay from abroad?",
    answer:
      "Yes. We accept international cards and bank transfers, and can invoice in a way that works for your bank abroad. Payment from outside India should never be the reason care is delayed.",
  },
];

/**
 * Quick-answer content for the floating chat widget (components/layout/ChatBot.tsx).
 * This is a rule-based FAQ helper, not a live agent — keep answers short (chat-bubble
 * length) and honest about that. `href` is optional and renders a follow-up link chip.
 */
export const botQuickAnswers = [
  {
    question: "Where are you located?",
    answer: `We're based in Salt Lake, Kolkata — ${contact.address}. We serve families across Kolkata and nearby areas.`,
    href: "/contact",
    hrefLabel: "Get directions",
  },
  {
    question: "Can I pay from abroad?",
    answer:
      "Yes — we accept international cards and bank transfers, so paying from abroad is never a barrier.",
  },
  {
    question: "What happens in an emergency at night?",
    answer:
      "Our emergency line is answered 24×7. We dispatch a team immediately and coordinate the hospital and paperwork.",
  },
  {
    question: "Can I speak to the care manager directly?",
    answer:
      "Yes — you get one dedicated care manager you can call, WhatsApp or email directly, any time.",
  },
  {
    question: "How will I know what's happening with my parents?",
    answer:
      "You get a structured report after every visit — vitals, mood, medication and any concerns — sent straight to your phone.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Nursing, companion care, physiotherapy, emergency response, home ICU, equipment and diagnostics.",
    href: "/services",
    hrefLabel: "View all services",
  },
];

export const finalCta = {
  heading: "One call. It's handled — wherever you are.",
  body: "Speak to a care advisor today, or leave your details and your dedicated care manager will call you back at a time that works for you.",
};

export const bestTimeOptions = [
  "Morning (my time)",
  "Afternoon (my time)",
  "Evening (my time)",
  "Late night / whenever works for the care team",
];

export const countryOptions = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Singapore",
  "Australia",
  "UAE / Gulf",
  "Other",
];

/** Inline mid/end-of-article CTA shown on every blog post. */
export const blogCta = {
  heading: "Worried about a parent in India?",
  body: "Talk to a care advisor — no obligation, just a clear next step.",
};

/* -----------------------------------------------------------------------
 * Careers page content
 * ------------------------------------------------------------------- */

export const careerHero = {
  eyebrow: "Careers at Suraksha24",
  heading: "Build a career that shows up for families",
  body: "We're hiring nurses, physiotherapists, caregivers and coordinators across Kolkata — trained, verified, and genuinely supported, not left to figure it out alone.",
};

export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
};

export const jobOpenings: JobOpening[] = [
  {
    slug: "registered-nurse",
    title: "Registered Nurse (GNM / BSc)",
    department: "Clinical Care",
    type: "Full-time · Rotational shifts",
    location: "Kolkata & Salt Lake",
    experience: "1+ years preferred",
    summary:
      "Deliver skilled nursing care — medication, wound care, vitals monitoring — to patients in their homes, backed by a clinical supervisor.",
    responsibilities: [
      "Administer medication and monitor vitals per the care plan",
      "Perform wound care, injections and catheter/tube management",
      "Document and report every visit to the care coordinator",
      "Coordinate with the family physician on treatment updates",
    ],
  },
  {
    slug: "critical-care-nurse",
    title: "Critical Care Nurse",
    department: "Home ICU & Ventilator Care",
    type: "Full-time · 12-hour shifts",
    location: "Kolkata & Salt Lake",
    experience: "2+ years in ICU / critical care",
    summary:
      "Manage ventilator and home-ICU patients with airway management, suctioning and continuous monitoring expertise.",
    responsibilities: [
      "Monitor ventilator-dependent and critical care patients round the clock",
      "Recognise and escalate early signs of respiratory or cardiac distress",
      "Maintain equipment logs and backup protocols",
      "Liaise with treating specialists and partner hospitals",
    ],
  },
  {
    slug: "physiotherapist",
    title: "Physiotherapist",
    department: "Mobility & Rehabilitation",
    type: "Full-time or Visit-based",
    location: "Kolkata (home visits)",
    experience: "1+ years preferred",
    summary:
      "Design and deliver personalised in-home rehabilitation programs for post-surgical, post-fall and chronic mobility patients.",
    responsibilities: [
      "Conduct in-home assessments and build individualised care plans",
      "Deliver mobility, balance and fall-prevention sessions",
      "Track and report progress after every session",
      "Coordinate with nurses and doctors on recovery timelines",
    ],
  },
  {
    slug: "companion-caregiver",
    title: "Companion Caregiver",
    department: "Companion Care",
    type: "Full-time · Live-in or Day shifts",
    location: "Kolkata & surrounding areas",
    experience: "Freshers welcome, training provided",
    summary:
      "Be the consistent, familiar presence a senior looks forward to — conversation, daily routines, and a genuine, watchful eye.",
    responsibilities: [
      "Support daily routines: meals, light housekeeping, errands",
      "Accompany on walks and to appointments",
      "Notice and report emotional or physical changes",
      "Build a real, consistent relationship — not a rotating roster",
    ],
  },
  {
    slug: "care-coordinator",
    title: "Care Coordinator",
    department: "Operations",
    type: "Full-time",
    location: "Salt Lake, Kolkata (office + field)",
    experience: "2+ years in healthcare coordination",
    summary:
      "Own the family relationship end-to-end — scheduling, updates, escalations — as the single point of contact families trust.",
    responsibilities: [
      "Manage caseloads across nursing, companion and physiotherapy teams",
      "Be the direct point of contact for assigned families",
      "Monitor visit reports and flag concerns early",
      "Coordinate emergency response and hospital admissions",
    ],
  },
  {
    slug: "diagnostic-technician",
    title: "Diagnostic Sample Collection Technician",
    department: "Doorstep Diagnostics",
    type: "Full-time",
    location: "Kolkata (field visits)",
    experience: "Certified phlebotomy training required",
    summary:
      "Collect samples at patients' homes under strict protocol, and get seniors accurate results without the ordeal of a clinic visit.",
    responsibilities: [
      "Follow certified collection and hygiene protocols at every visit",
      "Transport samples under correct temperature and time conditions",
      "Coordinate scheduling with the care coordination team",
      "Represent Suraksha24's clinical standards in every home visit",
    ],
  },
];

/** Icon names map to lucide-react components in components/career/OpenPositions.tsx. */
export const careerPerks = [
  {
    icon: "GraduationCap",
    title: "Structured training & certification",
    body: "Every hire goes through supervised onboarding before their first solo visit — and ongoing clinical training after that.",
  },
  {
    icon: "ShieldCheck",
    title: "A respected, verified team",
    body: "You're never sent into a home alone and unsupported — every case has a clinical supervisor and care coordinator behind it.",
  },
  {
    icon: "TrendingUp",
    title: "Real career growth",
    body: "From caregiver to senior nurse to care coordinator — we promote from within and invest in your next step.",
  },
  {
    icon: "Clock3",
    title: "Flexible, fair shifts",
    body: "Choose from live-in, day-shift or visit-based roles, with transparent, on-time pay — no ambiguity, no delays.",
  },
  {
    icon: "HeartHandshake",
    title: "Work that matters",
    body: "You're not filling a shift — you're the reason a family abroad can sleep at night. That's the job.",
  },
  {
    icon: "Users",
    title: "A team that has your back",
    body: "24×7 backup support, a real supervisor to call, and colleagues who understand the work — never on your own.",
  },
];

export const hiringSteps = [
  {
    step: "01",
    title: "Apply online",
    body: "Tell us about your experience and the role you're interested in — takes less than five minutes.",
  },
  {
    step: "02",
    title: "Screening call",
    body: "A quick conversation with our HR team about your background, availability and expectations.",
  },
  {
    step: "03",
    title: "Skills & background check",
    body: "Clinical roles include a skills assessment; all roles include ID, reference and background verification.",
  },
  {
    step: "04",
    title: "Offer & onboarding",
    body: "A clear offer, followed by supervised onboarding and training before your first assignment.",
  },
];

export const experienceOptions = [
  "Fresher / no experience yet",
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
];

/* -----------------------------------------------------------------------
 * Partners page content
 * ------------------------------------------------------------------- */

export const partnerHero = {
  eyebrow: "Partner with Suraksha24",
  heading: "One trusted home-care partner, for everyone you refer",
  body: "Hospitals, labs, doctors, corporates and community organizations across Kolkata work with us so their patients, employees and members get coordinated, verified home healthcare — not a name on a pamphlet.",
};

export type PartnershipType = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  idealFor: string[];
};

export const partnershipTypes: PartnershipType[] = [
  {
    slug: "hospitals-clinics",
    title: "Hospitals & Clinics",
    icon: "Building2",
    description:
      "Seamless discharge-to-home handoffs — your patients transition into verified, coordinated home care instead of an information gap.",
    idealFor: [
      "Reducing readmissions with structured post-discharge nursing",
      "A trusted referral partner for home ICU & ventilator cases",
      "Coordinated physiotherapy for surgical and orthopedic patients",
    ],
  },
  {
    slug: "diagnostic-labs",
    title: "Diagnostic Labs & Pathology",
    icon: "FlaskConical",
    description:
      "Extend your reach into patients' homes with our doorstep collection network, while we route routine testing referrals your way.",
    idealFor: [
      "NABL-accredited labs looking to expand home collection",
      "Joint reporting integrated into ongoing care plans",
      "Reliable sample logistics and technician training",
    ],
  },
  {
    slug: "doctors-specialists",
    title: "Doctors & Specialists",
    icon: "Stethoscope",
    description:
      "A dependable home-care extension of your practice — so your treatment plans are followed through, not left to chance after the appointment.",
    idealFor: [
      "Post-consultation nursing and monitoring for your patients",
      "Direct coordinator updates so you stay informed between visits",
      "A trusted referral for families who ask “who can help at home?”",
    ],
  },
  {
    slug: "corporate-insurance",
    title: "Corporate & Insurance",
    icon: "Handshake",
    description:
      "Employee eldercare benefits and panel empanelment that give families real, usable support — not just a helpline number.",
    idealFor: [
      "Elder-care benefit programs for employees with parents in Kolkata",
      "Empanelment for cashless or reimbursed home healthcare claims",
      "Dedicated account coordination for corporate partners",
    ],
  },
  {
    slug: "community-organizations",
    title: "NRI & Community Organizations",
    icon: "Globe2",
    description:
      "Bring trusted home healthcare to your members' families back home — with a partner who understands the distance.",
    idealFor: [
      "Associations supporting diaspora families with parents in India",
      "Group-rate arrangements for members",
      "Co-hosted awareness sessions on elder care planning",
    ],
  },
  {
    slug: "medical-tourism-facilitators",
    title: "Medical Tourism Facilitators",
    icon: "MapPinned",
    description:
      "A reliable Kolkata-based partner for accommodation, local logistics and post-treatment recovery care for your international patients.",
    idealFor: [
      "Facilitators serving Bangladeshi and international patients",
      "End-to-end coordination from airport to post-discharge recovery",
      "Skilled nursing and physiotherapy for patients before they travel home",
    ],
  },
];

export const partnerBenefits = [
  {
    icon: "BadgeCheck",
    title: "Verified, clinically supervised care",
    body: "Every referral is handled by trained, background-verified staff under active clinical oversight — your reputation is protected.",
  },
  {
    icon: "Clock3",
    title: "Fast turnaround",
    body: "New referrals are contacted and assessed quickly — families don't fall into a gap between your handoff and our follow-up.",
  },
  {
    icon: "FileText",
    title: "Transparent reporting",
    body: "Structured updates after every visit, shared with you where relevant — so joint cases stay coordinated, not siloed.",
  },
  {
    icon: "Handshake",
    title: "A genuine, long-term relationship",
    body: "We assign a dedicated partnerships contact — not a rotating account manager — so the relationship stays personal.",
  },
];

export const partnerProcess = [
  {
    step: "01",
    title: "Introductory call",
    body: "Tell us about your organization and what a partnership would look like for your patients, employees or members.",
  },
  {
    step: "02",
    title: "Partnership terms",
    body: "We agree on referral flow, reporting expectations and, where relevant, commercial terms — in writing, upfront.",
  },
  {
    step: "03",
    title: "Onboarding",
    body: "Your team gets a direct line to our partnerships desk, and we brief our care team on your specific requirements.",
  },
  {
    step: "04",
    title: "Ongoing coordination",
    body: "A dedicated contact keeps the relationship running smoothly, with regular check-ins on how referrals are going.",
  },
];

export const partnerTypeOptions = [
  "Hospital / Clinic",
  "Diagnostic Lab",
  "Doctor / Specialist",
  "Corporate / Insurance",
  "NRI / Community Organization",
  "Medical Tourism Facilitator",
  "Other",
];

/**
 * PLACEHOLDER partner network logos for the homepage marquee
 * (components/home/PartnerLogos.tsx) — illustrative names, not real
 * organizations. Replace `name` with the real organization and add a
 * logo file at `public/assests/partners/<slug>.png` (or .svg) before
 * launch; until a logo file exists, that entry renders as a text
 * wordmark chip instead of an image.
 */
export type PartnerLogoEntry = {
  slug: string;
  name: string;
  logo: string;
};

export const partnerLogos: PartnerLogoEntry[] = [
  {
    slug: "northgate-hospital",
    name: "Northgate Hospital",
    logo: "/assests/partners/northgate-hospital.png",
  },
  {
    slug: "silver-oak-diagnostics",
    name: "Silver Oak Diagnostics",
    logo: "/assests/partners/silver-oak-diagnostics.png",
  },
  {
    slug: "meridian-health-group",
    name: "Meridian Health Group",
    logo: "/assests/partners/meridian-health-group.png",
  },
  {
    slug: "lotus-care-clinic",
    name: "Lotus Care Clinic",
    logo: "/assests/partners/lotus-care-clinic.png",
  },
  {
    slug: "harbourview-medical-center",
    name: "Harbourview Medical Center",
    logo: "/assests/partners/harbourview-medical-center.png",
  },
  {
    slug: "crestwood-wellness",
    name: "Crestwood Wellness",
    logo: "/assests/partners/crestwood-wellness.png",
  },
  {
    slug: "bluewell-diagnostics",
    name: "Bluewell Diagnostics",
    logo: "/assests/partners/bluewell-diagnostics.png",
  },
  {
    slug: "kingston-multispeciality",
    name: "Kingston Multispeciality",
    logo: "/assests/partners/kingston-multispeciality.png",
  },
];
