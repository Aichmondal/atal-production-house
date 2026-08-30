import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[40vh] sm:min-h-[45vh] flex items-center justify-center pt-28 sm:pt-32 pb-12 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#101014] to-[#0A0A0A]"
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


