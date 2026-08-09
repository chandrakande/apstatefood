import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fieldInspections, districtNodalOfficers } from '../data/mockData';
import { Search, MapPin, Calendar, AlertTriangle, CheckCircle, ShieldAlert, Filter, Eye, Award, Building2 } from 'lucide-react';

export const VisitsPage = () => {
  const { t } = useLanguage();
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInspections = fieldInspections.filter((item) => {
    const matchesDistrict = selectedDistrict === 'ALL' || item.district === selectedDistrict;
    const matchesType = selectedType === 'ALL' || item.type === selectedType;
    const matchesSearch =
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.findings.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.actionTaken.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDistrict && matchesType && matchesSearch;
  });

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">Field Enforcement & Quality Audits</span>
        <h1 className="section-title">{t.visitsHeading}</h1>
        <p className="section-subtitle">{t.visitsSubhead}</p>
      </div>

      {/* Highlights Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0a2540 0%, #004d28 100%)', color: '#ffffff', borderRadius: '20px', padding: '2.5rem', marginBottom: '3rem', boxShadow: 'var(--shadow-lg)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        <div>
          <span style={{ background: 'rgba(253, 184, 19, 0.18)', color: '#fdb813', padding: '0.3rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Statutory Spotlight
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '0.6rem', color: '#ffffff' }}>
            Chairman's Surprise Inspection Drive Across Districts
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', marginTop: '0.6rem', lineHeight: '1.6' }}>
            Hon'ble Chairman Sri Chitha Vijaya Prathap Reddy and Commission Members conduct unannounced surprise audits at Welfare Hostels, Anganwadi Centers, and Fair Price Shops to strictly enforce food quality standards.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.2rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fdb813' }}>140+</h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Surprise Hostels & School Audits</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.2rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#4ade80' }}>85+</h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Show-Cause Notices Issued</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="search-input-wrap">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search inspections by location, warden, or action taken..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ minWidth: '220px' }}>
          <select className="form-control" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
            <option value="ALL">🔍 {t.filterDistrictAll}</option>
            {districtNodalOfficers.map((d) => (
              <option key={d.id} value={d.district}>{d.district}</option>
            ))}
          </select>
        </div>

        <div style={{ minWidth: '220px' }}>
          <select className="form-control" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="ALL">📋 All Inspection Types</option>
            <option value="Welfare Hostel Audit">{t.visitTypeHostel}</option>
            <option value="Fair Price Shop Inspection">{t.visitTypeFPS}</option>
            <option value="Anganwadi Center Audit">{t.visitTypeAnganwadi}</option>
            <option value="Mid-Day Meal Inspection">{t.visitTypeMDM}</option>
          </select>
        </div>
      </div>

      {/* Inspections Grid Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {filteredInspections.map((item) => {
          const isShowCause = item.status === 'Show-Cause Issued';
          const isSeized = item.status === 'Substandard Provisions Confiscated';

          return (
            <div key={item.id} className="team-card" style={{ borderTop: `4px solid ${isShowCause ? '#ef4444' : isSeized ? '#d99600' : '#006837'}` }}>
              <div style={{ position: 'relative', height: '200px', background: '#0a2540', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.location}
                  className="team-card-img"
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span
                    style={{
                      background: isShowCause ? '#fef2f2' : isSeized ? '#fffbeb' : '#e6f4ed',
                      color: isShowCause ? '#b91c1c' : isSeized ? '#b45309' : '#006837',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      border: `1px solid ${isShowCause ? '#fecaca' : isSeized ? '#fde68a' : '#a7f3d0'}`
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="team-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: '#64748b', marginBottom: '0.4rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                    <Calendar size={14} /> {item.date}
                  </span>
                  <span style={{ fontWeight: 800, color: '#006837' }}>
                    <MapPin size={13} style={{ display: 'inline' }} /> {item.district} District
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', marginBottom: '0.4rem' }}>
                  {item.location}
                </h3>

                <div style={{ fontSize: '0.85rem', color: '#d99600', fontWeight: 700, marginBottom: '0.8rem' }}>
                  Inspector: {item.inspectedBy}
                </div>

                <div style={{ background: '#f8fafc', padding: '0.9rem', borderRadius: '10px', fontSize: '0.88rem', color: '#334155', marginBottom: '0.8rem', borderLeft: '3px solid #cbd5e1' }}>
                  <strong>Findings:</strong> {item.findings}
                </div>

                <div style={{ background: isShowCause ? '#fef2f2' : '#e6f4ed', padding: '0.9rem', borderRadius: '10px', fontSize: '0.88rem', color: isShowCause ? '#991b1b' : '#004e29', fontWeight: 600 }}>
                  <strong>Enforcement Action:</strong> {item.actionTaken}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
