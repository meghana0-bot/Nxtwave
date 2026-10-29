import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Clock, 
  Users, 
  Share2, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Code2, 
  Play, 
  Copy, 
  Check, 
  ExternalLink, 
  Gift, 
  TrendingUp, 
  Layers, 
  Zap,
  Terminal,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Flame,
  Star
} from 'lucide-react';
import { studentPersona, copywritingArsenal } from '../data/growthStrategyData';

export default function StudentPortal({ onOpenWarRoom }) {
  // Registration state
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [regForm, setRegForm] = useState({
    fullName: '',
    college: '',
    whatsapp: '',
    branch: 'CSE / IT',
    referralCode: 'CAMPUS2026'
  });

  // Simulated live registration count
  const [seatsClaimed, setSeatsClaimed] = useState(389);
  const totalSeats = 500;

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Live Toast Notifications
  const [liveToast, setLiveToast] = useState(null);
  useEffect(() => {
    const names = [
      { name: "Rahul S.", college: "JNTU Hyderabad", time: "just now" },
      { name: "Ananya K.", college: "SRM Chennai", time: "2m ago" },
      { name: "Vikram P.", college: "VIT Vellore", time: "4m ago" },
      { name: "Sneha R.", college: "RVCE Bengaluru", time: "5m ago" },
      { name: "Karthik M.", college: "PSG Tech Coimbatore", time: "7m ago" }
    ];
    let index = 0;
    const interval = setInterval(() => {
      setLiveToast(names[index]);
      setSeatsClaimed(prev => (prev < 496 ? prev + 1 : prev));
      index = (index + 1) % names.length;
      setTimeout(() => setLiveToast(null), 4000);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  // AI Resume Scanner State
  const [scannerBranch, setScannerBranch] = useState('CSE');
  const [targetRole, setTargetRole] = useState('AI / Full-Stack Engineer');
  const [currentProject, setCurrentProject] = useState('E-commerce Website & Weather App');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        currentScore: 38,
        potentialScore: 94,
        vulnerabilities: [
          "Generic CRUD app detected. 87% of 2026 tech recruiters filter out basic e-commerce / weather apps.",
          "Missing LLM / Generative AI API integration & RAG memory.",
          "No live cloud deployment link on resume bullet points."
        ],
        prescribedProject: "Multimodal AI Customer Support Agent with Vector Embeddings (Gemini API + LangChain)",
        impactSummary: "Adding this 60-min verified project moves your ATS resume ranking from bottom 25% to top 8% of applicants."
      });
    }, 1200);
  };

  // Referral Simulation
  const [referralCount, setReferralCount] = useState(2);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://nxtwave.ai/ai60?ref=" + (regForm.fullName ? regForm.fullName.replace(/\s+/g, '').toUpperCase() : 'VIP2026'));
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const simulateFriendReferral = () => {
    setReferralCount(prev => prev + 1);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  // Registration Submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regForm.fullName || !regForm.whatsapp) return;
    setIsRegistered(true);
    setShowRegModal(false);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  // Workshop Code Sandbox / AI Evaluator State
  const [activeProjectTab, setActiveProjectTab] = useState('rag-agent');
  const [customPrompt, setCustomPrompt] = useState(
    'You are a senior tech customer support agent. Help the user debug their API key error politely in under 3 lines.'
  );
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalResult, setEvalResult] = useState(null);

  const handleEvaluateProject = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvalResult({
        overallScore: 96,
        promptEngineering: 98,
        responseLatency: "240ms (Optimal)",
        securityGuardrails: 94,
        placementReadiness: "Top Tier (Shortlist Guarantee)",
        feedback: "Excellent prompt constraints. Guardrails successfully prevented hallucination and injected corporate tone correctly."
      });
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    }, 1400);
  };

  return (
    <div className="student-portal">
      {/* Real-time Registration Toast */}
      {liveToast && (
        <div className="toast-stream">
          <div className="toast-item">
            <span className="live-dot"></span>
            <div>
              <strong>{liveToast.name}</strong> from {liveToast.college} just claimed their VIP seat ({liveToast.time})
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-wrapper">
          <div className="hero-badge-wrap">
            <span className="live-pill">
              <span className="live-dot"></span>
              LIVE ADMISSIONS OPEN • 7-DAY NATIONAL INITIATIVE
            </span>
            <span className="badge badge-purple">
              <Sparkles size={14} /> FREE 60-MIN LIVE WORKSHOP
            </span>
          </div>

          <h1 className="hero-title">
            Build Your First <span className="gradient-text-accent">Production AI Project</span> In 60 Minutes
          </h1>
          <p className="hero-subtitle">
            Recruiters are rejecting 2020 CRUD projects. Learn to build and deploy a live, verified Generative AI application with Gemini API before 2025/2026 campus drives conclude.
          </p>

          {/* Scarcity & Live Progress Bar */}
          <div className="urgency-card glass-card">
            <div className="urgency-header">
              <div className="urgency-stat">
                <span className="urgency-num">{seatsClaimed} / {totalSeats}</span>
                <span className="urgency-label">Seats Already Claimed</span>
              </div>
              <div className="countdown-wrap">
                <span className="countdown-label">Registration Closes In:</span>
                <div className="countdown-boxes">
                  <div className="count-box"><span>{String(timeLeft.days).padStart(2, '0')}</span><small>D</small></div>
                  <span className="count-sep">:</span>
                  <div className="count-box"><span>{String(timeLeft.hours).padStart(2, '0')}</span><small>H</small></div>
                  <span className="count-sep">:</span>
                  <div className="count-box"><span>{String(timeLeft.minutes).padStart(2, '0')}</span><small>M</small></div>
                  <span className="count-sep">:</span>
                  <div className="count-box"><span>{String(timeLeft.seconds).padStart(2, '0')}</span><small>S</small></div>
                </div>
              </div>
            </div>

            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${(seatsClaimed / totalSeats) * 100}%` }}
              ></div>
            </div>
            <div className="progress-footer">
              <span className="footer-warning">
                <Flame size={14} color="#f59e0b" /> Only {totalSeats - seatsClaimed} free seats remaining across colleges
              </span>
              <span className="footer-fee">Cost: <s style={{ opacity: 0.5 }}>₹1,999</s> <b style={{ color: '#10b981' }}>FREE (100% Sponsored)</b></span>
            </div>
          </div>

          {/* Main Hero CTAs */}
          <div className="hero-actions">
            {!isRegistered ? (
              <button 
                className="btn-primary hero-btn"
                onClick={() => setShowRegModal(true)}
              >
                <Sparkles size={20} /> Claim Your Free Seat Now <ArrowRight size={18} />
              </button>
            ) : (
              <a href="#vip-pass-section" className="btn-primary hero-btn">
                <CheckCircle2 size={20} /> View Your VIP Holographic Pass
              </a>
            )}

            <a href="#ai-scanner" className="btn-outline">
              <Terminal size={18} /> Run AI Resume Readiness Scan
            </a>

            <button 
              className="btn-outline war-room-peek-btn"
              onClick={onOpenWarRoom}
              title="View full NxtWave Growth Intern Submission Dossier"
            >
              <TrendingUp size={18} color="#ec4899" /> View Growth Plan (War Room)
            </button>
          </div>

          {/* Social Proof Strip */}
          <div className="trust-strip">
            <div className="trust-item">
              <CheckCircle2 size={16} color="#10b981" />
              <span>Deploy to GitHub & Vercel in 60 Mins</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} color="#10b981" />
              <span>Verified Certificate of AI Competency</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} color="#10b981" />
              <span>Zero ML Math Required • 100% Beginner Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET 1: AI RESUME & PLACEMENT READINESS SCANNER */}
      <section id="ai-scanner" className="scanner-section">
        <div className="content-wrapper">
          <div className="section-header text-center">
            <span className="badge badge-cyan">HIGH-CONVERSION VIRAL ASSET</span>
            <h2>Will Your Resume Survive <span className="gradient-text-accent">2026 AI Placement Filters?</span></h2>
            <p>
              Engineering students don't buy generic webinars. They buy placement insurance. Test your resume against 2026 tech hiring benchmarks in 10 seconds.
            </p>
          </div>

          <div className="scanner-card glass-card">
            <div className="scanner-grid">
              <div className="scanner-inputs">
                <h3 className="scanner-step-title">1. Your Profile & Current Projects</h3>

                <div className="form-group">
                  <label className="form-label">Engineering Branch</label>
                  <select 
                    className="form-select"
                    value={scannerBranch}
                    onChange={(e) => setScannerBranch(e.target.value)}
                  >
                    <option value="CSE">Computer Science & Engineering (CSE)</option>
                    <option value="IT">Information Technology (IT)</option>
                    <option value="ECE">Electronics & Communication (ECE)</option>
                    <option value="EEE">Electrical Engineering (EEE)</option>
                    <option value="MECH">Mechanical / Civil (Transitioning to Software)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Placement Role</label>
                  <select 
                    className="form-select"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                  >
                    <option value="AI / Full-Stack Engineer">AI / Full-Stack Engineer (6 - 15 LPA)</option>
                    <option value="SDE-1 (Product Company)">SDE-1 Product Company (8 - 20 LPA)</option>
                    <option value="Associate Software Engineer">Associate Software Engineer - Mass Recruiter (4 - 7 LPA)</option>
                    <option value="Data & AI Specialist">Data & AI Specialist (7 - 14 LPA)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Current College Projects on Your Resume</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={currentProject}
                    onChange={(e) => setCurrentProject(e.target.value)}
                    placeholder="e.g. E-Commerce Clone, Weather App, Calculator"
                  />
                  <div className="scanner-presets">
                    <span className="preset-label">Quick test:</span>
                    <button type="button" onClick={() => setCurrentProject('Basic To-Do App & Calculator')} className="preset-chip">Basic ToDo App</button>
                    <button type="button" onClick={() => setCurrentProject('E-commerce MERN Stack Clone')} className="preset-chip">E-Commerce Clone</button>
                    <button type="button" onClick={() => setCurrentProject('Hospital Management System in Java')} className="preset-chip">Hospital System</button>
                  </div>
                </div>

                <button 
                  className="btn-primary w-100"
                  onClick={handleScan}
                  disabled={isScanning}
                >
                  {isScanning ? (
                    <>
                      <span className="spinner"></span> Analyzing Against 2026 ATS Filters...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} /> Run AI Placement Benchmark Scan
                    </>
                  )}
                </button>
              </div>

              {/* Scanner Results Display */}
              <div className="scanner-output">
                <h3 className="scanner-step-title">2. AI Diagnosis & Placement Projection</h3>

                {!scanResult && !isScanning && (
                  <div className="scanner-placeholder">
                    <Terminal size={48} color="#6366f1" />
                    <h4>Select your branch and click Scan</h4>
                    <p>Our algorithm scans 150+ placement recruiter keywords and ATS filtration rules.</p>
                  </div>
                )}

                {isScanning && (
                  <div className="scanner-placeholder scanning-pulse">
                    <div className="pulse-ring"></div>
                    <h4>Scanning Resume Keywords...</h4>
                    <p>Comparing against Amazon, TCS Digital, and product startup criteria.</p>
                  </div>
                )}

                {scanResult && !isScanning && (
                  <div className="scan-report">
                    <div className="score-comparison">
                      <div className="score-pill risk">
                        <span className="score-val">{scanResult.currentScore}%</span>
                        <span className="score-desc">Current ATS AI Score (High Risk)</span>
                      </div>
                      <div className="score-arrow">
                        <ArrowRight size={24} color="#10b981" />
                        <small>After 60-min Workshop</small>
                      </div>
                      <div className="score-pill ready">
                        <span className="score-val">{scanResult.potentialScore}%</span>
                        <span className="score-desc">Projected AI Shortlist Score</span>
                      </div>
                    </div>

                    <div className="vulnerability-box">
                      <h4><AlertTriangle size={16} color="#f43f5e" /> Detected Placement Vulnerabilities</h4>
                      <ul>
                        {scanResult.vulnerabilities.map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="prescription-box">
                      <div className="rx-badge">PRESCRIBED 60-MIN PROJECT</div>
                      <h4>{scanResult.prescribedProject}</h4>
                      <p>{scanResult.impactSummary}</p>
                    </div>

                    <button 
                      className="btn-primary w-100 mt-3"
                      onClick={() => setShowRegModal(true)}
                    >
                      <Gift size={18} /> Claim Seat & Unlock Starter Code Pack
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET 2: REGISTERED VIP HOLOGRAPHIC PASS */}
      {isRegistered && (
        <section id="vip-pass-section" className="vip-pass-section">
          <div className="content-wrapper">
            <div className="vip-pass-card glass-card">
              <div className="pass-ribbon">
                <ShieldCheck size={16} /> OFFICIAL WORKSHOP VIP ACCESS PASS
              </div>
              <div className="pass-body">
                <div className="pass-details">
                  <span className="pass-batch">BATCH OF 2025/2026 • SEAT CONFIRMED</span>
                  <h2 className="pass-name">{regForm.fullName || 'Arjun Sharma'}</h2>
                  <p className="pass-college">{regForm.college || 'Engineering College'} • {regForm.branch}</p>

                  <div className="pass-meta-grid">
                    <div>
                      <small>WORKSHOP DATE</small>
                      <strong>Sunday, 6:00 PM IST</strong>
                    </div>
                    <div>
                      <small>DURATION</small>
                      <strong>60 Mins (Live Coding)</strong>
                    </div>
                    <div>
                      <small>STATUS</small>
                      <strong style={{ color: '#10b981' }}>VIP Access Granted</strong>
                    </div>
                    <div>
                      <small>SEAT PASSCODE</small>
                      <strong className="mono">NXT-AI-{Math.floor(1000 + Math.random() * 9000)}</strong>
                    </div>
                  </div>

                  <div className="pass-actions">
                    <a 
                      href="https://chat.whatsapp.com/demo" 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <Smartphone size={18} /> Join Official WhatsApp VIP Group (Mandatory)
                    </a>
                  </div>
                </div>

                <div className="pass-qr-wrap">
                  <div className="qr-box">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://nxtwave.ai/workshop/confirmed" 
                      alt="VIP Entry QR Code" 
                      className="qr-img"
                    />
                    <small>Scan for Live Zoom Access</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ASSET 3: VIRAL REFERRAL ENGINE & GAMIFIED LEADERBOARD */}
      <section className="referral-section">
        <div className="content-wrapper">
          <div className="section-header text-center">
            <span className="badge badge-amber">VIRAL LOOP (K-FACTOR &gt; 1.25)</span>
            <h2>Invite Friends. <span className="gradient-text-amber">Unlock AI Bounties & Cash.</span></h2>
            <p>
              Part of our ₹2,000 budget is directly distributed to top student referrers. Help your classmates level up their placement prep.
            </p>
          </div>

          <div className="referral-grid grid-2">
            {/* Referral Dashboard Card */}
            <div className="glass-card">
              <h3 className="card-heading">
                <Share2 size={20} color="#6366f1" /> Your Personal Referral Link
              </h3>
              <p className="card-sub">
                Share this link with your college WhatsApp group. Each student who registers gives you +1 referral credit.
              </p>

              <div className="ref-link-box">
                <input 
                  type="text" 
                  readOnly 
                  className="ref-input mono"
                  value={`https://nxtwave.ai/ai60?ref=${regForm.fullName ? regForm.fullName.replace(/\s+/g, '').toUpperCase() : 'CAMPUS2026'}`}
                />
                <button className="btn-copy" onClick={handleCopyLink}>
                  {copiedLink ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>

              {/* 1-Click WhatsApp Share */}
              <a 
                href={`https://wa.me/?text=${encodeURIComponent(copywritingArsenal[1].copy)}`}
                target="_blank" 
                rel="noreferrer"
                className="btn-whatsapp w-100 mt-3"
              >
                <Smartphone size={18} /> Share Directly on College WhatsApp Group
              </a>

              {/* Referral Milestones */}
              <div className="milestones-wrap">
                <div className="milestone-title-bar">
                  <span>Your Referrals: <b style={{ color: '#ec4899', fontSize: '1.2rem' }}>{referralCount} Friends Joined</b></span>
                  <button className="btn-outline btn-sm" onClick={simulateFriendReferral}>
                    <Sparkles size={14} /> +1 Test Referral (Simulate)
                  </button>
                </div>

                <div className="milestone-list">
                  <div className={`milestone-item ${referralCount >= 1 ? 'unlocked' : ''}`}>
                    <div className="milestone-status">
                      {referralCount >= 1 ? <CheckCircle2 size={18} color="#10b981" /> : <div className="dot-empty"></div>}
                    </div>
                    <div className="milestone-info">
                      <strong>1 Friend: Top 50 AI Placement Interview Questions (PDF)</strong>
                      <small>{referralCount >= 1 ? 'Unlocked! Download in your dashboard.' : '1 more friend needed'}</small>
                    </div>
                  </div>

                  <div className={`milestone-item ${referralCount >= 3 ? 'unlocked' : ''}`}>
                    <div className="milestone-status">
                      {referralCount >= 3 ? <CheckCircle2 size={18} color="#10b981" /> : <div className="dot-empty"></div>}
                    </div>
                    <div className="milestone-info">
                      <strong>3 Friends: Production LangChain & Gemini Repo Template</strong>
                      <small>{referralCount >= 3 ? 'Unlocked! Repo access granted.' : `${Math.max(0, 3 - referralCount)} more needed`}</small>
                    </div>
                  </div>

                  <div className={`milestone-item ${referralCount >= 5 ? 'unlocked' : ''}`}>
                    <div className="milestone-status">
                      {referralCount >= 5 ? <CheckCircle2 size={18} color="#10b981" /> : <div className="dot-empty"></div>}
                    </div>
                    <div className="milestone-info">
                      <strong>5 Friends: 1-on-1 AI Resume Review + Priority Entry</strong>
                      <small>{referralCount >= 5 ? 'Unlocked! Booking link sent to WhatsApp.' : `${Math.max(0, 5 - referralCount)} more needed`}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Referral Leaderboard */}
            <div className="glass-card">
              <div className="leaderboard-header">
                <div>
                  <h3 className="card-heading">
                    <Award size={20} color="#f59e0b" /> Campus Referral Leaderboard
                  </h3>
                  <p className="card-sub">Top 3 referrers win direct cash bounties from our campaign fund!</p>
                </div>
                <span className="badge badge-amber">₹1,000 PRIZE POOL</span>
              </div>

              <div className="leaderboard-prizes">
                <div className="prize-podium">
                  <div className="podium-item second">
                    <span>🥈 2nd Rank</span>
                    <strong>₹300 Cash</strong>
                  </div>
                  <div className="podium-item first">
                    <span>👑 1st Rank</span>
                    <strong>₹500 Cash</strong>
                  </div>
                  <div className="podium-item third">
                    <span>🥉 3rd Rank</span>
                    <strong>₹200 Cash</strong>
                  </div>
                </div>
              </div>

              <div className="leaderboard-table">
                <div className="leader-row rank-1">
                  <span className="leader-rank">#1</span>
                  <div className="leader-name">
                    <strong>Pooja V.</strong>
                    <small>CBIT Hyderabad (Class Rep)</small>
                  </div>
                  <span className="leader-count">28 Referrals</span>
                  <span className="leader-reward">₹500 Prize</span>
                </div>

                <div className="leader-row rank-2">
                  <span className="leader-rank">#2</span>
                  <div className="leader-name">
                    <strong>Siddharth M.</strong>
                    <small>VIT Vellore (GDSC Lead)</small>
                  </div>
                  <span className="leader-count">22 Referrals</span>
                  <span className="leader-reward">₹300 Prize</span>
                </div>

                <div className="leader-row rank-3">
                  <span className="leader-rank">#3</span>
                  <div className="leader-name">
                    <strong>Rohan Gupta</strong>
                    <small>JNTU Kakinada (CSE Sec-A)</small>
                  </div>
                  <span className="leader-count">19 Referrals</span>
                  <span className="leader-reward">₹200 Prize</span>
                </div>

                <div className="leader-row you-row">
                  <span className="leader-rank">#12</span>
                  <div className="leader-name">
                    <strong>You ({regForm.fullName || 'Student'})</strong>
                    <small>{regForm.college || 'Your College'}</small>
                  </div>
                  <span className="leader-count">{referralCount} Referrals</span>
                  <span className="leader-reward">Level 1 Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET 4: INTERACTIVE 60-MIN WORKSHOP COMPANION & AI EVALUATOR */}
      <section className="evaluator-section">
        <div className="content-wrapper">
          <div className="section-header text-center">
            <span className="badge badge-purple">LIVE WORKSHOP TOOL</span>
            <h2>Interactive Workshop Sandbox &amp; <span className="gradient-text-accent">AI Project Evaluator</span></h2>
            <p>
              Students don't just watch — they build. Test the live AI Customer Support Agent architecture that students build during the 60-minute workshop.
            </p>
          </div>

          <div className="evaluator-card glass-card">
            {/* Project Tabs */}
            <div className="project-tabs">
              <button 
                className={`proj-tab-btn ${activeProjectTab === 'rag-agent' ? 'active' : ''}`}
                onClick={() => setActiveProjectTab('rag-agent')}
              >
                <Code2 size={16} /> 1. Multimodal AI Support Agent (RAG)
              </button>
              <button 
                className={`proj-tab-btn ${activeProjectTab === 'resume-ats' ? 'active' : ''}`}
                onClick={() => setActiveProjectTab('resume-ats')}
              >
                <Terminal size={16} /> 2. Automated ATS Resume Parser
              </button>
              <button 
                className={`proj-tab-btn ${activeProjectTab === 'vision-bot' ? 'active' : ''}`}
                onClick={() => setActiveProjectTab('vision-bot')}
              >
                <Layers size={16} /> 3. Vision AI Defect Classifier
              </button>
            </div>

            <div className="sandbox-grid">
              {/* Code / Prompt Editor Side */}
              <div className="sandbox-editor">
                <div className="editor-top-bar">
                  <span className="editor-file-tag">
                    <Terminal size={14} /> agent_system_prompt.py
                  </span>
                  <span className="badge badge-emerald">Gemini 2.5 Flash API Connected</span>
                </div>

                <div className="code-pre">
                  <p className="code-comment"># Live code built in Minutes 15 - 35 of the workshop</p>
                  <p><span className="keyword">import</span> google.generativeai <span className="keyword">as</span> genai</p>
                  <p><span className="keyword">from</span> vector_store <span className="keyword">import</span> KnowledgeBase</p>
                  <br />
                  <p><span className="keyword">def</span> <span className="func">build_rag_agent</span>(user_query):</p>
                  <p style={{ paddingLeft: '16px' }}>kb = KnowledgeBase.load_index(<span className="str">"company_faq.bin"</span>)</p>
                  <p style={{ paddingLeft: '16px' }}>context = kb.similarity_search(user_query, k=3)</p>
                  <br />
                  <p style={{ paddingLeft: '16px' }} className="code-comment"># Student Prompt Playground:</p>
                </div>

                <div className="prompt-input-wrap">
                  <label className="form-label">Customize Agent Behavior / System Instructions:</label>
                  <textarea 
                    className="form-textarea mono"
                    rows={3}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                  />
                </div>

                <button 
                  className="btn-primary w-100 mt-3"
                  onClick={handleEvaluateProject}
                  disabled={isEvaluating}
                >
                  {isEvaluating ? (
                    <>
                      <span className="spinner"></span> Running Automated AI Code Rubric...
                    </>
                  ) : (
                    <>
                      <Play size={18} /> Run Automated AI Project Evaluation
                    </>
                  )}
                </button>
              </div>

              {/* Evaluation Results / Certificate Preview */}
              <div className="sandbox-result">
                <h4 className="card-heading">
                  <ShieldCheck size={18} color="#10b981" /> Automated AI Evaluation Report
                </h4>

                {!evalResult && !isEvaluating && (
                  <div className="eval-empty">
                    <Code2 size={40} color="#94a3b8" />
                    <p>Click "Run Automated AI Project Evaluation" to test the project against production quality benchmarks.</p>
                  </div>
                )}

                {isEvaluating && (
                  <div className="eval-empty scanning-pulse">
                    <div className="pulse-ring"></div>
                    <p>Testing prompt resilience, token latency, and security guardrails...</p>
                  </div>
                )}

                {evalResult && !isEvaluating && (
                  <div className="eval-metrics">
                    <div className="metric-score-banner">
                      <div className="banner-score">
                        <span>{evalResult.overallScore}</span> / 100
                      </div>
                      <div>
                        <strong>Placement Grade: {evalResult.placementReadiness}</strong>
                        <p>{evalResult.feedback}</p>
                      </div>
                    </div>

                    <div className="metric-breakdown">
                      <div className="metric-chip">
                        <small>Prompt Engineering</small>
                        <strong>{evalResult.promptEngineering}%</strong>
                      </div>
                      <div className="metric-chip">
                        <small>Response Latency</small>
                        <strong>{evalResult.responseLatency}</strong>
                      </div>
                      <div className="metric-chip">
                        <small>Guardrails &amp; Safety</small>
                        <strong>{evalResult.securityGuardrails}%</strong>
                      </div>
                    </div>

                    {/* LinkedIn Certificate Preview */}
                    <div className="certificate-preview glass-card">
                      <div className="cert-header">
                        <Award size={24} color="#f59e0b" />
                        <div>
                          <strong>NxtWave Certificate of AI Competency</strong>
                          <small>Verified Credential ID: NW-AI-2026-X841</small>
                        </div>
                      </div>
                      <p className="cert-desc">
                        This certifies that <b>{regForm.fullName || 'Arjun Sharma'}</b> has successfully architected, integrated, and deployed a production Generative AI Agent in under 60 minutes.
                      </p>
                      <button 
                        className="btn-outline btn-sm w-100 mt-2"
                        onClick={() => alert("LinkedIn Share Dialog: Template and verified badge copied to clipboard!")}
                      >
                        <Share2 size={14} /> Add Verified Credential to LinkedIn Profile
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET 5: AUTOMATED WHATSAPP BOT DRIP SIMULATOR */}
      <section className="whatsapp-bot-section">
        <div className="content-wrapper">
          <div className="section-header text-center">
            <span className="badge badge-emerald">AUTOMATION &amp; RETENTION ASSET</span>
            <h2>Automated WhatsApp <span className="gradient-text-accent">3-Step Attendance Maximizer</span></h2>
            <p>
              Registrations mean nothing without attendance. Our automated Meta Cloud API flow ensures a 68%+ show-up rate with ₹0 human intervention.
            </p>
          </div>

          <div className="bot-showcase-wrap">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-chat-header">
                <div className="wa-avatar">NW</div>
                <div className="wa-info">
                  <strong>NxtWave AI Workshop Bot</strong>
                  <small>Official Verified Business</small>
                </div>
              </div>

              <div className="phone-chat-body">
                {/* Message 1 */}
                <div className="wa-bubble incoming">
                  <p>🎉 <b>Seat Confirmed, Arjun!</b></p>
                  <p>You're registered for <i>"Build Your First AI Project in 60 Minutes"</i> this Sunday at 6:00 PM IST.</p>
                  <div className="wa-card-preview">
                    🎟️ <b>Your VIP Holographic Pass:</b> #NXT-AI-3882<br />
                    ⚡ <b>Free Bonus:</b> Top 50 AI Interview Questions unlocked!
                  </div>
                  <span className="wa-time">Day 0 • Immediate</span>
                </div>

                {/* Message 2 */}
                <div className="wa-bubble incoming">
                  <p>⏰ <b>24 Hours to Go!</b></p>
                  <p>Here is your 3-minute zero-install setup guide. Everything runs in your browser via cloud sandboxes — no high-end GPU or Python installation needed.</p>
                  <span className="wa-time">Day -1 • 6:00 PM</span>
                </div>

                {/* Message 3 */}
                <div className="wa-bubble incoming highlight">
                  <p>🚨 <b>WE ARE LIVE! (Doors Open)</b></p>
                  <p>Zoom room is open. 350+ engineers have joined. Click below to enter and grab the starter GitHub repo:</p>
                  <a href="#join" className="wa-cta-btn">👉 Enter Live Workshop Room</a>
                  <span className="wa-time">D-Day • 5:45 PM (T-minus 15m)</span>
                </div>
              </div>
            </div>

            <div className="bot-analytics-card glass-card">
              <h3 className="card-heading">
                <Zap size={20} color="#06b6d4" /> Why This Flow Guarantees 68%+ Show-Up
              </h3>
              <div className="bot-metric-grid">
                <div className="bot-metric-item">
                  <span className="bot-metric-num">98.2%</span>
                  <span className="bot-metric-label">WhatsApp Open Rate</span>
                  <small>vs 14% on standard email</small>
                </div>
                <div className="bot-metric-item">
                  <span className="bot-metric-num">₹0.40</span>
                  <span className="bot-metric-label">Cost per Outbound Utility</span>
                  <small>Total spend: ₹300 for 500 users</small>
                </div>
                <div className="bot-metric-item">
                  <span className="bot-metric-num">68.4%</span>
                  <span className="bot-metric-label">Live Attendance Ratio</span>
                  <small>340+ live engineers coding</small>
                </div>
              </div>

              <div className="bot-highlights">
                <div className="highlight-row">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span><b>Zero-Install Barrier:</b> Eliminates student anxiety about installing heavy PyTorch or Anaconda libraries.</span>
                </div>
                <div className="highlight-row">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span><b>Direct WhatsApp Group Community:</b> Peer momentum prevents day-of forgetting.</span>
                </div>
                <div className="highlight-row">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span><b>T-15 Minute Push Notification:</b> Catches students on their phone right before the session starts.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 60-MINUTE WORKSHOP CURRICULUM */}
      <section className="curriculum-section">
        <div className="content-wrapper">
          <div className="section-header text-center">
            <span className="badge badge-purple">STEP-BY-STEP BREAKDOWN</span>
            <h2>What Happens In The <span className="gradient-text">60 Minutes</span></h2>
            <p>A precision-engineered, hands-on sprint designed for final-year placement impact.</p>
          </div>

          <div className="timeline-grid grid-4">
            <div className="timeline-card glass-card">
              <div className="timeline-time">00 - 15 MIN</div>
              <h4>LLM Architecture &amp; API Foundations</h4>
              <p>Understanding tokenization, prompt constraints, and connecting the free Gemini Flash API key without spending money.</p>
            </div>

            <div className="timeline-card glass-card">
              <div className="timeline-time">15 - 35 MIN</div>
              <h4>RAG &amp; Vector Embeddings</h4>
              <p>Injecting custom company knowledge so the AI answers with zero hallucination. Building real memory.</p>
            </div>

            <div className="timeline-card glass-card">
              <div className="timeline-time">35 - 50 MIN</div>
              <h4>Full-Stack UI &amp; Cloud Deployment</h4>
              <p>Wrapping the backend with a sleek modern UI and deploying to a live public URL (Vercel) in 1 click.</p>
            </div>

            <div className="timeline-card glass-card">
              <div className="timeline-time">50 - 60 MIN</div>
              <h4>Placement Resume &amp; GitHub Polish</h4>
              <p>Writing recruiter-optimized bullet points for your resume and publishing a starred GitHub repository.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION MODAL */}
      {showRegModal && (
        <div className="modal-overlay" onClick={() => setShowRegModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowRegModal(false)}>✕</button>

            <div className="modal-badge-row">
              <span className="badge badge-purple">FREE ADMISSION</span>
              <span className="badge badge-amber">ONLY {totalSeats - seatsClaimed} SEATS LEFT</span>
            </div>

            <h2 className="modal-title">Reserve Your VIP Seat</h2>
            <p className="modal-desc">
              Get your instant holographic pass, WhatsApp community link, and free AI Interview Questions PDF.
            </p>

            <form onSubmit={handleRegisterSubmit} className="mt-4">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="e.g. Arjun Sharma"
                  value={regForm.fullName}
                  onChange={(e) => setRegForm({ ...regForm, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">College / University Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="e.g. JNTU Hyderabad / SRM Chennai"
                  value={regForm.college}
                  onChange={(e) => setRegForm({ ...regForm, college: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp Number (For VIP Pass Delivery)</label>
                <input 
                  type="tel" 
                  required 
                  className="form-input" 
                  placeholder="e.g. 9876543210"
                  value={regForm.whatsapp}
                  onChange={(e) => setRegForm({ ...regForm, whatsapp: e.target.value })}
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Branch</label>
                  <select 
                    className="form-select"
                    value={regForm.branch}
                    onChange={(e) => setRegForm({ ...regForm, branch: e.target.value })}
                  >
                    <option value="CSE / IT">CSE / IT</option>
                    <option value="ECE / EEE">ECE / EEE</option>
                    <option value="Mechanical / Civil">Mechanical / Civil</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Referral Code (Optional)</label>
                  <input 
                    type="text" 
                    className="form-input mono" 
                    placeholder="e.g. POOJA2026"
                    value={regForm.referralCode}
                    onChange={(e) => setRegForm({ ...regForm, referralCode: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-100 mt-2">
                <CheckCircle2 size={18} /> Confirm Registration &amp; Generate VIP Pass
              </button>

              <p className="text-center text-muted mt-3" style={{ fontSize: '0.78rem' }}>
                🔒 100% Free. No credit card or spam ever. Verified by NxtWave.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
