import type { ParyushanDay } from './types';
import React from 'react';

export const UI_TEXT = {
  headerTitle: {
    en: 'Jain Paryushan Tracker',
    hi: 'जैन पर्युषण ट्रैकर',
  },
  mainTitle: {
    en: 'Paryushan Parva 2025 Schedule',
    hi: 'पर्युषण पर्व २०२५ अनुसूची',
  },
  subTitle: {
    en: 'An 8-day Shwetambar festival of self-purification, introspection, and seeking forgiveness. All dates are according to Indian Standard Time (IST).',
    hi: 'आत्म-शुद्धि, आत्मनिरीक्षण और क्षमा मांगने का ८-दिवसीय श्वेतांबर पर्व। सभी तिथियां भारतीय मानक समय (IST) के अनुसार हैं।',
  },
  footerText: {
    en: 'May this Paryushan bring peace and purity to all.',
    hi: 'यह पर्युषण सभी के लिए शांति और पवित्रता लाए।',
  },
  micchamiDukkadam: {
    en: 'Micchāmi Dukkaḍaṃ',
    hi: 'मिच्छामि दुक्कडं',
  },
};

export const PARYUSHAN_SCHEDULE: ParyushanDay[] = [
  {
    day: 1,
    date: 'August 23, 2025',
    dayName: { en: 'Saturday', hi: 'शनिवार' },
    title: { en: 'The Beginning of Introspection', hi: 'आत्मनिरीक्षण का आरंभ' },
    description: {
      en: 'The first day marks the start of this sacred period of fasting, prayer, and self-purification. The holy scripture, Kalpa Sutra, is brought into the temple in a ceremonial procession.',
      hi: 'पहला दिन उपवास, प्रार्थना और आत्म-शुद्धि की इस पवित्र अवधि की शुरुआत का प्रतीक है। पवित्र ग्रंथ, कल्प सूत्र, को एक औपचारिक जुलूस में मंदिर में लाया जाता है।',
    },
    pujas: [],
  },
  {
    day: 2,
    date: 'August 24, 2025',
    dayName: { en: 'Sunday', hi: 'रविवार' },
    title: { en: 'Kalpa Sutra Vachan', hi: 'कल्प सूत्र वाचन' },
    description: {
      en: 'The recitation of the Kalpa Sutra begins. This scripture narrates the life of Lord Mahavir and other Tirthankaras, inspiring devotees to follow their path.',
      hi: 'कल्प सूत्र का वाचन प्रारम्भ होता है। यह शास्त्र भगवान महावीर और अन्य तीर्थंकरों के जीवन का वर्णन करता है, जो भक्तों को उनके मार्ग पर चलने के लिए प्रेरित करता है।',
    },
    pujas: [],
  },
  {
    day: 3,
    date: 'August 25, 2025',
    dayName: { en: 'Monday', hi: 'सोमवार' },
    title: { en: 'Continuing the Sacred Word', hi: 'पवित्र वचन का क्रम' },
    description: {
      en: 'Devotees continue to listen to the Kalpa Sutra, absorbing the teachings and virtues of the Tirthankaras. The focus is on understanding the principles of Jainism.',
      hi: 'भक्त कल्प सूत्र को सुनना जारी रखते हैं, तीर्थंकरों की शिक्षाओं और गुणों को आत्मसात करते हैं। ध्यान जैन धर्म के सिद्धांतों को समझने पर है।',
    },
    pujas: [],
  },
  {
    day: 4,
    date: 'August 26, 2025',
    dayName: { en: 'Tuesday', hi: 'मंगलवार' },
    title: { en: 'Mahavir Janma Vachan', hi: 'महावीर जन्म वाचन' },
    description: {
      en: 'A very auspicious day celebrating the birth of Lord Mahavir. The fourteen auspicious dreams of his mother, Queen Trishala, are narrated and ceremoniously displayed.',
      hi: 'भगवान महावीर के जन्म का जश्न मनाने वाला एक बहुत ही शुभ दिन। उनकी माता, रानी त्रिशला के चौदह शुभ सपनों का वर्णन किया जाता है और उन्हें समारोह पूर्वक प्रदर्शित किया जाता है।',
    },
    pujas: [
      {
        name: { en: 'Mahavir Janma Kalyanak Puja', hi: 'महावीर जन्म कल्याणक पूजा' },
        time: { en: 'Morning', hi: 'सुबह' },
        mantra: {
          sanskrit: 'ॐ ह्रीं श्रीं अर्हं श्री महावीरय नमः',
          translation: {
            en: 'Om Hreem Shreem Arham Shri Mahaviraya Namah',
            hi: 'ॐ ह्रीं श्रीं अर्हं श्री महावीराय नमः',
          },
        },
      },
    ],
  },
  {
    day: 5,
    date: 'August 27, 2025',
    dayName: { en: 'Wednesday', hi: 'बुधवार' },
    title: { en: 'Cultivating Virtues (Panch Mahavrat)', hi: 'सद्गुणों का विकास (पंच महाव्रत)' },
    description: {
      en: 'A day to reflect on the five main vows of Jainism: Ahimsa (non-violence), Satya (truth), Asteya (non-stealing), Brahmacharya (chastity), and Aparigraha (non-possession).',
      hi: 'जैन धर्म की पांच मुख्य प्रतिज्ञाओं पर चिंतन करने का दिन: अहिंसा, सत्य, अस्तेय, ब्रह्मचर्य और अपरिग्रह।',
    },
    pujas: [],
  },
  {
    day: 6,
    date: 'August 28, 2025',
    dayName: { en: 'Thursday', hi: 'गुरुवार' },
    title: { en: 'Deepening Meditation', hi: 'ध्यान को गहरा करना' },
    description: {
      en: 'Focus shifts towards deeper meditation (dhyana) and introspection, seeking to cleanse the soul of accumulated karmas through self-control and spiritual practices.',
      hi: 'ध्यान गहरी साधना (ध्यान) और आत्मनिरीक्षण की ओर बढ़ता है, आत्म-संयम और आध्यात्मिक प्रथाओं के माध्यम से संचित कर्मों से आत्मा को शुद्ध करने की कोशिश करता है।',
    },
    pujas: [],
  },
  {
    day: 7,
    date: 'August 29, 2025',
    dayName: { en: 'Friday', hi: 'शुक्रवार' },
    title: { en: 'Anticipation of Forgiveness', hi: 'क्षमा की प्रत्याशा' },
    description: {
      en: 'Preparations for Samvatsari begin. Devotees reflect on their actions over the past year and prepare their hearts to ask for forgiveness from all living beings.',
      hi: 'संवत्सरी की तैयारी शुरू होती है। भक्त पिछले वर्ष में अपने कार्यों पर चिंतन करते हैं और सभी जीवित प्राणियों से क्षमा मांगने के लिए अपने हृदय को तैयार करते हैं।',
    },
    pujas: [],
  },
  {
    day: 8,
    date: 'August 30, 2025',
    dayName: { en: 'Saturday', hi: 'शनिवार' },
    title: { en: 'Samvatsari - The Day of Forgiveness', hi: 'संवत्सरी - क्षमा का दिन' },
    description: {
      en: 'The most important day of Paryushan. Jains observe a complete fast and perform the Samvatsari Pratikraman, a comprehensive ritual of confession and repentance, culminating in seeking forgiveness.',
      hi: 'पर्युषण का सबसे महत्वपूर्ण दिन। जैन पूर्ण उपवास रखते हैं और संवत्सरी प्रतिक्रमण करते हैं, जो कबूलनामा और पश्चाताप का एक व्यापक अनुष्ठान है, जिसका समापन क्षमा मांगने में होता है।',
    },
    pujas: [
      {
        name: { en: 'Samvatsari Pratikraman', hi: 'संवत्सरी प्रतिक्रमण' },
        time: { en: 'Evening', hi: 'शाम' },
        mantra: {
          sanskrit: 'मिच्छामि दुक्कडं',
          translation: {
            en: 'Micchāmi Dukkaḍaṃ',
            hi: 'मिच्छामि दुक्कडं',
          },
        },
      },
    ],
  },
];

