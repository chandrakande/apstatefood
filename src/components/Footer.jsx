import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, MessageSquare, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const { t } = useLanguage();

  const handleLink = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About & Emblem */}
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fdb813' }}>
              <ShieldCheck size={20} /> {t.commissionTitle}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.8rem', lineHeight: '1.6' }}>
              {t.statutoryBodyDesc.substring(0, 160)}...
            </p>
            <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.6rem' }}>
              <button 
                onClick={() => handleLink('grievance')} 
                className="btn-primary" 
                style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
              >
                {t.fileGrievanceBtn}
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>{t.quickLinks}</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleLink('home'); }}>{t.navHome}</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLink('about'); }}>{t.navAbout}</a></li>
              <li><a href="#team" onClick={(e) => { e.preventDefault(); handleLink('team'); }}>{t.navTeam}</a></li>
              <li><a href="#functions" onClick={(e) => { e.preventDefault(); handleLink('functions'); }}>{t.navFunctions}</a></li>
              <li><a href="#visits" onClick={(e) => { e.preventDefault(); handleLink('visits'); }}>{t.navVisits}</a></li>
              <li><a href="#grievance" onClick={(e) => { e.preventDefault(); handleLink('grievance'); }}>{t.navGrievance}</a></li>
              <li><a href="#nodal" onClick={(e) => { e.preventDefault(); handleLink('nodal'); }}>{t.navNodalOfficers}</a></li>
            </ul>
          </div>

          {/* Col 3: Govt Portals & Policy */}
          <div className="footer-col">
            <h4>{t.importantLinks}</h4>
            <ul className="footer-links">
              <li><a href="https://ap.gov.in" target="_blank" rel="noreferrer">{t.apGovtPortal} <ExternalLink size={12} /></a></li>
              <li><a href="https://civilsupplies.ap.gov.in" target="_blank" rel="noreferrer">{t.apCivilSupplies} <ExternalLink size={12} /></a></li>
              <li><a href="https://nfsa.gov.in" target="_blank" rel="noreferrer">{t.nfsaPortal} <ExternalLink size={12} /></a></li>
              <li><a href="https://pmposhan.education.gov.in" target="_blank" rel="noreferrer">{t.pmPoshan} <ExternalLink size={12} /></a></li>
              <li><a href="#policy" onClick={(e) => { e.preventDefault(); handleLink('policy'); }}>{t.privacyTab} & {t.termsTab}</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Directory */}
          <div className="footer-col">
            <h4>{t.contactHeading}</h4>
            <div className="contact-info-list">
              <div className="contact-item">
                <MapPin size={18} style={{ color: '#fdb813', flexShrink: 0, marginTop: '3px' }} />
                <span>{t.hqAddress}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} style={{ color: '#fdb813', flexShrink: 0 }} />
                <span>Landline: {t.landlineVal} | Toll-Free: 1967</span>
              </div>
              <div className="contact-item">
                <MessageSquare size={16} style={{ color: '#fdb813', flexShrink: 0 }} />
                <span>WhatsApp: {t.whatsAppVal}</span>
              </div>
              <div className="contact-item">
                <Mail size={16} style={{ color: '#fdb813', flexShrink: 0 }} />
                <span>{t.officialEmailVal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            <p>{t.footerCopy}</p>
            <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{t.footerDesignedFor}</p>
          </div>
          <div>
            <span style={{ color: '#94a3b8' }}>NFSA 2013 Statutory Compliance | AP Food Commission</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
