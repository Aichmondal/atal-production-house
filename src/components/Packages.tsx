import React, { useState } from 'react';
import { PRICING_DATA, STUDIO_LINKS } from '../constants/links';
import { MessageCircle, Check, Sparkles, Disc, Music, Radio, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CardAudioPlayer } from './CardAudioPlayer';

export const Packages: React.FC = () => {
  const { t } = useLanguage();
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ORIGINAL SONG':
        return <Disc className="w-4 h-4 text-[#D4AF37]" />;
      case 'COVER SONG':
        return <Music className="w-4 h-4 text-[#7C3AED]" />;
      case 'REELS SONG':
        return <Radio className="w-4 h-4 text-cyan-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'ORIGINAL SONG':
        return 'border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#F3E5AB]';
      case 'COVER SONG':
        return 'border-[#7C3AED]/40 bg-[#7C3AED]/10 text-[#C084FC]';
      case 'REELS SONG':
        return 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300';
      default:
        return 'border-white/20 bg-white/5 text-white';
    }
  };

  const getLocalizedCategorySubtitle = (category: string) => {
    switch (category) {
      case 'ORIGINAL SONG':
        return t.packages.categories.original.subtitle;
      case 'COVER SONG':
        return t.packages.categories.cover.subtitle;
      case 'REELS SONG':
        return t.packages.categories.reels.subtitle;
      default:
        return '';
    }
  };

  const getLocalizedPackageInfo = (pkgId: string, fallbackName: string, fallbackDesc: string) => {
    const items = t.packages?.items || {};
    const itemTrans = (items as Record<string, { name?: string; desc?: string }>)[pkgId];
    if (itemTrans) {
      return {
        name: itemTrans.name || fallbackName,
        desc: itemTrans.desc || fallbackDesc,
      };
    }
    return { name: fallbackName, desc: fallbackDesc };
  };

  return (
    <section id="packages" className="relative py-10 sm:py-16 md:py-20 bg-[#0D0D11] border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#7C3AED]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Paid Mixing Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Paid Mixing
          </h2>
        </div>

        {/* Pricing Category Blocks */}
        <div className="space-y-8 sm:space-y-12">
          {PRICING_DATA.map((catGroup) => (
            <div
              key={catGroup.category}
              id={`package-cat-${catGroup.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="space-y-4 sm:space-y-6"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2 sm:pb-3">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg border text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${getCategoryBadgeClass(catGroup.category)}`}>
                    {getCategoryIcon(catGroup.category)}
                    <span>{catGroup.category}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                    {getLocalizedCategorySubtitle(catGroup.category)}
                  </span>
                </div>
              </div>

              {/* Package Cards Grid */}
              <div className={`grid gap-4 sm:gap-6 ${
                catGroup.items.length === 3
                  ? 'grid-cols-1 md:grid-cols-3'
                  : 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              }`}>
                {catGroup.items.map((pkg) => {
                  const isHighlight = pkg.price === '₹700' || pkg.price === '₹6,000' || pkg.price === '₹4,000';
                  const localized = getLocalizedPackageInfo(pkg.id, pkg.name, pkg.description);
                  
                  return (
                    <div
                      key={pkg.id}
                      id={`pkg-card-${pkg.id}`}
                      className={`relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-4 sm:p-6 md:p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden ${
                        isHighlight
                          ? 'border-[#D4AF37]/40 shadow-xl'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Ambient corner flare */}
                      {isHighlight && (
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
                      )}

                      {/* Top Badge */}
                      {pkg.badge && (
                        <div className="absolute -top-3 right-4 sm:right-6 px-3 py-0.5 rounded-full bg-[#D4AF37] text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-md">
                          {pkg.badge}
                        </div>
                      )}

                      <div>
                        {/* Package Name */}
                        <div className="mb-3 sm:mb-4">
                          <h4 className="text-base sm:text-xl font-bold text-white mb-1">
                            {localized.name}
                          </h4>
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50">
                            {catGroup.category}
                          </span>
                        </div>

                        {/* Prominent Price Display */}
                        <div className="my-3 sm:my-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 border border-white/5 flex items-baseline justify-between">
                          <span className="text-[11px] sm:text-xs text-neutral-400 uppercase tracking-wider">
                            {t.packages.studioRate}
                          </span>
                          <div className="font-extrabold text-2xl sm:text-4xl text-[#D4AF37] tracking-tight drop-shadow-[0_0_15px_rgba(212,175,55,0.35)]">
                            {pkg.price}
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 mb-3 sm:mb-4 leading-relaxed">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{localized.desc}</span>
                        </div>

                        {/* Vocal Sample Player Before & After */}
                        <CardAudioPlayer
                          cardId={pkg.id}
                          activePlayerId={activeAudioId}
                          onPlayStateChange={setActiveAudioId}
                          rawAudioSrc="/audio/raw_vocal.mp3"
                          mixedAudioSrc="/audio/mixed_vocal.mp3"
                          rawDriveUrl={STUDIO_LINKS.RAW_VOCAL_GDRIVE}
                          mixedDriveUrl={STUDIO_LINKS.MIXED_VOCAL_GDRIVE}
                        />
                      </div>

                      {/* Card Bottom WhatsApp CTA */}
                      <a
                        href={`${STUDIO_LINKS.WHATSAPP_DM}?text=${encodeURIComponent(
                          `Hello Atal Production House, I want to book music mixing/production for: ${catGroup.category} - ${localized.name} (${pkg.price})`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-white/5 hover:bg-[#7C3AED] text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm tracking-wide border border-white/10 hover:border-[#7C3AED] transition-all shadow-sm group active:scale-98 mt-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current group-hover:fill-white text-[#D4AF37] group-hover:text-white" />
                        <span>{t.packages.bookWhatsApp}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Below All Packages */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#D4AF37]/30 p-5 sm:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#7C3AED]/15 blur-3xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-xl font-bold text-white mb-1">
                  {t.packages.bottomCardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  {t.packages.bottomCardDesc}
                </p>
              </div>

              <a
                href={STUDIO_LINKS.WHATSAPP_DM}
                target="_blank"
                rel="noopener noreferrer"
                id="packages-main-cta-btn"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-bold text-xs sm:text-base tracking-wide shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>{t.packages.bottomCardBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

