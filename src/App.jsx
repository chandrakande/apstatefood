import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Ticker } from './components/Ticker';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { CoreFunctionsPage } from './pages/CoreFunctionsPage';
import { VisitsPage } from './pages/VisitsPage';
import { GrievancePage } from './pages/GrievancePage';
import { NodalOfficersPage } from './pages/NodalOfficersPage';
import { LiveStatsPage } from './pages/LiveStatsPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage } from './pages/PolicyPage';

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [grievanceSearchQuery, setGrievanceSearchQuery] = useState('');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} setGrievanceSearchQuery={setGrievanceSearchQuery} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'team':
        return <TeamPage />;
      case 'functions':
        return <CoreFunctionsPage setActivePage={setActivePage} />;
      case 'visits':
        return <VisitsPage />;
      case 'grievance':
        return (
          <GrievancePage
            setActivePage={setActivePage}
            initialQuery={grievanceSearchQuery}
            clearInitialQuery={() => setGrievanceSearchQuery('')}
          />
        );
      case 'nodal':
        return <NodalOfficersPage />;
      case 'stats':
        return <LiveStatsPage setActivePage={setActivePage} />;
      case 'contact':
        return <ContactPage />;
      case 'policy':
        return <PolicyPage />;
      default:
        return <HomePage setActivePage={setActivePage} setGrievanceSearchQuery={setGrievanceSearchQuery} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="app-container">
        <Header activePage={activePage} setActivePage={setActivePage} />
        <Ticker />
        <main className="main-content">
          {renderPage()}
        </main>
        <Footer setActivePage={setActivePage} />
        
        {/* Crazy High-End Feature: AI Grievance Assistant Chatbot */}
        <AIAssistant setActivePage={setActivePage} />
      </div>
    </LanguageProvider>
  );
}

export default App;
