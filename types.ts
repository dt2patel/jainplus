export interface LocalizedString {
  en: string;
  hi: string;
}

export interface Mantra {
  sanskrit: string;
  translation: LocalizedString;
}

export interface Puja {
  name: LocalizedString;
  time: LocalizedString;
  mantra: Mantra;
}

export interface ParyushanDay {
  day: number;
  date: string;
  dayName: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  pujas: Puja[];
}
