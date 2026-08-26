import React, { useState, useEffect, useRef } from 'react';
import { STUDIO_LINKS } from '../constants/links';
import {
  Menu,
  X,
  MessageCircle,
  Sparkles,
  Instagram,
  Facebook,
  Youtube,
  Radio,
  Languages,
  ChevronDown,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../constants/translations';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const { language, setLanguage, languages, currentLangMeta, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'packages',
        'free-mixing',
        'before-after',
        'recording-guide',
        'policies',
        'contact'
      ];

      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'packages', label: t.nav.packages },
    { id: 'free-mixing', label: t.nav.freeMixing },
    { id: 'before-after', label: t.nav.beforeAfter },
    { id: 'recording-guide', label: t.nav.guide },
    { id: 'policies', label: t.nav.policies },
    { id: 'contact', label: t.nav.contact },
  ];

  const socialLinks = [
    {
      id: 'header-instagram',
      name: 'Instagram',
      url: STUDIO_LINKS.INSTAGRAM,
      icon: Instagram,
      hoverClass: 'hover:text-[#E1306C] hover:border-[#E1306C]/40',
      title: 'Follow on Instagram'
    },
    {
      id: 'header-facebook',
      name: 'Facebook',
      url: STUDIO_LINKS.FACEBOOK,
      icon: Facebook,
      hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
      title: 'Follow on Facebook'
    },
    {
      id: 'header-youtube',
      name: 'YouTube',
      url: STUDIO_LINKS.YOUTUBE_CHANNEL,
      icon: Youtube,
      hoverClass: 'hover:text-[#FF0000] hover:border-[#FF0000]/40',
      title: 'Subscribe on YouTube'
    },
    {
      id: 'header-channel',
      name: 'Channel',
      url: STUDIO_LINKS.WHATSAPP_CHANNEL,
      icon: Radio,
      hoverClass: 'hover:text-[#25D366] hover:border-[#25D366]/40',
      title: 'Join WhatsApp Channel'
    }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#home"
            id="brand-logo"
            className="flex flex-col group focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-english font-bold text-lg sm:text-xl tracking-tighter text-[#D4AF37] transition-all group-hover:text-white">
                ATAL PRODUCTION HOUSE
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 text-white font-english">
              {t.footer.tagline}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`nav-link-${item.id}`}
                className={`px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-medium transition-all ${
                  activeNav === item.id
                    ? 'text-[#D4AF37] bg-white/5 border border-[#D4AF37]/40 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                    : 'text-white/70 hover:text-[#7C3AED] hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Social Links, Multi-Language Selector & WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Multi-Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                id="header-lang-toggle"
                aria-label="Select Language"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-white/90 hover:text-white transition-all text-xs font-semibold"
              >
                <Languages className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-sm leading-none mr-0.5">{currentLangMeta.flag}</span>
                <span className="text-[#D4AF37] font-bold">{currentLangMeta.nativeName}</span>
                <ChevronDown className={`w-3 h-3 text-white/50 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#141419] border border-white/15 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] uppercase font-bold text-neutral-400 px-3 py-1.5 border-b border-white/5 mb-1">
                    {t.nav.langLabel}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as SupportedLanguage);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                        language === lang.code
                          ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-bold'
                          : 'text-neutral-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </div>
                      {language === lang.code && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-1.5 mr-1 border-r border-white/10 pr-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={item.id}
                    title={item.title}
                    aria-label={item.title}
                    className={`p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-all ${item.hoverClass}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>

            {/* WhatsApp DM Button */}
            <a
              href={STUDIO_LINKS.WHATSAPP_DM}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="bg-[#D4AF37] text-black px-5 py-2 rounded-full font-bold text-xs hover:bg-white transition-colors flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Menu & Social Button */}
          <div className="flex lg:hidden items-center gap-1.5">
            {/* Quick Translation Toggle on Mobile */}
            <button
              onClick={() => {
                const currentIndex = languages.findIndex((l) => l.code === language);
                const nextLang = languages[(currentIndex + 1) % languages.length].code;
                setLanguage(nextLang as SupportedLanguage);
              }}
              id="header-mobile-lang-toggle"
              aria-label="Switch Language"
              className="p-1.5 px-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-[#D4AF37] flex items-center gap-1"
            >
              <span className="text-xs">{currentLangMeta.flag}</span>
              <span className="text-[11px] font-bold text-[#D4AF37]">
                {currentLangMeta.nativeName}
              </span>
            </button>
            {/* Quick Instagram & YouTube on Mobile Header */}
            <a
              href={STUDIO_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-[#E1306C]"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={STUDIO_LINKS.YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-[#FF0000]"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              href={STUDIO_LINKS.WHATSAPP_DM}
              target="_blank"
              rel="noopener noreferrer"
              id="header-mobile-wa-quick"
              aria-label="WhatsApp Studio DM"
              className="p-2 rounded-full bg-[#D4AF37] text-black font-bold text-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white focus:outline-none ml-1"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  activeNav === item.id
                    ? 'text-[#D4AF37] bg-white/5 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {activeNav === item.id && <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />}
              </a>
            ))}

            {/* Language Selection Grid in Drawer */}
            <div className="pt-2 pb-1">
              <div className="text-[10px] uppercase font-bold text-neutral-400 mb-2 flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.nav.langLabel}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={`drawer-lang-${lang.code}`}
                    onClick={() => {
                      setLanguage(lang.code as SupportedLanguage);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                      language === lang.code
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </div>
                    {language === lang.code && <Check className="w-3 h-3 text-[#D4AF37]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Media Links in Drawer */}
            <div className="pt-3 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2.5">
                {t.nav.connectSocial}
              </span>
              <div className="grid grid-cols-4 gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={`drawer-${item.id}`}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1 text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[9px] font-english">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STUDIO_LINKS.WHATSAPP_DM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                id="drawer-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#D4AF37] text-black font-bold text-sm tracking-wide shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>{t.packages.bottomCardBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

