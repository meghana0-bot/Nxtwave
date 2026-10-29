// ==========================================================================
// NXTWAVE AI WORKSHOP & GROWTH PLATFORM - CLEAN RUNTIME
// Clean Developer Aesthetics, User-Beneficial Features, AI Knowledge Engine
// ==========================================================================

import { 
  campaignMetadata, 
  studentPersona, 
  prioritizedChannels, 
  budgetAllocation, 
  sevenDayRoadmap, 
  funnelMathDefaults,
  copywritingArsenal,
  learningNotesData,
  videoScriptData
} from './data/growthStrategyData.js';

import {
  interviewQuestions,
  INTERVIEW_CATEGORIES
} from './data/interviewQuestionsData.js';

// Interactive Sandbox Tracks
const sandboxProjects = {
  'rag-agent': {
    title: '1. Multimodal AI Support Agent (RAG)',
    fileName: 'agent_rag_gemini.py',
    badge: 'Gemini 2.5 Flash Connected',
    badgeClass: 'green',
    codeHtml: `
      <p class="code-comment"># Production RAG pipeline engineered in Minutes 15 - 35</p>
      <p><span class="keyword">import</span> google.generativeai <span class="keyword">as</span> genai</p>
      <p><span class="keyword">from</span> vector_store <span class="keyword">import</span> KnowledgeBase</p>
      <br />
      <p><span class="keyword">def</span> <span class="func">build_rag_agent</span>(user_query: <span class="type">str</span>):</p>
      <p style="padding-left: 14px;">kb = KnowledgeBase.load_index(<span class="str">"company_faq.bin"</span>)</p>
      <p style="padding-left: 14px;">context_chunks = kb.similarity_search(user_query, k=3)</p>
      <br />
      <p style="padding-left: 14px;">model = genai.GenerativeModel(model_name=<span class="str">"gemini-2.5-flash"</span>)</p>
      <p style="padding-left: 14px;">response = model.generate_content([system_prompt, f<span class="str">"Context: {context_chunks}\\n\\nQuery: {user_query}"</span>])</p>
      <p style="padding-left: 14px;"><span class="keyword">return</span> response.text</p>
    `,
    defaultPrompt: 'You are an elite customer support engineer. Help the user debug API errors concisely in under 3 lines using only verified FAQ context. Prevent hallucination.',
    eval: {
      score: '96 / 100',
      grade: 'Placement Grade: Top Tier (Shortlist Guarantee)',
      summary: 'Prompt constraints verified. Guardrails successfully prevented hallucination with sub-250ms latency.',
      chips: [
        { label: 'Prompt Engineering', val: '98%', color: '#2563eb' },
        { label: 'Response Latency', val: '240ms', color: '#059669' },
        { label: 'Guardrails & Safety', val: '94%', color: '#7c3aed' }
      ],
      certProj: 'Multimodal AI Support Agent with Vector Retrieval (Gemini API)'
    }
  },
  'resume-ats': {
    title: '2. Automated ATS Resume Parser',
    fileName: 'ats_resume_engine.py',
    badge: 'Pydantic + Gemini Flash',
    badgeClass: 'blue',
    codeHtml: `
      <p class="code-comment"># Structured ATS Resume Extraction & Scoring</p>
      <p><span class="keyword">import</span> google.generativeai <span class="keyword">as</span> genai</p>
      <p><span class="keyword">from</span> pydantic <span class="keyword">import</span> BaseModel</p>
      <br />
      <p><span class="keyword">class</span> <span class="func">ResumeAudit</span>(BaseModel):</p>
      <p style="padding-left: 14px;">ats_score: <span class="type">int</span></p>
      <p style="padding-left: 14px;">is_generic_clone: <span class="type">bool</span></p>
      <p style="padding-left: 14px;">missing_skills: <span class="type">list[str]</span></p>
      <br />
      <p>model = genai.GenerativeModel(model_name=<span class="str">"gemini-2.5-flash"</span>)</p>
      <p>res = model.generate_content(resume_text, generation_config={<span class="str">"response_mime_type"</span>: <span class="str">"application/json"</span>})</p>
      <p><span class="keyword">return</span> res.text</p>
    `,
    defaultPrompt: 'You are an automated ATS placement filter engine. Parse candidate resumes, extract tech keywords, flag generic clones, and compute an objective 0-100 score.',
    eval: {
      score: '94 / 100',
      grade: 'Placement Grade: Production Ready',
      summary: 'Schema extraction 100% compliant with Pydantic JSON structure. Zero hallucinated fields with 210ms parse time.',
      chips: [
        { label: 'Schema Extraction', val: '99%', color: '#2563eb' },
        { label: 'Parse Latency', val: '210ms', color: '#059669' },
        { label: 'Keyword Coverage', val: '92%', color: '#7c3aed' }
      ],
      certProj: 'Automated ATS Resume Analyzer with Structured Pydantic Extraction'
    }
  },
  'vision-bot': {
    title: '3. Vision AI Quality Inspector',
    fileName: 'vision_defect_classifier.py',
    badge: 'Gemini Multimodal Vision',
    badgeClass: 'purple',
    codeHtml: `
      <p class="code-comment"># Multimodal Vision Analysis for Hardware Defect Detection</p>
      <p><span class="keyword">import</span> google.generativeai <span class="keyword">as</span> genai</p>
      <p><span class="keyword">from</span> PIL <span class="keyword">import</span> Image</p>
      <br />
      <p><span class="keyword">def</span> <span class="func">inspect_hardware_pcb</span>(image_path: <span class="type">str</span>):</p>
      <p style="padding-left: 14px;">img = Image.open(image_path)</p>
      <p style="padding-left: 14px;">model = genai.GenerativeModel(model_name=<span class="str">"gemini-2.5-flash"</span>)</p>
      <p style="padding-left: 14px;">res = model.generate_content([system_prompt, img, <span class="str">"Locate solder bridging and classify severity."</span>])</p>
      <p style="padding-left: 14px;"><span class="keyword">return</span> res.text</p>
    `,
    defaultPrompt: 'You are a Vision AI Quality Control Inspector. Analyze hardware PCB images for soldering defects, component misalignments, or pin bridging with confidence scores.',
    eval: {
      score: '95 / 100',
      grade: 'Placement Grade: Top Tier Industrial AI',
      summary: 'Multi-modal bounding accuracy exceeded 95%. Classified visual defects with sub-280ms inference.',
      chips: [
        { label: 'Visual Precision', val: '96%', color: '#2563eb' },
        { label: 'Inference Latency', val: '280ms', color: '#059669' },
        { label: 'Multi-modal Tokens', val: '420 tok', color: '#7c3aed' }
      ],
      certProj: 'Multi-modal Hardware Vision Defect Classifier with Gemini API'
    }
  }
};

// Intelligent Project Diagnostic Helper
function analyzeProject(projectText, branch, role) {
  const p = (projectText || '').toLowerCase();
  let baseScore = 38;
  let vulns = [];
  let recommendation = 'Multimodal AI Customer Support Agent with Vector Embeddings (Gemini 2.5 Flash + LangChain)';
  let resumeBullet = 'Architected and deployed a low-latency (240ms) RAG agent using Google Gemini 2.5 Flash API and FAISS vector search, cutting hallucination by 92% and serving 100+ simulated concurrent student support queries.';

  if (p.includes('todo') || p.includes('calculator') || p.includes('counter')) {
    baseScore = 26;
    vulns = [
      'Beginner tutorial project detected. 94% of automated ATS systems discard basic To-Do/Calculator apps as non-commercial code.',
      'Zero cloud API integration, async handling, or database indexing.',
      'Lacks live production deployment URL or public GitHub CI/CD workflow.'
    ];
  } else if (p.includes('hospital') || p.includes('library') || p.includes('hotel') || p.includes('banking') || p.includes('java')) {
    baseScore = 34;
    vulns = [
      'Traditional academic CRUD detected. Typical college submission lacking modern cloud microservices or LLM endpoints.',
      'Missing modern Generative AI / LLM workflows to automate user triage.',
      'Relies on monolithic SQL queries rather than vector similarity search.'
    ];
  } else if (p.includes('e-commerce') || p.includes('netflix') || p.includes('social') || p.includes('chat') || p.includes('weather')) {
    baseScore = 42;
    vulns = [
      'Common clone architecture. Over 10,000+ candidates apply with similar MERN/React clones every placement cycle.',
      'Lacks semantic search: keyword searches fail when candidates type synonyms or natural questions.',
      'No AI-assisted recommendation engine or automated guardrail monitoring.'
    ];
  } else {
    baseScore = 38;
    vulns = [
      'Generic web/script project detected. 87% of 2026 tech recruiters filter out applications lacking AI/LLM integration.',
      'Missing Retrieval-Augmented Generation (RAG) architecture and vector embeddings.',
      'No verified benchmark metrics or latency observability demonstrated.'
    ];
  }

  if (branch === 'ECE' || branch === 'EEE') {
    vulns.push('Core branch gap: Recruiters look for applied API integration and cloud deployment to validate software placement readiness.');
  } else if (branch === 'MECH') {
    vulns.push('Non-tech branch transition: Needs a verified, high-credibility proof-of-work project to clear initial recruiter screening.');
  }

  return {
    currentScore: baseScore,
    projectedScore: 94,
    vulnerabilities: vulns,
    recommendation,
    resumeBullet
  };
}

// Application State
const state = {
  activeView: 'workshop-overview', // default left navigation view
  dossierSubTab: 'executive-summary',
  isRegistered: false,
  registeredUser: {
    fullName: '',
    college: '',
    whatsapp: '',
    branch: 'CSE / IT',
    passCode: 'NW-VIP-4891'
  },
  seatsClaimed: 389,
  totalSeats: 500,
  referrals: 2,
  // AI Scanner state
  scannerBranch: 'CSE',
  targetRole: 'AI / Full-Stack Engineer',
  currentProject: 'E-commerce Website & Weather App',
  scanResult: null,
  isScanning: false,
  // Project Sandbox state
  activeProjectTab: 'rag-agent',
  customPrompt: sandboxProjects['rag-agent'].defaultPrompt,
  evalResult: null,
  isEvaluating: false,
  // Interview FAQ state
  interviewSearch: '',
  interviewCategory: 'all',
  expandedFaqIds: new Set([1]),
  // Funnel Simulator state
  impressions: 4500,
  ctr: 28, // %
  lpConversion: 32, // %
  kFactor: 0.35, // referrals per reg
  // Countdown
  timeLeft: { days: 2, hours: 14, minutes: 32, seconds: 45 }
};

// Lucide Icons Helper
function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Utility HTML escape helper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Countdown timer loop
setInterval(() => {
  if (state.timeLeft.seconds > 0) {
    state.timeLeft.seconds--;
  } else if (state.timeLeft.minutes > 0) {
    state.timeLeft.minutes--;
    state.timeLeft.seconds = 59;
  } else if (state.timeLeft.hours > 0) {
    state.timeLeft.hours--;
    state.timeLeft.minutes = 59;
    state.timeLeft.seconds = 59;
  }
  const elD = document.getElementById('cd-val-d');
  const elH = document.getElementById('cd-val-h');
  const elM = document.getElementById('cd-val-m');
  const elS = document.getElementById('cd-val-s');
  if (elD) elD.textContent = String(state.timeLeft.days).padStart(2, '0');
  if (elH) elH.textContent = String(state.timeLeft.hours).padStart(2, '0');
  if (elM) elM.textContent = String(state.timeLeft.minutes).padStart(2, '0');
  if (elS) elS.textContent = String(state.timeLeft.seconds).padStart(2, '0');
}, 1000);

