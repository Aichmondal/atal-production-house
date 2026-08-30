import React, { useState } from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { Youtube, Smartphone, ArrowRight, Play, CheckCircle2, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RecordingGuide: React.FC = () => {
  const { t } = useLanguage();
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  const YOUTUBE_VIDEO_ID = 'LUUiAE6qHNw';
  const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

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
          
          {/* Left: Premium Video Presentation Card with Direct In-Page Playback */}
          <div className="lg:col-span-7">
            <div
              id="guide-video-card"
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/15 hover:border-white/25 shadow-2xl transition-all duration-300"
            >
              {/* Video Player Container / Thumbnail */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {isPlayingVideo ? (
                  <iframe
                    src={YOUTUBE_EMBED_URL}
                    title="Mobile Vocal Recording Guide - Mix with AD"
                    className="w-full h-full border-0 absolute inset-0 z-20"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-full h-full relative flex items-center justify-center text-left cursor-pointer group/thumb focus:outline-none"
                    aria-label="Play recording tutorial video"
                  >
                    {/* YouTube High-Res Thumbnail Image Background */}
                    <img
                      src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                      alt="Mobile Recording Guide Video Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/thumb:opacity-95 group-hover/thumb:scale-105 transition-all duration-500"
                      onError={(e) => {
                        // Fallback to hqdefault if maxres is unavailable
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
                      }}
                    />

                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                    {/* Big Center Animated Play Button */}
                    <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E11D48] group-hover/thumb:bg-[#FF0000] text-white flex items-center justify-center shadow-2xl shadow-[#E11D48]/50 group-hover/thumb:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                    </div>

                    {/* Top YouTube Badge */}
                    <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <Youtube className="w-4 h-4 text-[#FF0000]" />
                      <span>{t.recordingGuide.videoTag}</span>
                    </div>

                    {/* Bottom Info Bar Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white bg-black/75 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-lg">
                      <span className="font-semibold truncate pr-2">{t.recordingGuide.videoTitle}</span>
                      <span className="font-mono text-[#D4AF37] shrink-0">{t.recordingGuide.watchFree}</span>
                    </div>
                  </button>
                )}
              </div>

              {/* Card Footer Bar */}
              <div className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-neutral-300">
                  {isPlayingVideo ? 'Playing directly inside page' : t.recordingGuide.watchOnYoutube}
                </span>
                
                {isPlayingVideo ? (
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(false)}
                    className="font-bold text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset View</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(true)}
                    className="font-bold text-xs text-[#E11D48] hover:text-[#FF0000] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t.recordingGuide.watchBtn}</span>
                  </button>
                )}
              </div>
            </div>
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
              {/* Primary Direct Play CTA */}
              <button
                type="button"
                onClick={() => {
                  setIsPlayingVideo(true);
                  // Scroll smoothly to the video card if needed
                  const el = document.getElementById('guide-video-card');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                id="guide-primary-video-cta"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#E11D48] hover:bg-[#FF0000] text-white font-bold text-base shadow-lg shadow-[#E11D48]/30 transition-all hover:scale-105 cursor-pointer"
              >
                <Youtube className="w-5 h-5" />
                <span>{isPlayingVideo ? 'Playing Tutorial Video' : t.recordingGuide.watchBtn}</span>
              </button>

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


