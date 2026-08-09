import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Scale, FileText, CheckCircle, Search, Eye } from 'lucide-react';

export const AboutPage = ({ setActivePage }) => {
  const { t } = useLanguage();

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">Constitutional & Statutory Framework</span>
        <h1 className="section-title">{t.aboutHeading}</h1>
        <p className="section-subtitle">
          Established under Section 16 of the National Food Security Act (NFSA), 2013 by the Government of Andhra Pradesh.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {/* Statutory Background */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#e6f4ed', color: '#006837', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
            <ShieldCheck size={26} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a2540', marginBottom: '0.8rem' }}>
            {t.statutoryBodyTitle}
          </h2>
          <p style={{ color: '#475569', lineHeight: '1.7' }}>
            {t.statutoryBodyDesc}
          </p>
          <p style={{ color: '#475569', lineHeight: '1.7', marginTop: '1rem' }}>
            Operating directly under the Department of Consumer Affairs, Food & Civil Supplies, the Commission acts as an autonomous statutory tribunal ensuring that no citizen in Andhra Pradesh is denied basic nutritional security.
          </p>
        </div>

        {/* Mission & Vision */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#e6f4ed', color: '#006837', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
            <Eye size={26} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a2540', marginBottom: '0.8rem' }}>
            {t.missionTitle}
          </h2>
          <p style={{ color: '#475569', lineHeight: '1.7' }}>
            {t.missionDesc}
          </p>
          <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e293b', fontWeight: 500 }}>
              <CheckCircle size={16} color="#006837" /> Mandatory monitoring of e-POS Ration Shops.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e293b', fontWeight: 500 }}>
              <CheckCircle size={16} color="#006837" /> Quality compliance in Dokka Seethamma MDM.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e293b', fontWeight: 500 }}>
              <CheckCircle size={16} color="#006837" /> Maternal & Child Nutrition under Anganwadi ICDS.
            </li>
          </ul>
        </div>
      </div>

      {/* Quasi Judicial Powers Box */}
      <div style={{ background: 'linear-gradient(135deg, #0a2540 0%, #004e29 100%)', color: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(10,37,64,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <Scale size={32} color="#fdb813" />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fdb813' }}>
            {t.quasiJudicialTitle}
          </h2>
        </div>
        <p style={{ fontSize: '1.05rem', color: '#e2e8f0', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          {t.quasiJudicialDesc}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <h4 style={{ color: '#fdb813', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Summoning Powers</h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>Power to summon and enforce attendance of any person and examine them under oath.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <h4 style={{ color: '#fdb813', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Document Discovery</h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>Requiring production of any public record, e-POS log, or stock audit ledger.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <h4 style={{ color: '#fdb813', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>District Inspection</h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>Authority to issue commissions for search, seizure, and sample food grain testing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
