import React from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { Volume2, Instagram, Facebook, Youtube, MessageCircle, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="main-footer" className="bg-[#070709] border-t border-white/10 pt-16 pb-24 lg:pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Logo and Studio Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 mb-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0E0E10] rounded-[7px] flex items-center justify-center">
                  <Volume2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
              <span className="font-english font-bold text-lg tracking-wider text-white">
                ATAL <span className="text-[#D4AF37]">PRODUCTION</span> HOUSE
              </span>
            </a>
            <p className="text-xs text-neutral-400 font-medium">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold">
            <a
              href={STUDIO_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#E1306C] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>

            <a
              href={STUDIO_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#1877F2] transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>

            <a
              href={STUDIO_LINKS.YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#FF0000] transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </a>

            <a
              href={STUDIO_LINKS.WHATSAPP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#25D366] transition-colors"
            >
              <Radio className="w-4 h-4" />
              <span>WhatsApp Channel</span>
            </a>

            <a
              href={STUDIO_LINKS.WHATSAPP_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span>{t.footer.badge1}</span>
            <span>•</span>
            <span>{t.footer.badge2}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