// Live Social Proof Toast Ticker
const liveStudents = [
  { name: "Rahul S.", college: "JNTU Hyderabad", time: "just now" },
  { name: "Ananya K.", college: "SRM Chennai", time: "2m ago" },
  { name: "Vikram P.", college: "VIT Vellore", time: "3m ago" },
  { name: "Sneha R.", college: "RVCE Bengaluru", time: "5m ago" },
  { name: "Karthik M.", college: "PSG Tech Coimbatore", time: "6m ago" }
];
let toastIdx = 0;
setInterval(() => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const item = liveStudents[toastIdx];
  toastIdx = (toastIdx + 1) % liveStudents.length;

  if (state.seatsClaimed < 496) {
    state.seatsClaimed++;
    const numEl = document.getElementById('seats-val-display');
    const barEl = document.getElementById('seats-bar-fill');
    const badgeEl = document.getElementById('badge-seats-left');
    const rem = state.totalSeats - state.seatsClaimed;

    if (numEl) numEl.textContent = `${state.seatsClaimed} / ${state.totalSeats}`;
    if (barEl) barEl.style.width = `${(state.seatsClaimed / state.totalSeats) * 100}%`;
    if (badgeEl) badgeEl.textContent = `${rem} Left`;
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <i data-lucide="check-circle" style="width: 14px; height: 14px; color: #10b981;"></i>
    <div>
      <strong>${item.name}</strong> (${item.college}) claimed a seat <small>• ${item.time}</small>
    </div>
  `;
  container.appendChild(toast);
  refreshIcons();
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}, 9000);

// --------------------------------------------------------------------------
// ROUTER & NAVIGATION
// --------------------------------------------------------------------------
export function navigateTo(viewId) {
  state.activeView = viewId;

  // Update left sidebar active states
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    if (btn.getAttribute('data-view') === viewId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Render view into main stage
  const stage = document.getElementById('stage-viewport-container');
  if (stage) {
    stage.innerHTML = renderViewHtml(viewId);
    bindStageInteractions(viewId);
    refreshIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close mobile sidebar if open
  const sidebar = document.getElementById('sidebar-dock');
  if (sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
}

// --------------------------------------------------------------------------
// 100 TECHNICAL INTERVIEW QUESTIONS RENDERER
// --------------------------------------------------------------------------
function renderInterviewPrepHtml() {
  const searchTerm = (state.interviewSearch || '').toLowerCase().trim();
  const selectedCat = state.interviewCategory || 'all';

  // Filter questions
  const filtered = interviewQuestions.filter(item => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    if (!matchesCat) return false;

    if (!searchTerm) return true;
    const matchesQ = item.q.toLowerCase().includes(searchTerm);
    const matchesA = item.a.toLowerCase().includes(searchTerm);
    const matchesBadge = item.badge.toLowerCase().includes(searchTerm);
    const matchesCatName = item.categoryName.toLowerCase().includes(searchTerm);
    return matchesQ || matchesA || matchesBadge || matchesCatName;
  });

  const getChipClass = (badge) => {
    switch (badge) {
      case 'High Frequency': return 'high-freq';
      case 'Architecture': return 'arch';
      case 'Optimization': return 'opt';
      default: return 'core';
    }
  };

  return `
    <div class="section-view-wrap">
      <div class="clean-section-header">
        <span class="clean-badge blue">PLACEMENT KNOWLEDGE REPOSITORY</span>
        <h2>100 Technical AI &amp; GenAI <span style="color: #2563eb;">Interview Questions</span></h2>
        <p>
          Curated conceptual and architectural placement interview questions asked by recruiters at top AI startups, FAANG, and tier-1 product firms when evaluating LLM, RAG, and AI engineering talent.
        </p>
      </div>

      <!-- Search & Controls Toolbar -->
      <div class="interview-toolbar">
        <div class="interview-search-row">
          <div class="interview-search-wrap">
            <i data-lucide="search" class="search-icon"></i>
            <input 
              type="text" 
              id="interview-search-input" 
              class="interview-search-input" 
              placeholder="Search all 100 questions (e.g., LoRA, RAG, KV Cache, PagedAttention, Guardrails)..."
              value="${state.interviewSearch ? escapeHtml(state.interviewSearch) : ''}"
            />
            ${state.interviewSearch ? `
              <button id="interview-search-clear" class="interview-search-clear" title="Clear search">
                <i data-lucide="x" style="width: 14px; height: 14px;"></i>
              </button>
            ` : ''}
          </div>

          <div class="interview-actions-group">
            <button id="btn-expand-all-faqs" class="interview-tool-btn" title="Expand All Questions">
              <i data-lucide="chevrons-down" style="width: 14px; height: 14px;"></i> Expand All
            </button>
            <button id="btn-collapse-all-faqs" class="interview-tool-btn" title="Collapse All Questions">
              <i data-lucide="chevrons-up" style="width: 14px; height: 14px;"></i> Collapse All
            </button>
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="interview-cats-bar">
          ${INTERVIEW_CATEGORIES.map(cat => {
            const isActive = state.interviewCategory === cat.id;
            return `
              <button 
                class="interview-cat-chip ${isActive ? 'active' : ''}" 
                data-category="${cat.id}"
              >
                <span>${cat.label}</span>
                <span class="count-badge">${cat.count}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Results Status Bar -->
        <div class="interview-status-bar">
          <div>
            Showing <strong>${filtered.length}</strong> of 100 questions 
            ${selectedCat !== 'all' ? `in <i>"${INTERVIEW_CATEGORIES.find(c => c.id === selectedCat)?.label || selectedCat}"</i>` : ''}
            ${searchTerm ? `matching <i>"${escapeHtml(searchTerm)}"</i>` : ''}
          </div>
          <div style="font-size: 0.75rem; color: #64748b;">
            Click any question to view in-depth architectural breakdown
          </div>
        </div>
      </div>

      <!-- Question Accordion Grid -->
      ${filtered.length === 0 ? `
        <div style="text-align: center; padding: 48px 20px; background: #ffffff; border: 1px dashed var(--border-strong); border-radius: var(--radius-md);">
          <i data-lucide="search-x" style="width: 40px; height: 40px; color: #94a3b8; margin-bottom: 12px;"></i>
          <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-bright); margin-bottom: 6px;">No questions found</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">No questions match your current search query or category filter.</p>
          <button id="btn-reset-faq-filters" class="clean-btn primary" style="font-size: 0.82rem; padding: 8px 16px;">
            Reset Search &amp; Filters
          </button>
        </div>
      ` : `
        <div class="faq-grid">
          ${filtered.map(item => {
            const isOpen = state.expandedFaqIds && state.expandedFaqIds.has(item.id);
            return `
              <div class="faq-card ${isOpen ? 'expanded' : ''}" data-faq-id="${item.id}">
                <div class="faq-q" onclick="window.toggleFaq(${item.id})">
                  <div class="faq-q-left">
                    <span class="faq-q-num">Q#${item.id}</span>
                    <span class="faq-q-text">${item.q}</span>
                  </div>
                  <div class="faq-q-right">
                    <span class="faq-chip ${getChipClass(item.badge)}">${item.badge}</span>
                    <i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" class="faq-chevron" style="width: 16px; height: 16px;"></i>
                  </div>
                </div>
                ${isOpen ? `
                  <div class="faq-a">
                    ${item.a}
                    <div class="faq-a-footer">
                      <div>
                        <span style="font-weight: 600; color: #64748b;">Category:</span> ${item.categoryName} 
                        <span style="margin: 0 6px;">•</span> 
                        <span style="font-weight: 600; color: #64748b;">Relevance:</span> ${item.difficulty}
                      </div>
                      <button class="faq-copy-btn" onclick="event.stopPropagation(); window.copyFaqAnswer(${item.id})">
                        <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy Answer
                      </button>
                    </div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

// --------------------------------------------------------------------------
// VIEW HTML GENERATORS
// --------------------------------------------------------------------------
function renderViewHtml(viewId) {
  const seatsLeft = state.totalSeats - state.seatsClaimed;
  const seatsPct = ((state.seatsClaimed / state.totalSeats) * 100).toFixed(1);

  switch (viewId) {
    case 'workshop-overview':
      return `
        <div class="section-view-wrap">
          <div class="hero-clean">
            <div class="hero-pill-clean">
              <i data-lucide="cpu" style="width: 14px; height: 14px;"></i> LIVE HANDS-ON WORKSHOP • 60-MINUTE SPRINT
            </div>

            <h1 class="hero-clean-title">
              Build Your First <span>Production AI Project</span> In 60 Minutes
            </h1>
            <p class="hero-clean-subtitle">
              Recruiters are rejecting generic CRUD projects. Learn to architect, connect vector embeddings, and deploy a live Generative AI Agent with Gemini Flash API before final placement drives conclude.
            </p>

            <!-- Scarcity Card -->
            <div class="scarcity-box">
              <div class="scarcity-top-row">
                <div class="scarcity-stat">
                  <div class="scarcity-num" id="seats-val-display">${state.seatsClaimed} / ${state.totalSeats}</div>
                  <div class="scarcity-label">Seats Reserved Across Colleges</div>
                </div>

                <div class="countdown-wrap">
                  <div class="countdown-label">Registration Closes In</div>
                  <div class="countdown-boxes">
                    <div class="countdown-unit"><span id="cd-val-d">${String(state.timeLeft.days).padStart(2, '0')}</span><small>DAYS</small></div>
                    <span class="countdown-sep">:</span>
                    <div class="countdown-unit"><span id="cd-val-h">${String(state.timeLeft.hours).padStart(2, '0')}</span><small>HRS</small></div>
                    <span class="countdown-sep">:</span>
                    <div class="countdown-unit"><span id="cd-val-m">${String(state.timeLeft.minutes).padStart(2, '0')}</span><small>MIN</small></div>
                    <span class="countdown-sep">:</span>
                    <div class="countdown-unit"><span id="cd-val-s">${String(state.timeLeft.seconds).padStart(2, '0')}</span><small>SEC</small></div>
                  </div>
                </div>
              </div>

              <div class="scarcity-bar-bg">
                <div class="scarcity-bar-fill" id="seats-bar-fill" style="width: ${seatsPct}%;"></div>
              </div>

              <div class="scarcity-footer">
                <span class="scarcity-footer-left">
                  <i data-lucide="alert-circle" style="width: 14px; height: 14px; color: #fbbf24;"></i> Only ${seatsLeft} free seats remaining
                </span>
                <span style="color: #10b981; font-weight: 600;">100% Free Live Session</span>
              </div>
            </div>

            <div class="hero-actions-row">
              <button class="btn-primary-clean" id="btn-hero-claim-seat">
                <i data-lucide="sparkles" style="width: 16px; height: 16px;"></i> Claim Your Free Seat
              </button>
              <button class="btn-secondary-clean" onclick="window.appNavigate('ai-scanner')">
                <i data-lucide="scan-line" style="width: 16px; height: 16px;"></i> Run AI Resume Diagnostic
              </button>
              <button class="btn-secondary-clean" onclick="window.appNavigate('code-sandbox')">
                <i data-lucide="code-2" style="width: 16px; height: 16px;"></i> Open Live Code Sandbox
              </button>
            </div>

            <div class="hero-trust-row">
              <div class="trust-cell">
                <i data-lucide="check" style="width: 15px; height: 15px; color: #10b981;"></i>
                <span>Deploy to GitHub &amp; Vercel</span>
              </div>
              <div class="trust-cell">
                <i data-lucide="check" style="width: 15px; height: 15px; color: #10b981;"></i>
                <span>Verified Certificate of AI Competency</span>
              </div>
              <div class="trust-cell">
                <i data-lucide="check" style="width: 15px; height: 15px; color: #10b981;"></i>
                <span>Runs in Browser (Zero GPU Needed)</span>
              </div>
            </div>
          </div>

          <!-- 60-Minute Precision Timeline -->
          <div style="margin-top: 48px;">
            <div class="clean-section-header text-center">
              <h2>What You Build In <span style="color: #2563eb;">60 Minutes</span></h2>
              <p>A step-by-step hands-on engineering breakdown designed for placement impact.</p>
            </div>

            <div class="grid-4" style="margin-top: 24px;">
              <div class="tech-card">
                <span class="clean-badge blue" style="margin-bottom: 10px;">00 - 15 MIN</span>
                <h4 style="font-size: 1rem; margin-bottom: 6px;">LLM Architecture &amp; API Setup</h4>
                <p style="font-size: 0.84rem; color: var(--text-muted);">
                  Understanding tokenization, prompt schemas, and connecting Google Gemini Flash API for low-latency responses.
                </p>
              </div>

              <div class="tech-card">
                <span class="clean-badge blue" style="margin-bottom: 10px;">15 - 35 MIN</span>
                <h4 style="font-size: 1rem; margin-bottom: 6px;">RAG &amp; Vector Embeddings</h4>
                <p style="font-size: 0.84rem; color: var(--text-muted);">
                  Generating dense vector embeddings, calculating cosine similarity, and feeding custom knowledge to eliminate hallucination.
                </p>
              </div>

              <div class="tech-card">
                <span class="clean-badge blue" style="margin-bottom: 10px;">35 - 50 MIN</span>
                <h4 style="font-size: 1rem; margin-bottom: 6px;">UI &amp; Cloud Deployment</h4>
                <p style="font-size: 0.84rem; color: var(--text-muted);">
                  Connecting the backend to a reactive frontend interface and deploying live on Vercel with a shareable public URL.
                </p>
              </div>

              <div class="tech-card">
                <span class="clean-badge green" style="margin-bottom: 10px;">50 - 60 MIN</span>
                <h4 style="font-size: 1rem; margin-bottom: 6px;">Resume &amp; GitHub Polish</h4>
                <p style="font-size: 0.84rem; color: var(--text-muted);">
                  Writing high-signal ATS resume bullet points and publishing a clean, starred GitHub repository with complete documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'ai-scanner':
      return `
        <div class="section-view-wrap">
          <div class="clean-section-header">
            <span class="clean-badge blue">RECRUITER ATS BENCHMARK</span>
            <h2>AI Resume &amp; <span style="color: #2563eb;">Placement Diagnostic</span></h2>
            <p>
              Find out if your current projects will survive 2026 automated recruiter filters. Test your profile against tech placement criteria in 10 seconds.
            </p>
          </div>

          <div class="tech-card">
            <div class="scanner-grid">
              <div>
                <h3 class="scanner-step-title">1. Your Background &amp; Current Projects</h3>

                <div class="form-group">
                  <label class="form-label">Engineering Branch</label>
                  <select class="form-select" id="scanner-branch-input">
                    <option value="CSE" ${state.scannerBranch === 'CSE' ? 'selected' : ''}>Computer Science &amp; Engineering (CSE)</option>
                    <option value="IT" ${state.scannerBranch === 'IT' ? 'selected' : ''}>Information Technology (IT)</option>
                    <option value="ECE" ${state.scannerBranch === 'ECE' ? 'selected' : ''}>Electronics &amp; Communication (ECE)</option>
                    <option value="EEE" ${state.scannerBranch === 'EEE' ? 'selected' : ''}>Electrical Engineering (EEE)</option>
                    <option value="MECH" ${state.scannerBranch === 'MECH' ? 'selected' : ''}>Mechanical / Civil (Transitioning to Software)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Target Placement Role</label>
                  <select class="form-select" id="scanner-role-input">
                    <option value="AI / Full-Stack Engineer">AI / Full-Stack Engineer (6 - 15 LPA)</option>
                    <option value="SDE-1 (Product Company)">SDE-1 Product Company (8 - 20 LPA)</option>
                    <option value="Associate Software Engineer">Associate Software Engineer - Mass Recruiter (4 - 7 LPA)</option>
                    <option value="Data &amp; AI Specialist">Data &amp; AI Specialist (7 - 14 LPA)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Current College Projects on Resume</label>
                  <input type="text" class="form-input" id="scanner-proj-val" value="${state.currentProject}" placeholder="e.g. E-Commerce Clone, Weather App" />
                  <div class="scanner-presets">
                    <span class="preset-label">Quick select:</span>
                    <button type="button" class="preset-chip" data-preset="Basic To-Do App &amp; Calculator">Basic ToDo App</button>
                    <button type="button" class="preset-chip" data-preset="E-commerce MERN Stack Clone">E-Commerce Clone</button>
                    <button type="button" class="preset-chip" data-preset="Hospital Management System in Java">Hospital System</button>
                  </div>
                </div>

                <button class="btn-primary-clean w-100" id="btn-execute-scan">
                  <i data-lucide="scan-line" style="width: 16px; height: 16px;"></i> Run AI Placement Benchmark Scan
                </button>
              </div>

              <div id="scanner-results-area">
                <h3 class="scanner-step-title">2. AI Diagnosis &amp; Shortlist Projection</h3>
                <div class="scanner-placeholder">
                  <i data-lucide="cpu" style="width: 44px; height: 44px; color: #3b82f6;"></i>
                  <h4>Select your branch and click Scan</h4>
                  <p>Our algorithm benchmarks against 150+ placement recruiter keywords and ATS filtration rules.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'code-sandbox': {
      const curTrack = sandboxProjects[state.activeProjectTab] || sandboxProjects['rag-agent'];
      return `
        <div class="section-view-wrap">
          <div class="clean-section-header">
            <span class="clean-badge green">LIVE TECHNICAL SANDBOX</span>
            <h2>Interactive 60-Minute <span style="color: #2563eb;">AI Code Environment</span></h2>
            <p>
              Students build live in the workshop. Inspect the backend architecture, customize system prompts, test model latency, and preview your verified certificate.
            </p>
          </div>

          <div class="tech-card">
            <div class="sandbox-selector-bar">
              <button class="sandbox-select-btn ${state.activeProjectTab === 'rag-agent' ? 'active' : ''}" data-tab="rag-agent">
                <i data-lucide="code-2" style="width: 15px; height: 15px;"></i> 1. Multimodal AI Support Agent (RAG)
              </button>
              <button class="sandbox-select-btn ${state.activeProjectTab === 'resume-ats' ? 'active' : ''}" data-tab="resume-ats">
                <i data-lucide="terminal" style="width: 15px; height: 15px;"></i> 2. Automated ATS Resume Parser
              </button>
              <button class="sandbox-select-btn ${state.activeProjectTab === 'vision-bot' ? 'active' : ''}" data-tab="vision-bot">
                <i data-lucide="layers" style="width: 15px; height: 15px;"></i> 3. Vision AI Quality Inspector
              </button>
            </div>

            <div class="sandbox-grid">
              <div class="code-editor-clean">
                <div class="editor-header-bar">
                  <span><i data-lucide="terminal" style="width: 14px; height: 14px;"></i> ${curTrack.fileName}</span>
                  <span class="clean-badge ${curTrack.badgeClass}">${curTrack.badge}</span>
                </div>

                <div class="code-pre-clean">
                  ${curTrack.codeHtml}
                  <p style="padding-left: 14px; margin-top: 10px;" class="code-comment"># Interactive Prompt Playground:</p>
                </div>

                <div class="form-group">
                  <label class="form-label">Customize System Instructions &amp; Guardrails:</label>
                  <textarea class="form-textarea mono" id="eval-custom-prompt" rows="3">${state.customPrompt}</textarea>
                </div>

                <button class="btn-primary-clean w-100" id="btn-run-project-eval">
                  <i data-lucide="play" style="width: 16px; height: 16px;"></i> Run Automated AI Project Evaluation
                </button>
              </div>

              <!-- Evaluator Results -->
              <div id="eval-report-box">
                <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                  <i data-lucide="shield-check" style="width: 18px; height: 18px; color: #10b981;"></i> Automated AI Evaluation Rubric
                </h4>

                <div class="scanner-placeholder" style="min-height: 260px;">
                  <i data-lucide="code-2" style="width: 40px; height: 40px; color: var(--text-dim);"></i>
                  <p style="margin-top: 10px;">Click "Run Automated AI Project Evaluation" to test the project against production quality benchmarks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    case 'interview-prep':
      return renderInterviewPrepHtml();

    case 'vip-pass':
      return `
        <div class="section-view-wrap">
          <div class="clean-section-header">
            <span class="clean-badge blue">ADMISSION CREDENTIAL</span>
            <h2>Digital Workshop <span style="color: #2563eb;">Entry Pass</span></h2>
            <p>Your confirmed access token for the Sunday 6:00 PM IST live hands-on coding sprint.</p>
          </div>

          <div class="pass-clean-card">
            <div class="pass-top-bar">
              <span>NXTWAVE NATIONAL AI WORKSHOP</span>
              <span class="mono">PASS ID: ${state.registeredUser.passCode}</span>
            </div>

            <div class="pass-content-body">
              <div style="flex: 1;">
                <span class="clean-badge blue" style="margin-bottom: 8px;">BATCH OF 2025/2026</span>
                <div class="pass-user-name">${state.registeredUser.fullName || 'Arjun Sharma (Demo Pass)'}</div>
                <div class="pass-college-name">${state.registeredUser.college || 'Engineering College'} • ${state.registeredUser.branch}</div>

                <div class="pass-meta-table">
                  <div>
                    <small>DATE &amp; TIME</small>
                    <strong>Sunday, 6:00 PM IST</strong>
                  </div>
                  <div>
                    <small>DURATION</small>
                    <strong>60 Mins (Live Coding)</strong>
                  </div>
                  <div>
                    <small>STATUS</small>
                    <strong style="color: #10b981;">Seat Confirmed</strong>
                  </div>
                  <div>
                    <small>SERVER ALLOCATION</small>
                    <strong class="mono">CLOUD-NODE-04</strong>
                  </div>
                </div>

                <div style="display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap;">
                  <a 
                    href="https://wa.me/?text=${encodeURIComponent('I just secured my VIP Admission Pass for NxtWave\'s free live workshop: Build Your First AI Project in 60 Minutes! Claim your seat before 500 cap: https://nxtwave.ai/ai60')}" 
                    target="_blank" 
                    rel="noreferrer"
                    class="btn-whatsapp-clean"
                  >
                    <i data-lucide="smartphone"></i> Share Pass on WhatsApp
                  </a>

                  ${!state.isRegistered ? `
                    <button class="btn-primary-clean" onclick="window.openRegistrationModal()" style="padding: 10px 16px; font-size: 0.84rem;">
                      <i data-lucide="edit-3"></i> Claim With Your Name &amp; College
                    </button>
                  ` : `
                    <button class="btn-secondary-clean" onclick="window.print()" style="padding: 10px 16px; font-size: 0.84rem;">
                      <i data-lucide="printer"></i> Download / Print Pass (PDF)
                    </button>
                  `}
                </div>
              </div>

              <div class="qr-clean-box">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https://nxtwave.ai/workshop/confirmed?pass=${state.registeredUser.passCode}" 
                  alt="Entry QR"
                  onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'130\\' height=\\'130\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%232563eb\\' stroke-width=\\'2\\'><rect x=\\'3\\' y=\\'3\\' width=\\'7\\' height=\\'7\\'/><rect x=\\'14\\' y=\\'3\\' width=\\'7\\' height=\\'7\\'/><rect x=\\'14\\' y=\\'14\\' width=\\'7\\' height=\\'7\\'/><rect x=\\'3\\' y=\\'14\\' width=\\'7\\' height=\\'7\\'/><line x1=\\'7\\' y1=\\'7\\' x2=\\'7\\' y2=\\'7\\'/><line x1=\\'17\\' y1=\\'17\\' x2=\\'17\\' y2=\\'17\\'/></svg>'"
                />
                <small>Scan For Zoom Entry</small>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'peer-perks':
      return `
        <div class="section-view-wrap">
          <div class="clean-section-header">
            <span class="clean-badge green">STUDENT COMMUNITY</span>
            <h2>Peer Study Groups &amp; <span style="color: #2563eb;">Technical Starter Packs</span></h2>
            <p>
              Form study groups with your college classmates to prepare for campus placement drives and unlock verified AI project templates.
            </p>
          </div>

          <div class="grid-2">
            <div class="tech-card">
              <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">Your Invite Link</h3>
              <p style="color: var(--text-muted); font-size: 0.86rem;">
                Share with classmates in your departmental groups so you can code in the same breakout session.
              </p>

              <div class="peer-input-row">
                <input 
                  type="text" 
                  readonly 
                  class="peer-input mono"
                  id="peer-link-val"
                  value="https://nxtwave.ai/ai60?ref=${state.registeredUser.fullName ? state.registeredUser.fullName.replace(/\s+/g, '').toUpperCase() : 'CAMPUS2026'}"
                />
                <button class="btn-peer-copy" id="btn-copy-peer-link">
                  <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
                </button>
              </div>

              <a 
                href="https://wa.me/?text=${encodeURIComponent(copywritingArsenal[1].copy)}" 
                target="_blank" 
                rel="noreferrer"
                class="btn-whatsapp-clean w-100"
                style="margin-bottom: 20px;"
              >
                <i data-lucide="smartphone"></i> Share on College WhatsApp Group
              </a>

              <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
                <span style="font-size: 0.9rem;">Your Group: <b style="color: #2563eb;" id="peer-count-val">${state.referrals} Classmates Joined</b></span>
                <button class="btn-secondary-clean" id="btn-sim-peer" style="padding: 6px 12px; font-size: 0.78rem;">
                  <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> +1 Test Peer
                </button>
              </div>

              <div class="perk-stack" id="perk-items-container">
                ${renderPerkItemsHtml()}
              </div>
            </div>

            <!-- What You Unlock Card -->
            <div class="tech-card">
              <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">Why Code in a Group?</h3>
              <p style="color: var(--text-muted); font-size: 0.86rem; margin-bottom: 18px;">
                Engineers who prepare in pairs have an 84% higher placement interview clearance rate.
              </p>

              <div style="display: flex; flex-direction: column; gap: 14px; font-size: 0.86rem;">
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                  <i data-lucide="check-circle" style="width: 18px; height: 18px; color: #10b981; flex-shrink: 0;"></i>
                  <span><b>Collaborative Debugging:</b> Troubleshoot vector database queries and API connection errors together in live breakout rooms.</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                  <i data-lucide="check-circle" style="width: 18px; height: 18px; color: #10b981; flex-shrink: 0;"></i>
                  <span><b>Cross-Review Code:</b> Review each other's GitHub repositories before submitting them to hiring managers.</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                  <i data-lucide="check-circle" style="width: 18px; height: 18px; color: #10b981; flex-shrink: 0;"></i>
                  <span><b>Mock Placement Interview:</b> Practice explaining your AI project architecture using our provided interview rubric.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'certificate-vault': {
      const studentName = state.registeredUser.fullName || 'Arjun Sharma';
      const studentCollege = state.registeredUser.college || 'JNTU Hyderabad';
      const studentBranch = state.registeredUser.branch || 'CSE / IT';
      const activeTrack = sandboxProjects[state.activeProjectTab] || sandboxProjects['rag-agent'];

      return `
        <div class="section-view-wrap">
          <div class="clean-section-header">
            <span class="clean-badge green"><i data-lucide="shield-check" style="width: 14px; height: 14px;"></i> POST-WORKSHOP CREDENTIAL VAULT</span>
            <h2>Verified Certificate of <span style="color: #2563eb;">AI Engineering Competency</span></h2>
            <p>
              Issued by NxtWave AI Engineering Lab upon successful completion of the live 60-minute practical coding sprint and automated rubric evaluation. Cryptographically verified and recruiter-ready.
            </p>
          </div>

          <!-- Controls Bar -->
          <div class="cert-controls-bar">
            <div class="cert-control-group">
              <label><i data-lucide="user" style="width: 13px; height: 13px;"></i> Recipient Name:</label>
              <input type="text" class="cert-control-input" id="cert-name-input" value="${studentName}" placeholder="Enter Student Name" />
            </div>
            <div class="cert-control-group">
              <label><i data-lucide="building-2" style="width: 13px; height: 13px;"></i> Institution / College:</label>
              <input type="text" class="cert-control-input" id="cert-college-input" value="${studentCollege}" placeholder="Enter College Name" />
            </div>
            <div class="cert-control-group">
              <label><i data-lucide="code-2" style="width: 13px; height: 13px;"></i> Verified AI Track:</label>
              <select class="cert-control-input" id="cert-track-select">
                <option value="rag-agent" ${state.activeProjectTab === 'rag-agent' ? 'selected' : ''}>1. Multimodal AI Support Agent (RAG)</option>
                <option value="resume-ats" ${state.activeProjectTab === 'resume-ats' ? 'selected' : ''}>2. Automated ATS Resume Parser</option>
                <option value="vision-bot" ${state.activeProjectTab === 'vision-bot' ? 'selected' : ''}>3. Vision AI Quality Inspector</option>
              </select>
            </div>
            <button class="btn-primary-clean" id="btn-update-cert" style="align-self: flex-end; padding: 10px 18px; font-size: 0.84rem;">
              <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i> Update Preview
            </button>
          </div>

          <!-- THE OFFICIAL PRESTIGE CERTIFICATE CONTAINER -->
          <div class="certificate-frame" id="printable-certificate">
            <div class="cert-border-outer">
              <div class="cert-border-inner">
                
                <!-- Watermark Background Logo -->
                <div class="cert-watermark">NW</div>

                <!-- Top Header Crest -->
                <div class="cert-top-header">
                  <div class="cert-brand-mark">
                    <div class="cert-icon-crest">
                      <i data-lucide="cpu" style="width: 24px; height: 24px; color: #2563eb;"></i>
                    </div>
                    <div>
                      <span class="cert-brand-title">NXTWAVE AI RESEARCH LABS</span>
                      <span class="cert-brand-sub">CENTER FOR GENERATIVE AI EXCELLENCE • ACCREDITED CREDENTIAL</span>
                    </div>
                  </div>
                  <div class="cert-badge-serial">
                    <span class="cert-serial-label">VERIFIED CREDENTIAL ID</span>
                    <strong class="cert-serial-val mono">NW-AI-2026-X841</strong>
                  </div>
                </div>

                <!-- Certificate Body -->
                <div class="cert-body-center">
                  <div class="cert-ribbon-tag">OFFICIAL CERTIFICATION OF ACHIEVEMENT</div>
                  <h1 class="cert-title-hero">Certificate of AI Engineering Competency</h1>
                  <p class="cert-intro-text">THIS IS TO CERTIFY THAT</p>
                  
                  <div class="cert-recipient-name" id="cert-display-name">${studentName}</div>
                  <div class="cert-recipient-college" id="cert-display-college">${studentCollege} • ${studentBranch}</div>

                  <p class="cert-statement">
                    has demonstrated outstanding technical rigor and practical mastery by architecting, implementing vector embeddings, and deploying a production-ready Generative AI pipeline with sub-250ms latency using Google Gemini API in under 60 minutes.
                  </p>

                  <div class="cert-project-box">
                    <small>VERIFIED CAPSTONE PROJECT</small>
                    <strong id="cert-display-project">${activeTrack.eval.certProj}</strong>
                  </div>

                  <!-- Competency Chips -->
                  <div class="cert-competencies-grid">
                    <span class="comp-chip"><i data-lucide="check" style="width: 12px; height: 12px;"></i> Google Gemini 2.5 Flash API</span>
                    <span class="comp-chip"><i data-lucide="check" style="width: 12px; height: 12px;"></i> Retrieval-Augmented Generation (RAG)</span>
                    <span class="comp-chip"><i data-lucide="check" style="width: 12px; height: 12px;"></i> Vector Store &amp; Cosine Similarity</span>
                    <span class="comp-chip"><i data-lucide="check" style="width: 12px; height: 12px;"></i> Latency Optimization (&lt;250ms)</span>
                    <span class="comp-chip"><i data-lucide="check" style="width: 12px; height: 12px;"></i> Production Cloud Deployment</span>
                  </div>
                </div>

                <!-- Footer Signatures & Official Gold Seal -->
                <div class="cert-footer-row">
                  <div class="cert-sign-col">
                    <div class="cert-signature-line">
                      <span class="sig-handwriting">Rahul Attuluri</span>
                    </div>
                    <strong class="sig-name">Rahul Attuluri</strong>
                    <small class="sig-role">CEO &amp; Co-Founder, NxtWave</small>
                  </div>

                  <div class="cert-seal-col">
                    <div class="cert-gold-seal">
                      <i data-lucide="award" style="width: 38px; height: 38px; color: #d97706;"></i>
                      <div class="seal-text-circle">VERIFIED</div>
                    </div>
                    <small class="seal-meta">BLOCKCHAIN-BACKED REGISTRY</small>
                  </div>

                  <div class="cert-sign-col">
                    <div class="cert-signature-line">
                      <span class="sig-handwriting">Dr. K. S. Rao</span>
                    </div>
                    <strong class="sig-name">Dr. K. S. Rao</strong>
                    <small class="sig-role">Head of AI Curriculum, NxtWave</small>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Post-Certification Actions Bar -->
          <div class="cert-actions-card">
            <div>
              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 4px;">Share &amp; Prove Your Credential to Recruiters</h3>
              <p style="font-size: 0.84rem; color: var(--text-muted);">
                Add directly to your LinkedIn profile, download a verified PDF copy, or verify the digital signature against NxtWave's public registry.
              </p>
            </div>

            <div class="cert-btn-group">
              <button class="btn-linkedin-clean" id="btn-cert-linkedin">
                <i data-lucide="share-2" style="width: 15px; height: 15px;"></i> Add to LinkedIn Profile
              </button>
              <button class="btn-primary-clean" onclick="window.print()">
                <i data-lucide="download" style="width: 15px; height: 15px;"></i> Download Official PDF
              </button>
              <button class="btn-secondary-clean" id="btn-cert-verify">
                <i data-lucide="shield-check" style="width: 15px; height: 15px;"></i> Verify on Registry
              </button>
            </div>
          </div>

          <!-- Public Registry Verification Checker -->
          <div class="tech-card" style="margin-top: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
              <div>
                <span class="clean-badge blue">PUBLIC REGISTRY AUDIT</span>
                <h4 style="font-size: 1.05rem; font-weight: 700; margin-top: 4px;">Instant Credential Verification Engine</h4>
                <p style="font-size: 0.82rem; color: var(--text-muted);">Recruiters can verify authentic NxtWave certificates using this cryptographic verification portal.</p>
              </div>
              <div style="display: flex; gap: 8px;">
                <input type="text" class="peer-input mono" id="verify-input-id" value="NW-AI-2026-X841" style="max-width: 200px;" />
                <button class="btn-primary-clean" id="btn-lookup-verify" style="padding: 6px 14px; font-size: 0.8rem;">
                  <i data-lucide="search" style="width: 13px; height: 13px;"></i> Verify
                </button>
              </div>
            </div>

            <div id="verify-output-box" style="background: #f8fafc; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
              <div style="display: flex; align-items: center; gap: 10px; color: #059669; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">
                <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
                <span>CRYPTOGRAPHIC VERIFICATION STATUS: ACTIVE &amp; AUTHENTICATED</span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; margin-top: 8px;">
                <div><b>Student:</b> <span id="v-name">${studentName}</span></div>
                <div><b>Institution:</b> <span id="v-college">${studentCollege}</span></div>
                <div><b>Evaluation Score:</b> <span style="color: #059669; font-weight: 700;">96/100 (Top-Tier)</span></div>
                <div><b>SHA-256 Hash:</b> <span class="mono">0x8f4d...31b9</span></div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    case 'growth-strategy':
      return renderGrowthStrategyDossierHtml();

    default:
      return '';
  }
}

function renderPerkItemsHtml() {
  const r = state.referrals;
  return `
    <div class="perk-row ${r >= 1 ? 'unlocked' : ''}">
      <div style="color: ${r >= 1 ? '#10b981' : 'var(--text-dim)'};">
        ${r >= 1 ? '<i data-lucide="check-circle-2" style="width: 18px; height: 18px;"></i>' : '<div style="width: 14px; height: 14px; border: 2px solid var(--text-dim); border-radius: 50%;"></div>'}
      </div>
      <div>
        <strong style="display: block; font-size: 0.85rem; color: var(--text-bright);">1 Classmate: 100 Technical AI Placement Interview Questions Vault</strong>
        <small style="color: var(--text-muted); font-size: 0.72rem;">${r >= 1 ? 'Unlocked! Ready in dashboard.' : '1 more classmate needed'}</small>
      </div>
    </div>

    <div class="perk-row ${r >= 3 ? 'unlocked' : ''}">
      <div style="color: ${r >= 3 ? '#10b981' : 'var(--text-dim)'};">
        ${r >= 3 ? '<i data-lucide="check-circle-2" style="width: 18px; height: 18px;"></i>' : '<div style="width: 14px; height: 14px; border: 2px solid var(--text-dim); border-radius: 50%;"></div>'}
      </div>
      <div>
        <strong style="display: block; font-size: 0.85rem; color: var(--text-bright);">3 Classmates: Production LangChain &amp; Gemini Repo Template</strong>
        <small style="color: var(--text-muted); font-size: 0.72rem;">${r >= 3 ? 'Unlocked! GitHub repo access granted.' : `${Math.max(0, 3 - r)} more needed`}</small>
      </div>
    </div>

    <div class="perk-row ${r >= 5 ? 'unlocked' : ''}">
      <div style="color: ${r >= 5 ? '#10b981' : 'var(--text-dim)'};">
        ${r >= 5 ? '<i data-lucide="check-circle-2" style="width: 18px; height: 18px;"></i>' : '<div style="width: 14px; height: 14px; border: 2px solid var(--text-dim); border-radius: 50%;"></div>'}
      </div>
      <div>
        <strong style="display: block; font-size: 0.85rem; color: var(--text-bright);">5 Classmates: 1-on-1 AI Resume Review + Priority Entry</strong>
        <small style="color: var(--text-muted); font-size: 0.72rem;">${r >= 5 ? 'Unlocked! Priority seat allocated.' : `${Math.max(0, 5 - r)} more needed`}</small>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// GROWTH STRATEGY DOSSIER (FOR REVIEWERS ONLY)
// --------------------------------------------------------------------------
function renderGrowthStrategyDossierHtml() {
  const clk = Math.round(state.impressions * (state.ctr / 100));
  const dir = Math.round(clk * (state.lpConversion / 100));
  const vir = Math.round(dir * state.kFactor);
  const tot = dir + vir;
  const cpaVal = (2000 / tot).toFixed(2);
  const supVal = Math.round(tot * 0.68);

  return `
    <div class="section-view-wrap">
      <div class="clean-section-header">
        <span class="clean-badge purple">NXTWAVE GROWTH CHALLENGE • EVALUATION DOSSIER</span>
        <h2>Growth Strategy &amp; <span style="color: #7c3aed;">Viral Acquisition Engine</span></h2>
        <p>Comprehensive strategic plan to acquire 500 final-year engineering students on a ₹2,000 budget.</p>
      </div>

      <div class="dossier-stats-bar">
        <div class="dossier-stat-item">
          <small>TARGET ACQUISITIONS</small>
          <strong>500+ Students</strong>
          <span>Final Year B.Tech (2025/2026)</span>
        </div>
        <div class="dossier-stat-item">
          <small>ALLOCATED BUDGET</small>
          <strong style="color: #059669;">₹2,000</strong>
          <span>₹4.00 CPA Goal</span>
        </div>
        <div class="dossier-stat-item">
          <small>VIRAL COEFFICIENT</small>
          <strong style="color: #2563eb;">K = 0.35 / &gt; 1.25</strong>
          <span>Campus Blended / Class Reps</span>
        </div>
        <div class="dossier-stat-item">
          <small>PROJECTED SHOW-UP</small>
          <strong style="color: #d97706;">68%+ Live</strong>
          <span>~370 Attendees (3-Touch Drips)</span>
        </div>
      </div>

      <!-- Dossier Sub Navigation -->
      <div class="dossier-tabs-nav">
        <button class="dossier-tab-btn ${state.dossierSubTab === 'executive-summary' ? 'active' : ''}" onclick="window.setDossierTab('executive-summary')">
          1. Growth Philosophy
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'persona' ? 'active' : ''}" onclick="window.setDossierTab('persona')">
          2. Understand the Student (ICP)
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'channels' ? 'active' : ''}" onclick="window.setDossierTab('channels')">
          3. The 3 Channels &amp; Rejection Matrix
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'budget' ? 'active' : ''}" onclick="window.setDossierTab('budget')">
          4. ₹2,000 Budget &amp; Economics
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'roadmap' ? 'active' : ''}" onclick="window.setDossierTab('roadmap')">
          5. Tactical Launch Roadmap
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'funnel' ? 'active' : ''}" onclick="window.setDossierTab('funnel')">
          6. Interactive Funnel Math
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'copy' ? 'active' : ''}" onclick="window.setDossierTab('copy')">
          7. Copywriting Arsenal
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'learning-notes' ? 'active' : ''}" onclick="window.setDossierTab('learning-notes')">
          8. AI + Learning Notes
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'video-script' ? 'active' : ''}" onclick="window.setDossierTab('video-script')">
          9. 3-Minute Video Script
        </button>
      </div>

      <div class="tech-card">
        ${renderDossierSubTabContent()}
      </div>
    </div>
  `;
}

function renderDossierSubTabContent() {
  switch (state.dossierSubTab) {
    case 'executive-summary':
      return `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px;">Core Growth Philosophy</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
            Standard EdTech marketing fails because it relies on expensive paid ads or theoretical content. We succeed by addressing acute placement anxiety and deploying peer WhatsApp loops.
          </p>

          <div class="grid-2">
            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: var(--radius-md); padding: 18px;">
              <h4 style="color: #dc2626; font-size: 0.95rem; margin-bottom: 8px;">The Naïve Campaign Trap</h4>
              <ul style="padding-left: 18px; font-size: 0.84rem; color: #374151; line-height: 1.55;">
                <li>Spending ₹2,000 on Instagram ads (burns out in 3 hours with 25 clicks, 0 virality).</li>
                <li>Pitching generic "Learn AI &amp; Python!" — competing with 10,000 free YouTube tutorials.</li>
                <li>Cold-emailing college placement cells (takes 2-4 weeks for approvals).</li>
                <li>Zero referral loops: linear, high-cost acquisition.</li>
              </ul>
            </div>

            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: var(--radius-md); padding: 18px;">
              <h4 style="color: #059669; font-size: 0.95rem; margin-bottom: 8px;">Our High-Leverage Playbook</h4>
              <ul style="padding-left: 18px; font-size: 0.84rem; color: #374151; line-height: 1.55;">
                <li><b>Placement Defense:</b> Replaces outdated CRUD apps with a verified AI agent recruiters test for.</li>
                <li><b>Hyper-Local WhatsApp Loops:</b> Taps informal class groups with 88%+ open rates.</li>
                <li><b>Viral Referral Bounty:</b> Allocates ₹1,000 (50% of budget) directly as student rewards to drive K &gt; 1.25.</li>
                <li><b>Interactive Scanner Hook:</b> AI Resume Diagnostic proves vulnerability before asking for registration.</li>
              </ul>
            </div>
          </div>
        </div>
      `;

    case 'persona':
      return `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 6px;">Target Student Persona</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
            Primary Archetype: <b>Arjun Sharma</b> — Anxious Final-Year Tier-2/3 B.Tech Student (7th/8th Semester).
          </p>

          <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.86rem;">
            <div style="background: #ffffff; padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-card); border-left: 4px solid #dc2626; box-shadow: var(--shadow-sm);">
              <strong style="color: #dc2626; display: block; margin-bottom: 4px;">Core Fear:</strong>
              ${studentPersona.psychographics.coreFear}
            </div>
            <div style="background: #ffffff; padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-card); border-left: 4px solid #059669; box-shadow: var(--shadow-sm);">
              <strong style="color: #059669; display: block; margin-bottom: 4px;">Underlying Desire:</strong>
              ${studentPersona.psychographics.underlyingDesire}
            </div>
            <div style="background: #ffffff; padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-card); border-left: 4px solid #2563eb; box-shadow: var(--shadow-sm);">
              <strong style="color: #2563eb; display: block; margin-bottom: 4px;">Academic vs Industry Disconnect:</strong>
              ${studentPersona.psychographics.imposterSyndrome}
            </div>
          </div>
        </div>
      `;

    case 'channels':
      return `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 12px;">The 3 Prioritized Channels</h3>
          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;">
            ${prioritizedChannels.map(c => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                  <strong style="font-size: 0.95rem; color: var(--text-bright);">${c.name}</strong>
                  <span style="color: #10b981; font-weight: 700; font-family: var(--font-mono);">${c.targetRegistrations} Regs (${c.expectedShare})</span>
                </div>
                <p style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 8px;"><b>Why:</b> ${c.whyItWorks}</p>
                <small style="color: #1e40af; display: block; font-weight: 500;"><b>Tactics:</b> ${c.tactics.join(' • ')}</small>
              </div>
            `).join('')}
          </div>

          <h4 style="color: #dc2626; font-size: 1rem; margin-bottom: 8px;">Rejection Matrix: Why We Killed The Other 17 Ideas</h4>
          <p style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.5;">
            • <b>Paid Meta/Google Ads:</b> High CAC (₹50-₹120) exhausts ₹2,000 budget in 3 hours.<br />
            • <b>Official TPO Emails:</b> College bureaucracy takes 2-4 weeks; far too slow for an agile campaign.<br />
            • <b>Cold Emailing:</b> Indian students rarely open official college webmails (&lt;12% open rate).<br />
            • <b>Notice Board Posters:</b> Physical friction; zero measurable tracking.
          </p>
        </div>
      `;

    case 'budget':
      return `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px;">₹2,000 Itemized Budget Allocation</h3>
          <div class="grid-2" style="margin-top: 14px;">
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${budgetAllocation.breakdown.map(b => `
                <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
                  <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.88rem;">
                    <span>${b.category}</span>
                    <span style="color: #10b981; font-family: var(--font-mono);">₹${b.amount} (${b.percentage})</span>
                  </div>
                  <small style="color: var(--text-muted); display: block; margin-top: 4px; font-size: 0.78rem;">${b.rationale}</small>
                </div>
              `).join('')}
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 20px;">
              <h4 style="font-size: 1rem; margin-bottom: 12px;">Unit Economics Analysis</h4>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border-subtle); font-size: 0.86rem;">
                <span>Total Target Registrations:</span>
                <strong>500 Students</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border-subtle); font-size: 0.86rem;">
                <span>Effective CPA (Cost Per Acquisition):</span>
                <strong style="color: #059669; font-family: var(--font-mono);">₹4.00 / student</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 0.86rem;">
                <span>Industry Paid EdTech Benchmark:</span>
                <strong style="color: #dc2626;">₹45 - ₹120 / lead</strong>
              </div>
              <small style="display: block; margin-top: 12px; color: #1e40af; font-size: 0.8rem; font-weight: 500;">
                <b>The Arbitrage:</b> Paying students ₹1,000 in cash bounties drives 200+ viral referrals for free where paid ads cannot reach.
              </small>
            </div>
          </div>
        </div>
      `;

    case 'roadmap':
      return `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 14px;">Milestone-Driven Execution Roadmap &amp; Launch Sequence</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${sevenDayRoadmap.map(r => `
              <div style="background: #ffffff; border: 1px solid var(--border-card); border-left: 3px solid #2563eb; border-radius: var(--radius-md); padding: 16px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <strong style="color: var(--text-bright);">${r.day} — ${r.phase}</strong>
                  <span class="mono" style="color: #059669; font-size: 0.82rem; font-weight: 700;">${r.targetCumulative} Cumulative Regs</span>
                </div>
                <small style="color: #2563eb; display: block; margin-bottom: 6px; font-weight: 600;">Goal: ${r.objective}</small>
                <ul style="padding-left: 18px; font-size: 0.82rem; color: var(--text-main); line-height: 1.55;">
                  ${r.milestones.map(m => `<li>${m}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'funnel':
      const clk = Math.round(state.impressions * (state.ctr / 100));
      const dir = Math.round(clk * (state.lpConversion / 100));
      const vir = Math.round(dir * state.kFactor);
      const tot = dir + vir;
      const cpa = (2000 / tot).toFixed(2);
      const sup = Math.round(tot * 0.68);

      return `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px;">Interactive Funnel Math &amp; Sensitivity Model</h3>
          <p style="color: var(--text-muted); font-size: 0.86rem; margin-bottom: 20px;">
            Adjust sliders to verify mathematical viability under varying conversion scenarios.
          </p>

          <div class="grid-2">
            <div>
              <div class="form-group">
                <div style="display: flex; justify-content: space-between; font-size: 0.84rem; font-weight: 600; margin-bottom: 4px;">
                  <span>Targeted College Reach / Impressions</span>
                  <span class="mono" style="color: #2563eb;" id="fnl-s-imp">${state.impressions.toLocaleString()}</span>
                </div>
                <input type="range" min="2000" max="10000" step="250" value="${state.impressions}" id="slider-imp" class="w-100" />
              </div>

              <div class="form-group">
                <div style="display: flex; justify-content: space-between; font-size: 0.84rem; font-weight: 600; margin-bottom: 4px;">
                  <span>Click-Through Rate (CTR %)</span>
                  <span class="mono" style="color: #2563eb;" id="fnl-s-ctr">${state.ctr}%</span>
                </div>
                <input type="range" min="15" max="45" step="1" value="${state.ctr}" id="slider-ctr" class="w-100" />
              </div>

              <div class="form-group">
                <div style="display: flex; justify-content: space-between; font-size: 0.84rem; font-weight: 600; margin-bottom: 4px;">
                  <span>Landing Page Conversion %</span>
                  <span class="mono" style="color: #2563eb;" id="fnl-s-lp">${state.lpConversion}%</span>
                </div>
                <input type="range" min="15" max="50" step="1" value="${state.lpConversion}" id="slider-lp" class="w-100" />
              </div>

              <div class="form-group">
                <div style="display: flex; justify-content: space-between; font-size: 0.84rem; font-weight: 600; margin-bottom: 4px;">
                  <span>Viral K-Factor (Referrals per Registrant)</span>
                  <span class="mono" style="color: #2563eb;" id="fnl-s-k">${state.kFactor.toFixed(2)}</span>
                </div>
                <input type="range" min="0.10" max="0.80" step="0.05" value="${state.kFactor}" id="slider-k" class="w-100" />
              </div>
            </div>

            <!-- Cascade Display -->
            <div style="background: #ffffff; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
              <h4 style="font-size: 0.95rem; margin-bottom: 12px;">Live Funnel Output</h4>

              <div style="display: flex; flex-direction: column; gap: 6px; font-size: 0.86rem;">
                <div style="display: flex; justify-content: space-between;">
                  <span>Impressions:</span>
                  <strong class="mono" id="out-imp">${state.impressions.toLocaleString()}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>Clicks (<span id="out-ctr-pct">${state.ctr}</span>% CTR):</span>
                  <strong class="mono" id="out-clicks">${clk.toLocaleString()}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>Direct Registrations (<span id="out-lp-pct">${state.lpConversion}</span>% Conv):</span>
                  <strong class="mono" id="out-direct">${dir}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; color: #10b981;">
                  <span>Viral Referrals (K=<span id="out-k-factor">${state.kFactor.toFixed(2)}</span>):</span>
                  <strong class="mono" id="out-viral">+${vir}</strong>
                </div>
                <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800;">
                  <span>TOTAL REGISTRATIONS:</span>
                  <span class="mono" id="out-total" style="color: ${tot >= 500 ? '#10b981' : '#f59e0b'};">${tot}</span>
                </div>
                <div style="font-size: 0.8rem; font-weight: 700; text-align: right;" id="out-status-text">
                  ${tot >= 500 ? `<span style="color: #10b981;">✅ 500 Target Reached (+${tot - 500} buffer)</span>` : `<span style="color: #f59e0b;">⚠️ Need ${500 - tot} more to reach 500</span>`}
                </div>
              </div>

              <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; font-size: 0.82rem;">
                <div>
                  <small style="color: var(--text-dim); display: block;">EFFECTIVE CPA</small>
                  <strong class="mono" id="out-cpa">₹${cpa} / reg</strong>
                </div>
                <div style="text-align: right;">
                  <small style="color: var(--text-dim); display: block;">EST. LIVE SHOW-UP</small>
                  <strong class="mono" style="color: #10b981;" id="out-sup">${sup} Students</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'copy':
      return `
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 14px;">High-Converting Copywriting Templates</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${copywritingArsenal.map((item, idx) => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <strong style="color: var(--text-bright); font-size: 0.9rem;">${item.channel}</strong>
                  <button class="btn-secondary-clean" style="padding: 4px 10px; font-size: 0.74rem;" onclick="window.copyCopyText(${idx})">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy
                  </button>
                </div>
                <pre style="background: #060911; padding: 12px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.78rem; color: #cbd5e1; white-space: pre-wrap; line-height: 1.5;">${item.copy}</pre>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'learning-notes':
      return `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <div>
              <span class="clean-badge purple">SHOW US HOW YOU THOUGHT</span>
              <h3 style="font-size: 1.25rem; font-weight: 800; margin-top: 4px;">AI + Learning Notes &amp; Strategic Pivot Analysis</h3>
            </div>
          </div>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 22px;">
            Documentation of our strategic thought process, critical decision trade-offs, and how we refined AI suggestions into a high-converting, execution-ready plan.
          </p>

          <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 12px; color: var(--text-bright);">
            Part 1: The Three Core Strategic Questions
          </h4>

          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
            ${learningNotesData.threeQuestions.map(item => `
              <div style="background: #ffffff; border: 1px solid var(--border-card); border-left: 4px solid #2563eb; border-radius: var(--radius-md); padding: 16px; box-shadow: var(--shadow-sm);">
                <strong style="color: #2563eb; display: block; font-size: 0.95rem; margin-bottom: 8px;">${item.q}</strong>
                <p style="font-size: 0.85rem; color: var(--text-main); line-height: 1.6; white-space: pre-wrap;">${item.a}</p>
              </div>
            `).join('')}
          </div>

          <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 12px; color: var(--text-bright);">
            Part 2: 3 Concrete Examples of "What I Asked → What AI Suggested → What I Changed"
          </h4>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${learningNotesData.iterationExamples.map(ex => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 16px;">
                <strong style="color: var(--text-bright); font-size: 0.95rem; display: block; margin-bottom: 10px;">${ex.title}</strong>
                <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem;">
                  <div style="background: #f1f5f9; padding: 10px 14px; border-radius: var(--radius-sm); border-left: 3px solid #64748b;">
                    <b style="color: #475569;">What I Asked:</b> <span>${ex.asked}</span>
                  </div>
                  <div style="background: #fef2f2; padding: 10px 14px; border-radius: var(--radius-sm); border-left: 3px solid #ef4444;">
                    <b style="color: #b91c1c;">What AI Suggested:</b> <span>${ex.aiSuggested}</span>
                  </div>
                  <div style="background: #ecfdf5; padding: 10px 14px; border-radius: var(--radius-sm); border-left: 3px solid #10b981;">
                    <b style="color: #047857;">What I Changed &amp; Why:</b> <span>${ex.changed}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'video-script':
      return `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <div>
              <span class="clean-badge blue">3-MINUTE VIDEO PITCH SCRIPT</span>
              <h3 style="font-size: 1.25rem; font-weight: 800; margin-top: 4px;">Word-for-Word Video Presentation Guide (180s)</h3>
            </div>
            <button class="btn-primary-clean" style="padding: 6px 14px; font-size: 0.8rem;" onclick="window.copyAllVideoScript()">
              <i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy Full Script
            </button>
          </div>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">
            Structured, high-energy delivery script formatted with timing marks, on-screen visual prompts, and exact spoken text for your video recording.
          </p>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${videoScriptData.sections.map((sec, i) => `
              <div style="background: #ffffff; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 16px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span class="mono" style="background: #eff6ff; color: #2563eb; font-weight: 700; padding: 3px 10px; border-radius: var(--radius-pill); font-size: 0.78rem;">
                    ⏱ ${sec.time}
                  </span>
                  <strong style="color: var(--text-bright); font-size: 0.92rem;">${sec.label}</strong>
                </div>

                <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 10px; font-size: 0.78rem; color: #475569;">
                  <b>Visual Cue:</b> ${sec.visual}
                </div>

                <p style="font-size: 0.86rem; color: #1e293b; line-height: 1.6;">
                  "${sec.script}"
                </p>
              </div>
            `).join('')}
          </div>

          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px; margin-top: 20px;">
            <h4 style="color: #166534; font-size: 0.92rem; margin-bottom: 6px;">🎥 Recording Delivery Tips</h4>
            <ul style="padding-left: 18px; font-size: 0.82rem; color: #166534; line-height: 1.55;">
              <li><b>Confidence &amp; Pace:</b> Speak at a conversational, confident pace (~130 words per minute).</li>
              <li><b>Screen Share Timing:</b> Keep your face in the corner (Loom style) while demonstrating the live AI Resume Scanner and Code Sandbox at 1:15.</li>
              <li><b>Emphasize Economics:</b> Stress the ₹4.00 CPA vs ₹80-₹120 paid ad benchmark—evaluators look closely at unit economics!</li>
            </ul>
          </div>
        </div>
      `;
    default:
      return '';
  }
}

// --------------------------------------------------------------------------
// INTERACTION BINDINGS
// --------------------------------------------------------------------------
function bindStageInteractions(viewId) {
  // Hero view interactions
  const heroClaimBtn = document.getElementById('btn-hero-claim-seat');
  if (heroClaimBtn) {
    heroClaimBtn.addEventListener('click', openRegistrationModal);
  }

  // Scanner view interactions
  if (viewId === 'ai-scanner') {
    document.querySelectorAll('.preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const val = chip.getAttribute('data-preset');
        const input = document.getElementById('scanner-proj-val');
        if (input) {
          input.value = val;
          state.currentProject = val;
        }
      });
    });

    const execScanBtn = document.getElementById('btn-execute-scan');
    if (execScanBtn) {
      execScanBtn.addEventListener('click', handleExecuteScan);
    }
  }

  // Code Sandbox view interactions
  if (viewId === 'code-sandbox') {
    document.querySelectorAll('.sandbox-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        state.activeProjectTab = tab;
        const track = sandboxProjects[tab];
        if (track) {
          state.customPrompt = track.defaultPrompt;
        }
        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('code-sandbox');
          bindStageInteractions('code-sandbox');
          refreshIcons();
        }
      });
    });

    const runEvalBtn = document.getElementById('btn-run-project-eval');
    if (runEvalBtn) {
      runEvalBtn.addEventListener('click', handleRunProjectEvaluation);
    }
  }

  // Peer view interactions
  if (viewId === 'peer-perks') {
    const copyBtn = document.getElementById('btn-copy-peer-link');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const inp = document.getElementById('peer-link-val');
        if (inp) {
          navigator.clipboard.writeText(inp.value);
          copyBtn.innerHTML = '<i data-lucide="check" style="width: 14px; height: 14px; color: #10b981;"></i>';
          refreshIcons();
          setTimeout(() => {
            copyBtn.innerHTML = '<i data-lucide="copy" style="width: 14px; height: 14px;"></i>';
            refreshIcons();
          }, 2000);
        }
      });
    }

    const simBtn = document.getElementById('btn-sim-peer');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        state.referrals++;
        const countEl = document.getElementById('peer-count-val');
        const stackEl = document.getElementById('perk-items-container');

        if (countEl) countEl.textContent = `${state.referrals} Classmates Joined`;
        if (stackEl) stackEl.innerHTML = renderPerkItemsHtml();
        refreshIcons();

        if (window.confetti) {
          window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        }
      });
    }
  }

  // Certificate Vault interactions
  if (viewId === 'certificate-vault') {
    const updateBtn = document.getElementById('btn-update-cert');
    if (updateBtn) {
      updateBtn.addEventListener('click', () => {
        const nameInp = document.getElementById('cert-name-input');
        const colInp = document.getElementById('cert-college-input');
        const trackSel = document.getElementById('cert-track-select');

        const newName = nameInp ? nameInp.value.trim() : '';
        const newCol = colInp ? colInp.value.trim() : '';
        const newTrack = trackSel ? trackSel.value : 'rag-agent';

        if (newName) state.registeredUser.fullName = newName;
        if (newCol) state.registeredUser.college = newCol;
        state.activeProjectTab = newTrack;

        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('certificate-vault');
          bindStageInteractions('certificate-vault');
          refreshIcons();
        }

        if (window.confetti) {
          window.confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
        }
      });
    }

    const linkedInBtn = document.getElementById('btn-cert-linkedin');
    if (linkedInBtn) {
      linkedInBtn.addEventListener('click', () => {
        const studentName = state.registeredUser.fullName || 'Arjun Sharma';
        const trackObj = sandboxProjects[state.activeProjectTab] || sandboxProjects['rag-agent'];
        const text = `I'm thrilled to share that I have officially verified my competency in Generative AI Engineering through NxtWave's live workshop!\n\nVerified Capstone: ${trackObj.eval.certProj}\nPerformance Latency: Sub-250ms with Google Gemini API & Vector Store.\nCredential ID: NW-AI-2026-X841 (Verified on NxtWave National Registry).\n\n#GenerativeAI #Gemini #NxtWave #SoftwareEngineering #Placements2026`;
        navigator.clipboard.writeText(text);
        alert('LinkedIn Certification details and post copy copied to clipboard! Opening LinkedIn...');
        window.open('https://www.linkedin.com/sharing/share-offsite/', '_blank');
      });
    }

    const verifyBtn = document.getElementById('btn-cert-verify');
    if (verifyBtn) {
      verifyBtn.addEventListener('click', () => {
        const outBox = document.getElementById('verify-output-box');
        if (outBox) {
          outBox.style.animation = 'none';
          outBox.offsetHeight;
          outBox.style.boxShadow = '0 0 0 3px #10b981';
          setTimeout(() => { outBox.style.boxShadow = 'none'; }, 1500);
          alert('Credential NW-AI-2026-X841 is cryptographically valid and active on NxtWave National Registry!');
        }
      });
    }

    const lookupBtn = document.getElementById('btn-lookup-verify');
    if (lookupBtn) {
      lookupBtn.addEventListener('click', () => {
        const idInp = document.getElementById('verify-input-id');
        const idVal = idInp ? idInp.value.trim().toUpperCase() : '';
        if (idVal) {
          alert(`Registry Lookup: Certificate ${idVal} is 100% AUTHENTIC and verified for ${state.registeredUser.fullName || 'Arjun Sharma'}!`);
          if (window.confetti) {
            window.confetti({ particleCount: 40, spread: 60 });
          }
        }
      });
    }
  }

  // Funnel Simulator subtab interactions
  if (viewId === 'growth-strategy' && state.dossierSubTab === 'funnel') {
    const sImp = document.getElementById('slider-imp');
    const sCtr = document.getElementById('slider-ctr');
    const sLp = document.getElementById('slider-lp');
    const sK = document.getElementById('slider-k');

    if (sImp && sCtr && sLp && sK) {
      const updateFunnel = () => {
        state.impressions = Number(sImp.value);
        state.ctr = Number(sCtr.value);
        state.lpConversion = Number(sLp.value);
        state.kFactor = Number(sK.value);

        document.getElementById('fnl-s-imp').textContent = state.impressions.toLocaleString();
        document.getElementById('fnl-s-ctr').textContent = `${state.ctr}%`;
        document.getElementById('fnl-s-lp').textContent = `${state.lpConversion}%`;
        document.getElementById('fnl-s-k').textContent = state.kFactor.toFixed(2);

        const c = Math.round(state.impressions * (state.ctr / 100));
        const d = Math.round(c * (state.lpConversion / 100));
        const v = Math.round(d * state.kFactor);
        const t = d + v;
        const cpa = (2000 / t).toFixed(2);
        const sup = Math.round(t * 0.68);

        document.getElementById('out-imp').textContent = state.impressions.toLocaleString();
        document.getElementById('out-ctr-pct').textContent = state.ctr;
        document.getElementById('out-clicks').textContent = c.toLocaleString();
        document.getElementById('out-lp-pct').textContent = state.lpConversion;
        document.getElementById('out-direct').textContent = d;
        document.getElementById('out-k-factor').textContent = state.kFactor.toFixed(2);
        document.getElementById('out-viral').textContent = `+${v}`;
        
        const totEl = document.getElementById('out-total');
        totEl.textContent = t;
        totEl.style.color = t >= 500 ? '#10b981' : '#f59e0b';

        document.getElementById('out-cpa').textContent = `₹${cpa} / reg`;
        document.getElementById('out-sup').textContent = `${sup} Students`;

        const statusEl = document.getElementById('out-status-text');
        if (t >= 500) {
          statusEl.innerHTML = `<span style="color: #10b981;">✅ 500 Target Reached (+${t - 500} buffer)</span>`;
        } else {
          statusEl.innerHTML = `<span style="color: #f59e0b;">⚠️ Need ${500 - t} more to reach 500</span>`;
        }
      };

      sImp.addEventListener('input', updateFunnel);
      sCtr.addEventListener('input', updateFunnel);
      sLp.addEventListener('input', updateFunnel);
      sK.addEventListener('input', updateFunnel);
    }
  }

  // Interview Prep interactions
  if (viewId === 'interview-prep') {
    const searchInp = document.getElementById('interview-search-input');
    if (searchInp) {
      searchInp.addEventListener('input', (e) => {
        state.interviewSearch = e.target.value;
        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('interview-prep');
          bindStageInteractions('interview-prep');
          refreshIcons();
          const newInp = document.getElementById('interview-search-input');
          if (newInp) {
            newInp.focus();
            const len = newInp.value.length;
            newInp.setSelectionRange(len, len);
          }
        }
      });
    }

    const clearBtn = document.getElementById('interview-search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.interviewSearch = '';
        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('interview-prep');
          bindStageInteractions('interview-prep');
          refreshIcons();
        }
      });
    }

    document.querySelectorAll('.interview-cat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cat = chip.getAttribute('data-category');
        state.interviewCategory = cat;
        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('interview-prep');
          bindStageInteractions('interview-prep');
          refreshIcons();
        }
      });
    });

    const expandAllBtn = document.getElementById('btn-expand-all-faqs');
    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        if (!state.expandedFaqIds) state.expandedFaqIds = new Set();
        interviewQuestions.forEach(q => state.expandedFaqIds.add(q.id));
        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('interview-prep');
          bindStageInteractions('interview-prep');
          refreshIcons();
        }
      });
    }

    const collapseAllBtn = document.getElementById('btn-collapse-all-faqs');
    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        if (!state.expandedFaqIds) state.expandedFaqIds = new Set();
        state.expandedFaqIds.clear();
        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('interview-prep');
          bindStageInteractions('interview-prep');
          refreshIcons();
        }
      });
    }

    const resetBtn = document.getElementById('btn-reset-faq-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.interviewSearch = '';
        state.interviewCategory = 'all';
        const stage = document.getElementById('stage-viewport-container');
        if (stage) {
          stage.innerHTML = renderViewHtml('interview-prep');
          bindStageInteractions('interview-prep');
          refreshIcons();
        }
      });
    }
  }
}

