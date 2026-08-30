import React from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { Instagram, Facebook, Youtube, MessageCircle, Radio, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SocialSection: React.FC = () => {
  const { t } = useLanguage();

  const socialChannels = [
    {
      id: 'social-whatsapp-dm',
      label: 'WhatsApp Direct DM',
      subtext: 'Direct project consultation & booking',
      url: STUDIO_LINKS.WHATSAPP_DM,
      icon: MessageCircle,
      iconColor: 'text-[#25D366]',
      glowColor: 'hover:border-[#25D366]/50 shadow-[0_0_25px_rgba(37,211,102,0.15)]',
      btnText: 'Open Chat'
    },
    {
      id: 'social-whatsapp-channel',
      label: 'WhatsApp Channel',
      subtext: 'Get instant studio updates & offers',
      url: STUDIO_LINKS.WHATSAPP_CHANNEL,
      icon: Radio,
      iconColor: 'text-[#25D366]',
      glowColor: 'hover:border-[#25D366]/40',
      btnText: 'Join Channel'
    },
    {
      id: 'social-instagram',
      label: 'Instagram',
      subtext: 'Behind-the-scenes & challenge alerts',
      url: STUDIO_LINKS.INSTAGRAM,
      icon: Instagram,
      iconColor: 'text-[#E1306C]',
      glowColor: 'hover:border-[#E1306C]/40',
      btnText: 'Follow @ataldas1997'
    },
    {
      id: 'social-youtube',
      label: 'YouTube Channel',
      subtext: 'Recording tips & mixing breakdowns',
      url: STUDIO_LINKS.YOUTUBE_CHANNEL,
      icon: Youtube,
      iconColor: 'text-[#FF0000]',
      glowColor: 'hover:border-[#FF0000]/40',
      btnText: 'Subscribe @MixWithAD'
    },
    {
      id: 'social-facebook',
      label: 'Facebook Page',
      subtext: 'Official studio community page',
      url: STUDIO_LINKS.FACEBOOK,
      icon: Facebook,
      iconColor: 'text-[#1877F2]',
      glowColor: 'hover:border-[#1877F2]/40',
      btnText: 'Visit Page'
    }
  ];

  return (
    <section id="contact" className="relative py-10 sm:py-16 md:py-20 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] sm:text-xs font-english uppercase tracking-widest text-[#D4AF37] mb-2 sm:mb-3">
            <span>{t.social.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">
            {t.social.title}
          </h2>
          <p className="text-xs sm:text-base text-neutral-300">
            {t.social.subtitle}
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {socialChannels.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                id={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl sm:rounded-3xl bg-white/5 p-4 sm:p-6 border border-white/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] shadow-lg active:scale-98"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor}`} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-[#D4AF37] transition-colors">
                  <span>{item.btnText}</span>
                  <span className="text-[10px] text-neutral-400">{t.social.officialLink}</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

