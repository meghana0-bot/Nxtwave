// ==========================================================================
// NXTWAVE GROWTH CHALLENGE - STRATEGIC DATA & CAMPAIGN ARCHITECTURE
// Target: 500 Final-Year Engineering Registrations in 7 Days (₹2,000 Budget)
// ==========================================================================

export const campaignMetadata = {
  challengeTitle: "NxtWave Growth Intern Challenge",
  workshopTitle: "Build Your First AI Project in 60 Minutes",
  targetAudience: "Final-Year Engineering Students (2025/2026 Batch)",
  registrationGoal: 500,
  budget: 2000, // INR
  durationDays: 7,
  targetCostPerRegistration: 4.0, // ₹2000 / 500 = ₹4.00
  estimatedAttendanceRate: "65-72%",
  liveRegisteredSimulated: 387,
};

export const studentPersona = {
  name: "Arjun Sharma",
  archetype: "The Anxious Final-Year Tier-2/3 Engineering Student",
  demographics: {
    age: "21-22 Years",
    degree: "B.Tech / B.E (CSE, IT, ECE, EEE, Mechanical converting to Tech)",
    collegeTier: "Tier 2 and Tier 3 Engineering Colleges (e.g. JNTUH, Anna University affiliated, AKTU, VTU)",
    currentSemester: "7th / 8th Semester (Final Placement Window)",
    location: "Metro & Tier 2 hubs (Hyderabad, Bengaluru, Pune, Chennai, Jaipur, Lucknow, Coimbatore)"
  },
  psychographics: {
    coreFear: "Mass recruiters (TCS, Infosys, Wipro, Cognizant) have slashed hiring or delayed onboarding. Resumes with basic Todo Apps or generic Netflix clones are discarded in seconds by ATS filters.",
    underlyingDesire: "Needs a high-signal, proof-of-work AI project on their resume before campus drives close, without paying ₹30,000+ for lengthy bootcamps.",
    imposterSyndrome: "'Everyone on LinkedIn is talking about AI, LangChain, and Agents, but our college syllabus is still stuck on C++ and 2012 Java. Am I falling behind?'",
    attentionSpan: "Low for theoretical lectures; extremely high for fast, hands-on, tangible outcomes that can be posted immediately on LinkedIn and GitHub."
  },
  whyTheyCare: [
    {
      title: "Immediate Resume Differentiation",
      description: "Recruiters reject generic CRUD apps. Having a live, deployed LLM-powered application with a GitHub link gives them an immediate edge in interview shortlists.",
      icon: "file-code"
    },
    {
      title: "Placement Season Emergency",
      description: "Final year students have less than 90 days before final campus placements conclude. They cannot afford multi-month courses; they need a 60-minute breakthrough.",
      icon: "clock"
    },
    {
      title: "Zero Cost & Zero Friction",
      description: "Free access, no complex ML math required, no high-end GPU needed. Uses cloud API keys and browser-based sandboxes.",
      icon: "sparkles"
    },
    {
      title: "Peer Validation & Social Proof",
      description: "Earns a verified NxtWave Certificate of AI Competency and a LinkedIn-ready project post template to announce proof of work to recruiters.",
      icon: "award"
    }
  ],
  conversionHooks: [
    "Stop applying with 2020 projects. Build and deploy a real AI Agent in 60 minutes.",
    "Will your resume pass 2026 ATS filters? Add a verified AI project this Sunday.",
    "No ML math or PhD required. Just pure, deployable, hands-on code.",
    "Get the exact project recruiters are asking about in technical rounds."
  ]
};

