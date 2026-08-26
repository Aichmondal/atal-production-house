import React, { useState, useEffect } from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 12s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <aside
        aria-label="WhatsApp Studio Assistant"
        className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-2"
      >
        {/* Quick Pop Tooltip */}
        {showTooltip && (
          <div
            id="desktop-wa-tooltip"
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#141419] border border-[#25D366]/40 text-white text-xs shadow-2xl animate-bounce duration-1000 relative"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-medium text-neutral-200">
              {t.floatingWa.tooltipText} <strong className="text-[#25D366]">{t.floatingWa.tooltipBold}</strong>
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-1 text-neutral-400 hover:text-white"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Pulsing Floating Button */}
        <a
          href={STUDIO_LINKS.WHATSAPP_DM}
          target="_blank"
          rel="noopener noreferrer"
          id="desktop-floating-whatsapp-btn"
          aria-label="Direct WhatsApp Message"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] via-[#20BA5A] to-[#128C7E] text-black shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {/* Subtle Outer Ping Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 fill-black relative z-10" />

          {/* Online badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0A0A0A] rounded-full" />
        </a>
      </aside>

      {/* Mobile Sticky Bottom CTA Bar */}
      <aside
        aria-label="Mobile WhatsApp Contact Bar"
        id="mobile-sticky-whatsapp-bar"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 p-3 px-4 flex items-center justify-between gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]"
      >
        <div className="flex flex-col">
          <span className="text-[11px] font-english uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Atal Production House
          </span>
          <span className="text-xs text-neutral-300">
            {t.floatingWa.mobileSubtitle}
          </span>
        </div>

        <a
          href={STUDIO_LINKS.WHATSAPP_DM}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-wa-btn"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(37,211,102,0.4)] active:scale-95 shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>{t.floatingWa.mobileBtn}</span>
        </a>
      </aside>
    </>
  );
};

