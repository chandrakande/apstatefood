import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage = () => {
  const { t } = useLanguage();
  const [msgSent, setMsgSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) return;
    setMsgSent(true);
  };

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">Official Directory & Support</span>
        <h1 className="section-title">{t.contactHeading}</h1>
        <p className="section-subtitle">
          Reach the Commission headquarters, register grievances, or contact public helpline officers.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {/* Contact Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {/* HQ Address */}
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #006837', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#006837', fontWeight: 700, marginBottom: '0.4rem' }}>
              <MapPin size={20} /> {t.hqAddressTitle}
            </div>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {t.hqAddress}
            </p>
          </div>

          {/* Landline & Toll Free */}
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #fdb813', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#d99600', fontWeight: 700, marginBottom: '0.4rem' }}>
              <Phone size={20} /> Helplines & Office Landlines
            </div>
            <div style={{ color: '#475569', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div>Central Landline: <strong>{t.landlineVal}</strong></div>
              <div>National Toll-Free Helpline: <strong>{t.tollFreeVal}</strong></div>
            </div>
          </div>

          {/* WhatsApp & Email */}
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #0a2540', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0a2540', fontWeight: 700, marginBottom: '0.4rem' }}>
              <MessageSquare size={20} /> Digital Grievance Desk
            </div>
            <div style={{ color: '#475569', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div>WhatsApp Grievance Hotline: <strong style={{ color: '#006837' }}>{t.whatsAppVal}</strong></div>
              <div>Official Email: <strong>{t.officialEmailVal}</strong></div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>
                <Clock size={14} style={{ display: 'inline', marginRight: '4px' }} /> {t.officeHoursVal}
              </div>
            </div>
          </div>
        </div>

        {/* Direct Inquiry Form */}
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem' }}>
            Send an Inquiry / Feedback
          </h2>

          {msgSent ? (
            <div style={{ background: '#e6f4ed', border: '1px solid #006837', padding: '1.5rem', borderRadius: '12px', color: '#004e29', textAlign: 'center' }}>
              <CheckCircle2 size={40} style={{ margin: '0 auto 0.6rem auto' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Message Received!</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.3rem' }}>
                Thank you for contacting the AP State Food Commission. Our team will review your inquiry shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Your Name *</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  required
                  placeholder="10-digit mobile"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Email Address (Optional)</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Message / Inquiry *</label>
                <textarea
                  rows="4"
                  className="form-control"
                  required
                  placeholder="Enter your message or request..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} /> Send Direct Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Office Location Visualizer */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={22} color="#006837" /> Head Office Location Map (Vijayawada)
        </h3>
        
        <div style={{ width: '100%', height: '320px', borderRadius: '12px', background: '#e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#475569', border: '2px dashed #cbd5e1' }}>
          <MapPin size={48} color="#006837" />
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '0.5rem', color: '#0a2540' }}>
            APSFC Vijayawada Headquarters
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
            2nd Floor, Sri Sai Towers, Ashok Nagar, Beside SIRIS Company, Kanuru, Bandar Road, Vijayawada - 520007
          </p>
        </div>
      </div>
    </div>
  );
};