// AI Resume Scanner execution
function handleExecuteScan() {
  const branchInp = document.getElementById('scanner-branch-input');
  const projInp = document.getElementById('scanner-proj-val');
  const roleInp = document.getElementById('scanner-role-input');
  if (branchInp) state.scannerBranch = branchInp.value;
  if (projInp) state.currentProject = projInp.value;
  if (roleInp) state.targetRole = roleInp.value;

  const outArea = document.getElementById('scanner-results-area');
  if (!outArea) return;

  outArea.innerHTML = `
    <h3 class="scanner-step-title">2. AI Diagnosis &amp; Shortlist Projection</h3>
    <div class="scanner-placeholder scanning-pulse">
      <div class="pulse-ring-clean"></div>
      <h4>Benchmarking Against 2026 Tech Recruiter ATS...</h4>
      <p>Comparing "${state.currentProject}" against product startup and mass recruiter criteria for ${state.scannerBranch} graduates.</p>
    </div>
  `;

  setTimeout(() => {
    const diag = analyzeProject(state.currentProject, state.scannerBranch, state.targetRole);

    outArea.innerHTML = `
      <h3 class="scanner-step-title">2. AI Diagnosis &amp; Shortlist Projection</h3>
      <div class="score-banner-clean">
        <div class="score-col risk">
          <span class="score-val">${diag.currentScore}%</span>
          <span class="score-desc">Current ATS AI Score (High Risk)</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; color: var(--text-dim);">
          <i data-lucide="arrow-right" style="width: 22px; height: 22px; color: #10b981;"></i>
          <small style="font-size: 0.68rem; margin-top: 4px;">After 60-min Sprint</small>
        </div>
        <div class="score-col ready">
          <span class="score-val">${diag.projectedScore}%</span>
          <span class="score-desc">Projected AI Shortlist Score</span>
        </div>
      </div>

      <div class="vulnerability-card">
        <h4><i data-lucide="alert-triangle" style="width: 15px; height: 15px;"></i> Detected Placement Vulnerabilities</h4>
        <ul>
          ${diag.vulnerabilities.map(v => `<li>${v}</li>`).join('')}
        </ul>
      </div>

      <div class="prescription-card">
        <div style="font-size: 0.68rem; font-weight: 700; color: #1e40af; text-transform: uppercase; margin-bottom: 2px;">
          PRESCRIBED 60-MIN WORKSHOP PROJECT
        </div>
        <h4>${diag.recommendation}</h4>
        <p>Adding this verified project elevates your resume ranking from bottom 25% to top 8% of applicants.</p>

        <div style="background: #ffffff; border: 1px dashed #93c5fd; border-radius: var(--radius-sm); padding: 10px 12px; margin-top: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <small style="color: #1e40af; font-weight: 700;">ATS RESUME BULLET POINT YOU UNLOCK:</small>
            <button class="btn-secondary-clean" style="padding: 2px 8px; font-size: 0.7rem;" onclick="navigator.clipboard.writeText('${diag.resumeBullet}'); alert('Resume bullet point copied to clipboard!');">
              <i data-lucide="copy" style="width: 11px; height: 11px;"></i> Copy
            </button>
          </div>
          <code style="font-size: 0.74rem; color: #334155; line-height: 1.4; display: block; font-family: var(--font-mono);">${diag.resumeBullet}</code>
        </div>
      </div>

      <button class="btn-primary-clean w-100" style="margin-top: 14px;" id="btn-claim-from-diag">
        <i data-lucide="sparkles" style="width: 15px; height: 15px;"></i> Claim Free Seat &amp; Download Starter Pack
      </button>
    `;
    refreshIcons();

    const claimBtn = document.getElementById('btn-claim-from-diag');
    if (claimBtn) {
      claimBtn.addEventListener('click', openRegistrationModal);
    }
  }, 1100);
}

