import React from 'react';
import type { ParyushanDay, Puja } from '../types';
import type { Language } from '../App';

interface PujaDetailsProps {
  puja: Puja;
  language: Language;
}

const PujaDetails: React.FC<PujaDetailsProps> = ({ puja, language }) => (
  <div className="mt-4 bg-amber-100/50 p-4 rounded-lg border border-amber-200">
    <h4 className="font-semibold text-amber-800">{puja.name[language]}</h4>
    <p className="text-sm text-amber-700 mb-2">{puja.time[language]}</p>
    <div className="mt-2 text-center bg-white p-3 rounded-md shadow-inner">
      <p className="font-sans text-lg text-amber-900">{puja.mantra.sanskrit}</p>
      <p className="text-sm italic text-amber-600 mt-1">{puja.mantra.translation[language]}</p>
    </div>
  </div>
);

interface ScheduleCardProps {
  dayData: ParyushanDay;
  language: Language;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ dayData, language }) => {
  const isSpecialDay = dayData.pujas.length > 0;
  const dayText = language === 'hi' ? 'दिन' : 'Day';

  return (
    <div className={`flex flex-col h-full bg-white/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border ${isSpecialDay ? 'border-amber-400' : 'border-amber-200'}`}>
      <div className={`p-5 rounded-t-xl ${isSpecialDay ? 'bg-amber-500' : 'bg-amber-400'}`}>
        <div className="flex justify-between items-center">
          <span className={`font-bold text-2xl ${isSpecialDay ? 'text-white' : 'text-amber-800'}`}>{dayText} {dayData.day}</span>
          <div className="text-right">
            <p className={`font-semibold text-sm ${isSpecialDay ? 'text-amber-100' : 'text-amber-700'}`}>{dayData.dayName[language]}</p>
            <p className={`text-xs ${isSpecialDay ? 'text-amber-200' : 'text-amber-600'}`}>{dayData.date}</p>
          </div>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-amber-800 mb-2">{dayData.title[language]}</h3>
        <p className="text-gray-600 text-sm flex-grow">{dayData.description[language]}</p>
        
        {isSpecialDay && (
          <div className="mt-4">
            <div className="border-t border-amber-200 my-2"></div>
            {dayData.pujas.map((puja, index) => (
              <PujaDetails key={index} puja={puja} language={language} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
