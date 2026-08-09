import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bell } from 'lucide-react';

export const Ticker = () => {
  const { t } = useLanguage();

  return (
    <div className="ticker-bar">
      <div className="ticker-badge">
        <Bell size={15} /> {t.latestUpdates}
      </div>
      <div className="ticker-content">
        <div className="ticker-marquee">
          <span className="ticker-item">📌 {t.tickerMsg1}</span>
          <span className="ticker-item">📌 {t.tickerMsg2}</span>
          <span className="ticker-item">📌 {t.tickerMsg3}</span>
        </div>
      </div>
    </div>
  );
};
