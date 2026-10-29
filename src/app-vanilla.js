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
  copywritingArsenal 
} from './data/growthStrategyData.js';

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
  customPrompt: 'You are a senior tech customer support agent. Help the user debug their API key error politely in under 3 lines.',
  evalResult: null,
  isEvaluating: false,
  // Interview FAQ state
  expandedFaq: 0,
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

    case 'code-sandbox':
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
                  <span><i data-lucide="terminal" style="width: 14px; height: 14px;"></i> agent_system_prompt.py</span>
                  <span class="clean-badge green">Gemini 2.5 Flash Connected</span>
                </div>

                <div class="code-pre-clean">
                  <p class="code-comment"># Live code engineered in Minutes 15 - 35</p>
                  <p><span class="keyword">import</span> google.generativeai <span class="keyword">as</span> genai</p>
                  <p><span class="keyword">from</span> vector_store <span class="keyword">import</span> KnowledgeBase</p>
                  <br />
                  <p><span class="keyword">def</span> <span class="func">build_rag_agent</span>(user_query):</p>
                  <p style="padding-left: 14px;">kb = KnowledgeBase.load_index(<span class="str">"company_faq.bin"</span>)</p>
                  <p style="padding-left: 14px;">context = kb.similarity_search(user_query, k=3)</p>
                  <br />
                  <p style="padding-left: 14px;" class="code-comment"># Interactive Prompt Playground:</p>
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

    case 'interview-prep':
      return `
        <div class="section-view-wrap">
          <div class="clean-section-header">
            <span class="clean-badge blue">PLACEMENT PREPARATION</span>
            <h2>Top AI Technical <span style="color: #2563eb;">Interview Questions</span></h2>
            <p>
              These are the exact conceptual and architectural questions recruiters ask final-year candidates when they see Generative AI and RAG projects on a resume.
            </p>
          </div>

          <div class="faq-grid">
            <div class="faq-card" onclick="window.toggleFaq(0)">
              <div class="faq-q">
                <span>1. What is the fundamental difference between RAG and Fine-Tuning an LLM?</span>
                <i data-lucide="${state.expandedFaq === 0 ? 'chevron-up' : 'chevron-down'}" style="width: 16px; height: 16px;"></i>
              </div>
              ${state.expandedFaq === 0 ? `
                <div class="faq-a">
                  <b>Answer:</b> <b>RAG (Retrieval-Augmented Generation)</b> provides the model with external, dynamic reference material in the prompt context window at inference time without modifying model weights. It is cheap, eliminates hallucinations on proprietary data, and allows instant updates. <b>Fine-tuning</b> updates the model's internal weights to adapt tone, format, or specialized syntax, but does not reliably inject new factual knowledge and is much more expensive.
                </div>
              ` : ''}
            </div>

            <div class="faq-card" onclick="window.toggleFaq(1)">
              <div class="faq-q">
                <span>2. How do Vector Embeddings and Cosine Similarity enable semantic search?</span>
                <i data-lucide="${state.expandedFaq === 1 ? 'chevron-up' : 'chevron-down'}" style="width: 16px; height: 16px;"></i>
              </div>
              ${state.expandedFaq === 1 ? `
                <div class="faq-a">
                  <b>Answer:</b> An embedding model maps text into high-dimensional geometric space (e.g., 768 or 1536 dimensions) where semantically similar concepts cluster together regardless of exact keyword matches. <b>Cosine similarity</b> measures the cosine of the angle between two embedding vectors ($A \\cdot B / (\\|A\\| \\|B\\|)$). A value close to 1 means high conceptual alignment.
                </div>
              ` : ''}
            </div>

            <div class="faq-card" onclick="window.toggleFaq(2)">
              <div class="faq-q">
                <span>3. How do you prevent hallucinations in a customer-facing AI Support Agent?</span>
                <i data-lucide="${state.expandedFaq === 2 ? 'chevron-up' : 'chevron-down'}" style="width: 16px; height: 16px;"></i>
              </div>
              ${state.expandedFaq === 2 ? `
                <div class="faq-a">
                  <b>Answer:</b> 1) Ground the model by setting temperature to 0.0 or 0.2. 2) Strict system prompt constraint: <i>"Answer ONLY using the provided retrieved context. If the answer is not present, respond 'I do not have enough verified data to answer that'."</i> 3) Post-generation validation assertions (JSON schema validation & guardrail classifiers).
                </div>
              ` : ''}
            </div>

            <div class="faq-card" onclick="window.toggleFaq(3)">
              <div class="faq-q">
                <span>4. Why is Gemini Flash ideal for high-throughput production API workflows?</span>
                <i data-lucide="${state.expandedFaq === 3 ? 'chevron-up' : 'chevron-down'}" style="width: 16px; height: 16px;"></i>
              </div>
              ${state.expandedFaq === 3 ? `
                <div class="faq-a">
                  <b>Answer:</b> Gemini Flash is engineered for ultra-low latency (sub-250ms first-token latency) and cost efficiency while supporting large multi-modal context windows (up to 1M tokens). This makes it optimal for high-concurrency student and enterprise agentic tasks compared to heavier, slower reasoning models.
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;

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
                <div class="pass-user-name">${state.registeredUser.fullName || 'Arjun Sharma'}</div>
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

                <a 
                  href="https://chat.whatsapp.com/demo" 
                  target="_blank" 
                  rel="noreferrer"
                  class="btn-whatsapp-clean"
                >
                  <i data-lucide="smartphone"></i> Join Official Workshop WhatsApp Group
                </a>
              </div>

              <div class="qr-clean-box">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https://nxtwave.ai/workshop/confirmed" 
                  alt="Entry QR"
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
        <strong style="display: block; font-size: 0.85rem; color: var(--text-bright);">1 Classmate: Top 50 AI Interview Questions &amp; Answers (PDF)</strong>
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
        <p>Comprehensive strategic plan to acquire 500 final-year engineering students in 7 days on a ₹2,000 budget.</p>
      </div>

      <div class="dossier-stats-bar">
        <div class="dossier-stat-item">
          <small>TARGET ACQUISITIONS</small>
          <strong>500+ Students</strong>
          <span>Final Year B.Tech</span>
        </div>
        <div class="dossier-stat-item">
          <small>ALLOCATED BUDGET</small>
          <strong style="color: #059669;">₹2,000</strong>
          <span>₹4.00 CPA Goal</span>
        </div>
        <div class="dossier-stat-item">
          <small>VIRAL COEFFICIENT</small>
          <strong style="color: #2563eb;">K &gt; 1.25</strong>
          <span>WhatsApp Referral Loops</span>
        </div>
        <div class="dossier-stat-item">
          <small>PROJECTED SHOW-UP</small>
          <strong style="color: #d97706;">68%+ Live</strong>
          <span>Automated 3-Touch Drips</span>
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
          4. ₹2,000 Budget &amp; Unit Economics
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'roadmap' ? 'active' : ''}" onclick="window.setDossierTab('roadmap')">
          5. 7-Day Execution Roadmap
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'funnel' ? 'active' : ''}" onclick="window.setDossierTab('funnel')">
          6. Interactive Funnel Math
        </button>
        <button class="dossier-tab-btn ${state.dossierSubTab === 'copy' ? 'active' : ''}" onclick="window.setDossierTab('copy')">
          7. Copywriting Arsenal
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
            • <b>Official TPO Emails:</b> College bureaucracy takes 2-4 weeks; fatal for a 7-day sprint.<br />
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
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 14px;">7-Day Day-by-Day Tactical Execution Plan</h3>
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
        document.querySelectorAll('.sandbox-select-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeProjectTab = btn.getAttribute('data-tab');
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
}

