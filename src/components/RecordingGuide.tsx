import React from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { Youtube, Smartphone, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RecordingGuide: React.FC = () => {
  const { t } = useLanguage();

  const tips = [
    {
      title: t.recordingGuide.tip1Title,
      desc: t.recordingGuide.tip1Desc,
    },
    {
      title: t.recordingGuide.tip2Title,
      desc: t.recordingGuide.tip2Desc,
    },
    {
      title: t.recordingGuide.tip3Title,
      desc: t.recordingGuide.tip3Desc,
    },
  ];

  return (
    <section id="recording-guide" className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#E11D48]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#7C3AED]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-english uppercase tracking-widest text-[#D4AF37] mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.recordingGuide.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            {t.recordingGuide.title}
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-medium">
            {t.recordingGuide.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Premium Video Presentation Card */}
          <div className="lg:col-span-7">
            <a
              href={STUDIO_LINKS.RECORDING_VIDEO}
              target="_blank"
              rel="noopener noreferrer"
              id="guide-video-card"
              className="group block relative rounded-3xl overflow-hidden bg-white/5 border border-white/15 hover:border-white/25 shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Studio Thumbnail Graphic Background */}
              <div className="relative aspect-video w-full bg-gradient-to-tr from-[#160E18] via-[#241320] to-[#0E0E12] flex items-center justify-center overflow-hidden">
                
                {/* Audio waves visual pattern */}
                <div className="absolute inset-0 opacity-20 flex items-center justify-center gap-1">
                  {[30, 60, 45, 80, 95, 60, 40, 85, 100, 75, 50, 65, 80, 40, 30].map((h, i) => (
                    <div key={i} className="w-2 bg-[#E11D48] rounded-full" style={{ height: `${h}%` }} />
                  ))}
                </div>

                {/* Big Center Play Button */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#E11D48] group-hover:bg-[#FF0000] text-white flex items-center justify-center shadow-lg shadow-[#E11D48]/40 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>

                {/* Video Badges */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-semibold flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-[#FF0000]" />
                  <span>{t.recordingGuide.videoTag}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <span className="font-semibold">{t.recordingGuide.videoTitle}</span>
                  <span className="font-mono text-[#D4AF37]">{t.recordingGuide.watchFree}</span>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-neutral-300">{t.recordingGuide.watchOnYoutube}</span>
                <span className="font-bold text-xs text-[#E11D48] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  {t.recordingGuide.watchBtn}
                </span>
              </div>
            </a>
          </div>

          {/* Right: Quick Action Points & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Tips List */}
            <div className="space-y-3">
              {tips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">
                        {tip.title}
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              {/* Primary CTA */}
              <a
                href={STUDIO_LINKS.RECORDING_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                id="guide-primary-video-cta"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#E11D48] hover:bg-[#FF0000] text-white font-bold text-base shadow-lg shadow-[#E11D48]/30 transition-all hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                <span>{t.recordingGuide.watchBtn}</span>
              </a>

              {/* Secondary CTA */}
              <a
                href={STUDIO_LINKS.YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                id="guide-channel-sub-cta"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 font-semibold text-sm transition-all"
              >
                <span>{t.recordingGuide.subChannel}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


