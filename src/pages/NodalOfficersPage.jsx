import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { districtNodalOfficers } from '../data/mockData';
import { Search, MapPin, Phone, Mail, Building2, Filter, X } from 'lucide-react';

export const NodalOfficersPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');

  const filteredOfficers = districtNodalOfficers.filter((officer) => {
    const matchesSearch =
      officer.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.districtTe.includes(searchTerm) ||
      officer.officer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.office.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDistrict =
      selectedDistrict === 'ALL' || officer.district === selectedDistrict;

    return matchesSearch && matchesDistrict;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDistrict('ALL');
  };

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">District Grievance Redressal Officers</span>
        <h1 className="section-title">{t.nodalHeading}</h1>
        <p className="section-subtitle">{t.nodalSubhead}</p>
      </div>

      {/* Filter & Search Controls */}
      <div className="filter-bar">
        <div className="search-input-wrap">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder={t.searchDistrictPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ minWidth: '240px' }}>
          <select
            className="form-control"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="ALL">🔍 {t.filterDistrict}</option>
            {districtNodalOfficers.map((d) => (
              <option key={d.id} value={d.district}>
                {d.district} ({d.districtTe})
              </option>
            ))}
          </select>
        </div>

        {(searchTerm || selectedDistrict !== 'ALL') && (
          <button className="btn-outline-hero" style={{ color: '#0a2540', borderColor: '#cbd5e1' }} onClick={clearFilters}>
            <X size={16} /> Reset Filters
          </button>
        )}
      </div>

      {/* Count Indicator */}
      <div style={{ marginBottom: '1.4rem', color: '#475569', fontSize: '0.92rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Showing {filteredOfficers.length} of {districtNodalOfficers.length} District Nodal Officers (DGRO)</span>
        <span style={{ color: '#006837', background: '#e6f4ed', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>26 AP Districts Active</span>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="custom-table">
          <thead>
            <tr>
              <th>District (జిల్లా)</th>
              <th>District Nodal Officer (DGRO)</th>
              <th>Official Title</th>
              <th>Direct Action</th>
              <th>Office Headquarters</th>
            </tr>
          </thead>
          <tbody>
            {filteredOfficers.length > 0 ? (
              filteredOfficers.map((officer) => (
                <tr key={officer.id}>
                  <td style={{ fontWeight: 800, color: '#006837' }}>
                    {officer.district} <br />
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 500 }}>
                      {officer.districtTe}
                    </span>
                  </td>
                  <td style={{ fontWeight: 700, color: '#0a2540' }}>{officer.officer}</td>
                  <td>
                    <span className="team-role-badge">{officer.designation}</span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <a 
                        href={`tel:${officer.phone}`} 
                        className="btn-primary"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                      >
                        <Phone size={13} /> Call
                      </a>
                      <a 
                        href={`mailto:${officer.email}`} 
                        className="btn-outline-hero"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', color: '#0a2540', borderColor: '#cbd5e1' }}
                      >
                        <Mail size={13} /> Email
                      </a>
                    </div>
                  </td>
                  <td style={{ fontSize: '0.88rem', color: '#475569' }}>
                    <MapPin size={14} style={{ display: 'inline', marginRight: '4px', color: '#fdb813' }} />
                    {officer.office}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8', fontSize: '1rem' }}>
                  No District Nodal Officers match your query. Try resetting filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
