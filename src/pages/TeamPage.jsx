import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data/mockData';
import { Phone, Mail, Award, UserCheck, ShieldCheck } from 'lucide-react';

export const TeamPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">Statutory Governance</span>
        <h1 className="section-title">{t.teamHeading}</h1>
        <p className="section-subtitle">{t.teamSubhead}</p>
      </div>

      {/* Leadership Profile Cards Grid */}
      <div className="team-grid" style={{ marginBottom: '3.5rem' }}>
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div style={{ position: 'relative' }}>
              <img src={member.image} alt={member.name} className="team-card-img" />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px' }}>
                <span className="team-role-badge">
                  {lang === 'te' ? member.positionTe : member.position}
                </span>
              </div>
            </div>

            <div className="team-card-body">
              <h3>{member.name}</h3>
              <p className="team-qual">{t.qualificationLabel}: {member.qualifications}</p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '1rem', lineHeight: '1.5' }}>
                {member.bio}
              </p>

              <div className="team-contact-list">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} color="#006837" /> <span>{member.mobile}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={14} color="#006837" /> <span style={{ wordBreak: 'break-all' }}>{member.email}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Official Directory Table Section */}
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={22} color="#006837" /> State Commission Leadership Roster
        </h2>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>{t.titleCol}</th>
                <th>{t.nameCol}</th>
                <th>{t.contactCol}</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((m) => (
                <tr key={m.id}>
                  <td style={{ fontWeight: 700, color: '#006837' }}>
                    {lang === 'te' ? m.positionTe : m.position}
                  </td>
                  <td style={{ fontWeight: 600 }}>
                    {m.name} <br />
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 400 }}>({m.qualifications})</span>
                  </td>
                  <td>
                    <div>📞 Mobile: <strong>{m.mobile}</strong></div>
                    <div>✉️ Email: <a href={`mailto:${m.email}`}>{m.email}</a></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
