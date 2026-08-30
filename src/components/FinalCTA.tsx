import React from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { MessageCircle, ArrowDownCircle, Sparkles, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#0D0D11] via-[#161224] to-[#0A0A0A] border-t border-white/5 overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[250px] sm:h-[350px] bg-gradient-to-r from-[#D4AF37]/20 via-[#7C3AED]/25 to-[#25D366]/15 blur-[120px] sm:blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Studio Mini Logo Icon */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px] mx-auto mb-6 sm:mb-8 shadow-[0_0_35px_rgba(212,175,55,0.4)]">
          <div className="w-full h-full bg-[#0A0A0E] rounded-[14px] flex items-center justify-center">
            <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]" />
          </div>
        </div>

        {/* Localized Headline with Gold Highlight */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3 sm:mb-4 text-balance">
          {t.finalCta.titlePart1}{' '}
          <span className="gold-gradient-text">
            {t.finalCta.titleHighlight}
          </span>{' '}
          {t.finalCta.titlePart2}
        </h2>

        {/* Localized Supporting Text */}
        <p className="text-sm sm:text-xl text-neutral-300 max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed">
          {t.finalCta.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          {/* Primary CTA */}
          <a
            href={STUDIO_LINKS.WHATSAPP_DM}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm sm:text-lg tracking-wide shadow-lg shadow-[#7C3AED]/25 border border-[#7C3AED]/50 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>{t.finalCta.whatsappBtn}</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#packages"
            id="final-cta-packages-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/5 sm:bg-transparent border border-white/20 hover:bg-white hover:text-black text-white font-semibold text-sm sm:text-base transition-all active:scale-95"
          >
            <ArrowDownCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
            <span>{t.finalCta.packageBtn}</span>
          </a>
        </div>

        {/* Small Trust Badge */}
        <div className="mt-12 inline-flex items-center gap-2 text-xs text-neutral-400">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{t.finalCta.trustBadge}</span>
        </div>

      </div>
    </section>
  );
};

