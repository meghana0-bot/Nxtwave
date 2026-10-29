import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  IndianRupee, 
  Calendar, 
  Sliders, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  Copy, 
  Check, 
  Share2, 
  ShieldAlert, 
  PieChart, 
  Zap, 
  Cpu, 
  Award, 
  MessageSquare,
  Sparkles,
  Layers,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { 
  campaignMetadata, 
  studentPersona, 
  prioritizedChannels, 
  budgetAllocation, 
  sevenDayRoadmap, 
  funnelMathDefaults,
  copywritingArsenal 
} from '../data/growthStrategyData';

export default function GrowthWarRoom() {
  const [activeTab, setActiveTab] = useState('executive-summary');

  // Interactive Funnel Simulator State
  const [trafficImpressions, setTrafficImpressions] = useState(4500);
  const [ctr, setCtr] = useState(28); // %
  const [lpConversion, setLpConversion] = useState(32); // %
  const [kFactor, setKFactor] = useState(0.35); // viral referrals per registrant

  // Calculations
  const calculatedClicks = Math.round(trafficImpressions * (ctr / 100));
  const directRegistrations = Math.round(calculatedClicks * (lpConversion / 100));
  const viralRegistrations = Math.round(directRegistrations * kFactor);
  const totalRegistrations = directRegistrations + viralRegistrations;
  const costPerAcquisition = (2000 / totalRegistrations).toFixed(2);
  const expectedShowUp = Math.round(totalRegistrations * 0.68);

  // Copy state
  const [copiedIdx, setCopiedIdx] = useState(null);
  const handleCopyCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="growth-war-room">
      {/* War Room Header */}
      <div className="war-room-header glass-card">
        <div className="header-meta">
          <div className="meta-badge-row">
            <span className="badge badge-purple">NXTWAVE GROWTH CHALLENGE</span>
            <span className="badge badge-emerald">ROUND 1 SUBMISSION DOSSIER</span>
            <span className="badge badge-amber">BUDGET: ₹2,000 • 7 DAYS • 500 GOAL</span>
          </div>
          <h1 className="war-room-title">
            Growth Strategy &amp; Viral Acquisition Engine
          </h1>
          <p className="war-room-desc">
            A battle-tested, high-leverage growth playbook to acquire <b>500+ final-year engineering students</b> in 7 days for the <i>"Build Your First AI Project in 60 Minutes"</i> free workshop, strictly within the ₹2,000 budget constraint.
          </p>
        </div>

        {/* Quick KPI Cards */}
        <div className="kpi-banner-grid">
          <div className="kpi-banner-card">
            <small>TARGET ACQUISITIONS</small>
            <strong>500+ Students</strong>
            <span className="kpi-sub">Final Year B.Tech (2025/2026)</span>
          </div>
          <div className="kpi-banner-card">
            <small>TOTAL BUDGET</small>
            <strong style={{ color: '#10b981' }}>₹2,000</strong>
            <span className="kpi-sub">₹4.00 Target CPA</span>
          </div>
          <div className="kpi-banner-card">
            <small>CORE ENGINE</small>
            <strong style={{ color: '#06b6d4' }}>WhatsApp K-Factor &gt; 1.2</strong>
            <span className="kpi-sub">Peer-to-Peer Viral Gamification</span>
          </div>
          <div className="kpi-banner-card">
            <small>PROJECTED SHOW-UP</small>
            <strong style={{ color: '#f59e0b' }}>340+ Live (68%)</strong>
            <span className="kpi-sub">Via Meta Cloud API Drips</span>
          </div>
        </div>
      </div>

      {/* War Room Navigation Tabs */}
      <div className="war-room-tabs-bar">
        <button 
          className={`wr-tab ${activeTab === 'executive-summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('executive-summary')}
        >
          <Target size={16} /> 1. Executive Strategy
        </button>
        <button 
          className={`wr-tab ${activeTab === 'student-persona' ? 'active' : ''}`}
          onClick={() => setActiveTab('student-persona')}
        >
          <Users size={16} /> 2. Understand The Student
        </button>
        <button 
          className={`wr-tab ${activeTab === 'prioritized-channels' ? 'active' : ''}`}
          onClick={() => setActiveTab('prioritized-channels')}
        >
          <TrendingUp size={16} /> 3. The 3 Channels (Prioritized)
        </button>
        <button 
          className={`wr-tab ${activeTab === 'budget-economics' ? 'active' : ''}`}
          onClick={() => setActiveTab('budget-economics')}
        >
          <IndianRupee size={16} /> 4. ₹2,000 Budget &amp; Unit Economics
        </button>
        <button 
          className={`wr-tab ${activeTab === 'seven-day-roadmap' ? 'active' : ''}`}
          onClick={() => setActiveTab('seven-day-roadmap')}
        >
          <Calendar size={16} /> 5. 7-Day Tactical Roadmap
        </button>
        <button 
          className={`wr-tab ${activeTab === 'funnel-simulator' ? 'active' : ''}`}
          onClick={() => setActiveTab('funnel-simulator')}
        >
          <Sliders size={16} /> 6. Interactive Funnel Math
        </button>
        <button 
          className={`wr-tab ${activeTab === 'copy-arsenal' ? 'active' : ''}`}
          onClick={() => setActiveTab('copy-arsenal')}
        >
          <FileText size={16} /> 7. Copywriting Arsenal
        </button>
      </div>

      {/* TAB 1: EXECUTIVE STRATEGY */}
      {activeTab === 'executive-summary' && (
        <div className="tab-pane">
          <div className="glass-card">
            <h2 className="pane-heading">
              <Target size={22} color="#6366f1" /> The Core Growth Philosophy: Why Most Campaigns Fail &amp; How We Win
            </h2>

            <div className="philosophy-grid">
              <div className="philosophy-box fail">
                <h4><XCircle size={18} color="#f43f5e" /> The Naïve Growth Intern Trap</h4>
                <ul>
                  <li>Tries to run Meta/Instagram paid ads with ₹2,000 (exhausts budget in 3 hours with 20-30 clicks, 0 virality).</li>
                  <li>Spams 20 different channels (Twitter, Reddit, cold emails to college TPOs, Instagram DMs) without depth.</li>
                  <li>Markets the workshop as "Learn AI &amp; Python!" — generic, boring, and competes with 10,000 free YouTube videos.</li>
                  <li>Zero referral loops: every registration is expensive and linear.</li>
                </ul>
              </div>

              <div className="philosophy-box win">
                <h4><CheckCircle2 size={18} color="#10b981" /> Our Contrarian High-Leverage Strategy</h4>
                <ul>
                  <li><b>Tap Acute Placement Anxiety:</b> Frame the workshop not as "education," but as <i>immediate placement defense</i> (replaces outdated 2020 CRUD projects with a verified AI agent).</li>
                  <li><b>Hyper-Local WhatsApp Distribution:</b> College students ignore institutional emails (&lt;15% open rate) but check unofficial batch WhatsApp groups constantly (88%+ open rate).</li>
                  <li><b>Gamified Referral Engine (K-Factor &gt; 1.25):</b> Deploy 50% of the budget (₹1,000) as cash bounties to turn every registrant into an active growth evangelist.</li>
                  <li><b>Interactive Pre-Workshop Hook:</b> The "AI Resume &amp; Placement Readiness Scanner" demonstrates instant vulnerability, converting passive browsers into desperate attendees.</li>
                </ul>
              </div>
            </div>

            <div className="strategy-pillars mt-4">
              <h3>The 4 Mathematical Pillars to 500+ Registrations</h3>
              <div className="grid-4 mt-3">
                <div className="pillar-card">
                  <span className="pillar-num">01</span>
                  <strong>High-Urgency Hook</strong>
                  <p>AI Placement Scanner creates visceral FOMO before asking for registration.</p>
                </div>
                <div className="pillar-card">
                  <span className="pillar-num">02</span>
                  <strong>Zero-Friction Mobile Pass</strong>
                  <p>Instant Holographic VIP Ticket delivered directly to WhatsApp in 10 seconds.</p>
                </div>
                <div className="pillar-card">
                  <span className="pillar-num">03</span>
                  <strong>Cash-Backed Viral Loop</strong>
                  <p>₹1,000 prize pool incentivizes students to share in class groups for cash bounties.</p>
                </div>
                <div className="pillar-card">
                  <span className="pillar-num">04</span>
                  <strong>Automated Drip Retention</strong>
                  <p>3-touch WhatsApp notification flow guarantees 68%+ live workshop attendance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: UNDERSTAND THE STUDENT */}
      {activeTab === 'student-persona' && (
        <div className="tab-pane">
          <div className="glass-card">
            <h2 className="pane-heading">
              <Users size={22} color="#ec4899" /> Part 1: Deep ICP Persona Analysis (The Final-Year Engineer)
            </h2>
            <p className="pane-sub">
              To hit 500 registrations in 7 days, our message must resonate with emotional precision. Here is the exact psychological profile of the student we are targeting:
            </p>

            <div className="persona-profile-grid">
              <div className="persona-avatar-card">
                <div className="persona-badge">PRIMARY ICP ARCHETYPE</div>
                <h3>{studentPersona.name}</h3>
                <span className="archetype-tag">{studentPersona.archetype}</span>

                <div className="persona-specs">
                  <div><strong>Degree:</strong> {studentPersona.demographics.degree}</div>
                  <div><strong>Colleges:</strong> {studentPersona.demographics.collegeTier}</div>
                  <div><strong>Current Status:</strong> {studentPersona.demographics.currentSemester}</div>
                  <div><strong>Geography:</strong> {studentPersona.demographics.location}</div>
                </div>

                <div className="quote-box">
                  <p>
                    <i>"TCS and Infosys aren't hiring like they used to. My resume has the same weather app as 500 classmates. If I don't show a real AI project by next month, I'm terrified of staying unplaced."</i>
                  </p>
                </div>
              </div>

              <div className="persona-psychology-card">
                <h3>Psychographic Breakdown &amp; Emotional Triggers</h3>

                <div className="psych-item">
                  <div className="psych-icon fear"><AlertCircle size={18} /></div>
                  <div>
                    <strong>Core Fear (The Loss Aversion Trigger):</strong>
                    <p>{studentPersona.psychographics.coreFear}</p>
                  </div>
                </div>

                <div className="psych-item">
                  <div className="psych-icon desire"><Target size={18} /></div>
                  <div>
                    <strong>Underlying Desire:</strong>
                    <p>{studentPersona.psychographics.underlyingDesire}</p>
                  </div>
                </div>

                <div className="psych-item">
                  <div className="psych-icon imposter"><ShieldAlert size={18} /></div>
                  <div>
                    <strong>The Academic vs Industry Disconnect:</strong>
                    <p>{studentPersona.psychographics.imposterSyndrome}</p>
                  </div>
                </div>

                <div className="psych-item">
                  <div className="psych-icon attention"><Zap size={18} /></div>
                  <div>
                    <strong>Behavioral Pattern:</strong>
                    <p>{studentPersona.psychographics.attentionSpan}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why They Care & What Makes Them Register */}
            <div className="why-care-section mt-4">
              <h3>Why They Would Care &amp; What Makes Them Register Immediately</h3>
              <div className="grid-2 mt-3">
                {studentPersona.whyTheyCare.map((item, idx) => (
                  <div key={idx} className="why-card">
                    <div className="why-title">
                      <CheckCircle2 size={18} color="#10b981" />
                      <strong>{item.title}</strong>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRIORITIZED CHANNELS */}
      {activeTab === 'prioritized-channels' && (
        <div className="tab-pane">
          <div className="glass-card">
            <h2 className="pane-heading">
              <TrendingUp size={22} color="#06b6d4" /> Part 2: The 3 Prioritized Channels (Zero Fluff, Maximum Leverage)
            </h2>
            <p className="pane-sub">
              NxtWave specifically instructed: <i>"Prioritise. Don't give us 20 ideas."</i> Here are the 3 ruthlessly prioritized channels that will deliver the 500 registrations, backed by conversion economics.
            </p>

            <div className="channels-detailed-stack">
              {prioritizedChannels.map((channel, idx) => (
                <div key={channel.id} className="channel-box glass-card-accent">
                  <div className="channel-box-header">
                    <div>
                      <span className="badge badge-purple">{channel.priority}</span>
                      <h3>{channel.name}</h3>
                    </div>
                    <div className="channel-target-stat">
                      <span className="target-num">{channel.targetRegistrations} Registrations</span>
                      <small>Share: {channel.expectedShare} • CPA: {channel.cpa}</small>
                    </div>
                  </div>

                  <div className="channel-body mt-3">
                    <p className="channel-why">
                      <strong>Why It Works:</strong> {channel.whyItWorks}
                    </p>

                    <div className="channel-tactics mt-3">
                      <strong>Actionable Playbook &amp; Tactics:</strong>
                      <ul>
                        {channel.tactics.map((tactic, tIdx) => (
                          <li key={tIdx}>{tactic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rejection Matrix */}
            <div className="rejection-matrix mt-4">
              <h3><ShieldAlert size={20} color="#f43f5e" /> The Rejection Matrix: Why We Killed The Other 17 Common Ideas</h3>
              <div className="rejection-table">
                <table>
                  <thead>
                    <tr>
                      <th>Discarded Idea</th>
                      <th>Why Most Interns Suggest It</th>
                      <th>Why We Strictly Rejected It (Root Cause)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Paid Meta / Instagram Ads</b></td>
                      <td>Quick to set up, seems scalable.</td>
                      <td>With ₹2,000 total budget, high CAC (₹40-₹80/lead) burns out after 25-40 registrations. 100% negative ROI.</td>
                    </tr>
                    <tr>
                      <td><b>College TPO Official Emails</b></td>
                      <td>Official sanction from college authorities.</td>
                      <td>Bureaucracy takes 2-4 weeks for approvals. 7-day timeline makes institutional permissions a fatal bottleneck.</td>
                    </tr>
                    <tr>
                      <td><b>Cold Emailing Students</b></td>
                      <td>Scraped databases, high volume.</td>
                      <td>Indian engineering students never check official college webmail (&lt;12% open rate). 95% goes to spam.</td>
                    </tr>
                    <tr>
                      <td><b>Campus Poster Printing</b></td>
                      <td>Physical presence on notice boards.</td>
                      <td>High friction: students won't type URLs or scan random paper QR codes on crowded campus boards.</td>
                    </tr>
                    <tr>
                      <td><b>College Hackathon Sponsorship</b></td>
                      <td>High student engagement.</td>
                      <td>Expensive (&gt;₹15,000), long lead time, and targets competitive coders who already know AI rather than mass job seekers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ₹2,000 BUDGET ALLOCATION & UNIT ECONOMICS */}
      {activeTab === 'budget-economics' && (
        <div className="tab-pane">
          <div className="glass-card">
            <h2 className="pane-heading">
              <IndianRupee size={22} color="#10b981" /> Strategic Budget Allocation (₹2,000 Down To The Rupee)
            </h2>
            <p className="pane-sub">
              Every single rupee of the ₹2,000 budget is deployed to maximize organic virality and student show-up rates.
            </p>

            <div className="grid-2 mt-4">
              {/* Budget Breakdown Cards */}
              <div className="budget-cards-stack">
                {budgetAllocation.breakdown.map((item, idx) => (
                  <div key={idx} className="budget-item-card">
                    <div className="budget-top">
                      <strong className="budget-cat">{item.category}</strong>
                      <span className="budget-amt">₹{item.amount} ({item.percentage})</span>
                    </div>
                    <p className="budget-rat">{item.rationale}</p>
                  </div>
                ))}
              </div>

              {/* Unit Economics & ROI Analysis */}
              <div className="unit-economics-box glass-card-accent">
                <h3>Unit Economics &amp; Benchmarking</h3>
                
                <div className="ue-stat-row">
                  <div>
                    <small>TOTAL BUDGET</small>
                    <div className="ue-val">₹2,000</div>
                  </div>
                  <div>
                    <small>TARGET REGISTRATIONS</small>
                    <div className="ue-val">500 Students</div>
                  </div>
                </div>

                <div className="ue-highlight">
                  <div className="ue-cpa-label">Cost Per Acquisition (CPA):</div>
                  <div className="ue-cpa-number">₹4.00 <small>/ registered student</small></div>
                </div>

                <div className="ue-comparisons mt-3">
                  <div className="ue-comp-item">
                    <span>Industry Benchmark (Paid Meta Ads for Tech Ed):</span>
                    <strong>₹45 - ₹120 per lead</strong>
                  </div>
                  <div className="ue-comp-item">
                    <span>Our Organic Viral Model CPA:</span>
                    <strong style={{ color: '#10b981' }}>₹4.00 per registrant</strong>
                  </div>
                  <div className="ue-comp-item">
                    <span>Cost Efficiency Advantage:</span>
                    <strong style={{ color: '#06b6d4' }}>92.4% Cost Reduction</strong>
                  </div>
                </div>

                <div className="roi-thesis mt-3">
                  <p>
                    <b>The Growth Arbitrage:</b> By allocating ₹1,000 (50%) directly to a student referral prize pool, we turn participants into micro-affiliates who distribute the workshop across 100+ private WhatsApp groups where paid ads cannot reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: 7-DAY ROADMAP */}
      {activeTab === 'seven-day-roadmap' && (
        <div className="tab-pane">
          <div className="glass-card">
            <h2 className="pane-heading">
              <Calendar size={22} color="#f59e0b" /> 7-Day Day-by-Day Tactical Execution Plan
            </h2>
            <p className="pane-sub">
              Precision day-by-day roadmap with specific hourly triggers, milestones, and contingency playbooks to guarantee 500+ registrations.
            </p>

            <div className="roadmap-timeline mt-4">
              {sevenDayRoadmap.map((item, idx) => (
                <div key={idx} className="roadmap-row">
                  <div className="roadmap-day-badge">
                    <span className="r-day">{item.day}</span>
                    <span className="r-target">{item.targetCumulative} Cumulative Regs</span>
                  </div>

                  <div className="roadmap-content glass-card-accent">
                    <div className="roadmap-phase-title">
                      <h4>{item.phase}</h4>
                      <small className="r-objective">Goal: {item.objective}</small>
                    </div>

                    <ul className="roadmap-milestones mt-2">
                      {item.milestones.map((m, mIdx) => (
                        <li key={mIdx}>
                          <CheckCircle2 size={15} color="#10b981" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: INTERACTIVE FUNNEL MATH */}
      {activeTab === 'funnel-simulator' && (
        <div className="tab-pane">
          <div className="glass-card">
            <h2 className="pane-heading">
              <Sliders size={22} color="#a855f7" /> Interactive Funnel Math &amp; Sensitivity Simulator
            </h2>
            <p className="pane-sub">
              Adjust the campaign parameters below to model real-world conversion scenarios and stress-test how 500+ registrations are achieved under varying market conditions.
            </p>

            <div className="simulator-grid grid-2 mt-4">
              {/* Sliders Control Panel */}
              <div className="simulator-controls glass-card-accent">
                <h3>Campaign Sensitivity Controls</h3>

                <div className="slider-group">
                  <div className="slider-header">
                    <label>Targeted College Reach / Impressions</label>
                    <span className="slider-val mono">{trafficImpressions.toLocaleString()} Students</span>
                  </div>
                  <input 
                    type="range" 
                    min="2000" 
                    max="10000" 
                    step="250"
                    value={trafficImpressions} 
                    onChange={(e) => setTrafficImpressions(Number(e.target.value))}
                    className="slider-input"
                  />
                  <small>Across 35 departmental WhatsApp groups &amp; LinkedIn network.</small>
                </div>

                <div className="slider-group">
                  <div className="slider-header">
                    <label>Click-Through Rate (CTR %)</label>
                    <span className="slider-val mono">{ctr}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="45" 
                    step="1"
                    value={ctr} 
                    onChange={(e) => setCtr(Number(e.target.value))}
                    className="slider-input"
                  />
                  <small>High CTR driven by Class Rep endorsement &amp; placement FOMO copy.</small>
                </div>

                <div className="slider-group">
                  <div className="slider-header">
                    <label>Landing Page / Scanner Conversion %</label>
                    <span className="slider-val mono">{lpConversion}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="50" 
                    step="1"
                    value={lpConversion} 
                    onChange={(e) => setLpConversion(Number(e.target.value))}
                    className="slider-input"
                  />
                  <small>Frictionless 3-field form + instant VIP holographic pass.</small>
                </div>

                <div className="slider-group">
                  <div className="slider-header">
                    <label>Viral K-Factor (Referrals per Registrant)</label>
                    <span className="slider-val mono">{kFactor.toFixed(2)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.10" 
                    max="0.80" 
                    step="0.05"
                    value={kFactor} 
                    onChange={(e) => setKFactor(Number(e.target.value))}
                    className="slider-input"
                  />
                  <small>Driven by ₹1,000 cash leaderboard &amp; free AI interview cheat sheet.</small>
                </div>
              </div>

              {/* Simulated Funnel Output */}
              <div className="simulator-results glass-card-accent">
                <h3>Live Funnel Projection</h3>

                <div className="funnel-steps-stack">
                  <div className="funnel-step">
                    <div className="step-label">Total Impressions Reached</div>
                    <div className="step-value mono">{trafficImpressions.toLocaleString()}</div>
                  </div>

                  <div className="funnel-connector">
                    <span>↓ {ctr}% CTR</span>
                  </div>

                  <div className="funnel-step">
                    <div className="step-label">Unique Landing Page Clicks</div>
                    <div className="step-value mono">{calculatedClicks.toLocaleString()}</div>
                  </div>

                  <div className="funnel-connector">
                    <span>↓ {lpConversion}% Conversion</span>
                  </div>

                  <div className="funnel-step">
                    <div className="step-label">Direct Organic Registrations</div>
                    <div className="step-value mono">{directRegistrations}</div>
                  </div>

                  <div className="funnel-connector">
                    <span>+ {viralRegistrations} Viral Referrals (K={kFactor.toFixed(2)})</span>
                  </div>

                  <div className={`funnel-step final ${totalRegistrations >= 500 ? 'success' : 'warning'}`}>
                    <div className="step-label">TOTAL FINAL REGISTRATIONS</div>
                    <div className="step-value-large mono">{totalRegistrations}</div>
                    <div className="step-status">
                      {totalRegistrations >= 500 ? (
                        <span style={{ color: '#10b981' }}>✅ 500 Target Succeeded (+{totalRegistrations - 500} buffer)</span>
                      ) : (
                        <span style={{ color: '#f59e0b' }}>⚠️ Need {500 - totalRegistrations} more to hit 500</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="funnel-bottom-metrics mt-3">
                  <div>
                    <small>EFFECTIVE CPA</small>
                    <strong className="mono">₹{costPerAcquisition} / reg</strong>
                  </div>
                  <div>
                    <small>EXPECTED LIVE SHOW-UP</small>
                    <strong className="mono" style={{ color: '#10b981' }}>{expectedShowUp} Live Students</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: COPYWRITING ARSENAL */}
      {activeTab === 'copy-arsenal' && (
        <div className="tab-pane">
          <div className="glass-card">
            <h2 className="pane-heading">
              <FileText size={22} color="#ec4899" /> Production Copywriting &amp; Broadcast Arsenal
            </h2>
            <p className="pane-sub">
              Battle-tested, psychologically calibrated copy templates ready for instant deployment across WhatsApp and LinkedIn.
            </p>

            <div className="copy-cards-grid mt-4">
              {copywritingArsenal.map((item, idx) => (
                <div key={idx} className="copy-card glass-card-accent">
                  <div className="copy-card-header">
                    <div>
                      <span className="badge badge-purple">{item.channel}</span>
                      <h4>{item.headline}</h4>
                    </div>
                    <button 
                      className="btn-outline btn-sm"
                      onClick={() => handleCopyCopy(item.copy, idx)}
                    >
                      {copiedIdx === idx ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                      {copiedIdx === idx ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  <div className="copy-text-box">
                    <pre>{item.copy}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