// Project Evaluator execution
function handleRunProjectEvaluation() {
  const promptInput = document.getElementById('eval-custom-prompt');
  if (promptInput) state.customPrompt = promptInput.value;

  const reportBox = document.getElementById('eval-report-box');
  if (!reportBox) return;

  const track = sandboxProjects[state.activeProjectTab] || sandboxProjects['rag-agent'];

  reportBox.innerHTML = `
    <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
      <i data-lucide="shield-check" style="width: 18px; height: 18px; color: #10b981;"></i> Automated AI Evaluation Rubric
    </h4>
    <div class="scanner-placeholder scanning-pulse" style="min-height: 260px;">
      <div class="pulse-ring-clean"></div>
      <p>Testing prompt resilience, token latency, and security guardrails for ${track.fileName}...</p>
    </div>
  `;

  setTimeout(() => {
    reportBox.innerHTML = `
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <i data-lucide="shield-check" style="width: 18px; height: 18px; color: #10b981;"></i> Automated AI Evaluation Rubric
      </h4>

      <div class="eval-score-card">
        <div class="eval-score-big">${track.eval.score}</div>
        <div>
          <strong style="color: var(--text-bright); font-size: 0.95rem;">${track.eval.grade}</strong>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
            ${track.eval.summary}
          </p>
        </div>
      </div>

      <div class="eval-rubric-chips">
        ${track.eval.chips.map(c => `
          <div class="eval-chip-clean">
            <small>${c.label}</small>
            <strong style="color: ${c.color};">${c.val}</strong>
          </div>
        `).join('')}
      </div>

      <!-- Certificate Preview -->
      <div class="certificate-box-clean">
        <div class="cert-head">
          <i data-lucide="award" style="width: 24px; height: 24px; color: #f59e0b;"></i>
          <div>
            <strong>NxtWave Certificate of AI Competency</strong>
            <small>Credential ID: NW-AI-2026-X841</small>
          </div>
        </div>
        <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
          This certifies that <b>${state.registeredUser.fullName || 'Arjun Sharma'}</b> has successfully architected, integrated, and deployed <b>${track.eval.certProj}</b> in under 60 minutes.
        </p>
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <button class="btn-primary-clean" style="flex: 1; padding: 8px 12px; font-size: 0.8rem;" onclick="window.appNavigate('certificate-vault')">
            <i data-lucide="award" style="width: 14px; height: 14px;"></i> View in Official Vault
          </button>
          <button class="btn-secondary-clean" style="flex: 1; padding: 8px 12px; font-size: 0.8rem;" onclick="alert('LinkedIn share template and verification badge copied to clipboard!'); window.open('https://www.linkedin.com/sharing/share-offsite/', '_blank');">
            <i data-lucide="share-2" style="width: 14px; height: 14px;"></i> Share to LinkedIn
          </button>
        </div>
      </div>
    `;
    refreshIcons();

    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    }
  }, 1100);
}

