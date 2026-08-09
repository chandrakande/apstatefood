import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingBag, Utensils, Baby, Scale, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export const CoreFunctionsPage = ({ setActivePage }) => {
  const { t } = useLanguage();

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">Statutory Operational Scope</span>
        <h1 className="section-title">Core Mandates & Monitoring Protocols</h1>
        <p className="section-subtitle">
          Ensuring transparency, nutritional standards, and entitlement compliance across key public welfare schemes in Andhra Pradesh.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* Mandate 1: Ration Monitoring */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.8rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: '#e6f4ed', color: '#006837', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShoppingBag size={40} />
          </div>
          <div>
            <span style={{ color: '#006837', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Mandate Vertical #1</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540', margin: '0.2rem 0 0.8rem 0' }}>
              {t.m1Title} (Public Distribution System)
            </h2>
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '1.2rem' }}>
              {t.m1Desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #006837' }}>
                <h4 style={{ color: '#0a2540', fontSize: '0.95rem', fontWeight: 700 }}>e-POS Biometric Tracking</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>Real-time verification of Aadhaar authentication and commodity weighment at 29,784 Fair Price Shops.</p>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #006837' }}>
                <h4 style={{ color: '#0a2540', fontSize: '0.95rem', fontWeight: 700 }}>Doorstep Ration Delivery</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>Audit of Mobile Dispensing Units (MDUs) supplying quality rice and essential commodities directly to cardholders.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandate 2: Mid-Day Meals */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.8rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: '#fffbeb', color: '#d99600', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Utensils size={40} />
          </div>
          <div>
            <span style={{ color: '#d99600', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Mandate Vertical #2</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540', margin: '0.2rem 0 0.8rem 0' }}>
              {t.m2Title} (School Quality Audits)
            </h2>
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '1.2rem' }}>
              {t.m2Desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #fdb813' }}>
                <h4 style={{ color: '#0a2540', fontSize: '0.95rem', fontWeight: 700 }}>Random Lab Quality Checks</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>Surprise collection of cooked meal samples for lab analysis of caloric value, protein content, and hygienic standards.</p>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #fdb813' }}>
                <h4 style={{ color: '#0a2540', fontSize: '0.95rem', fontWeight: 700 }}>45,210+ Schools Covered</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>Ensuring uninterrupted daily nutritional intake for primary and secondary government school students.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandate 3: Anganwadi Nutrition */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.8rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: '#e6f4ed', color: '#006837', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Baby size={40} />
          </div>
          <div>
            <span style={{ color: '#006837', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Mandate Vertical #3</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540', margin: '0.2rem 0 0.8rem 0' }}>
              {t.m3Title} (Maternal & Infant Entitlements)
            </h2>
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '1.2rem' }}>
              {t.m3Desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #006837' }}>
                <h4 style={{ color: '#0a2540', fontSize: '0.95rem', fontWeight: 700 }}>Take-Home Ration (THR) Audits</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>Monitoring distribution of fortified milk, eggs, Balamrutham, and iron supplements to pregnant & lactating women.</p>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #006837' }}>
                <h4 style={{ color: '#0a2540', fontSize: '0.95rem', fontWeight: 700 }}>55,607 Anganwadi Centers</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>Monthly inspections of storage facilities, expiry dates, and beneficiary register accuracy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandate 4: Autonomous Inquiries */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.8rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: '#0a2540', color: '#fdb813', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Scale size={40} />
          </div>
          <div>
            <span style={{ color: '#0a2540', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Mandate Vertical #4</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540', margin: '0.2rem 0 0.8rem 0' }}>
              {t.m4Title} (Quasi-Judicial Enforcement)
            </h2>
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '1.2rem' }}>
              {t.m4Desc}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <button className="btn-primary" onClick={() => setActivePage('grievance')}>
                Lodge Grievance for Inquiry <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
