"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ── Numeric params ────────────────────────────────────────────────────────────
type NumericParams = {
  noiseAmp: number;
  noiseFreq: number;
  scale: number;
  noiseSpeed: number;
  autoRotateSpeed: number;
  parallaxStrength: number;
  mouseSensitivity: number;
  friction: number;
  pointSize: number;
  glowAmount: number;
  glowFalloff: number;
  xOffset: number;
};

type BlobColors = {
  colorCore: string;
  colorHighlight: string;
  colorRim: string;
};

// ── Defaults ─────────────────────────────────────────────────────────────────
const NUMERIC_DEFAULTS: NumericParams = {
  noiseAmp: 0.91,
  noiseFreq: 2.3,
  scale: 1.45,
  noiseSpeed: 0.46,
  autoRotateSpeed: 0.0006,
  parallaxStrength: 0.08,
  mouseSensitivity: 0.0007,
  friction: 0.99,
  pointSize: 0.2,
  glowAmount: 2.0,
  glowFalloff: 4.5,
  xOffset: 0,
};

// ── Page-theme → blob color mapping ──────────────────────────────────────────
// All hero backgrounds are dark — cream and midnight share the same dark hero bg.
// Keep colors desaturated and muted so the blob reads as background texture.
const PAGE_BLOB_COLORS: Record<string, BlobColors> = {
  cream:    { colorCore: '#ffae6b', colorHighlight: '#fb2718', colorRim: '#ffffff' },
  midnight: { colorCore: '#ffae6b', colorHighlight: '#fb2718', colorRim: '#ffffff' },
  ice:      { colorCore: '#ffffff', colorHighlight: '#ffffff', colorRim: '#ffffff' },
  forest:   { colorCore: '#17351f', colorHighlight: '#153520', colorRim: '#336644' },
  dusk:     { colorCore: '#5a428a', colorHighlight: '#251040', colorRim: '#604488' },
};
const DEFAULT_COLORS: BlobColors = { ...PAGE_BLOB_COLORS.cream };

// ── Slider definitions ────────────────────────────────────────────────────────
type SliderDef = { key: keyof NumericParams; label: string; min: number; max: number; step: number; dec: number };
const SLIDERS: SliderDef[] = [
  { key: "noiseAmp",         label: "Noise Amp",      min: 0,      max: 1,     step: 0.01,   dec: 2 },
  { key: "noiseFreq",        label: "Noise Freq",     min: 0.1,    max: 4,     step: 0.05,   dec: 2 },
  { key: "scale",            label: "Scale",          min: 0.2,    max: 2.5,   step: 0.05,   dec: 2 },
  { key: "noiseSpeed",       label: "Noise Speed",    min: 0,      max: 0.8,   step: 0.01,   dec: 2 },
  { key: "autoRotateSpeed",  label: "Auto Rotate",    min: 0,      max: 0.005, step: 0.0001, dec: 4 },
  { key: "parallaxStrength", label: "Mouse Influence",min: 0,      max: 1,     step: 0.01,   dec: 2 },
  { key: "mouseSensitivity", label: "Mouse Speed",    min: 0.0001, max: 0.01,  step: 0.0001, dec: 4 },
  { key: "friction",         label: "Coasting",       min: 0.80,   max: 0.99,  step: 0.01,   dec: 2 },
  { key: "pointSize",        label: "Point Size",     min: 0.1,    max: 20,    step: 0.1,    dec: 1 },
  { key: "glowAmount",       label: "Glow Amount",    min: 0,      max: 4,     step: 0.05,   dec: 2 },
  { key: "glowFalloff",      label: "Glow Falloff",   min: 1,      max: 20,    step: 0.25,   dec: 2 },
  { key: "xOffset",          label: "X Offset",       min: -0.5,   max: 0.5,   step: 0.01,   dec: 2 },
];

