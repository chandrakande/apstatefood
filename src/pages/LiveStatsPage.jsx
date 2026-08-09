import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { liveStatsData } from '../data/mockData';
import { BarChart3, TrendingUp, ShoppingBag, CheckCircle2, ShieldCheck, Database, Award } from 'lucide-react';

export const LiveStatsPage = () => {
  const { t } = useLanguage();
  const { overview, monthlyAllocations, schemeBreakdown } = liveStatsData;

  const districtEfficiency = [
    { district: "Krishna", resolved: 99.2 },
    { district: "Guntur", resolved: 98.8 },
    { district: "Visakhapatnam", resolved: 98.5 },
    { district: "East Godavari", resolved: 98.1 },
    { district: "Kurnool", resolved: 97.6 },
    { district: "Chittoor", resolved: 97.2 },
    { district: "Ananthapuramu", resolved: 96.9 }
  ];

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">AP Civil Supplies Portal Feed</span>
        <h1 className="section-title">{t.statsHeading}</h1>
        <p className="section-subtitle">{t.statsSubhead}</p>
      </div>

      {/* Top Realtime Counters Grid */}
      <div className="stats-grid" style={{ marginBottom: '2.5rem' }}>
        <div className="stat-card" style={{ borderTopColor: '#006837' }}>
          <div className="stat-icon-wrapper">
            <Database size={24} />
          </div>
          <div className="stat-info">
            <h3>{overview.totalBeneficiaries}</h3>
            <p>Total NFSA Beneficiaries</p>
          </div>
        </div>

        <div className="stat-card" style={{ borderTopColor: '#fdb813' }}>
          <div className="stat-icon-wrapper" style={{ background: '#fffbeb', color: '#d99600' }}>
            <ShoppingBag size={24} />
          </div>
          <div className="stat-info">
            <h3>{overview.riceAllocationMT}</h3>
            <p>Monthly Grain Dispatched</p>
          </div>
        </div>

        <div className="stat-card" style={{ borderTopColor: '#0a2540' }}>
          <div className="stat-icon-wrapper" style={{ background: '#e2e8f0', color: '#0a2540' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <h3>{overview.onlinePosRatio}</h3>
            <p>e-POS Online Biometric Ratio</p>
          </div>
        </div>

        <div className="stat-card" style={{ borderTopColor: '#006837' }}>
          <div className="stat-icon-wrapper">
            <CheckCircle2 size={24} />
          </div>
          <div className="stat-info">
            <h3>{overview.resolvedGrievances} / {overview.totalGrievances}</h3>
            <p>Grievances Resolved (98.4%)</p>
          </div>
        </div>
      </div>

      {/* Visual Charts Grid */}
      <div className="dashboard-grid">
        {/* Chart 1: Monthly Allocations */}
        <div className="dashboard-card">
          <h3>
            <BarChart3 size={20} color="#006837" /> {t.chart1Title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Monthly commodity distribution across AP (Rice in Metric Tonnes)
          </p>

          <div className="bar-chart-container">
            {monthlyAllocations.map((item, idx) => (
              <div key={idx} className="bar-item">
                <div className="bar-label-group">
                  <span>{item.month}</span>
                  <span style={{ color: '#006837', fontWeight: 700 }}>
                    {item.rice.toLocaleString()} MT
                  </span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${(item.rice / 240000) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 2: District Resolution Efficiency */}
        <div className="dashboard-card">
          <h3>
            <TrendingUp size={20} color="#006837" /> {t.chart2Title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Percentage of statutory complaints resolved within statutory 30-day window
          </p>

          <div className="bar-chart-container">
            {districtEfficiency.map((item, idx) => (
              <div key={idx} className="bar-item">
                <div className="bar-label-group">
                  <span>{item.district}</span>
                  <span style={{ color: '#d99600', fontWeight: 700 }}>
                    {item.resolved}%
                  </span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${item.resolved}%`,
                      background: 'linear-gradient(90deg, #fdb813, #006837)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scheme Breakdown Table */}
      <div style={{ marginTop: '2.5rem', background: '#fff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={22} color="#006837" /> {t.chart3Title}
        </h3>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Entitlement Scheme Name</th>
                <th>Active Coverage</th>
                <th>Center / Shop Count</th>
                <th>Monitoring Status</th>
              </tr>
            </thead>
            <tbody>
              {schemeBreakdown.map((s, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 700, color: '#0a2540' }}>{s.scheme}</td>
                  <td style={{ fontWeight: 600, color: '#006837' }}>{s.beneficiaries}</td>
                  <td>{s.activeCenters}</td>
                  <td>
                    <span className="team-role-badge" style={{ background: '#e6f4ed', color: '#006837' }}>
                      {s.status}
                    </span>
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
