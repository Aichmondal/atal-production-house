import React, { useState, useEffect } from 'react';
import { STUDIO_LINKS } from '../constants/links';
import { Youtube, Smartphone, ArrowRight, Play, CheckCircle2, RotateCcw, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RecordingGuide: React.FC = () => {
  const { t } = useLanguage();
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [currentOrigin, setCurrentOrigin] = useState<string>('');
  const [hasLoadError, setHasLoadError] = useState<boolean>(false);

  const YOUTUBE_VIDEO_ID = 'LUUiAE6qHNw';
  const YOUTUBE_WATCH_URL = STUDIO_LINKS.RECORDING_VIDEO || `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;

  // Dynamically derive current origin on client side
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location?.origin) {
      setCurrentOrigin(window.location.origin);
    }
  }, []);

  // Build the official YouTube embed URL with dynamic origin & parameters
  const buildEmbedUrl = (videoId: string, origin: string): string => {
    if (!videoId) return '';
    const params = new URLSearchParams({
      autoplay: '1',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      enablejsapi: '1',
    });

    if (origin) {
      params.set('origin', origin);
      params.set('widget_referrer', origin);
    }

    return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params.toString()}`;
  };

  const embedUrl = buildEmbedUrl(YOUTUBE_VIDEO_ID, currentOrigin);

  const handleStartPlay = () => {
    setHasLoadError(false);
    setIsPlayingVideo(true);
  };

  const handleResetPlay = () => {
    setIsPlayingVideo(false);
    setHasLoadError(false);
  };

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
    <section id="recording-guide" className="relative py-10 sm:py-16 md:py-20 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#E11D48]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#7C3AED]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] sm:text-xs font-english uppercase tracking-widest text-[#D4AF37] mb-2 sm:mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.recordingGuide.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3">
            {t.recordingGuide.title}
          </h2>
          <p className="text-sm sm:text-xl text-neutral-300 font-medium">
            {t.recordingGuide.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Premium Video Presentation Card with Direct In-Page Playback */}
          <div className="lg:col-span-7">
            <div
              id="guide-video-card"
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 border border-white/15 hover:border-white/25 shadow-2xl transition-all duration-300"
            >
              {/* Video Player Container / Thumbnail */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {isPlayingVideo && YOUTUBE_VIDEO_ID && !hasLoadError ? (
                  <iframe
                    src={embedUrl}
                    title="Mobile Vocal Recording Guide - Mix with AD"
                    className="w-full h-full border-0 absolute inset-0 z-20"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onError={() => setHasLoadError(true)}
                  />
                ) : isPlayingVideo && hasLoadError ? (
                  /* Fallback when video embed fails or cannot load */
                  <div className="absolute inset-0 z-20 bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
                    <Youtube className="w-12 h-12 text-[#FF0000] mb-3" />
                    <p className="text-white font-bold text-base mb-1">
                      {t.recordingGuide.videoTitle || 'Mobile Vocal Recording Guide'}
                    </p>
                    <p className="text-xs text-neutral-400 max-w-sm mb-4">
                      {t.recordingGuide.watchOnYoutube}
                    </p>
                    <a
                      href={YOUTUBE_WATCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E11D48] hover:bg-[#FF0000] text-white text-xs font-bold transition-all shadow-lg hover:scale-105"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleStartPlay}
                    className="w-full h-full relative flex items-center justify-center text-left cursor-pointer group/thumb focus:outline-none"
                    aria-label="Play recording tutorial video"
                  >
                    {/* YouTube High-Res Thumbnail Image Background */}
                    <img
                      src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                      alt="Mobile Recording Guide Video Thumbnail"
                      referrerPolicy="no-referrer"
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
                
                <div className="flex items-center gap-3">
                  {isPlayingVideo && (
                    <a
                      href={YOUTUBE_WATCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open on YouTube"
                      className="font-semibold text-xs text-[#D4AF37] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {isPlayingVideo ? (
                    <button
                      type="button"
                      onClick={handleResetPlay}
                      className="font-bold text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset View</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleStartPlay}
                      className="font-bold text-xs text-[#E11D48] hover:text-[#FF0000] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{t.recordingGuide.watchBtn}</span>
                    </button>
                  )}
                </div>
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
                  handleStartPlay();
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