export const prioritizedChannels = [
  {
    id: "whatsapp-loops",
    name: "1. Hyper-Local WhatsApp Viral Loops & Class Reps (CRs)",
    priority: "P0 - Highest Leverage",
    targetRegistrations: 250,
    expectedShare: "50%",
    cpa: "₹2.00",
    whyItWorks: "Indian engineering colleges run entirely on unofficial WhatsApp and Telegram groups (e.g. 'CSE 2022-26 Section B', 'Placement Drives 2026', 'T&P Updates'). A message shared by a trusted Class Representative or friend has a 88% open rate compared to <15% for college emails. Adding an instant referral incentive creates a self-propagating K-factor > 1.2.",
    tactics: [
      "Incentivize 25 key Class Representatives (CRs) across 10 target colleges with ₹100 mobile recharge or priority 1-on-1 resume reviews upon bringing 15+ student registrations.",
      "Deploy custom WhatsApp deep links ('whatsapp://send?text=...') pre-filled with high-urgency peer-to-peer copy.",
      "Integrate automated instant WhatsApp ticket delivery so students forward their VIP holographic pass to college study groups."
    ]
  },
  {
    id: "college-clubs-tpo",
    name: "2. Tech Club Partnerships & T&P Student Coordinators",
    priority: "P1 - High Credibility",
    targetRegistrations: 160,
    expectedShare: "32%",
    cpa: "₹3.12",
    whyItWorks: "College coding clubs (GDSC, ACM, CSI, IEEE student chapters) and Placement Student Coordinators constantly seek high-value, free technical workshops to demonstrate activity without spending club funds. Partnering with them grants direct access to captive batches of 200-500 students per college with administrative endorsement.",
    tactics: [
      "Position NxtWave as the official 'AI Placement Enablement Partner' for the club.",
      "Provide the Club Head with an exclusive co-branded landing page or referral tag ('nxtwave.ai/ai60?club=CBIT_GDSC').",
      "Offer the Club a free 'AI Readiness Workshop Report' showing their batch's benchmark score compared to national averages."
    ]
  },
  {
    id: "linkedin-peer-fomo",
    name: "3. LinkedIn Peer-to-Peer Proof of Work & Placement FOMO",
    priority: "P2 - High Intent",
    targetRegistrations: 90,
    expectedShare: "18%",
    cpa: "₹5.55",
    whyItWorks: "Final-year engineering students live on LinkedIn during placement season, desperately stalking batchmates who got offers. Seeing peers receive their 'VIP Workshop Access Pass' triggers intense loss aversion and FOMO ('If my batchmates are learning AI project deployment, I cannot get left behind').",
    tactics: [
      "Students generate an AI Placement Readiness Diagnostic badge to share on LinkedIn: 'I scored 42% on ATS AI Readiness. Fixing this Sunday with NxtWave.'",
      "Mobilize NxtWave alumni and campus ambassadors to share a standardized, highly personal story: 'Why my 2024 placement interview asked about RAG pipelines, not binary trees.'",
      "Leverage student comments to trigger automated DM delivery using keyword auto-responders."
    ]
  }
];

export const budgetAllocation = {
  total: 2000,
  currency: "INR",
  breakdown: [
    {
      category: "Viral Referral Bounty Cash Pool",
      amount: 1000,
      percentage: "50%",
      rationale: "Direct gamified cash incentives: 1st Rank = ₹500 Amazon Voucher, 2nd Rank = ₹300, 3rd Rank = ₹200. This single prize pool drives 200+ viral peer referrals at zero additional marketing cost.",
      icon: "trophy"
    },
    {
      category: "Class Representative & Club Micro-Bounties",
      amount: 500,
      percentage: "25%",
      rationale: "Micro-incentives (5 x ₹100 mobile recharges / Swiggy vouchers) for top 5 Class Reps who get at least 25 registered students from their department.",
      icon: "users"
    },
    {
      category: "WhatsApp Cloud API & Infrastructure Tokens",
      amount: 300,
      percentage: "15%",
      rationale: "Meta WhatsApp Cloud API messaging costs (~₹0.40 per outbound utility template session) for automated instant pass delivery and 24-hr reminder drips.",
      icon: "message-square"
    },
    {
      category: "Creative Assets & AI Generation Buffer",
      amount: 200,
      percentage: "10%",
      rationale: "Hosting domain / short-link tracking setup (Bitly/Dub.co) and high-impact digital banner creative generation.",
      icon: "sparkles"
    }
  ],
  unitEconomics: {
    totalTargetRegistrations: 500,
    costPerRegistration: "₹4.00",
    industryBenchmarkCPA: "₹45 - ₹120 (Paid Meta/Google Ads)",
    costSavingsVsPaidAds: "92% cheaper due to organic viral loop"
  }
};

