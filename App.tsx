import React, { useState } from 'react';
import { PARYUSHAN_SCHEDULE, UI_TEXT } from './constants';
import Header from './components/Header';
import ScheduleCard from './components/ScheduleCard';

export type Language = 'en' | 'hi';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-800 font-sans antialiased">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 tracking-tight">
            {UI_TEXT.mainTitle[language]}
          </h2>
          <p className="mt-4 text-lg text-amber-700 max-w-3xl mx-auto">
            {UI_TEXT.subTitle[language]}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PARYUSHAN_SCHEDULE.map((day) => (
            <ScheduleCard key={day.day} dayData={day} language={language} />
          ))}
        </div>
        
        <footer className="text-center mt-16 pb-8 text-amber-600">
          <p>{UI_TEXT.footerText[language]}</p>
          <p className="font-bold text-xl mt-2">{UI_TEXT.micchamiDukkadam.hi}</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
