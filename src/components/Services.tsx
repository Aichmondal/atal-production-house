import React from 'react';
import { Mic2, SlidersHorizontal, Headphones, Gift, ArrowRight } from 'lucide-react';
import { STUDIO_LINKS } from '../constants/links';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'srv-music-prod',
      icon: Mic2,
      title: 'Music Production',
      titleBn: 'মিউজিক প্রোডাকশন',
      description: 'Original songs, cover songs and custom music production.',
      descriptionBn: 'অরিজিনাল গান, কভার ট্র্যাক এবং কাস্টম মিউজিক অ্যারেঞ্জমেন্ট।',
      tag: 'Original & Covers',
      glowColor: 'hover:border-[#D4AF37]/50',
      iconBg: 'bg-[#D4AF37]/10 text-[#D4AF37]',
      link: '#packages'
    },
    {
      id: 'srv-mixing-prod',
      icon: SlidersHorizontal,
      title: 'Mixing & Production',
      titleBn: 'মিক্সিং ও প্রোডাকশন',
      description: 'Professional mixing with a polished studio finish.',
      descriptionBn: 'ভোকাল টিউনিং, কম্প্রেশন ও হাই-এন্ড স্টুডিও সাউন্ড ব্যালান্স।',
      tag: 'Studio Finish',
      glowColor: 'hover:border-[#7C3AED]/50',
      iconBg: 'bg-[#7C3AED]/10 text-[#A855F7]',
      link: '#packages'
    },
    {
      id: 'srv-reels',
      icon: Headphones,
      title: 'Reels Songs',
      titleBn: 'রিলস মিউজিক',
      description: 'Short-form music production for Instagram / YouTube Reels.',
      descriptionBn: 'ইনস্টাগ্রাম ও ইউটিউব রিলসের জন্য ১:০০ - ১:৩০ মিনিটের পারফেক্ট ট্র্যাক।',
      tag: '1:00 – 1:30 min',
      glowColor: 'hover:border-cyan-500/40',
      iconBg: 'bg-cyan-500/10 text-cyan-400',
      link: '#packages'
    },
    {
      id: 'srv-free-challenge',
      icon: Gift,
      title: 'Free Mixing Challenge',
      titleBn: 'ফ্রি মিক্সিং চ্যালেঞ্জ',
      description: 'Followers can participate in our occasional Free Mixing Challenge and win completely free mixing.',
      descriptionBn: 'আমাদের ফলোয়ারদের জন্য মাঝে মাঝে ফ্রি মিক্সিং চ্যালেঞ্জ আয়োজন করা হয়।',
      tag: 'Occasional Winner',
      glowColor: 'hover:border-amber-400/50',
      iconBg: 'bg-amber-400/10 text-amber-300',
      link: '#free-mixing'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0A0A0A] border-t border-white/5">
      {/* Background Subtle Ambience */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#7C3AED]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-english uppercase tracking-widest text-[#D4AF37] mb-3">
            <span>01 — OUR SERVICES</span>
          </div>
          <h2 className="font-bengali text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4">
            আমাদের স্টুডিও সার্ভিসসমূহ
          </h2>
          <p className="font-bengali text-neutral-400 text-base sm:text-lg">
            হাই-কোয়ালিটি অডিও প্রোডাকশন ও ক্রাফটেড সাউন্ড ইঞ্জিনিয়ারিং প্রতিটি ট্র্যাকে।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`group relative rounded-3xl bg-white/5 p-6 sm:p-7 border border-white/10 transition-all duration-300 flex flex-col justify-between hover:border-white/25 hover:bg-white/[0.08] hover:-translate-y-1.5 hover:shadow-2xl`}
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.iconBg} transition-transform group-hover:scale-110 shadow-inner border border-white/5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-english font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-english font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-bengali text-neutral-400 mb-3 font-medium">
                    {service.titleBn}
                  </div>

                  {/* Description */}
                  <p className="font-english text-sm text-neutral-300 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <p className="font-bengali text-xs text-neutral-400 leading-relaxed mb-6">
                    {service.descriptionBn}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-english font-semibold text-[#D4AF37] hover:text-[#F3E5AB] group-hover:translate-x-1 transition-all pt-3 border-t border-white/5"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Quick Help Banner under Services */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#141419] via-[#1a1824] to-[#141419] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0 hidden sm:block" />
            <p className="font-bengali text-sm sm:text-base text-neutral-200">
              আপনার প্রজেক্টের সঠিক বাজেট ও প্যাকেজ বেছে নিতে কোনো দ্বিধা থাকলে সরাসরি WhatsApp-এ বার্তা দিন।
            </p>
          </div>
          <a
            href={STUDIO_LINKS.WHATSAPP_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-english text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
          >
            <span>Ask on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
