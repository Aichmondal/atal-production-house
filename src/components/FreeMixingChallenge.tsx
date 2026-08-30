import React from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { Gift, Instagram, Facebook, Sparkles, Trophy, BellRing } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FreeMixingChallenge: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="free-mixing" className="relative py-6 sm:py-12 md:py-16 bg-[#0A0A0A] overflow-hidden border-t border-white/10 flex items-center">
      {/* Background Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[750px] h-[300px] sm:h-[400px] bg-gradient-to-r from-[#7C3AED]/20 via-[#D4AF37]/20 to-[#EC4899]/20 blur-[100px] sm:blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Promotional Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181524] via-[#12111A] to-[#0E0E12] border border-[#7C3AED]/40 p-5 sm:p-10 md:p-14 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Wave Background Graphics */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#7C3AED]/30 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[11px] sm:text-xs font-english uppercase tracking-widest font-semibold">
              <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.freeMixing.tag}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Free Mixing
            </h2>

            {/* Subheadline */}
            <div className="font-bold text-lg sm:text-2xl text-[#D4AF37] flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />
              <span>{t.freeMixing.subTitle}</span>
            </div>

            {/* Short Copy */}
            <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              {t.freeMixing.desc}
            </p>

            {/* Highlight Banner */}
            <div className="inline-flex items-center gap-2 sm:gap-3 py-2.5 px-4 sm:p-3 sm:px-6 rounded-xl sm:rounded-2xl bg-white/5 border border-[#D4AF37]/30 text-white text-xs sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0" />
              <span className="font-semibold">
                {t.freeMixing.winnerHighlight} <strong className="text-[#D4AF37] ml-1">{t.freeMixing.winnerHighlightPrice}</strong>
              </span>
            </div>

            {/* Important Transparency Note: Occasional Offer */}
            <p className="text-[11px] sm:text-xs text-neutral-400 flex items-center justify-center gap-1.5 pt-1">
              <BellRing className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span>{t.freeMixing.notice}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              {/* Instagram CTA */}
              <a
                href={STUDIO_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                id="free-mixing-instagram-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white font-semibold text-sm shadow-lg shadow-[#E1306C]/25 transition-all hover:scale-105 active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span className="font-bold">{t.freeMixing.followInsta}</span>
              </a>

              {/* Facebook CTA */}
              <a
                href={STUDIO_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                id="free-mixing-facebook-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Facebook className="w-4 h-4" />
                <span className="font-bold">{t.freeMixing.followFb}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

