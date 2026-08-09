import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  PhoneCall, 
  Globe, 
  Menu, 
  X, 
  Home, 
  Info, 
  Users, 
  Award, 
  FileText, 
  Building2, 
  BarChart3, 
  Phone,
  MapPin,
  Volume2
} from 'lucide-react';

export const Header = ({ activePage, setActivePage }) => {
  const { toggleLanguage, t, lang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleSpeechRights = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }
      const textToSpeak = lang === 'te'
        ? "ఆంధ్రప్రదేశ్ రాష్ట్ర ఆహార కమిషన్. జాతీయ ఆహార భద్రతా చట్టం 2013 కింద ఉచిత రేషన్ బియ్యం, మధ్యాహ్న భోజనం మరియు అంగన్‌వాడీ పోషకాహార హక్కులను పర్యవేక్షిస్తుంది."
        : "Andhra Pradesh State Food Commission. Statutory authority under Section 16 of National Food Security Act 2013 ensuring public ration, mid-day meals, and maternal nutrition.";

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const navItems = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'about', label: t.navAbout, icon: Info },
    { id: 'team', label: t.navTeam, icon: Users },
    { id: 'functions', label: t.navFunctions, icon: Award },
    { id: 'visits', label: t.navVisits, icon: MapPin },
    { id: 'grievance', label: t.navGrievance, icon: FileText },
    { id: 'nodal', label: t.navNodalOfficers, icon: Building2 },
    { id: 'stats', label: t.navStats, icon: BarChart3 },
    { id: 'contact', label: t.navContact, icon: Phone },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="main-header">
      <div className="container header-main-wrapper">
        <div className="header-brand-row">
          {/* Left: Food Commission Seal & Title */}
          <div className="brand-group" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            <div className="brand-logo-card">
              <img 
                src="/images/apsfc_official_logo.png" 
                alt="AP State Food Commission Official Seal" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div className="brand-text">
              <div className="brand-dept-tag">
                {t.govtName} | <span>{t.deptName}</span>
              </div>
              <h1 className="brand-main-title">
                {t.commissionTitle}
              </h1>
              <p className="brand-sub-tag">
                {t.commissionTagline}
              </p>
            </div>
          </div>

          {/* Right: Government of AP Emblem & Utility Pills (Desktop) */}
          <div className="header-right-utilities hidden-mobile">
            <div className="utility-pills-row">
              <span className="live-pulse">
                <span className="pulse-dot"></span> e-PDS ONLINE
              </span>

              <button 
                className="audio-speech-btn" 
                onClick={handleSpeechRights}
                title="Listen to NFSA Food Entitlements in Voice Audio"
              >
                <Volume2 size={13} color="#005A2B" />
                <span>{isPlayingAudio ? (lang === 'te' ? 'ఆపు' : 'Stop Audio') : (lang === 'te' ? 'వాయిస్ సహాయం' : 'Voice Guide')}</span>
              </button>

              <a href="tel:1967" className="helpline-badge">
                <PhoneCall size={13} />
                Helpline: 1967
              </a>

              <button className="lang-toggle-btn" onClick={toggleLanguage}>
                <Globe size={13} /> {t.langSwitch}
              </button>
            </div>

            <div className="brand-logo-card ap-govt-logo-card">
              <img 
                src="/images/ap_govt_emblem.png" 
                alt="Government of Andhra Pradesh Emblem" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Clean Navigation Links Row */}
        <nav className="header-nav-row">
          <ul className={`clean-nav-bar ${mobileOpen ? 'mobile-open' : ''}`}>
            {/* Mobile Utility Actions Box */}
            <li className="mobile-utility-strip">
              <a href="tel:1967" className="helpline-badge">
                <PhoneCall size={13} /> 1967
              </a>
              <button className="lang-toggle-btn" onClick={toggleLanguage}>
                <Globe size={13} /> {t.langSwitch}
              </button>
              <button className="audio-speech-btn" onClick={handleSpeechRights}>
                <Volume2 size={13} color="#005A2B" />
                <span>{isPlayingAudio ? 'Stop' : 'Voice'}</span>
              </button>
            </li>

            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activePage === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`clean-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <IconComp size={15} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
