"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function VideoPlayer({ src, className, style }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);

  // Autoplay when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Track playback progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!isScrubbing && video.duration) {
        setProgress(video.currentTime / video.duration);
      }
    };
    const onLoadedMetadata = () => setDuration(video.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [isScrubbing]);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      if (!isScrubbing) setControlsVisible(false);
    }, 2200);
  }, [isScrubbing]);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    showControls();
  }, [showControls]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    if (!isScrubbing) {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      setControlsVisible(false);
    }
  }, [isScrubbing]);

  const handleMouseMove = useCallback(() => {
    if (hovered) showControls();
  }, [hovered, showControls]);

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const seekFromEvent = useCallback((e: React.MouseEvent | MouseEvent) => {
    const video = videoRef.current;
    const scrubber = scrubberRef.current;
    if (!video || !scrubber || !video.duration) return;
    const rect = scrubber.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    video.currentTime = ratio * video.duration;
    setProgress(ratio);
  }, []);

  const handleScrubStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsScrubbing(true);
    seekFromEvent(e);

    const onMove = (ev: MouseEvent) => seekFromEvent(ev);
    const onUp = () => {
      setIsScrubbing(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [seekFromEvent]);

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const currentTime = duration * progress;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: "relative", borderRadius: "12px", overflow: "hidden", ...style }}
      className={className}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* Controls overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "2rem 1.25rem 1.25rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          opacity: controlsVisible ? 1 : 0,
          transition: "opacity 0.25s ease",
          pointerEvents: controlsVisible ? "auto" : "none",
        }}
      >
        {/* Scrubber track */}
        <div
          ref={scrubberRef}
          onMouseDown={handleScrubStart}
          style={{
            position: "relative",
            height: "20px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          role="slider"
          aria-label="Video progress"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Track bg */}
          <div style={{ position: "absolute", inset: "auto 0", height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.25)" }} />
          {/* Fill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              height: "3px",
              width: `${progress * 100}%`,
              borderRadius: "2px",
              backgroundColor: "#e76e52",
              transition: isScrubbing ? "none" : "width 0.1s linear",
            }}
          />
          {/* Thumb */}
          <div
            style={{
              position: "absolute",
              left: `${progress * 100}%`,
              transform: "translateX(-50%)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 0 2px rgba(0,0,0,0.4)",
              transition: isScrubbing ? "none" : "left 0.1s linear",
            }}
          />
        </div>

        {/* Bottom row: play/pause + time */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            style={{
              background: "none",
              border: "none",
              padding: "4px",
              cursor: "pointer",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>

          <span
            style={{
              fontFamily: '"PP Neue Machina", monospace',
              fontSize: "11px",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.04em",
              userSelect: "none",
            }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
