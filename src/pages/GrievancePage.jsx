import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { districtNodalOfficers, sampleGrievances } from '../data/mockData';
import confetti from 'canvas-confetti';
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Printer, 
  AlertCircle, 
  Send, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  Clock, 
  ShieldCheck, 
  ShoppingBag,
  Utensils,
  Baby,
  Scale,
  UploadCloud,
  CheckCircle2
} from 'lucide-react';

export const GrievancePage = ({ defaultSearchQuery }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('lodge');
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    aadhaarRation: '',
    email: '',
    district: 'Krishna',
    mandal: '',
    scheme: 'Targeted Public Distribution System (Ration FPS)',
    shopNo: '',
    category: 'Shortage / Underweighing of Commodities',
    description: '',
    evidence: null
  });

  const [formErrors, setFormErrors] = useState({});
  const [submittedAck, setSubmittedAck] = useState(null);

  // Status Search State
  const [searchQuery, setSearchQuery] = useState(defaultSearchQuery || '');
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (defaultSearchQuery) {
      setActiveTab('track');
      setSearchQuery(defaultSearchQuery);
      handleStatusSearch(defaultSearchQuery);
    }
  }, [defaultSearchQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const errors = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errors.fullName = 'Full legal name is required';
      if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
        errors.mobile = 'Valid 10-digit mobile number required';
      }
    } else if (step === 2) {
      if (!formData.district) errors.district = 'Please select a district';
      if (!formData.mandal.trim()) errors.mandal = 'Mandal / Municipality is required';
      if (!formData.shopNo.trim()) errors.shopNo = 'FPS Shop No / School Name is required';
    } else if (step === 3) {
      if (!formData.description.trim() || formData.description.length < 15) {
        errors.description = 'Please describe your complaint (at least 15 characters)';
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const refId = `AP-SFC-2026-${randomNum}`;

    const assignedOfficer = districtNodalOfficers.find(
      (d) => d.district.toLowerCase() === formData.district.toLowerCase()
    ) || districtNodalOfficers[0];

    const newAck = {
      refId,
      complainantName: formData.fullName,
      mobile: formData.mobile,
      district: formData.district,
      mandal: formData.mandal,
      scheme: formData.scheme,
      shopNo: formData.shopNo,
      category: formData.category,
      description: formData.description,
      status: "Registered & Dispatched to District Nodal Officer",
      date: new Date().toISOString().split('T')[0],
      nodalOfficer: `${assignedOfficer.officer} (${assignedOfficer.designation}, ${assignedOfficer.district})`
    };

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect');
    }

    setSubmittedAck(newAck);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSubmittedAck(null);
    setCurrentStep(1);
    setFormData({
      fullName: '',
      mobile: '',
      aadhaarRation: '',
      email: '',
      district: 'Krishna',
      mandal: '',
      scheme: 'Targeted Public Distribution System (Ration FPS)',
      shopNo: '',
      category: 'Shortage / Underweighing of Commodities',
      description: '',
      evidence: null
    });
  };

  const handleStatusSearch = (overrideQuery) => {
    const q = (overrideQuery !== undefined ? overrideQuery : searchQuery).trim().toLowerCase();
    setSearchResult(null);
    setSearchError('');

    if (!q) {
      setSearchError('Please enter a Reference ID or Mobile Number');
      return;
    }

    let found = null;
    if (submittedAck && (submittedAck.refId.toLowerCase() === q || submittedAck.mobile.includes(q))) {
      found = submittedAck;
    } else {
      found = sampleGrievances.find(
        (g) => g.refId.toLowerCase() === q || g.mobile.includes(q)
      );
    }

    if (found) {
      setSearchResult(found);
    } else {
      setSearchError(`No grievance record found matching "${q}". Please check the ID or phone number.`);
    }
  };

  return (
    <div className="container section-wrapper">
      <div className="section-header">
        <span className="section-tag">NFSA 2013 Statutory Redressal</span>
        <h1 className="section-title">{t.grievanceHeading}</h1>
        <p className="section-subtitle">{t.grievanceSubhead}</p>
      </div>

      {/* Tabs Header */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <button
          className={`btn-primary ${activeTab === 'lodge' ? '' : 'btn-outline-hero'}`}
          style={{
            background: activeTab === 'lodge' ? 'linear-gradient(135deg, #006837 0%, #004d28 100%)' : '#ffffff',
            color: activeTab === 'lodge' ? '#ffffff' : '#0a2540',
            border: '1px solid #006837',
            padding: '0.85rem 2.2rem',
            boxShadow: activeTab === 'lodge' ? '0 4px 14px rgba(0, 104, 55, 0.3)' : 'none'
          }}
          onClick={() => setActiveTab('lodge')}
        >
          <FileText size={18} /> {t.tabLodge}
        </button>

        <button
          className={`btn-primary ${activeTab === 'track' ? '' : 'btn-outline-hero'}`}
          style={{
            background: activeTab === 'track' ? 'linear-gradient(135deg, #006837 0%, #004d28 100%)' : '#ffffff',
            color: activeTab === 'track' ? '#ffffff' : '#0a2540',
            border: '1px solid #006837',
            padding: '0.85rem 2.2rem',
            boxShadow: activeTab === 'track' ? '0 4px 14px rgba(0, 104, 55, 0.3)' : 'none'
          }}
          onClick={() => setActiveTab('track')}
        >
          <Search size={18} /> {t.tabTrack}
        </button>
      </div>

      {/* TAB 1: LODGE GRIEVANCE */}
      {activeTab === 'lodge' && (
        <div>
          {submittedAck ? (
            /* Acknowledgement Receipt Card */
            <div className="ack-box printable-area">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <ShieldCheck size={50} color="#006837" />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0a2540' }}>{t.ackTitle}</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
                {t.ackSub}
              </p>

              <div className="ref-badge-display">
                {t.refIdLabel}: {submittedAck.refId}
              </div>

              {/* Watermarked Printable Receipt Table */}
              <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid #cbd5e1', textAlign: 'left', maxWidth: '700px', margin: '1.8rem auto', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                <div style={{ borderBottom: '2px solid #006837', paddingBottom: '1rem', marginBottom: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#006837' }}>Andhra Pradesh State Food Commission</h3>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Statutory Complaint Acknowledgement under NFSA 2013</p>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#64748b' }}>
                    Date: <strong>{submittedAck.date}</strong>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.95rem' }}>
                  <div><strong>Complainant:</strong> {submittedAck.complainantName}</div>
                  <div><strong>Registered Phone:</strong> {submittedAck.mobile}</div>
                  <div><strong>District:</strong> {submittedAck.district}</div>
                  <div><strong>Mandal:</strong> {submittedAck.mandal}</div>
                  <div style={{ gridColumn: '1 / -1' }}><strong>Scheme:</strong> {submittedAck.scheme}</div>
                  <div style={{ gridColumn: '1 / -1' }}><strong>Target Entity:</strong> {submittedAck.shopNo}</div>
                  <div style={{ gridColumn: '1 / -1' }}><strong>Category:</strong> {submittedAck.category}</div>
                  <div style={{ gridColumn: '1 / -1' }}><strong>Assigned DGRO:</strong> {submittedAck.nodalOfficer}</div>
                </div>

                {/* Simulated Stamp Seal */}
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ border: '2px dashed #006837', color: '#006837', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase' }}>
                    ✓ OFFICIALLY REGISTERED & DISPATCHED
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Automated Digital Receipt
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', marginTop: '2rem' }}>
                <button className="btn-primary" onClick={handlePrint}>
                  <Printer size={18} /> {t.printAckBtn}
                </button>
                <button className="btn-accent" onClick={handleReset}>
                  <RefreshCw size={18} /> {t.btnReset}
                </button>
              </div>
            </div>
          ) : (
            /* Multi-Step Wizard */
            <div className="grievance-container">
              {/* Wizard Steps Bar */}
              <div className="step-wizard">
                <div className={`wizard-step ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}`}>
                  <div className="step-circle">1</div>
                  <span className="step-label">{t.step1Title}</span>
                </div>

                <div className={`wizard-step ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`}>
                  <div className="step-circle">2</div>
                  <span className="step-label">{t.step2Title}</span>
                </div>

                <div className={`wizard-step ${currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : ''}`}>
                  <div className="step-circle">3</div>
                  <span className="step-label">{t.step3Title}</span>
                </div>

                <div className={`wizard-step ${currentStep === 4 ? 'active' : ''}`}>
                  <div className="step-circle">4</div>
                  <span className="step-label">{t.step4Title}</span>
                </div>
              </div>

              {/* Step 1: Complainant Info */}
              {currentStep === 1 && (
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a2540', marginBottom: '1.4rem' }}>
                    Complainant Personal Details
                  </h3>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>{t.lblFullName} *</label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="Enter full legal name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {formErrors.fullName && <span style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600 }}>{formErrors.fullName}</span>}
                    </div>

                    <div className="form-group">
                      <label>{t.lblMobile} *</label>
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control"
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {formErrors.mobile && <span style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600 }}>{formErrors.mobile}</span>}
                    </div>

                    <div className="form-group">
                      <label>{t.lblAadhaar}</label>
                      <input
                        type="text"
                        name="aadhaarRation"
                        className="form-control"
                        placeholder="e.g. WAP1520109283 / 9876 5432 1098"
                        value={formData.aadhaarRation}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>{t.lblEmail}</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Scheme Cards & Location */}
              {currentStep === 2 && (
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a2540', marginBottom: '1.4rem' }}>
                    Select Entitlement Scheme & Location
                  </h3>

                  {/* Scheme Selection Cards Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
                    <div
                      onClick={() => setFormData({ ...formData, scheme: 'Targeted Public Distribution System (Ration FPS)' })}
                      style={{
                        background: formData.scheme.includes('Public Distribution') ? '#e6f4ed' : '#ffffff',
                        border: formData.scheme.includes('Public Distribution') ? '2px solid #006837' : '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <ShoppingBag size={28} color="#006837" />
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, marginTop: '0.6rem', color: '#0a2540' }}>PDS Ration Shop</h4>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.2rem' }}>e-POS Fair price rice and commodity distribution</p>
                    </div>

                    <div
                      onClick={() => setFormData({ ...formData, scheme: 'Dokka Seethamma Mid-Day Meal Scheme (Schools)' })}
                      style={{
                        background: formData.scheme.includes('Mid-Day Meal') ? '#fffbeb' : '#ffffff',
                        border: formData.scheme.includes('Mid-Day Meal') ? '2px solid #fdb813' : '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Utensils size={28} color="#d99600" />
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, marginTop: '0.6rem', color: '#0a2540' }}>Dokka Seethamma MDM</h4>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.2rem' }}>Government school meals quality & hygiene</p>
                    </div>

                    <div
                      onClick={() => setFormData({ ...formData, scheme: 'Integrated Child Development Services (Anganwadi)' })}
                      style={{
                        background: formData.scheme.includes('Anganwadi') ? '#e0f2fe' : '#ffffff',
                        border: formData.scheme.includes('Anganwadi') ? '2px solid #0284c7' : '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Baby size={28} color="#0284c7" />
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, marginTop: '0.6rem', color: '#0a2540' }}>Anganwadi ICDS</h4>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.2rem' }}>Maternal and child supplemental nutrition</p>
                    </div>

                    <div
                      onClick={() => setFormData({ ...formData, scheme: 'Other Statutory Entitlement Violation' })}
                      style={{
                        background: formData.scheme.includes('Other') ? '#f3e8ff' : '#ffffff',
                        border: formData.scheme.includes('Other') ? '2px solid #9333ea' : '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Scale size={28} color="#9333ea" />
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, marginTop: '0.6rem', color: '#0a2540' }}>Other Violations</h4>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.2rem' }}>General NFSA 2013 entitlement issues</p>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>{t.lblDistrict} *</label>
                      <select name="district" className="form-control" value={formData.district} onChange={handleChange}>
                        {districtNodalOfficers.map((d) => (
                          <option key={d.id} value={d.district}>{d.district} ({d.districtTe})</option>
                        ))}
                      </select>
                      {formErrors.district && <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>{formErrors.district}</span>}
                    </div>

                    <div className="form-group">
                      <label>{t.lblMandal} *</label>
                      <input
                        type="text"
                        name="mandal"
                        className="form-control"
                        placeholder="e.g. Vijayawada Urban / Tenali"
                        value={formData.mandal}
                        onChange={handleChange}
                      />
                      {formErrors.mandal && <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>{formErrors.mandal}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label>{t.lblShopNo} *</label>
                      <input
                        type="text"
                        name="shopNo"
                        className="form-control"
                        placeholder="e.g. FPS Shop #1042 / ZPHS School Name / Anganwadi Code #54"
                        value={formData.shopNo}
                        onChange={handleChange}
                      />
                      {formErrors.shopNo && <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>{formErrors.shopNo}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Grievance Category & Details */}
              {currentStep === 3 && (
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a2540', marginBottom: '1.4rem' }}>
                    Complaint Category & Description
                  </h3>

                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>{t.lblCategory} *</label>
                      <select name="category" className="form-control" value={formData.category} onChange={handleChange}>
                        <option value="Shortage / Underweighing of Commodities">{t.catUnderweight}</option>
                        <option value="Non-Supply / Refusal to Issue Entitlement">{t.catNonSupply}</option>
                        <option value="Overcharging / Price Manipulation">{t.catOvercharging}</option>
                        <option value="Substandard / Poor Quality Foodgrains or Meals">{t.catQualityIssue}</option>
                        <option value="Frequent FPS Shop Closure / e-POS Refusal">{t.catShopClosed}</option>
                        <option value="Misbehavior / Corruption by Official">{t.catStaffBehavior}</option>
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label>{t.lblDescription} *</label>
                      <textarea
                        name="description"
                        rows="5"
                        className="form-control"
                        placeholder="Please describe the incident, dates, shop dealer name, or specific entitlement denied..."
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>
                      {formErrors.description && <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>{formErrors.description}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label>{t.lblEvidence}</label>
                      <div style={{ border: '2px dashed #cbd5e1', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}>
                        <UploadCloud size={32} color="#006837" style={{ margin: '0 auto 0.4rem auto' }} />
                        <p style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>Click to browse or drop supporting evidence / bill photos</p>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Supports JPG, PNG, PDF up to 5MB</span>
                        <input type="file" style={{ display: 'none' }} id="file-upload" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Verification & Final Submission */}
              {currentStep === 4 && (
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a2540', marginBottom: '1.4rem' }}>
                    Review & Formal Registration
                  </h3>

                  <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', marginBottom: '1.8rem' }}>
                    <h4 style={{ color: '#006837', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={20} /> Statutory Summary of Grievance
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.95rem' }}>
                      <div><strong>Complainant:</strong> {formData.fullName} ({formData.mobile})</div>
                      <div><strong>Location:</strong> {formData.district}, {formData.mandal}</div>
                      <div style={{ gridColumn: '1 / -1' }}><strong>Entitlement Scheme:</strong> {formData.scheme}</div>
                      <div style={{ gridColumn: '1 / -1' }}><strong>Target Entity:</strong> {formData.shopNo}</div>
                      <div style={{ gridColumn: '1 / -1' }}><strong>Category:</strong> {formData.category}</div>
                      <div style={{ gridColumn: '1 / -1' }}><strong>Particulars:</strong> {formData.description}</div>
                    </div>
                  </div>

                  <div style={{ background: '#e6f4ed', padding: '1.2rem', borderRadius: '12px', borderLeft: '5px solid #006837', fontSize: '0.92rem', color: '#004e29', lineHeight: '1.6' }}>
                    🔒 Under Section 19 of the National Food Security Act, 2013, registering a complaint triggers immediate dispatch to the District Grievance Redressal Officer (DGRO). By submitting, you confirm that all provided facts are accurate.
                  </div>
                </div>
              )}

              {/* Actions Bar */}
              <div className="wizard-actions">
                {currentStep > 1 ? (
                  <button className="btn-outline-hero" style={{ color: '#0a2540', borderColor: '#cbd5e1' }} onClick={handlePrev}>
                    <ArrowLeft size={16} /> {t.btnPrev}
                  </button>
                ) : <div />}

                {currentStep < 4 ? (
                  <button className="btn-primary" onClick={handleNext}>
                    {t.btnNext} <ArrowRight size={16} />
                  </button>
                ) : (
                  <button className="btn-accent" onClick={handleSubmit}>
                    <Send size={18} /> {t.btnSubmit}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: TRACK STATUS */}
      {activeTab === 'track' && (
        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '3rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0a2540', marginBottom: '1rem' }}>
            Live Complaint Status Tracker
          </h2>

          <div style={{ display: 'flex', gap: '1rem', maxWidth: '650px', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              className="form-control"
              style={{ flex: 1 }}
              placeholder={t.trackInputPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn-primary" onClick={() => handleStatusSearch()}>
              <Search size={18} /> {t.btnSearchStatus}
            </button>
          </div>

          {searchError && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '1.2rem', borderRadius: '12px', fontWeight: 600 }}>
              ⚠️ {searchError}
            </div>
          )}

          {searchResult && (
            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0', marginTop: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.2rem', marginBottom: '1.4rem' }}>
                <div>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px' }}>Statutory Reference ID</span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#006837', fontFamily: 'var(--font-heading)' }}>{searchResult.refId}</h3>
                </div>
                <span style={{ background: '#006837', color: '#ffffff', fontSize: '0.9rem', fontWeight: 800, padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 8px rgba(0,104,55,0.3)' }}>
                  {searchResult.status}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', fontSize: '0.95rem', marginBottom: '2rem' }}>
                <div><strong>Complainant Name:</strong> {searchResult.complainantName}</div>
                <div><strong>Mobile:</strong> {searchResult.mobile}</div>
                <div><strong>District:</strong> {searchResult.district}</div>
                <div><strong>Mandal:</strong> {searchResult.mandal}</div>
                <div style={{ gridColumn: '1 / -1' }}><strong>Scheme:</strong> {searchResult.scheme}</div>
                <div style={{ gridColumn: '1 / -1' }}><strong>Assigned DGRO:</strong> {searchResult.nodalOfficer}</div>
                <div style={{ gridColumn: '1 / -1' }}><strong>Particulars:</strong> {searchResult.description}</div>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a2540', marginBottom: '1rem' }}>Statutory Progress Log</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.92rem' }}>
                  <CheckCircle size={20} color="#006837" />
                  <span><strong>Complaint Registered</strong> - Dispatched to District Nodal Officer</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.92rem' }}>
                  <CheckCircle size={20} color="#006837" />
                  <span><strong>DGRO Notice Issued</strong> - Official inspection triggered</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.92rem', color: searchResult.status.includes('Resolved') ? '#006837' : '#d99600' }}>
                  <Clock size={20} />
                  <span><strong>Action Taken Status:</strong> {searchResult.status}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