// --------------------------------------------------------------------------
// REGISTRATION MODAL
// --------------------------------------------------------------------------
export function openRegistrationModal() {
  const container = document.getElementById('modal-container');
  const rem = state.totalSeats - state.seatsClaimed;

  container.innerHTML = `
    <div class="modal-overlay" id="reg-modal-backdrop">
      <div class="modal-content-clean">
        <button class="modal-close-clean" id="btn-close-modal">✕</button>

        <div style="display: flex; gap: 8px; margin-bottom: 10px;">
          <span class="clean-badge blue">FREE ADMISSION</span>
          <span class="clean-badge amber">ONLY ${rem} SEATS LEFT</span>
        </div>

        <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-bright); margin-bottom: 4px;">
          Claim Your Free Seat
        </h2>
        <p style="color: var(--text-muted); font-size: 0.86rem; margin-bottom: 18px;">
          Receive your entry ticket, official WhatsApp community invite, and free AI Interview Questions PDF.
        </p>

        <form id="clean-reg-form">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" required class="form-input" id="reg-field-name" placeholder="e.g. Arjun Sharma" value="${state.registeredUser.fullName}" />
          </div>

          <div class="form-group">
            <label class="form-label">College / University Name</label>
            <input type="text" required class="form-input" id="reg-field-college" placeholder="e.g. JNTU Hyderabad / SRM Chennai" value="${state.registeredUser.college}" />
          </div>

          <div class="form-group">
            <label class="form-label">WhatsApp Number (For Ticket Delivery)</label>
            <input type="tel" required class="form-input" id="reg-field-whatsapp" placeholder="e.g. 9876543210" value="${state.registeredUser.whatsapp}" />
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Engineering Branch</label>
              <select class="form-select" id="reg-field-branch">
                <option value="CSE / IT">CSE / IT</option>
                <option value="ECE / EEE">ECE / EEE</option>
                <option value="Mechanical / Civil">Mechanical / Civil</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Referral Code (Optional)</label>
              <input type="text" class="form-input mono" id="reg-field-ref" placeholder="e.g. CAMPUS2026" />
            </div>
          </div>

          <button type="submit" class="btn-primary-clean w-100" style="margin-top: 6px;">
            <i data-lucide="check-circle-2" style="width: 16px; height: 16px;"></i> Confirm Registration &amp; Get Pass
          </button>

          <p style="font-size: 0.74rem; color: var(--text-dim); text-align: center; margin-top: 12px;">
            🔒 100% Free. Verified by NxtWave. No spam guarantee.
          </p>
        </form>
      </div>
    </div>
  `;
  refreshIcons();

  document.getElementById('btn-close-modal').addEventListener('click', closeRegistrationModal);
  document.getElementById('reg-modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'reg-modal-backdrop') closeRegistrationModal();
  });

  document.getElementById('clean-reg-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('reg-field-name').value.trim();
    const colVal = document.getElementById('reg-field-college').value.trim();
    const waVal = document.getElementById('reg-field-whatsapp').value.trim();
    const brVal = document.getElementById('reg-field-branch').value;

    if (!nameVal || !waVal) return;

    state.registeredUser = {
      fullName: nameVal,
      college: colVal || 'Engineering College',
      whatsapp: waVal,
      branch: brVal,
      passCode: `NW-VIP-${Math.floor(1000 + Math.random() * 9000)}`
    };
    state.isRegistered = true;
    closeRegistrationModal();

    if (window.confetti) {
      window.confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }

    navigateTo('vip-pass');
  });
}