const SLIDER_SECTIONS: Record<string, (keyof NumericParams)[]> = {
  Shape:    ["noiseAmp", "noiseFreq", "scale"],
  Motion:   ["noiseSpeed", "autoRotateSpeed", "parallaxStrength", "mouseSensitivity", "friction"],
  Dots:     ["pointSize"],
  Glow:     ["glowAmount", "glowFalloff"],
  Position: ["xOffset"],
};

const THEME_NAMES = ["warm", "ember", "sunset", "plasma", "cool", "aurora", "ghost", "mono"];

// ── Styles ────────────────────────────────────────────────────────────────────
const labelStyle: React.CSSProperties = {
  fontSize: "10px", fontWeight: 300, color: "rgba(255,255,255,0.55)",
  whiteSpace: "nowrap", flexShrink: 0, width: "90px", fontFamily: "Arial, sans-serif",
};
const valStyle: React.CSSProperties = {
  fontSize: "9px", color: "rgba(255,255,255,0.35)", minWidth: "36px",
  textAlign: "right", fontVariantNumeric: "tabular-nums", fontFamily: "Arial, sans-serif",
};
const sectionLabelStyle: React.CSSProperties = {
  fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
  color: "#e76e52", margin: "1rem 0 0.5rem", paddingBottom: "0.3rem",
  borderBottom: "1px solid rgba(231,110,82,0.2)", fontFamily: "Arial, sans-serif",
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function DotBlobCanvas({
  theme = "warm",
  debug = false,
  fixed = false,
  opacity = 1,
  initialParams,
}: {
  theme?: string;
  debug?: boolean;
  fixed?: boolean;
  opacity?: number;
  initialParams?: Partial<NumericParams>;
}) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const setParamsRef  = useRef<((p: Record<string, string | number>) => void) | null>(null);
  const setThemeRef   = useRef<((name: string) => void) | null>(null);
  const [params, setParamsState]   = useState<NumericParams>(NUMERIC_DEFAULTS);
  const [colors, setColorsState]   = useState<BlobColors>(DEFAULT_COLORS);
  const [activeTheme, setActiveTheme] = useState(theme);
  const [copied, setCopied] = useState(false);

  // ── Init blob ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;
    let disposed = false;
    let disposeBlob: (() => void) | null = null;

    import("@/lib/dotBlobHero.js").then(({ initDotBlobHero }) => {
      if (disposed || !containerRef.current) return;
      const { dispose, setParams: sp, setTheme: st } = initDotBlobHero({
        container: containerRef.current,
        theme: activeTheme,
      });
      disposeBlob = dispose;
      setParamsRef.current = sp;
      setThemeRef.current  = st;

      // Apply page theme colors synchronously before first paint
      const pageTheme = document.documentElement.dataset.theme ?? "cream";
      const pageColors = PAGE_BLOB_COLORS[pageTheme] ?? PAGE_BLOB_COLORS.cream;
      sp(pageColors);
      setColorsState(pageColors);
      if (initialParams) sp(initialParams as Record<string, number>);
    });

    return () => {
      disposed = true;
      disposeBlob?.();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Watch page theme changes ────────────────────────────────────────────────
  useEffect(() => {
    const el = document.documentElement;
    const handle = () => {
      const pageTheme = el.dataset.theme ?? "cream";
      const pageColors = PAGE_BLOB_COLORS[pageTheme] ?? PAGE_BLOB_COLORS.cream;
      setColorsState(pageColors);
      setParamsRef.current?.(pageColors);
    };
    const observer = new MutationObserver(handle);
    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const handleParam = useCallback((key: keyof NumericParams, value: number) => {
    setParamsState(prev => ({ ...prev, [key]: value }));
    setParamsRef.current?.({ [key]: value });
  }, []);

  const handleColor = useCallback((key: keyof BlobColors, value: string) => {
    setColorsState(prev => ({ ...prev, [key]: value }));
    setParamsRef.current?.({ [key]: value });
  }, []);

  const handleTheme = useCallback((name: string) => {
    setActiveTheme(name);
    setThemeRef.current?.(name);
  }, []);

  const handleCopy = useCallback(() => {
    const cfg = { ...params, ...colors, theme: activeTheme };
    navigator.clipboard.writeText(JSON.stringify(cfg, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [params, colors, activeTheme]);

  return (
    <>
      <div
        ref={containerRef}
        style={{ position: fixed ? "fixed" : "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity }}
      />

      {debug && (
        <div style={{
          position: "fixed", top: "50%", right: "1.25rem", transform: "translateY(-50%)",
          zIndex: 1000, width: "232px", maxHeight: "92vh", overflowY: "auto",
          background: "rgba(10, 10, 14, 0.88)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px", padding: "1rem", backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)", pointerEvents: "auto",
          scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.12) transparent",
        }}>
          <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.9rem", fontFamily: "Arial, sans-serif" }}>
            Blob Lab
          </p>

          {/* ── Numeric sliders ── */}
          {Object.entries(SLIDER_SECTIONS).map(([section, keys]) => (
            <div key={section}>
              <p style={sectionLabelStyle}>{section}</p>
              {keys.map(key => {
                const def = SLIDERS.find(s => s.key === key)!;
                return (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.55rem" }}>
                    <label style={labelStyle}>{def.label}</label>
                    <input
                      type="range" min={def.min} max={def.max} step={def.step}
                      value={params[key]}
                      onChange={e => handleParam(key, parseFloat(e.target.value))}
                      style={{ flex: 1, WebkitAppearance: "none", height: "2px", background: "rgba(255,255,255,0.12)", borderRadius: "2px", outline: "none", cursor: "pointer" }}
                    />
                    <span style={valStyle}>{params[key].toFixed(def.dec)}</span>
                  </div>
                );
              })}
            </div>
          ))}

          {/* ── Color pickers ── */}
          <p style={sectionLabelStyle}>Colors</p>
          {(
            [
              { key: "colorCore"      as keyof BlobColors, label: "Core" },
              { key: "colorHighlight" as keyof BlobColors, label: "Highlight" },
              { key: "colorRim"       as keyof BlobColors, label: "Rim" },
            ] as const
          ).map(({ key, label }) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.55rem" }}>
              <label style={labelStyle}>{label}</label>
              <input
                type="color"
                value={colors[key]}
                onChange={e => handleColor(key, e.target.value)}
                style={{
                  width: "36px", height: "20px", cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px",
                  background: "transparent", padding: "1px", flexShrink: 0,
                }}
              />
              <span style={{ ...valStyle, fontSize: "8px", letterSpacing: "0.05em" }}>{colors[key]}</span>
            </div>
          ))}

          {/* ── Three.js theme buttons ── */}
          <p style={sectionLabelStyle}>JS Theme</p>
          <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
            {THEME_NAMES.map(name => (
              <button
                key={name}
                onClick={() => handleTheme(name)}
                style={{
                  padding: "0.3rem 0.5rem", fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "capitalize", borderRadius: "4px",
                  border: `1px solid ${activeTheme === name ? "#e76e52" : "rgba(255,255,255,0.12)"}`,
                  background: activeTheme === name ? "rgba(231,110,82,0.08)" : "transparent",
                  color: activeTheme === name ? "#e76e52" : "rgba(255,255,255,0.45)",
                  cursor: "pointer", fontFamily: "Arial, sans-serif",
                }}
              >
                {name}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            style={{
              width: "100%", marginTop: "1rem", padding: "0.45rem", fontSize: "9px",
              fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
              borderRadius: "6px",
              border: `1px solid ${copied ? "#29ea89" : "rgba(255,255,255,0.15)"}`,
              background: copied ? "rgba(41,234,137,0.07)" : "rgba(255,255,255,0.04)",
              color: copied ? "#29ea89" : "rgba(255,255,255,0.5)",
              cursor: "pointer", fontFamily: "Arial, sans-serif",
            }}
          >
            {copied ? "Copied!" : "Copy Config"}
          </button>
        </div>
      )}
    </>
  );
}
