import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Lock, FileCheck, ExternalLink } from 'lucide-react';

export const PolicyPage = () => {
  const { t } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState('privacy'); // 'privacy' | 'terms' | 'gigw'

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">Statutory & Legal Declarations</span>
        <h1 className="section-title">{t.policyHeading}</h1>
        <p className="section-subtitle">{t.policySubhead}</p>
      </div>

      {/* Sub Tabs */}
      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          className={`btn-primary ${activeSubTab === 'privacy' ? '' : 'btn-outline-hero'}`}
          style={{
            background: activeSubTab === 'privacy' ? '#006837' : '#fff',
            color: activeSubTab === 'privacy' ? '#fff' : '#0a2540',
            border: '1px solid #006837',
            padding: '0.6rem 1.4rem'
          }}
          onClick={() => setActiveSubTab('privacy')}
        >
          <Lock size={16} /> {t.privacyTab}
        </button>

        <button
          className={`btn-primary ${activeSubTab === 'terms' ? '' : 'btn-outline-hero'}`}
          style={{
            background: activeSubTab === 'terms' ? '#006837' : '#fff',
            color: activeSubTab === 'terms' ? '#fff' : '#0a2540',
            border: '1px solid #006837',
            padding: '0.6rem 1.4rem'
          }}
          onClick={() => setActiveSubTab('terms')}
        >
          <FileCheck size={16} /> {t.termsTab}
        </button>

        <button
          className={`btn-primary ${activeSubTab === 'gigw' ? '' : 'btn-outline-hero'}`}
          style={{
            background: activeSubTab === 'gigw' ? '#006837' : '#fff',
            color: activeSubTab === 'gigw' ? '#fff' : '#0a2540',
            border: '1px solid #006837',
            padding: '0.6rem 1.4rem'
          }}
          onClick={() => setActiveSubTab('gigw')}
        >
          <ShieldCheck size={16} /> {t.gigwTab}
        </button>
      </div>

      {/* TAB CONTENT: PRIVACY POLICY */}
      {activeSubTab === 'privacy' && (
        <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', color: '#334155', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem' }}>
            Government Website Privacy Policy
          </h2>
          <p>
            The Andhra Pradesh State Food Commission (APSFC) is committed to protecting the privacy of citizens accessing its online grievance and monitoring portal.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            1. Collection of Personal Information
          </h3>
          <p>
            When registering a grievance under Section 19 of the NFSA 2013, the portal collects information such as Name, Mobile Number, Ration Card Number, and Location details solely for the purpose of investigating statutory food security complaints.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            2. Confidentiality & Disclosure
          </h3>
          <p>
            Personal data collected is disclosable strictly to designated District Grievance Redressal Officers (DGROs) and statutory inquiry officers. No personal information is sold, shared, or transferred to third-party commercial entities.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            3. Data Security Measures
          </h3>
          <p>
            All submitted grievance records and documents are stored in secure Government Data Centers utilizing SSL encryption and access-controlled databases in compliance with the Information Technology Act, 2000.
          </p>
        </div>
      )}

      {/* TAB CONTENT: TERMS OF USE */}
      {activeSubTab === 'terms' && (
        <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', color: '#334155', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem' }}>
            Terms & Conditions of Official Portal Usage
          </h2>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            1. Statutory Purpose
          </h3>
          <p>
            This website is maintained for public monitoring, dissemination of NFSA entitlement norms, and statutory grievance redressal under the National Food Security Act, 2013.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            2. Accuracy of Information & Frivolous Claims
          </h3>
          <p>
            Complainants are required to provide authentic, verifiable facts. Filing false, malicious, or fabricated complaints against Fair Price Shop dealers, teachers, or Anganwadi staff carries statutory consequences under Section 19 of the Act.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            3. Quasi-Judicial Jurisdiction
          </h3>
          <p>
            Decisions, summons, and directives issued by the Commission carry quasi-judicial authority across all 26 districts of Andhra Pradesh.
          </p>
        </div>
      )}

      {/* TAB CONTENT: GIGW & COPYRIGHT */}
      {activeSubTab === 'gigw' && (
        <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', color: '#334155', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem' }}>
            GIGW Compliance & Copyright Policy
          </h2>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            1. Hyperlinking Policy
          </h3>
          <p>
            Prior approval is required before hyperlinks are directed to this portal from any commercial site. Hyperlinks to public government domains (such as ap.gov.in, civilsupplies.ap.gov.in, and nfsa.gov.in) are provided for public convenience.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#006837', marginTop: '1.5rem', marginBottom: '0.4rem' }}>
            2. Copyright Notice
          </h3>
          <p>
            Material featured on this site may be reproduced free of charge in any format or media without requiring specific permission, provided the material is reproduced accurately and not used in a misleading context.
          </p>
        </div>
      )}
    </div>
  );
};
