import { IMG } from "./images";

/* ------------------------------------------------------------------ */
/* Site-wide details. Everything a new owner needs to edit lives here. */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "Aadishakti Yogshaala",
  nameDeva: "आदिशक्ति योगशाला",
  tagline: "Awaken the primordial energy within",
  shortDesc:
    "A traditional yoga shaala rooted in Hatha, Ashtanga and the inner sciences — with morning and evening batches, certified teachers and small, attentive classes.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "hello@aadishaktiyogshaala.com",
  address: {
    line1: "Shakti Bhawan, Tapovan Road",
    line2: "Rishikesh, Uttarakhand 249192",
  },
  mapQuery: "Tapovan, Rishikesh, Uttarakhand",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
  hours: [
    { days: "Monday – Saturday", time: "5:00 AM – 9:00 PM" },
    { days: "Sunday", time: "7:00 AM – 11:00 AM (Satsang only)" },
  ],
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Schedule", href: "/schedule" },
  { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/* Class styles                                                        */
/* ------------------------------------------------------------------ */

export type Level = "Beginner" | "All levels" | "Intermediate" | "Advanced";

export type YogaClass = {
  slug: string;
  name: string;
  deva: string;
  level: Level;
  duration: string;
  intensity: 1 | 2 | 3 | 4 | 5;
  image: string;
  /** Overrides the generated alt when the photo is illustrative rather than literal. */
  imageAlt?: string;
  blurb: string;
  detail: string;
  benefits: string[];
};

export const CLASSES: YogaClass[] = [
  {
    slug: "hatha",
    name: "Hatha Yoga",
    deva: "हठ योग",
    level: "All levels",
    duration: "75 min",
    intensity: 2,
    image: IMG.pigeonPose,
    blurb:
      "Classical asana held with steadiness and breath — the foundation of every other practice in the shaala.",
    detail:
      "Our Hatha class follows the traditional sequence of warm-ups, standing postures, seated forward bends, backbends and inversions, finishing in a long shavasana. Postures are held for several breaths so that alignment, not momentum, does the work.",
    benefits: ["Joint mobility", "Spinal strength", "Steady breath", "Deep relaxation"],
  },
  {
    slug: "ashtanga",
    name: "Ashtanga Vinyasa",
    deva: "अष्टांग विन्यास",
    level: "Intermediate",
    duration: "90 min",
    intensity: 5,
    image: IMG.downwardDog,
    blurb:
      "The Primary Series, counted in the traditional way — a disciplined, sweat-building practice.",
    detail:
      "Taught both led and Mysore-style. You progress posture by posture at your own pace while the teacher adjusts individually. Expect heat, ujjayi breath and a practice that becomes a moving meditation.",
    benefits: ["Stamina", "Core strength", "Discipline", "Detoxification"],
  },
  {
    slug: "vinyasa",
    name: "Vinyasa Flow",
    deva: "विन्यास",
    level: "All levels",
    duration: "60 min",
    intensity: 4,
    image: IMG.flowClass,
    blurb:
      "Breath-linked sequences that build gracefully to a peak posture, then unwind.",
    detail:
      "Creative, musical and never the same twice. Each class is themed around a peak pose or an energetic intention, with modifications offered throughout so newer students can follow comfortably.",
    benefits: ["Cardio health", "Fluidity", "Balance", "Mood lift"],
  },
  {
    slug: "power-core",
    name: "Power Yoga & Core",
    deva: "शक्ति योग",
    level: "Intermediate",
    duration: "60 min",
    intensity: 5,
    image: IMG.plankClass,
    blurb:
      "Strength-led, athletic yoga for those who want to build real muscular endurance.",
    detail:
      "A faster class combining yoga asana with bodyweight conditioning — planks, chaturanga drills, standing strength holds and a focused core finisher. Popular with the evening batch.",
    benefits: ["Lean strength", "Fat loss", "Posture", "Endurance"],
  },
  {
    slug: "yin-restorative",
    name: "Yin & Restorative",
    deva: "यिन योग",
    level: "All levels",
    duration: "60 min",
    intensity: 1,
    image: IMG.deepFold,
    blurb:
      "Long, supported holds that reach connective tissue and quiet an overworked nervous system.",
    detail:
      "Bolsters, blocks and blankets do most of the work. Postures are held three to five minutes with guided awareness — the ideal counterweight to a week of screens, travel or intense training.",
    benefits: ["Fascia release", "Stress relief", "Better sleep", "Hip & spine ease"],
  },
  {
    slug: "pranayama-kriya",
    name: "Pranayama & Kriya",
    deva: "प्राणायाम",
    level: "All levels",
    duration: "45 min",
    intensity: 2,
    image: IMG.lotusSeated,
    blurb:
      "The breath sciences — Nadi Shodhana, Kapalbhati, Bhastrika and the shatkarma cleansings.",
    detail:
      "Taught in the Brahmamuhurta (pre-dawn) batch, when the air and the mind are at their clearest. Ratios are built progressively and always paired with the bandhas and correct seated posture.",
    benefits: ["Lung capacity", "Mental clarity", "Calmer nerves", "Energy balance"],
  },
  {
    slug: "meditation-nidra",
    name: "Meditation & Yoga Nidra",
    deva: "ध्यान एवं योग निद्रा",
    level: "Beginner",
    duration: "45 min",
    intensity: 1,
    image: IMG.sunriseMeditation,
    blurb:
      "Guided Antar Mouna, Trataka and the yogic sleep — rest deeper than sleep itself.",
    detail:
      "You lie down, covered and warm, and are guided through rotation of consciousness, breath awareness and sankalpa. Forty-five minutes of Nidra is often compared to three hours of sleep.",
    benefits: ["Insomnia relief", "Anxiety reduction", "Focus", "Emotional balance"],
  },
  {
    slug: "prenatal",
    name: "Prenatal & Postnatal",
    deva: "गर्भ संस्कार",
    level: "Beginner",
    duration: "60 min",
    intensity: 1,
    image: IMG.meditationGarden,
    blurb:
      "Trimester-appropriate movement, pelvic floor work and breath for labour and recovery.",
    detail:
      "Led by a teacher certified in prenatal yoga, with props for every posture and a maximum of eight mats. Doctor's clearance is requested before joining; postnatal students may bring infants.",
    benefits: ["Pelvic strength", "Reduced back pain", "Breath for labour", "Gentle recovery"],
  },
  {
    slug: "kids",
    name: "Kids Yoga",
    deva: "बाल योग",
    level: "Beginner",
    duration: "45 min",
    intensity: 2,
    image: IMG.beachGroup,
    imageAlt:
      "An outdoor group class in tree pose — replace with a photo of our own kids batch",
    blurb:
      "Story-led asana, animal poses and breathing games for children aged 6 to 12.",
    detail:
      "Playful but genuinely yogic — children learn Surya Namaskar, simple pranayama and short stillness practices that help with concentration and exam-time nerves.",
    benefits: ["Flexibility", "Concentration", "Confidence", "Screen-time balance"],
  },
  {
    slug: "therapy",
    name: "Yoga Therapy",
    deva: "योग चिकित्सा",
    level: "All levels",
    duration: "60 min",
    intensity: 1,
    image: IMG.ayurvedaTherapy,
    blurb:
      "Small-group and one-to-one sessions for specific conditions, with an Ayurvedic lens.",
    detail:
      "For back and cervical pain, thyroid and PCOS, hypertension, diabetes and post-surgery rehabilitation. Each student is assessed first and given a practice sheet to follow at home.",
    benefits: ["Pain management", "Hormonal balance", "Rehabilitation", "Home practice plan"],
  },
];

/* ------------------------------------------------------------------ */
/* Weekly schedule — morning and evening batches                       */
/* ------------------------------------------------------------------ */

export type Session = {
  id: string;
  /** 24-hour start, used to order sessions and find the next one today. */
  start: string;
  end: string;
  label: string;
  classSlug: string;
  teacher: string;
  level: Level;
  days: string;
  hall: "Shakti Hall" | "Shiva Hall" | "Open Terrace";
  mode: "Studio" | "Online" | "Studio & Online";
  seats: number;
};

export const MORNING: Session[] = [
  {
    id: "m1",
    start: "05:00",
    end: "05:45",
    label: "Brahmamuhurta Sadhana",
    classSlug: "pranayama-kriya",
    teacher: "Acharya Meera Joshi",
    level: "All levels",
    days: "Mon – Sat",
    hall: "Shiva Hall",
    mode: "Studio & Online",
    seats: 20,
  },
  {
    id: "m2",
    start: "06:00",
    end: "07:15",
    label: "Hatha Yoga — Morning Batch",
    classSlug: "hatha",
    teacher: "Acharya Meera Joshi",
    level: "All levels",
    days: "Mon – Sat",
    hall: "Shakti Hall",
    mode: "Studio & Online",
    seats: 18,
  },
  {
    id: "m3",
    start: "06:00",
    end: "07:30",
    label: "Ashtanga — Led Primary Series",
    classSlug: "ashtanga",
    teacher: "Yogi Arun Prakash",
    level: "Intermediate",
    days: "Mon, Wed, Fri",
    hall: "Shiva Hall",
    mode: "Studio",
    seats: 14,
  },
  {
    id: "m4",
    start: "06:00",
    end: "07:30",
    label: "Ashtanga — Mysore Self-Practice",
    classSlug: "ashtanga",
    teacher: "Yogi Arun Prakash",
    level: "Advanced",
    days: "Tue, Thu, Sat",
    hall: "Shiva Hall",
    mode: "Studio",
    seats: 12,
  },
  {
    id: "m5",
    start: "07:30",
    end: "08:30",
    label: "Vinyasa Flow",
    classSlug: "vinyasa",
    teacher: "Ananya Deshmukh",
    level: "All levels",
    days: "Mon – Sat",
    hall: "Shakti Hall",
    mode: "Studio & Online",
    seats: 18,
  },
  {
    id: "m6",
    start: "08:45",
    end: "09:45",
    label: "Gentle, Prenatal & Postnatal",
    classSlug: "prenatal",
    teacher: "Ananya Deshmukh",
    level: "Beginner",
    days: "Mon, Wed, Fri",
    hall: "Shakti Hall",
    mode: "Studio",
    seats: 8,
  },
  {
    id: "m7",
    start: "10:00",
    end: "11:00",
    label: "Yoga Therapy — Small Group",
    classSlug: "therapy",
    teacher: "Dr. Nikhil Sharma",
    level: "All levels",
    days: "Tue, Thu, Sat",
    hall: "Shakti Hall",
    mode: "Studio",
    seats: 6,
  },
];

export const EVENING: Session[] = [
  {
    id: "e1",
    start: "16:30",
    end: "17:15",
    label: "Kids Yoga (6 – 12 yrs)",
    classSlug: "kids",
    teacher: "Ananya Deshmukh",
    level: "Beginner",
    days: "Mon, Wed, Fri",
    hall: "Open Terrace",
    mode: "Studio",
    seats: 16,
  },
  {
    id: "e2",
    start: "17:30",
    end: "18:30",
    label: "Power Yoga & Core",
    classSlug: "power-core",
    teacher: "Yogi Arun Prakash",
    level: "Intermediate",
    days: "Mon – Sat",
    hall: "Shiva Hall",
    mode: "Studio",
    seats: 16,
  },
  {
    id: "e3",
    start: "18:00",
    end: "19:15",
    label: "Hatha Yoga — Evening Batch",
    classSlug: "hatha",
    teacher: "Acharya Meera Joshi",
    level: "All levels",
    days: "Mon – Sat",
    hall: "Shakti Hall",
    mode: "Studio & Online",
    seats: 18,
  },
  {
    id: "e4",
    start: "18:45",
    end: "19:45",
    label: "Yin & Restorative",
    classSlug: "yin-restorative",
    teacher: "Sadhvi Kavita Rao",
    level: "All levels",
    days: "Tue, Thu, Sat",
    hall: "Shiva Hall",
    mode: "Studio",
    seats: 14,
  },
  {
    id: "e5",
    start: "19:30",
    end: "20:30",
    label: "Vinyasa Flow — Evening",
    classSlug: "vinyasa",
    teacher: "Ananya Deshmukh",
    level: "All levels",
    days: "Mon, Wed, Fri",
    hall: "Shakti Hall",
    mode: "Studio & Online",
    seats: 18,
  },
  {
    id: "e6",
    start: "20:30",
    end: "21:15",
    label: "Yoga Nidra & Meditation",
    classSlug: "meditation-nidra",
    teacher: "Sadhvi Kavita Rao",
    level: "Beginner",
    days: "Mon – Sat",
    hall: "Shiva Hall",
    mode: "Studio & Online",
    seats: 24,
  },
];

export const SUNDAY: Session[] = [
  {
    id: "s1",
    start: "07:00",
    end: "08:30",
    label: "Community Flow & Satsang",
    classSlug: "vinyasa",
    teacher: "All teachers",
    level: "All levels",
    days: "Sunday",
    hall: "Open Terrace",
    mode: "Studio",
    seats: 40,
  },
  {
    id: "s2",
    start: "09:00",
    end: "11:00",
    label: "Monthly Workshop & Kirtan",
    classSlug: "meditation-nidra",
    teacher: "Guest Acharyas",
    level: "All levels",
    days: "First Sunday",
    hall: "Open Terrace",
    mode: "Studio",
    seats: 60,
  },
];

export const BATCHES = [
  {
    id: "morning",
    name: "Morning Batch",
    deva: "प्रातः सत्र",
    window: "5:00 AM – 11:00 AM",
    note: "Begins in the Brahmamuhurta — the yogic hour before sunrise, considered the most receptive time to practise.",
    sessions: MORNING,
    image: IMG.sunriseHills,
  },
  {
    id: "evening",
    name: "Evening Batch",
    deva: "सायं सत्र",
    window: "4:30 PM – 9:15 PM",
    note: "Designed around working hours — unwind the day's tension, then settle into Nidra before you go home.",
    sessions: EVENING,
    image: IMG.sunsetWarrior,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Teachers                                                            */
/* ------------------------------------------------------------------ */

export type Teacher = {
  name: string;
  role: string;
  credential: string;
  years: number;
  image: string;
  bio: string;
  teaches: string[];
};

export const TEACHERS: Teacher[] = [
  {
    name: "Acharya Meera Joshi",
    role: "Founder & Lead Teacher",
    credential: "E-RYT 500 · M.A. Yoga Shastra",
    years: 18,
    image: IMG.portraitWomanPro,
    bio: "Meera trained for nine years in the Bihar School tradition before founding Aadishakti. She teaches Hatha and the breath sciences with an insistence on precision — and a long shavasana.",
    teaches: ["Hatha Yoga", "Pranayama & Kriya", "Philosophy"],
  },
  {
    name: "Yogi Arun Prakash",
    role: "Ashtanga & Mysore Programme",
    credential: "KPJAYI Authorised Level 2",
    years: 14,
    image: IMG.portraitManWarm,
    bio: "Arun has made eleven trips to Mysore and carries that counted, disciplined practice into our Shiva Hall. His adjustments are famously exact and his Primary Series led class fills up first.",
    teaches: ["Ashtanga Vinyasa", "Power Yoga & Core", "Mysore"],
  },
  {
    name: "Sadhvi Kavita Rao",
    role: "Meditation & Yoga Nidra",
    credential: "Certified Nidra Facilitator · 10 yr Sadhana",
    years: 11,
    image: IMG.portraitWomanCalm,
    bio: "Kavita spent four years in ashram residency and now guides our stillness practices. Students arrive at her Nidra class knotted with the day and leave, by their own account, rearranged.",
    teaches: ["Meditation & Yoga Nidra", "Yin & Restorative", "Antar Mouna"],
  },
  {
    name: "Dr. Nikhil Sharma",
    role: "Yoga Therapy & Ayurveda",
    credential: "BAMS · Yoga Therapist (IAYT)",
    years: 12,
    image: IMG.portraitManBeard,
    bio: "A practising Ayurvedic physician, Nikhil assesses every therapy student before building them a practice sheet. He handles our back-care, thyroid and PCOS groups.",
    teaches: ["Yoga Therapy", "Ayurveda Consults", "Back Care"],
  },
  {
    name: "Ananya Deshmukh",
    role: "Vinyasa & Prenatal",
    credential: "RYT 500 · Prenatal Certified",
    years: 8,
    image: IMG.portraitWomanBright,
    bio: "Ananya builds the kind of flow class people stay for — musical, well-sequenced, generous with options. She also runs our prenatal batch, capped at eight mats.",
    teaches: ["Vinyasa Flow", "Prenatal & Postnatal", "Kids Yoga"],
  },
];

/* ------------------------------------------------------------------ */
/* Programmes, pricing, proof                                          */
/* ------------------------------------------------------------------ */

export const PROGRAMMES = [
  {
    title: "200-Hour Teacher Training",
    deva: "योग शिक्षक प्रशिक्षण",
    length: "24 days · residential or non-residential",
    price: "₹85,000",
    image: IMG.groupNamaste,
    points: [
      "Yoga Alliance registered curriculum",
      "Asana, pranayama, anatomy, philosophy, teaching methodology",
      "Maximum 16 trainees per batch",
      "Satvik meals and accommodation included (residential)",
    ],
  },
  {
    title: "300-Hour Advanced TTC",
    deva: "उन्नत प्रशिक्षण",
    length: "35 days · residential",
    price: "₹1,35,000",
    image: IMG.handstandArches,
    points: [
      "For 200-hour certified teachers",
      "Intermediate Series, advanced pranayama and bandha work",
      "Sanskrit, Patanjali's Yoga Sutras in depth",
      "Supervised teaching practicum",
    ],
  },
  {
    title: "7-Day Himalayan Retreat",
    deva: "योग शिविर",
    length: "7 days · all inclusive",
    price: "₹42,000",
    image: IMG.mountainDusk,
    points: [
      "Twice-daily practice by the river",
      "Silence period, kirtan and trek",
      "Ayurvedic consult and one abhyanga massage",
      "Runs every full moon, March to November",
    ],
  },
  {
    title: "Corporate & Group Yoga",
    deva: "कॉर्पोरेट योग",
    length: "Weekly, at your office or ours",
    price: "On request",
    image: IMG.studioWarriors,
    points: [
      "Desk-posture and cervical-care focus",
      "45-minute sessions that fit a lunch break",
      "On-site, online or hybrid delivery",
      "Quarterly wellness reporting",
    ],
  },
];

export const PLANS = [
  {
    name: "Trial Week",
    deva: "परिचय",
    price: "₹499",
    unit: "for 7 days",
    desc: "Try any one batch, as many times as you like, for a week.",
    features: [
      "Unlimited classes in one batch",
      "One posture & breath assessment",
      "Mat and props provided",
      "Adjustable to morning or evening",
    ],
    cta: "Start the trial",
    featured: false,
  },
  {
    name: "Monthly Sadhana",
    deva: "मासिक",
    price: "₹2,400",
    unit: "per month",
    desc: "The regular practitioner's plan — one batch, six days a week.",
    features: [
      "Unlimited classes in your batch",
      "Live online access to the same class",
      "Monthly progress check-in",
      "10% off workshops",
    ],
    cta: "Join monthly",
    featured: false,
  },
  {
    name: "Quarterly Abhyasa",
    deva: "त्रैमासिक",
    price: "₹6,300",
    unit: "for 3 months",
    desc: "Best value for building a habit that actually holds.",
    features: [
      "Everything in Monthly Sadhana",
      "Switch batches freely, morning ⇄ evening",
      "Two Yoga Nidra sessions included",
      "One Ayurvedic diet consult",
      "15% off teacher training",
    ],
    cta: "Choose quarterly",
    featured: true,
  },
  {
    name: "Annual Sankalpa",
    deva: "वार्षिक",
    price: "₹21,000",
    unit: "per year",
    desc: "For the committed — two months effectively free.",
    features: [
      "Everything in Quarterly Abhyasa",
      "All workshops included",
      "Guest pass for a family member",
      "Priority booking for retreats",
      "Personalised home-practice sheet",
    ],
    cta: "Commit for a year",
    featured: false,
  },
];

export const STATS = [
  { value: 18, suffix: "+", label: "Years of teaching" },
  { value: 2400, suffix: "+", label: "Students guided" },
  { value: 10, suffix: "", label: "Class styles" },
  { value: 4.9, suffix: "/5", label: "Average rating", decimals: 1 },
];

export const BENEFITS = [
  {
    title: "Small, attended classes",
    body: "Between 6 and 18 mats per session. Your teacher knows your name, your injuries and the posture you have been working towards.",
  },
  {
    title: "Traditional, not trendy",
    body: "We teach the full eight limbs — asana is one of them. Expect pranayama, kriya, philosophy and silence alongside the movement.",
  },
  {
    title: "Morning and evening batches",
    body: "Practise at 5 AM in the Brahmamuhurta or at 8:30 PM after work. Switch between the two whenever your week changes.",
  },
  {
    title: "Therapy-informed teaching",
    body: "An in-house Ayurvedic physician assesses students with injuries or conditions and writes them a practice they can actually sustain.",
  },
  {
    title: "Live online, same class",
    body: "Travelling or unwell? Most batches stream live, so your streak and your membership both continue uninterrupted.",
  },
  {
    title: "Beginners genuinely welcome",
    body: "No flexibility required, and nobody will put you in a headstand on day one. Roughly half of each new batch has never practised before.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I came for my lower back and stayed for the 5 AM pranayama. Eighteen months in, the back pain is gone and I sleep like I did at twenty.",
    name: "Rohit Malhotra",
    detail: "Morning batch · 18 months",
    image: IMG.portraitManSenior,
  },
  {
    quote:
      "The prenatal batch was eight mats and a teacher who remembered exactly which trimester each of us was in. I practised until week 38.",
    name: "Sneha Iyer",
    detail: "Prenatal batch · 2 terms",
    image: IMG.portraitWomanWarm,
  },
  {
    quote:
      "I had tried three studios before this one. The difference is that here somebody actually corrects you, every single class.",
    name: "Arjun Nair",
    detail: "Ashtanga · Mysore programme",
    image: IMG.portraitManSmile,
  },
  {
    quote:
      "Yoga Nidra at 8:30 PM has replaced my sleeping tablets. I am not exaggerating — my physician reduced the dose and then stopped it.",
    name: "Lakshmi Venkatesh",
    detail: "Evening batch · 1 year",
    image: IMG.portraitWomanSoft,
  },
  {
    quote:
      "The 200-hour training was demanding in the best way. I now teach four classes a week in Pune and still send my students here.",
    name: "Devika Patil",
    detail: "200-Hour TTC graduate, 2024",
    image: IMG.portraitWomanShort,
  },
];

export const FAQS = [
  {
    q: "I have never done yoga and I am not flexible. Can I join?",
    a: "Yes, and flexibility is not a prerequisite — it is a result. Begin with the Hatha or Gentle class in either batch. Roughly half of every new batch has never practised before, and props are provided for every posture.",
  },
  {
    q: "What is the difference between the morning and evening batch?",
    a: "The morning batch starts at 5:00 AM with pranayama and kriya, which traditionally belong to the Brahmamuhurta, and is quieter and more internal. The evening batch is built around working hours, leans more towards releasing tension, and ends with Yoga Nidra. Members can switch between them.",
  },
  {
    q: "Do I need to bring my own mat?",
    a: "No. Mats, blocks, belts, bolsters and blankets are all provided and sanitised between classes. Many regulars eventually bring their own mat, which we are happy to store for you.",
  },
  {
    q: "Can I attend classes online?",
    a: "Most batches stream live, so you join the same class as the students in the hall. Recordings stay available for 48 hours. Mysore self-practice and the therapy groups are studio-only.",
  },
  {
    q: "Should I eat before class?",
    a: "Practise on an empty stomach where possible — three hours after a full meal, or one hour after something light. For the 5:00 AM batch, water is enough.",
  },
  {
    q: "I am pregnant / recovering from surgery. Is yoga safe for me?",
    a: "Very likely, with the right practice. Please bring your doctor's clearance and book a short assessment with Dr. Nikhil Sharma first — he will place you in either the prenatal or the therapy group with a written practice sheet.",
  },
  {
    q: "What is your cancellation and freeze policy?",
    a: "Memberships can be frozen once per quarter for up to 21 days with 48 hours' notice. Unused trial weeks are fully refundable; monthly and longer plans are refundable pro-rata within the first seven days.",
  },
  {
    q: "Is the teacher training recognised?",
    a: "Yes — our 200 and 300-hour courses follow a Yoga Alliance registered curriculum, and graduates receive certification valid for teaching internationally.",
  },
];

export const GALLERY = [
  { src: IMG.sunriseMeditation, alt: "Student meditating at sunrise on the river deck", span: "tall" },
  { src: IMG.studioWarriors, alt: "Morning Hatha batch in Warrior II", span: "wide" },
  { src: IMG.lotusSeated, alt: "Seated padmasana during pranayama practice", span: "normal" },
  { src: IMG.handstandArches, alt: "Advanced student practising an inversion", span: "tall" },
  { src: IMG.outdoorCommunity, alt: "Community flow on International Yoga Day", span: "wide" },
  { src: IMG.propsFlatlay, alt: "Blocks, belts and mats laid out before class", span: "normal" },
  { src: IMG.namasteBack, alt: "Student seated in pranam mudra", span: "normal" },
  { src: IMG.meditationGarden, alt: "Evening meditation in the garden", span: "normal" },
  { src: IMG.pigeonPose, alt: "Kapotasana, guided with props", span: "tall" },
  { src: IMG.rolledMats, alt: "Mats rolled and racked in the Shakti Hall", span: "normal" },
  { src: IMG.groupNamaste, alt: "Teacher training cohort in closing prayer", span: "wide" },
  { src: IMG.eagleTwist, alt: "Garudasana arms in the evening batch", span: "normal" },
  { src: IMG.treePoseHill, alt: "Vrikshasana practised on the ridge above the shaala", span: "normal" },
  { src: IMG.ayurvedaTherapy, alt: "Abhyanga therapy during a retreat week", span: "normal" },
  { src: IMG.mountainDusk, alt: "The Himalayan retreat location at dusk", span: "wide" },
  { src: IMG.flowClass, alt: "Vinyasa flow, rising into a standing backbend", span: "tall" },
  { src: IMG.groupFloorClass, alt: "The morning batch mid-sequence in the Shakti Hall", span: "normal" },
  { src: IMG.malaSeated, alt: "Japa with a mala after pranayama", span: "normal" },
  { src: IMG.beachGroup, alt: "Community class on the retreat week", span: "wide" },
];

export const MANTRAS = [
  "ॐ सह नाववतु",
  "Hatha",
  "अष्टांग",
  "Pranayama",
  "ध्यान",
  "Vinyasa",
  "योग निद्रा",
  "Kriya",
  "शक्ति",
  "Sadhana",
  "सङ्कल्प",
  "Namaste",
];