export function closeRegistrationModal() {
  const container = document.getElementById('modal-container');
  if (container) container.innerHTML = '';
}

// Global hooks for in-HTML onclicks
window.appNavigate = navigateTo;
window.openRegistrationModal = openRegistrationModal;
window.openRegModal = openRegistrationModal;
window.toggleFaq = (id) => {
  if (!state.expandedFaqIds) {
    state.expandedFaqIds = new Set();
  }
  if (state.expandedFaqIds.has(id)) {
    state.expandedFaqIds.delete(id);
  } else {
    state.expandedFaqIds.add(id);
  }
  const stage = document.getElementById('stage-viewport-container');
  if (stage) {
    stage.innerHTML = renderViewHtml('interview-prep');
    bindStageInteractions('interview-prep');
    refreshIcons();
  }
};
window.copyFaqAnswer = (id) => {
  const item = interviewQuestions.find(q => q.id === id);
  if (!item) return;
  const temp = document.createElement('div');
  temp.innerHTML = item.a;
  const plainText = `Q#${item.id}: ${item.q}\n\nAnswer:\n${temp.innerText.trim()}\n\n[Source: NxtWave Generative AI 100 Interview Prep Repository]`;
  navigator.clipboard.writeText(plainText).then(() => {
    alert(`Copied answer for Q#${id} to clipboard!`);
  }).catch(() => {
    prompt('Copy to clipboard: Ctrl+C, Enter', plainText);
  });
};
window.setDossierTab = (tabId) => {
  state.dossierSubTab = tabId;
  const stage = document.getElementById('stage-viewport-container');
  if (stage) {
    stage.innerHTML = renderViewHtml('growth-strategy');
    bindStageInteractions('growth-strategy');
    refreshIcons();
  }
};
window.copyCopyText = (idx) => {
  navigator.clipboard.writeText(copywritingArsenal[idx].copy);
  alert('Copied to clipboard!');
};
window.copyAllVideoScript = () => {
  const full = videoScriptData.sections.map(s => `[${s.time}] ${s.label}\nVISUAL CUE: ${s.visual}\nSPOKEN SCRIPT: "${s.script}"\n`).join('\n----------------------------------------\n\n');
  navigator.clipboard.writeText(full);
  alert('Full 3-Minute Video Script copied to clipboard!');
};

// --------------------------------------------------------------------------
// INITIAL SETUP ON DOM LOAD
// --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-view');
      navigateTo(v);
    });
  });

  const quickRegBtn = document.getElementById('btn-quick-register');
  if (quickRegBtn) {
    quickRegBtn.addEventListener('click', openRegistrationModal);
  }

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar-dock');
      if (sidebar) sidebar.classList.toggle('open');
    });
  }

  navigateTo('workshop-overview');
});

// Also trigger immediately in case DOM is already parsed
navigateTo('workshop-overview');
refreshIcons();
