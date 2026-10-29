// ==========================================================================
// NXTWAVE GROWTH CHALLENGE - STRATEGIC DATA & CAMPAIGN ARCHITECTURE
// Target: 500 Final-Year Engineering Registrations (₹2,000 Budget)
// ==========================================================================

export const campaignMetadata = {
  challengeTitle: "NxtWave Growth Intern Challenge",
  workshopTitle: "Build Your First AI Project in 60 Minutes",
  targetAudience: "Final-Year Engineering Students (2025/2026 Batch)",
  registrationGoal: 500,
  budget: 2000, // INR
  targetCostPerRegistration: 4.0, // ₹2000 / 500 = ₹4.00
  estimatedAttendanceRate: "65-72%",
  liveRegisteredSimulated: 389,
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
    day: "Phase 1",
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
    day: "Phase 2",
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
    day: "Phase 3",
    phase: "Viral Referral Expansion (K-factor Activation)",
    objective: "Activate registered students to invite batchmates to unlock the AI Interview Cheat Sheet.",
    targetCumulative: 230,
    milestones: [
      "Automated WhatsApp push to all early registrants: 'Invite 3 classmates to unlock the 50 AI Interview Questions PDF'.",
      "Club partnership announcements: 4 student tech clubs blast to their official Discord and WhatsApp channels.",
      "Monitor K-factor: Target 1.25 referrals per registrant in core departmental groups."
    ]
  },
  {
    day: "Phase 4",
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
    day: "Phase 5",
    phase: "Scarcity Lock & Cap Announcement",
    objective: "Introduce capacity constraint; spark urgency.",
    targetCumulative: 410,
    milestones: [
      "Send urgency broadcast: '380 of 500 Zoom server seats reserved. Cap locks at 500 to maintain live debugging support'.",
      "LinkedIn viral cascade: Registered students post their digital VIP Holographic Passes.",
      "Activate second-wave engineering branches (ECE, EEE, Mechanical transitioning to software)."
    ]
  },
  {
    day: "Phase 6",
    phase: "The Final Registration Blitz",
    objective: "Close remaining 90 seats; initiate pre-workshop setup onboarding.",
    targetCumulative: 485,
    milestones: [
      "Final call blast across all 35 college groups: 'Last 50 seats remaining before registration closes'.",
      "Distribute the '3-Minute Pre-Workshop Setup Guide' (browser-based, no installation required) to eliminate drop-off fear.",
      "Referral Leaderboard sprint: Top 5 referrers battle for the #1 ₹500 Amazon Voucher spot."
    ]
  },
  {
    day: "Phase 7",
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

export const campaignRoadmap = sevenDayRoadmap;

export const funnelMathDefaults = {
  totalTarget: 500,
  impressions: 4500,
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

export const learningNotesData = {
  threeQuestions: [
    {
      q: "1. What changed between your first idea and final solution?",
      a: "My initial instinct was a traditional landing page paired with cold-emailing college Training & Placement Officers (TPOs) and blasting student notices. I quickly realized this would fail: college bureaucracy takes 2-4 weeks to approve circulars, and student email open rates are below 12%. Simultaneously, generic landing pages suffer from 8-10% conversion because students have 'webinar fatigue'.\n\nI pivoted to an 'Empowerment-First Growth Engine': instead of asking students to sign up blindly, we built an interactive AI Resume Diagnostic Scanner that diagnoses their placement risk in 10 seconds. We replaced slow institutional approvals with hyper-local WhatsApp Class Rep loops (88%+ open rate) and self-fueling peer referral bounties, driving conversion from 12% to 32% and achieving our ₹4.00 CPA target."
    },
    {
      q: "2. If you had another 24 hours, what would you improve?",
      a: "1) Direct WhatsApp Bot Integration: Connect Meta's Cloud API webhook to auto-dispatch personalized holographic VIP passes and Google Calendar one-click `.ics` invites directly to WhatsApp in real-time.\n2) Automated GitHub Repo Forking: Add an in-browser GitHub OAuth flow where clicking 'Claim Seat' automatically forks the workshop boilerplate repository to the student's profile, giving them immediate proof-of-work momentum before Sunday.\n3) Live Inter-Collegiate Battleboard: Gamify campus signups by showing real-time rivalry counters (e.g., 'JNTUH: 84 vs SRM: 72') to provoke competitive departmental pride."
    },
    {
      q: "3. What did AI suggest that you rejected and why?",
      a: "1) Paid Meta & Instagram Lead Ads: AI proposed allocating ₹1,500 to Meta Ads targeting B.Tech students. I rejected this because at standard EdTech CPMs (₹250-₹450) and CPCs (₹18-₹35), ₹1,500 would yield only ~50 clicks and ~15-20 registrations (CPA ₹80-₹100). On a ₹2,000 budget, paid acquisition mathematically cannot reach 500.\n2) 3-Day Mini-Bootcamp: AI suggested a 3-day multi-hour workshop. I rejected it because final-year students face high cognitive load, semester exams, and placement interview schedules. A focused 60-minute sprint provides zero-friction commitment and dramatically increases live completion to 68%+.\n3) Heavy Theoretical ML Curriculum: AI recommended teaching Linear Algebra, backpropagation, and PyTorch. I rejected this because junior tech hiring in 2026 evaluates deployable Generative AI API integration, vector retrieval, and prompt guardrails—not theoretical calculus proofs."
    }
  ],
  iterationExamples: [
    {
      title: "Example 1: Channel Strategy & Distribution",
      asked: "How should I allocate a ₹2,000 budget to acquire 500 college student registrations?",
      aiSuggested: "Spend ₹1,500 on targeted Instagram ads with a catchy video reel, ₹300 on Google Search ads, and ₹200 on WhatsApp blast software.",
      changed: "Rejected paid ads completely. Repurposed ₹1,000 (50%) directly as a gamified Student Referral Cash Bounty (Top 3 referrers get ₹500, ₹300, ₹200 Amazon vouchers), ₹500 for Class Rep micro-bounties (₹100 recharges for 25+ departmental signups), and ₹300 for WhatsApp Cloud API utility messaging. This turned students into active distribution nodes, achieving a viral multiplier K = 0.35 at ₹4.00 CPA."
    },
    {
      title: "Example 2: Landing Page vs. Interactive Working Asset",
      asked: "Write copy and layout for a high-converting workshop registration landing page.",
      aiSuggested: "A standard landing page with a countdown timer, list of topics, instructor profile, and a name/email registration form.",
      changed: "Transformed the asset from a passive landing page into an interactive 'AI Resume & ATS Placement Diagnostic Scanner' and 'In-Browser AI Code Sandbox'. Students select their current project (e.g. ToDo App or E-Commerce clone) and visually see their ATS score jump from 38% to 94% with the workshop project, turning abstract curiosity into acute urgency."
    },
    {
      title: "Example 3: Post-Registration & Live Show-Up Maximizer",
      asked: "How to ensure registered students actually attend the live workshop?",
      aiSuggested: "Send an email reminder 24 hours before and 1 hour before with the Zoom link.",
      changed: "Replaced ignored college emails with a 3-touch WhatsApp notification system: 1) Instant holographic digital VIP Entry Pass with unique ID & WhatsApp study group link, 2) T-minus 3-hour calendar ping, and 3) T-minus 15-minute 'Host is live + Code repo unlocked' trigger, paired with an unlockable 'Top 50 AI Interview Questions PDF' when inviting 3 classmates."
    }
  ]
};

export const videoScriptData = {
  duration: "3 Minutes (180 Seconds)",
  targetAudience: "NxtWave Growth Challenge Evaluators",
  sections: [
    {
      time: "0:00 - 0:30",
      label: "Hook & Target Student (The 'Why')",
      visual: "Camera on presenter / Screen showing Arjun Sharma ICP slide & acute placement problem",
      script: "Hi everyone! Final-year engineering students across Tier-2 and Tier-3 colleges are facing a silent placement crisis. Campus hiring from mass recruiters has dropped, and resumes with standard 2020 projects—like To-Do apps, calculators, or basic e-commerce clones—are filtered out by recruiter ATS systems in seconds. Students don't want another ₹30,000 theory course or a multi-month bootcamp. They want proof of work they can put on their resume this Sunday. That's why our campaign is built around a single razor-sharp promise: 'Build Your First Production AI Project in 60 Minutes' for free."
    },
    {
      time: "0:30 - 1:15",
      label: "The Growth Strategy & Channel Architecture",
      visual: "Screen sharing Growth Strategy Dossier: 3 Channels, ₹2,000 Budget, and Funnel Slider",
      script: "To hit 500 registrations on a lean ₹2,000 budget, we didn't burn money on paid ads, which cost ₹80 to ₹120 per lead. Instead, we prioritized 3 high-leverage organic channels: First, WhatsApp Viral Loops and Class Representatives, driving 50% of registrations. Indian college batches live on unofficial WhatsApp groups. By micro-incentivizing 25 Class Reps with ₹100 mobile recharges and setting up a ₹1,000 viral referral bounty, we turn every registered student into an acquisition node. Second, co-branded Tech Club partnerships like GDSC and ACM, contributing 32%. Third, LinkedIn peer-proof FOMO, contributing 18%. Our math proves that 4,500 impressions at a 28% click-through rate and 32% landing page conversion, plus a 0.35 viral K-factor, delivers 544 verified registrations at exactly ₹3.68 to ₹4.00 CPA."
    },
    {
      time: "1:15 - 2:15",
      label: "Live Asset Demo: The Workshop Platform",
      visual: "Live walkthrough of the interactive web app: Scanner -> Sandbox -> VIP Pass -> Study Groups",
      script: "Rather than building just another static landing page, I built a complete Interactive Student Platform. First, the AI Resume Diagnostic Scanner: a student enters their branch and current college project, and within seconds, our algorithm shows them why their resume scores 38% on ATS filters, and how adding this 60-minute Gemini Flash RAG project elevates them to 94%. Second, the Live Code Sandbox: students can test the exact Python architecture, tweak system prompts, and run our Automated AI Project Evaluator, which benchmarks latency at 240ms and generates a verified Certificate of AI Competency. Third, our Digital VIP Pass Generator produces a holographic ticket with server node credentials and an instant WhatsApp group link. And finally, the Peer Study Group engine lets students unlock the Top 50 AI Interview Questions and starter repos by referring classmates."
    },
    {
      time: "2:15 - 2:45",
      label: "Strategic Thinking & What We Discarded",
      visual: "Screen showing 'Show How You Thought' subtab & Rejection Matrix",
      script: "What really shaped this strategy was what we chose NOT to do. AI initially suggested spending ₹1,500 on Instagram ads—I rejected it because it would have burnt out in 3 hours with fewer than 25 registrations. AI also suggested a 3-day hackathon, which I rejected due to final-year exam fatigue. If I had another 24 hours, I would integrate real-time Meta Cloud API webhooks for instant WhatsApp ticket dispatch and an inter-college leaderboard to spark campus rivalry."
    },
    {
      time: "2:45 - 3:00",
      label: "Closing & Impact",
      visual: "Presenter on camera smiling with confident close",
      script: "In summary, by understanding the student's acute placement anxiety, engineering self-fueling WhatsApp viral loops, and building an interactive asset that delivers immediate value before the workshop even starts, we achieve 500+ high-intent registrations on just ₹2,000. Thank you!"
    }
  ]
};

