import React from 'react';
import { LotusIcon, UI_TEXT } from '../constants';
import type { Language } from '../App';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage }) => {
  return (
    <header className="bg-amber-800/10 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <LotusIcon className="h-10 w-10 text-amber-600" />
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-800 tracking-wider">
            {UI_TEXT.headerTitle[language]}
          </h1>
        </div>
        <div className="flex items-center">
          <span className={`px-2 font-semibold ${language === 'en' ? 'text-amber-800' : 'text-gray-500'}`}>EN</span>
          <button
            onClick={toggleLanguage}
            className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            aria-label="Toggle language"
            role="switch"
            aria-checked={language === 'hi'}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-amber-600 rounded-full transition-transform ${
                language === 'hi' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`px-2 font-semibold ${language === 'hi' ? 'text-amber-800' : 'text-gray-500'}`}>हि</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
