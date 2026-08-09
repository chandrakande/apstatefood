import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, X, Send, Bot, Sparkles, PhoneCall, ShieldCheck, ChevronRight } from 'lucide-react';

export const AIAssistant = ({ setActivePage }) => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'te' 
        ? 'నమస్కారం! నేను ఆంధ్రప్రదేశ్ రాష్ట్ర ఆహార కమిషన్ వర్చువల్ అసిస్టెంట్. రేషన్, మధ్యాహ్న భోజనం, అంగన్‌వాడీ సమస్యలపై సహాయం పొందవచ్చు.'
        : 'Namaste! I am the AP State Food Commission AI Assistant. Ask me anything about filing grievances, NFSA entitlements, or district officers!'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickPrompts = [
    lang === 'te' ? 'రేషన్ పంపిణీ సమస్య నమోదు ఎలా?' : 'How to lodge ration complaint?',
    lang === 'te' ? 'కలెక్టర్ కార్యాలయం నోడల్ ఆఫీసర్ నంబర్' : 'Find District Nodal Officer number',
    lang === 'te' ? 'ఉచిత హెల్ప్‌లైన్ నంబర్' : 'What is Toll-Free helpline?'
  ];

  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInputValue('');

    setTimeout(() => {
      let botResponse = '';
      const qLower = query.toLowerCase();

      if (qLower.includes('complaint') || qLower.includes('grievance') || qLower.includes('సమస్య') || qLower.includes('నమోదు')) {
        botResponse = lang === 'te'
          ? 'ఫిర్యాదు చేయడానికి "Grievance Cell" విభాగానికి వెళ్ళి మీ జిల్లా, రేషన్ షాపు నంబర్, సమస్య వివరాలు నమోదు చేయవచ్చు. మీకు తక్షణమే 10 అంకెల రిఫరెన్స్ నంబర్ మరియు రశీదు అందుతాయి.'
          : 'To file a complaint, click on "Grievance Cell" in the menu. Fill in your district, shop number, and details to receive an instant 10-digit Reference ID and watermarked receipt!';
      } else if (qLower.includes('nodal') || qLower.includes('officer') || qLower.includes('నంబర్') || qLower.includes('అధికారి')) {
        botResponse = lang === 'te'
          ? 'ఆంధ్రప్రదేశ్‌లోని 26 జిల్లాల Grievance Redressal Officers (DGRO) వివరాలు "Nodal Officers" పేజీలో లభిస్తాయి. అక్కడ మీరు నేరుగా కాల్ లేదా ఈమెయిల్ చేయవచ్చు.'
          : 'You can view contact details for all 26 District Grievance Redressal Officers under "Nodal Officers". Direct call and email options are available.';
      } else if (qLower.includes('helpline') || qLower.includes('phone') || qLower.includes('టోల్ ఫ్రీ')) {
        botResponse = lang === 'te'
          ? 'ఉచిత ఆహార భద్రత టోల్-ఫ్రీ నంబర్: 1967 | వాట్సాప్ హెల్ప్‌లైన్: +91 9490551117 | ప్రధాన కార్యాలయం: 0866-2468776.'
          : 'Toll-Free Ration Helpline: 1967 | Public WhatsApp Helpline: +91 9490551117 | Landline: 0866-2468776.';
      } else {
        botResponse = lang === 'te'
          ? 'ఆంధ్రప్రదేశ్ రాష్ట్ర ఆహార కమిషన్ చట్టబద్ధమైన 16వ సెక్షన్ కింద పిడిఎస్ రేషన్, డొక్కా సీతమ్మ మధ్యాహ్న భోజనం మరియు అంగన్‌వాడీ పోషకాహార నాణ్యతను పర్యవేక్షిస్తుంది.'
          : 'AP State Food Commission monitors National Food Security Act (NFSA 2013) statutory mandates across Ration Shops, Mid-Day Meals, and Anganwadi Nutrition.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: 'linear-gradient(135deg, #006837 0%, #0a2540 100%)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '9999px',
            padding: '0.8rem 1.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            fontWeight: 700,
            fontSize: '0.88rem',
            boxShadow: '0 10px 28px rgba(0, 104, 55, 0.35)',
            cursor: 'pointer',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <Sparkles size={16} color="#fdb813" />
          <span>{lang === 'te' ? 'ఆహార రక్షణ AI సేవ' : 'Food Security AI Chat'}</span>
        </button>
      )}

      {isOpen && (
        <div
          style={{
            width: '360px',
            height: '520px',
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(30px) saturate(200%)',
            WebkitBackdropFilter: 'blur(30px) saturate(200%)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '26px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              padding: '1rem 1.2rem',
              background: 'linear-gradient(135deg, #006837 0%, #0a2540 100%)',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="#fdb813" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>AP Food Commission AI</h4>
                <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 700 }}>● Online Assistant</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#ffffff', borderRadius: '50%', width: '26px', height: '26px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={15} />
            </button>
          </div>

          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '82%',
                  background: m.sender === 'user' ? '#006837' : '#f1f5f9',
                  color: m.sender === 'user' ? '#ffffff' : '#1e293b',
                  padding: '0.7rem 0.95rem',
                  borderRadius: m.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  fontSize: '0.85rem',
                  lineHeight: '1.45',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  fontWeight: m.sender === 'user' ? 600 : 500
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div style={{ padding: '0.5rem 0.9rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', background: 'rgba(248, 250, 252, 0.8)' }}>
            {quickPrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(prompt)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '0.3rem 0.7rem',
                  fontSize: '0.75rem',
                  color: '#006837',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{prompt}</span>
                <ChevronRight size={12} />
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            style={{ padding: '0.75rem 0.9rem', display: 'flex', gap: '0.45rem', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}
          >
            <input
              type="text"
              placeholder={lang === 'te' ? 'ఇక్కడ టైప్ చేయండి...' : 'Ask AI Assistant...'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                flex: 1,
                padding: '0.55rem 0.85rem',
                borderRadius: '18px',
                border: '1px solid #cbd5e1',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#006837',
                color: '#ffffff',
                border: 'none',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
