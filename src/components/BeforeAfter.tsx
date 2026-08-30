import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Sliders, Sparkles, AlertCircle } from 'lucide-react';
import { STUDIO_LINKS } from '../constants/links';
import { useLanguage } from '../context/LanguageContext';

export const BeforeAfter: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'AFTER' | 'BEFORE'>('AFTER');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(12);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const rawAudioSrc = '/audio/ei-sundor.wav';
  const mixedAudioSrc = '/audio/MIX.mp3.mpeg';
  const currentAudioSrc = activeTab === 'AFTER' ? mixedAudioSrc : rawAudioSrc;

  // Toggle playback
  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(true);
        });
      }
    }
  };

  const handleTabSwitch = (mode: 'BEFORE' | 'AFTER') => {
    if (mode === activeTab) return;
    const wasPlaying = isPlaying;
    if (audioRef.current) audioRef.current.pause();
    setActiveTab(mode);
    if (wasPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.currentTime = currentTime;
          audioRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }, 50);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (timeInSec: number) => {
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `0${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Generate waveform bars
  const rawWaveBars = [
    12, 18, 45, 15, 20, 65, 30, 15, 75, 40, 20, 85, 30, 25, 90, 50, 25, 80, 45, 20, 70, 30, 15, 60,
    35, 20, 75, 50, 30, 95, 40, 20, 65, 35, 18, 55, 30, 20, 70, 45, 22, 60, 30, 15, 40, 25, 18, 12
  ];

  const mixedWaveBars = [
    25, 35, 55, 48, 52, 70, 68, 62, 80, 75, 72, 88, 82, 78, 92, 86, 80, 85, 82, 75, 78, 72, 68, 74,
    70, 66, 82, 80, 76, 94, 88, 78, 80, 74, 68, 72, 66, 62, 78, 74, 68, 70, 62, 55, 48, 40, 32, 22
  ];

  const beforeLabel = t.beforeAfter.beforeBtn || 'BEFORE (Raw Vocal)';
  const afterLabel = t.beforeAfter.afterBtn || 'AFTER (Studio Mixed)';
  const dragPrompt = t.beforeAfter.dragHint || 'Drag slider to compare';
  const interactiveNote = t.beforeAfter.previewNotice || 'Audio sample coming soon (Interactive Preview UI)';
  const sampleDesc = t.beforeAfter.sampleNotice || 'Audio trailer sample is updating shortly';
  const beforePointsTitle = t.beforeAfter.rawListTitle || 'Raw Vocal (BEFORE)';
  const afterPointsTitle = t.beforeAfter.mixedListTitle || 'Studio Mixed Vocal (AFTER)';
  const ctaBtn = t.beforeAfter.ctaBtn || 'Get Studio Quality →';

  const beforePoints = [
    t.beforeAfter.rawList1 || '• Background noise and room reverberation present',
    t.beforeAfter.rawList2 || '• Pitch inconsistencies and frequency imbalances',
    t.beforeAfter.rawList3 || '• Vocals sit detached and do not blend with music',
  ];

  const afterPoints = [
    t.beforeAfter.mixedList1 || '• Professional spectral noise reduction & pitch tuning',
    t.beforeAfter.mixedList2 || '• Warm analog saturation and dynamic loudness balance',
    t.beforeAfter.mixedList3 || '• Radio & streaming platform ready crystal clear sound',
  ];

  return (
    <section id="before-after" className="relative py-24 bg-[#0D0D11] border-t border-white/5 overflow-hidden">
      {/* Background Studio Ambience */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#7C3AED]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#D4AF37]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-english uppercase tracking-widest text-[#D4AF37] mb-3">
            <span>{t.beforeAfter.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {t.beforeAfter.title}
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-medium leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Audio Comparison Studio Console Unit */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white/5 p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          
          {/* Hidden HTML5 Audio Element */}
          <audio
            ref={audioRef}
            src={currentAudioSrc}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            onLoadedMetadata={handleTimeUpdate}
            preload="metadata"
          />

          {/* Top Console Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            {/* Direct Switch Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/60 border border-white/10">
              <button
                onClick={() => handleTabSwitch('BEFORE')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'BEFORE'
                    ? 'bg-neutral-800 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {beforeLabel}
              </button>
              <button
                onClick={() => handleTabSwitch('AFTER')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'AFTER'
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {afterLabel}
              </button>
            </div>

            {/* Indicator Label */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs">
              <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{activeTab === 'AFTER' ? 'MIX.mp3.mpeg (Studio Master)' : 'ei sundor.wav (Raw Vocal)'}</span>
            </div>
          </div>

          {/* Interactive Visual Waveform Dual-Layer Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 px-1">
              <span className="flex items-center gap-1.5 text-white/40 font-bold uppercase tracking-widest text-[10px]">
                <span className="w-2 h-2 rounded-full bg-neutral-500" />
                {beforeLabel}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 italic hidden sm:inline">
                {dragPrompt}
              </span>
              <span className="flex items-center gap-1.5 text-[#D4AF37] font-bold uppercase tracking-widest text-[10px]">
                {afterLabel}
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              </span>
            </div>

            {/* Draggable Comparison Waveform Box */}
            <div
              ref={containerRef}
              onMouseMove={(e) => e.buttons === 1 && handleSliderMove(e)}
              onClick={handleSliderMove}
              onTouchMove={handleSliderMove}
              className="relative w-full h-44 sm:h-52 bg-black/70 rounded-2xl border border-white/10 overflow-hidden cursor-ew-resize select-none"
            >
              {/* Background: RAW VOCAL WAVEFORM (Full Width) */}
              <div className="absolute inset-0 flex items-center justify-around px-4 sm:px-8 opacity-35 bg-[#101014]">
                {rawWaveBars.map((val, idx) => (
                  <div
                    key={`raw-${idx}`}
                    className="w-1 sm:w-1.5 bg-neutral-400 rounded-full transition-all"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>

              {/* Foreground: STUDIO MIXED WAVEFORM (Clipped by Slider) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-r from-[#171324] to-[#1F1933] border-r-2 border-[#7C3AED] shadow-[5px_0_20px_rgba(124,58,237,0.4)]"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="absolute inset-y-0 left-0 flex items-center justify-around px-4 sm:px-8"
                  style={{ width: containerRef.current?.clientWidth || '100%' }}
                >
                  {mixedWaveBars.map((val, idx) => (
                    <div
                      key={`mix-${idx}`}
                      className="w-1 sm:w-1.5 rounded-full transition-all bg-gradient-to-t from-[#7C3AED] via-[#A855F7] to-[#D4AF37]"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>

                {/* Left Tag */}
                <div className="absolute top-3 left-4 px-2.5 py-1 rounded-full bg-[#7C3AED]/40 border border-[#7C3AED]/50 text-white text-[10px] font-bold uppercase tracking-wider">
                  {afterLabel}
                </div>
              </div>

              {/* Right Tag */}
              <div className="absolute top-3 right-4 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-neutral-300 text-[10px] font-bold uppercase tracking-wider">
                {beforeLabel}
              </div>

              {/* Slider Handle Divider Line */}
              <div
                className="absolute inset-y-0 pointer-events-none flex items-center justify-center -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg border-2 border-[#7C3AED] cursor-ew-resize">
                  <Sliders className="w-4 h-4 text-[#7C3AED]" />
                </div>
              </div>
            </div>
          </div>

          {/* Player Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
              {/* Play Button Toggle */}
              <button
                onClick={togglePlay}
                id="before-after-play-btn"
                className="w-11 h-11 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-center shadow-lg shadow-[#7C3AED]/25 transition-transform hover:scale-105 active:scale-95 shrink-0"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-white" />
                ) : (
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                )}
              </button>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {activeTab === 'AFTER' ? afterLabel : beforeLabel}
                  </span>
                  <span className="text-[10px] font-mono text-[#D4AF37]">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400">
                  {activeTab === 'AFTER' ? 'Playing Studio Mixed (MIX.mp3.mpeg)' : 'Playing Raw Vocal (ei sundor.wav)'}
                </span>
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Action */}
            <a
              href={STUDIO_LINKS.WHATSAPP_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black text-xs font-bold transition-all shadow-md"
            >
              {ctaBtn}
            </a>
          </div>

          {/* Transformation Feature Comparison Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="font-bold text-neutral-300 text-xs uppercase tracking-wider">
                {beforePointsTitle}
              </div>
              <ul className="space-y-1.5 text-neutral-400 text-xs">
                {beforePoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#D4AF37]/10 border border-[#D4AF37]/20 space-y-2">
              <div className="font-bold text-[#F3E5AB] text-xs uppercase tracking-wider flex items-center justify-between">
                <span>{afterPointsTitle}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
              <ul className="space-y-1.5 text-neutral-200 text-xs">
                {afterPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