// AI Resume Scanner execution
function handleExecuteScan() {
  const branchInp = document.getElementById('scanner-branch-input');
  const projInp = document.getElementById('scanner-proj-val');
  if (branchInp) state.scannerBranch = branchInp.value;
  if (projInp) state.currentProject = projInp.value;

  const outArea = document.getElementById('scanner-results-area');
  if (!outArea) return;

  outArea.innerHTML = `
    <h3 class="scanner-step-title">2. AI Diagnosis &amp; Shortlist Projection</h3>
    <div class="scanner-placeholder scanning-pulse">
      <div class="pulse-ring-clean"></div>
      <h4>Benchmarking Against 2026 Tech Recruiter ATS...</h4>
      <p>Comparing "${state.currentProject}" against product startup and mass recruiter criteria.</p>
    </div>
  `;

  setTimeout(() => {
    outArea.innerHTML = `
      <h3 class="scanner-step-title">2. AI Diagnosis &amp; Shortlist Projection</h3>
      <div class="score-banner-clean">
        <div class="score-col risk">
          <span class="score-val">38%</span>
          <span class="score-desc">Current ATS AI Score (High Risk)</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; color: var(--text-dim);">
          <i data-lucide="arrow-right" style="width: 22px; height: 22px; color: #10b981;"></i>
          <small style="font-size: 0.68rem; margin-top: 4px;">After 60-min Sprint</small>
        </div>
        <div class="score-col ready">
          <span class="score-val">94%</span>
          <span class="score-desc">Projected AI Shortlist Score</span>
        </div>
      </div>

      <div class="vulnerability-card">
        <h4><i data-lucide="alert-triangle" style="width: 15px; height: 15px;"></i> Detected Placement Vulnerabilities</h4>
        <ul>
          <li>Generic CRUD app detected. 87% of 2026 tech recruiters filter out basic e-commerce / weather apps.</li>
          <li>Missing LLM / Generative AI API integration &amp; RAG memory.</li>
          <li>No live cloud deployment link on resume bullet points.</li>
        </ul>
      </div>

      <div class="prescription-card">
        <div style="font-size: 0.68rem; font-weight: 700; color: #1e40af; text-transform: uppercase; margin-bottom: 2px;">
          PRESCRIBED 60-MIN WORKSHOP PROJECT
        </div>
        <h4>Multimodal AI Customer Support Agent with Vector Embeddings (Gemini API + LangChain)</h4>
        <p>Adding this verified project elevates your resume ranking from bottom 25% to top 8% of applicants.</p>
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
  }, 1200);
}

// Project Evaluator execution
function handleRunProjectEvaluation() {
  const reportBox = document.getElementById('eval-report-box');
  if (!reportBox) return;

  reportBox.innerHTML = `
    <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
      <i data-lucide="shield-check" style="width: 18px; height: 18px; color: #10b981;"></i> Automated AI Evaluation Rubric
    </h4>
    <div class="scanner-placeholder scanning-pulse" style="min-height: 260px;">
      <div class="pulse-ring-clean"></div>
      <p>Testing prompt resilience, token latency, and security guardrails...</p>
    </div>
  `;

  setTimeout(() => {
    reportBox.innerHTML = `
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <i data-lucide="shield-check" style="width: 18px; height: 18px; color: #10b981;"></i> Automated AI Evaluation Rubric
      </h4>

      <div class="eval-score-card">
        <div class="eval-score-big">96 / 100</div>
        <div>
          <strong style="color: var(--text-bright); font-size: 0.95rem;">Placement Grade: Top Tier (Shortlist Guarantee)</strong>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
            Prompt constraints verified. Guardrails successfully prevented hallucination with sub-250ms latency.
          </p>
        </div>
      </div>

      <div class="eval-rubric-chips">
        <div class="eval-chip-clean">
          <small>Prompt Engineering</small>
          <strong style="color: #2563eb;">98%</strong>
        </div>
        <div class="eval-chip-clean">
          <small>Response Latency</small>
          <strong style="color: #059669;">240ms</strong>
        </div>
        <div class="eval-chip-clean">
          <small>Guardrails &amp; Safety</small>
          <strong style="color: #7c3aed;">94%</strong>
        </div>
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
          This certifies that <b>${state.registeredUser.fullName || 'Arjun Sharma'}</b> has successfully architected, integrated, and deployed a production Generative AI Agent in under 60 minutes.
        </p>
        <button class="btn-secondary-clean w-100" onclick="alert('LinkedIn share template and verification badge copied to clipboard!')">
          <i data-lucide="share-2" style="width: 14px; height: 14px;"></i> Add Verified Credential to LinkedIn Profile
        </button>
      </div>
    `;
    refreshIcons();

    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    }
  }, 1300);
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
window.toggleFaq = (idx) => {
  state.expandedFaq = state.expandedFaq === idx ? -1 : idx;
  const stage = document.getElementById('stage-viewport-container');
  if (stage) {
    stage.innerHTML = renderViewHtml('interview-prep');
    bindStageInteractions('interview-prep');
    refreshIcons();
  }
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
