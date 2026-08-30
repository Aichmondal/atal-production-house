import React, { useState } from 'react';
import { Headphones, RotateCcw, Handshake, MessageSquareText, ChevronDown, ShieldCheck } from 'lucide-react';
import { STUDIO_LINKS } from '../constants/links';
import { useLanguage } from '../context/LanguageContext';

export const StudioPolicies: React.FC = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'policy-audio-pricing': true,
    'policy-revisions': true,
    'policy-collab': false,
    'policy-discussion': false,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getPolicyIcon = (id: string) => {
    switch (id) {
      case 'policy-audio-pricing':
        return { icon: Headphones, color: 'text-[#D4AF37]' };
      case 'policy-revisions':
        return { icon: RotateCcw, color: 'text-[#7C3AED]' };
      case 'policy-collab':
        return { icon: Handshake, color: 'text-cyan-400' };
      default:
        return { icon: MessageSquareText, color: 'text-[#25D366]' };
    }
  };

  return (
    <section id="policies" className="relative py-10 sm:py-16 md:py-20 bg-[#0D0D11] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] sm:text-xs font-english uppercase tracking-widest text-[#D4AF37] mb-2 sm:mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.policies.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">
            {t.policies.title}
          </h2>
          <p className="text-xs sm:text-base text-neutral-300">
            {t.policies.subtitle}
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {(t.policies?.items || []).map((policy) => {
            const { icon: Icon, color } = getPolicyIcon(policy.id);
            const isOpen = !!openItems[policy.id];

            return (
              <div
                key={policy.id}
                id={policy.id}
                className={`rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 overflow-hidden hover:border-white/20 ${
                  isOpen ? 'bg-white/[0.08] border-white/20' : 'bg-white/5'
                }`}
              >
                <button
                  onClick={() => toggleItem(policy.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-2xl bg-black/40 border border-white/10 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-base sm:text-lg text-white block">
                        {policy.title}
                      </span>
                      {policy.titleSub && (
                        <span className="text-xs text-neutral-400">
                          {policy.titleSub}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-white/10 text-[#D4AF37]' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5">
                    <p className="text-sm sm:text-base text-neutral-200 leading-relaxed pl-12">
                      {policy.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Small Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-400">
            {t.policies.bottomNotice}{' '}
            <a
              href={STUDIO_LINKS.WHATSAPP_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-semibold"
            >
              {t.policies.whatsappDirect}
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
};

