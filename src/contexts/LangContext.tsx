import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'en' | 'ar';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, ar: string) => string;
  isRTL: boolean;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.dir = isRTL ? 'rtl' : 'ltr';
  }, [lang, isRTL]);

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, isRTL }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
};