export const sevenDayRoadmap = [
  {
    day: "Day 1",
    phase: "Foundation & Seed Distribution",
    objective: "Deploy AI Readiness scanner, recruit top 25 Class Reps, configure WhatsApp automated bot.",
    targetCumulative: 60,
    milestones: [
      "Launch the 'AI Resume & Placement Readiness Scanner' with direct referral engine.",
      "Outreach to 25 Class Reps & Club Leads across 8 colleges via personalized WhatsApp voice notes.",
      "Seed initial registration announcement in 5 core placement unofficial groups."
    ]
  },
  {
    day: "Day 2",
    phase: "The Placement Anxiety Trigger",
    objective: "Drive the core problem awareness; activate LinkedIn peer proof.",
    targetCumulative: 140,
    milestones: [
      "Release LinkedIn case study: 'Why 82% of final year engineering resumes get filtered out in 2026 rounds'.",
      "First wave of Class Rep announcements in departmental groups with dedicated referral links.",
      "Launch the Referral Leaderboard: Live counter of top students competing for ₹500 cash bounty."
    ]
  },
  {
    day: "Day 3",
    phase: "Viral Referral Expansion (K-factor Activation)",
    objective: "Activate registered students to invite batchmates to unlock the AI Interview Cheat Sheet.",
    targetCumulative: 230,
    milestones: [
      "Automated WhatsApp push to all Day 1 & 2 registrants: 'Invite 3 classmates to unlock the 50 AI Interview Questions PDF'.",
      "Club partnership announcements: 4 student tech clubs blast to their official Discord and WhatsApp channels.",
      "Monitor K-factor: Target 1.25 referrals per registrant."
    ]
  },
  {
    day: "Day 4",
    phase: "Mid-Campaign Velocity & Teaser Drop",
    objective: "Live teaser of the 60-minute project architecture; overcome technical doubt.",
    targetCumulative: 320,
    milestones: [
      "Publish 45-second screen recording of the live AI Agent running in localhost: 'Here is what you will deploy Sunday'.",
      "Host a 10-minute micro-AMA in the WhatsApp Community answering: 'Can non-coders/ECE students build this?'.",
      "Class Rep milestone check-in: Top 3 CRs awarded ₹100 recharge vouchers to spur competitive momentum."
    ]
  },
  {
    day: "Day 5",
    phase: "Scarcity & Cap Announcement",
    objective: "Introduce capacity constraint; spark urgency.",
    targetCumulative: 410,
    milestones: [
      "Send urgency broadcast: '380 of 500 Zoom server seats reserved. Cap locks at 500 to maintain live debugging support'.",
      "LinkedIn viral cascade: Registered students post their digital VIP Holographic Passes.",
      "Activate second-wave engineering branches (ECE, EEE, Mechanical transitioning to software)."
    ]
  },
  {
    day: "Day 6",
    phase: "The Final 24-Hour Blitz",
    objective: "Close remaining 90 seats; initiate pre-workshop setup onboarding.",
    targetCumulative: 485,
    milestones: [
      "Final call blast across all 35 college groups: 'Last 50 seats remaining before registration closes'.",
      "Distribute the '3-Minute Pre-Workshop Setup Guide' (browser-based, no installation required) to eliminate drop-off fear.",
      "Referral Leaderboard sprint: Top 5 referrers battle for the #1 ₹500 Amazon Voucher spot."
    ]
  },
  {
    day: "Day 7",
    phase: "D-Day Execution & Show-Up Maximizer",
    objective: "Hit 500+ registrations, maximize live show-up rate to 68%+.",
    targetCumulative: 525,
    milestones: [
      "Morning (10:00 AM): Registration cap reached (500+). Waitlist activated.",
      "T-minus 3 Hours (3:00 PM): Automated WhatsApp calendar push with 1-click Zoom joining link.",
      "T-minus 15 Minutes (5:45 PM): 'Host has opened the room. Live AI project code repository link unlocked inside'."
    ]
  }
];

export const funnelMathDefaults = {
  totalTarget: 500,
  impressions: 4200,
  clickThroughRate: 0.28, // 28% CTR on targeted WhatsApp / LinkedIn posts
  landingPageConversion: 0.32, // 32% registration on high-urgency scanner & pass
  referralFactor: 0.35, // Viral K-factor: each registered student brings 0.35 friends
  expectedShowUpRate: 0.68 // 68% show-up to live session
};

export const copywritingArsenal = [
  {
    channel: "WhatsApp - Class Rep Broadcast (Highest Conversion)",
    headline: "Class Rep Announcement: Final Year Tech Alert",
    copy: `🚨 *URGENT for Final Year Placements (2025/2026 Batch)* 🚨\n\nGuys, recruiters from TCS, Infosys, Accenture & product startups are straight up rejecting resumes with standard Web Dev / Calculator / Todo projects. 85%+ of shortlisted resumes now feature AI/LLM integration.\n\n*NxtWave is conducting a FREE Hands-On 60-Minute Workshop:*\n🚀 *"Build Your First AI Project in 60 Minutes"*\n\n✅ Build & deploy a live Multimodal AI Agent from scratch\n✅ Add verified GitHub repo & live link to your resume this weekend\n✅ Verified Certificate of AI Competency\n✅ No heavy ML math or GPU needed (Beginner friendly)\n\n⚡ *Only 500 free seats available across colleges*:\n👉 Register in 10 seconds: [LINK]\n\n(P.S. They give you a free AI Interview Questions PDF when you register!)`
  },
  {
    channel: "WhatsApp - Peer-to-Peer Viral Share (Referral Loop)",
    headline: "1-Click Student Share Message",
    copy: `Bro, check this out — NxtWave is doing a free 60-minute session this Sunday where we actually build and deploy an AI project for placement resumes. I just got my VIP pass! Use my invite link so we can sit in the same breakout room: [CUSTOM_REFERRAL_LINK]`
  },
  {
    channel: "LinkedIn - Placement Fear-to-Action Post",
    headline: "LinkedIn FOMO Post Template",
    copy: `Unpopular truth about 2026 campus placements:\n\nA resume with a "Hospital Management System" or "E-Commerce Clone" is no longer enough to get shortlisted.\n\nEvery recruiter I've spoken to is filtering for candidates who understand:\n1. How to prompt & integrate LLM APIs\n2. How to build Retrieval-Augmented Generation (RAG)\n3. How to ship real AI-powered features\n\nThis Sunday, I'm building my first live AI project with NxtWave in 60 minutes.\n\nIt's completely free, and you walk away with a deployed project on your GitHub.\n\nIf you're in final year and preparing for drives, don't miss this: [LINK]\n\n#placements #engineering #ai #softwareengineering #nxtwave`
  }
];