export const LotusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".1" />
    <path d="M12.16,4.22c-0.27-0.19-0.62-0.16-0.85,0.08C10.99,4.58,10.15,5.5,10,8c-0.11,1.86,0.67,3.63,1.96,4.86 C12.03,12.9,12,12.99,12,13v0.01c0,0.01,0.03,0.1,0.04,0.14c0.41,1.11,1.23,2.06,2.33,2.58c0.2,0.09,0.43,0.07,0.61-0.05 c0.18-0.12,0.28-0.33,0.26-0.54c-0.06-0.65-0.23-1.28-0.5-1.85C13.88,11.66,13.4,9.8,13.5,8C13.6,5.5,12.9,4.66,12.16,4.22z M12,17.27c-0.31-0.13-0.6-0.3-0.87-0.5c-1.3-1-2.13-2.61-2.13-4.77c0-0.45,0.04-0.89,0.11-1.32 C9.66,10.6,10.08,11,10.59,11c0.66,0,1.19-0.54,1.19-1.19c0-0.41-0.21-0.78-0.53-0.99C11.61,7.21,12,5.65,12,5.65 s0.39,1.56,0.75,3.16c-0.32,0.21-0.53,0.57-0.53,0.99c0,0.66,0.54,1.19,1.19,1.19c0.51,0,0.94-0.31,1.12-0.75 c0.07,0.43,0.11,0.87,0.11,1.32C15,14.65,14.17,16.27,12.87,17.27C12.6,17.5,12.31,17.4,12,17.27z" />
  </svg>
);
