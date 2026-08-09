import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'en' | 'te'
  const [fontSize, setFontSize] = useState('normal'); // 'normal' | 'large' | 'xlarge'
  const [highContrast, setHighContrast] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  const changeFontSize = (delta) => {
    if (delta === 1) {
      setFontSize((prev) => (prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'xlarge'));
    } else if (delta === -1) {
      setFontSize((prev) => (prev === 'xlarge' ? 'large' : prev === 'large' ? 'normal' : 'normal'));
    } else {
      setFontSize('normal');
    }
  };

  const toggleContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    if (highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }

    document.body.classList.remove('text-size-normal', 'text-size-large', 'text-size-xlarge');
    document.body.classList.add(`text-size-${fontSize}`);
  }, [lang, highContrast, fontSize]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        t,
        fontSize,
        changeFontSize,
        highContrast,
        toggleContrast,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
