import React, { useState } from 'react';
import StudentPortal from './components/StudentPortal';
import GrowthWarRoom from './components/GrowthWarRoom';
import { 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Zap, 
  Printer, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import './App.css';

export default function App() {
  const [viewMode, setViewMode] = useState('student'); // 'student' | 'warroom'

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      {/* Sticky Header with Mode Switcher */}
      <header className="header-glass">
        <div className="content-wrapper">
          <div className="header-content">
            {/* Brand Logo & Meta */}
            <div 
              className="brand-wrapper" 
              onClick={() => setViewMode('student')}
            >
              <div className="brand-logo-badge">
                <Sparkles size={22} />
              </div>
              <div>
                <div className="brand-title">
                  <span>NxtWave</span>
                  <span className="brand-tag">Growth Challenge</span>
                </div>
                <small style={{ color: 'var(--text-sub)', fontSize: '0.72rem' }}>
                  Target: 500 Final-Year Engineers • ₹2K Budget • 7 Days
                </small>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="view-switcher">
              <button 
                className={`switcher-btn ${viewMode === 'student' ? 'active' : ''}`}
                onClick={() => setViewMode('student')}
              >
                <Layers size={16} /> Student Experience (Live Portal &amp; Assets)
              </button>
              <button 
                className={`switcher-btn war-room ${viewMode === 'warroom' ? 'active' : ''}`}
                onClick={() => setViewMode('warroom')}
              >
                <TrendingUp size={16} /> Growth War Room (Evaluation Dossier)
              </button>
            </div>

            {/* Header Right Action */}
            <div className="header-right-actions">
              <button 
                className="btn-outline btn-sm"
                onClick={handlePrint}
                title="Print or Save Strategy Dossier as PDF"
              >
                <Printer size={14} /> Export Dossier (PDF)
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dynamic View Content */}
      <main className="main-content">
        {viewMode === 'student' ? (
          <StudentPortal onOpenWarRoom={() => setViewMode('warroom')} />
        ) : (
          <div className="content-wrapper">
            <GrowthWarRoom />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer-glass">
        <div className="content-wrapper">
          <div className="footer-content">
            <div className="footer-left">
              <p>
                <b>NxtWave Growth Intern Challenge (Round 1 Submission)</b>
              </p>
              <small style={{ color: 'var(--text-sub)' }}>
                Demonstrating strategic student empathy, mathematical channel prioritization, viral K-factor loops, and production AI assets.
              </small>
            </div>
            <div className="footer-tags">
              <span className="badge badge-purple">7 Days Duration</span>
              <span className="badge badge-emerald">₹2,000 Budget Allocated</span>
              <span className="badge badge-cyan">500 Registrations Target</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
