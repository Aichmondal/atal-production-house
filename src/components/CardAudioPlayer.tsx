import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Sparkles, Volume2, ExternalLink } from 'lucide-react';
import { STUDIO_LINKS } from '../constants/links';

interface CardAudioPlayerProps {
  cardId: string;
  activePlayerId: string | null;
  onPlayStateChange: (id: string | null) => void;
  rawAudioSrc?: string;
  mixedAudioSrc?: string;
  rawDriveUrl?: string;
  mixedDriveUrl?: string;
}

export const CardAudioPlayer: React.FC<CardAudioPlayerProps> = ({
  cardId,
  activePlayerId,
  onPlayStateChange,
  rawAudioSrc = '/audio/raw_vocal.mp3',
  mixedAudioSrc = '/audio/mixed_vocal.mp3',
  rawDriveUrl = STUDIO_LINKS.RAW_VOCAL_GDRIVE,
  mixedDriveUrl = STUDIO_LINKS.MIXED_VOCAL_GDRIVE,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<'BEFORE' | 'AFTER'>('AFTER');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(30);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isCurrentCardActive = activePlayerId === `${cardId}-${selectedTrack}`;
  const isPlaying = isCurrentCardActive;

  const currentAudioSrc = selectedTrack === 'BEFORE' ? rawAudioSrc : mixedAudioSrc;
  const currentDriveUrl = selectedTrack === 'BEFORE' ? rawDriveUrl : mixedDriveUrl;

  // Handle global audio synchronization
  useEffect(() => {
    if (!isCurrentCardActive && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isCurrentCardActive]);

  // When track mode switches (BEFORE vs AFTER)
  const handleTrackChange = (mode: 'BEFORE' | 'AFTER') => {
    if (mode === selectedTrack) return;
    const wasPlaying = isPlaying;
    
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setSelectedTrack(mode);

    if (wasPlaying) {
      setTimeout(() => {
        onPlayStateChange(`${cardId}-${mode}`);
        if (audioRef.current) {
          audioRef.current.currentTime = currentTime;
          audioRef.current.play().catch(() => {});
        }
      }, 50);
    } else {
      onPlayStateChange(null);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      onPlayStateChange(null);
    } else {
      onPlayStateChange(`${cardId}-${selectedTrack}`);
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log('Audio playback initialized:', err);
        });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration) && isFinite(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleEnded = () => {
    onPlayStateChange(null);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (timeInSec: number) => {
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `0${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="my-4 p-3 rounded-2xl bg-black/75 border border-white/10 shadow-inner">
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={currentAudioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={handleTimeUpdate}
        preload="metadata"
      />

      {/* Header: Track Selection Tabs (Before / After) */}
      <div className="flex items-center justify-between gap-1 mb-2.5">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/90 border border-white/10 w-full">
          <button
            type="button"
            onClick={() => handleTrackChange('BEFORE')}
            className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${
              selectedTrack === 'BEFORE'
                ? 'bg-neutral-800 text-white shadow-sm border border-white/10'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedTrack === 'BEFORE' ? 'bg-amber-400' : 'bg-neutral-600'}`} />
            <span>Raw Vocal (Before)</span>
          </button>

          <button
            type="button"
            onClick={() => handleTrackChange('AFTER')}
            className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
              selectedTrack === 'AFTER'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black shadow-md'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sparkles className={`w-3 h-3 ${selectedTrack === 'AFTER' ? 'text-black' : 'text-[#D4AF37]'}`} />
            <span>Studio Mixed (After)</span>
          </button>
        </div>
      </div>

      {/* Player Controls & Waveform */}
      <div className="flex items-center gap-2.5 bg-neutral-950/80 p-2.5 rounded-xl border border-white/5">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md cursor-pointer ${
            selectedTrack === 'AFTER'
              ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[#7C3AED]/30'
              : 'bg-neutral-700 hover:bg-neutral-600 text-white shadow-black/40'
          }`}
          aria-label={isPlaying ? 'Pause sample' : 'Play sample'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Audio Track Progress & Animation Wave */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-[10px] mb-1">
            <span className="font-mono text-neutral-300 font-medium">
              {formatTime(currentTime)}
            </span>
            <div className="flex items-center gap-1.5">
              <span className={`text-[9px] uppercase font-bold tracking-wider ${
                selectedTrack === 'AFTER' ? 'text-[#D4AF37]' : 'text-neutral-400'
              }`}>
                {selectedTrack === 'AFTER' ? 'Mixed Vocal' : 'Raw Vocal'}
              </span>

              {/* Google Drive Link for transparency */}
              <a
                href={currentDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View original Google Drive file"
                className="text-neutral-500 hover:text-white transition-colors flex items-center"
              >
                <ExternalLink className="w-2.5 h-2.5" />
              </a>

              {isPlaying && (
                <div className="flex items-center gap-0.5 ml-0.5">
                  <span className="w-1 h-2 bg-[#D4AF37] animate-pulse rounded-full" />
                  <span className="w-1 h-3.5 bg-[#7C3AED] animate-pulse delay-75 rounded-full" />
                  <span className="w-1 h-1.5 bg-[#D4AF37] animate-pulse delay-150 rounded-full" />
                </div>
              )}
            </div>
            <span className="font-mono text-neutral-500">
              {formatTime(duration)}
            </span>
          </div>

          {/* Interactive Progress Slider */}
          <div className="relative flex items-center">
            <input
              type="range"
              min={0}
              max={duration || 30}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
