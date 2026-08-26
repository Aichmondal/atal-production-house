import React from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { Gift, Instagram, Facebook, Sparkles, Trophy, BellRing } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FreeMixingChallenge: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="free-mixing" className="relative py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[400px] bg-gradient-to-r from-[#7C3AED]/20 via-[#D4AF37]/20 to-[#EC4899]/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Promotional Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#181524] via-[#12111A] to-[#0E0E12] border border-[#7C3AED]/40 p-8 sm:p-12 md:p-14 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Wave Background Graphics */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#7C3AED]/30 blur-3xl rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Content Side */}
            <div className="flex-1 text-center lg:text-left space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-english uppercase tracking-widest font-semibold">
                <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.freeMixing.tag}</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Free Mixing
              </h2>

              {/* Subheadline */}
              <div className="font-bold text-xl sm:text-2xl text-[#D4AF37] flex items-center justify-center lg:justify-start gap-2">
                <Trophy className="w-6 h-6 text-[#D4AF37]" />
                <span>{t.freeMixing.subTitle}</span>
              </div>

              {/* Short Copy */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
                {t.freeMixing.desc}
              </p>

              {/* Highlight Banner */}
              <div className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-white/5 border border-[#D4AF37]/30 text-white">
                <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">
                  {t.freeMixing.winnerHighlight} <strong className="text-[#D4AF37] ml-1">{t.freeMixing.winnerHighlightPrice}</strong>
                </span>
              </div>

              {/* Important Transparency Note: Occasional Offer */}
              <p className="text-xs text-neutral-400 flex items-center justify-center lg:justify-start gap-1.5">
                <BellRing className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>{t.freeMixing.notice}</span>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                {/* Instagram CTA */}
                <a
                  href={STUDIO_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="free-mixing-instagram-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white font-semibold text-sm shadow-lg shadow-[#E1306C]/25 transition-all hover:scale-105"
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 font-semibold text-sm transition-all hover:scale-105"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="font-bold">{t.freeMixing.followFb}</span>
                </a>
              </div>
            </div>

            {/* Right Side Visual: Glowing ₹0 / FREE Visual Card */}
            <div className="w-full lg:w-72 shrink-0 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-tr from-[#1E1B2E] to-[#12101B] border-2 border-[#D4AF37]/50 p-6 flex flex-col items-center justify-center shadow-2xl group hover:border-[#D4AF37] transition-all">
                
                {/* Rotating subtle ring */}
                <div className="absolute inset-2 border border-dashed border-[#7C3AED]/40 rounded-2xl animate-[spin_20s_linear_infinite]" />
                
                <div className="relative z-10 text-center space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {t.freeMixing.studioSpecial}
                  </div>
                  
                  {/* Glowing ₹0 */}
                  <div className="font-english text-6xl sm:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F3E5AB] to-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                    ₹0
                  </div>

                  <div className="font-extrabold text-xl text-[#7C3AED] tracking-widest uppercase">
                    {t.freeMixing.freeMixingBadge}
                  </div>

                  <div className="text-[11px] text-neutral-400">
                    {t.freeMixing.freeMixingSub}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

