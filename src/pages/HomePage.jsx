import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sampleGrievances, teamMembers } from '../data/mockData';
import { 
  FileText, 
  Search, 
  ShieldAlert, 
  ShoppingBag, 
  Utensils, 
  Baby, 
  Scale, 
  ArrowRight, 
  Building2, 
  ChevronRight
} from 'lucide-react';

export const HomePage = ({ setActivePage, setGrievanceSearchQuery }) => {
  const { t } = useLanguage();
  const [heroSearchInput, setHeroSearchInput] = useState('');
  const [heroSearchResult, setHeroSearchResult] = useState(null);
  const [heroSearchError, setHeroSearchError] = useState('');

  const chairman = teamMembers[0];

  const handleHeroTrackSearch = (e) => {
    e.preventDefault();
    setHeroSearchResult(null);
    setHeroSearchError('');

    if (!heroSearchInput.trim()) {
      setHeroSearchError('Please enter a Reference ID or Mobile Number');
      return;
    }

    const query = heroSearchInput.trim().toLowerCase();
    const found = sampleGrievances.find(
      (g) => g.refId.toLowerCase() === query || g.mobile.includes(query)
    );

    if (found) {
      setHeroSearchResult(found);
    } else {
      if (setGrievanceSearchQuery) {
        setGrievanceSearchQuery(heroSearchInput);
      }
      setActivePage('grievance');
    }
  };

  return (
    <div>
      {/* Clean Uncluttered Hero Banner */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="hero-badge">
                <ShieldAlert size={15} /> Section 16 Statutory Authority
              </span>
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="hero-subtitle">{t.heroSubtitle}</p>
              
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => setActivePage('grievance')}>
                  <FileText size={17} /> {t.fileGrievanceBtn}
                </button>
                <button className="btn-secondary" onClick={() => setActivePage('nodal')}>
                  <Building2 size={17} /> {t.navNodalOfficers}
                </button>
              </div>
            </div>

            {/* Quick Status Lookup Card */}
            <div>
              <div className="hero-widget-card">
                <h3 className="widget-title">
                  <Search size={18} color="#005A2B" /> {t.trackStatusBtn}
                </h3>
                <p className="widget-desc">Check live grievance resolution status.</p>
                
                <form onSubmit={handleHeroTrackSearch}>
                  <div style={{ marginBottom: '0.85rem' }}>
                    <input
                      type="text"
                      className="widget-input"
                      placeholder="Reference ID (e.g. AP-SFC-2026-84920)"
                      value={heroSearchInput}
                      onChange={(e) => setHeroSearchInput(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Search size={15} /> {t.btnSearchStatus}
                  </button>
                </form>

                {heroSearchError && (
                  <p style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '0.5rem', fontWeight: 600 }}>
                    ⚠️ {heroSearchError}
                  </p>
                )}

                {heroSearchResult && (
                  <div style={{ marginTop: '0.85rem', padding: '0.8rem', background: '#f0fdf4', borderRadius: '8px', borderLeft: '3.5px solid #005A2B' }}>
                    <div style={{ fontSize: '0.82rem', color: '#005A2B', fontWeight: 800 }}>
                      ID: {heroSearchResult.refId}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#1e293b', marginTop: '0.2rem', fontWeight: 600 }}>
                      Status: <span style={{ color: '#005A2B' }}>{heroSearchResult.status}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Essential Metric Cards */}
      <section className="stats-banner-section container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <ShoppingBag size={22} />
            </div>
            <div className="stat-info">
              <h3>{t.activeCardsVal}</h3>
              <p>{t.activeCards}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper" style={{ background: '#fffbeb', color: '#c59b27' }}>
              <Building2 size={22} />
            </div>
            <div className="stat-info">
              <h3>{t.fpsShopsVal}</h3>
              <p>{t.fpsShops}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper" style={{ background: '#e0f2fe', color: '#0284c7' }}>
              <Utensils size={22} />
            </div>
            <div className="stat-info">
              <h3>{t.mdmSchoolsVal}</h3>
              <p>{t.mdmSchools}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper" style={{ background: '#fef3c7', color: '#b45309' }}>
              <Baby size={22} />
            </div>
            <div className="stat-info">
              <h3>{t.anganwadiCentersVal}</h3>
              <p>{t.anganwadiCenters}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Statutory Mandate Verticals */}
      <section className="section-wrapper container">
        <div className="section-header">
          <span className="section-tag">Core Operational Mandates</span>
          <h2 className="section-title">{t.mandateHeadline}</h2>
          <p className="section-subtitle">{t.mandateSubhead}</p>
        </div>

        <div className="mandates-grid">
          <div className="mandate-card" onClick={() => setActivePage('functions')} style={{ cursor: 'pointer' }}>
            <div className="mandate-icon">
              <ShoppingBag size={24} />
            </div>
            <h3>{t.m1Title}</h3>
            <p>{t.m1Desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#005A2B', fontWeight: 700, marginTop: '0.9rem', fontSize: '0.85rem' }}>
              Explore PDS Mandate <ChevronRight size={14} />
            </div>
          </div>

          <div className="mandate-card" onClick={() => setActivePage('functions')} style={{ cursor: 'pointer' }}>
            <div className="mandate-icon" style={{ background: '#fffbeb', color: '#c59b27' }}>
              <Utensils size={24} />
            </div>
            <h3>{t.m2Title}</h3>
            <p>{t.m2Desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#c59b27', fontWeight: 700, marginTop: '0.9rem', fontSize: '0.85rem' }}>
              Explore Mid-Day Meals <ChevronRight size={14} />
            </div>
          </div>

          <div className="mandate-card" onClick={() => setActivePage('functions')} style={{ cursor: 'pointer' }}>
            <div className="mandate-icon">
              <Baby size={24} />
            </div>
            <h3>{t.m3Title}</h3>
            <p>{t.m3Desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#005A2B', fontWeight: 700, marginTop: '0.9rem', fontSize: '0.85rem' }}>
              Explore Anganwadi ICDS <ChevronRight size={14} />
            </div>
          </div>

          <div className="mandate-card" onClick={() => setActivePage('functions')} style={{ cursor: 'pointer' }}>
            <div className="mandate-icon" style={{ background: '#0f172a', color: '#c59b27' }}>
              <Scale size={24} />
            </div>
            <h3>{t.m4Title}</h3>
            <p>{t.m4Desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#0f172a', fontWeight: 700, marginTop: '0.9rem', fontSize: '0.85rem' }}>
              Explore Civil Court Powers <ChevronRight size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Vision Spotlight */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <div className="chairman-banner">
          <div className="chairman-img-wrap">
            <img 
              src={chairman.image} 
              alt="Sri Chitha Vijaya Prathap Reddy" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/images/chairman_inspection_group.png";
              }}
            />
          </div>
          <div className="chairman-content">
            <span style={{ color: '#005A2B', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '1px', background: '#e8f5ed', padding: '0.2rem 0.7rem', borderRadius: '4px' }}>
              {t.chairmanSectionTitle}
            </span>
            <blockquote style={{ marginTop: '0.85rem' }}>
              "{t.chairmanQuote}"
            </blockquote>
            <div className="chairman-name-tag">
              <h4>{t.chairmanName}</h4>
              <p>{t.chairmanRole}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
