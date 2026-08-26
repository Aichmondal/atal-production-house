import React, { useState } from 'react';
import { Languages, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../constants/translations';

export const Hero: React.FC = () => {
  const { language, setLanguage, languages, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#101014] to-[#0A0A0A]"
    >
      {/* Cinematic Ambient Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#D4AF37]/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#7C3AED]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[#D4AF37]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Studio Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Multi-Language Selector Bar in Hero */}
        <div
          id="hero-language-selector"
          className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8 shadow-xl"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 text-white/60 text-xs font-semibold">
            <Languages className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden sm:inline">{t.hero.switchLang}:</span>
          </div>

          <div className="flex items-center flex-wrap gap-1">
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={`hero-lang-${lang.code}`}
                  onClick={() => setLanguage(lang.code as SupportedLanguage)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/25'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-xs">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </button>
              );
            })}
          </div>
        </div>

        <h1
          id="hero-headline"
          className="font-english text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-white leading-tight"
        >
          {t.hero.headline}
        </h1>
      </div>
    </section>
  );
};


