import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, LANGUAGES, LanguageMeta, TRANSLATIONS } from '../constants/translations';

export type Language = SupportedLanguage;

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
  isBengali: boolean;
  currentLangMeta: LanguageMeta;
  languages: LanguageMeta[];
  t: typeof TRANSLATIONS.bn;
}

const defaultMeta = LANGUAGES[0];

const LanguageContext = createContext<LanguageContextType>({
  language: 'bn',
  setLanguage: () => {},
  toggleLanguage: () => {},
  isBengali: true,
  currentLangMeta: defaultMeta,
  languages: LANGUAGES,
  t: TRANSLATIONS.bn,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('atal_studio_lang') as SupportedLanguage;
      if (saved && LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'bn';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('atal_studio_lang', lang);
    } catch (e) {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const currentIndex = LANGUAGES.findIndex((l) => l.code === prev);
      const nextIndex = (currentIndex + 1) % LANGUAGES.length;
      const nextLang = LANGUAGES[nextIndex].code;
      try {
        localStorage.setItem('atal_studio_lang', nextLang);
      } catch (e) {}
      return nextLang;
    });
  };

  const currentLangMeta = LANGUAGES.find((l) => l.code === language) || defaultMeta;
  const t = TRANSLATIONS[language] || TRANSLATIONS.bn;

  useEffect(() => {
    document.documentElement.dir = currentLangMeta.dir;
    document.documentElement.lang = currentLangMeta.code;
  }, [currentLangMeta]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isBengali: language === 'bn',
        currentLangMeta,
        languages: LANGUAGES,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

