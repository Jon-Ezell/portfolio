"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "@/components/ui/ContactModal";

const caseStudies = [
  {
    slug: "scoot",
    title: "Scoot",
    description: "Virtual event platform for enterprise engagement",
    thumb: "/scoot-laptop-phone.png",
  },
  {
    slug: "altr",
    title: "ALTR",
    description: "Database onboarding redesign — 7% → 60% activation",
    thumb: "/altrhero.png",
  },
  {
    slug: "deep-journey",
    title: "Deep Journey",
    description: "AI research tool for Chief Revenue Officers",
    thumb: "/deep-journey-laptop.png",
  },
  {
    slug: "zephyr",
    title: "Zephyr",
    description: "Biofeedback wristband and companion app",
    thumb: "/zephyr-phone-hero.png",
  },
];

const navLinkStyle: React.CSSProperties = {
  fontFamily: '"MD Nichrome", Verdana, sans-serif',
  fontSize: "clamp(9px, 1vw, 11px)",
  fontWeight: 300,
  letterSpacing: "0.4em",
  textDecoration: "none",
};

function handleAnchorClick(e: React.MouseEvent, anchor: string) {
  e.preventDefault();
  const el = document.getElementById(anchor);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="8" height="8"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      marginLeft: "0.35em",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 250ms ease",
      flexShrink: 0,
    }}
  >
    <polyline points="2,3 5,7 8,3" />
  </svg>
);

export default function Nav() {
  const [workOpen, setWorkOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    <nav
      ref={navRef}
      className="fixed z-50 left-1/2 -translate-x-1/2"
      style={{ top: "calc(5% - 15px)" }}
    >
      {/* Nav pill */}
      <ul
        className="global-nav-pill flex items-center h-9 px-0.5 rounded-[6px]"
        style={{ backgroundColor: "#070707e3" }}
      >
        {/* HOME */}
        <li>
          <Link
            href="/"
            className="global-nav-link flex items-center px-3 py-[6px] text-white/90 hover:bg-white/10 rounded-[4px] transition-colors duration-300"
            style={navLinkStyle}
          >
            HOME
          </Link>
        </li>

        {/* WORK — dropdown trigger */}
        <li>
          <button
            onClick={() => setWorkOpen((v) => !v)}
            className="global-nav-link flex items-center px-3 py-[6px] rounded-[4px] transition-colors duration-300"
            style={{
              ...navLinkStyle,
              color: workOpen ? "#ffffff" : "rgba(255,255,255,0.9)",
              background: workOpen ? "rgba(255,255,255,0.10)" : "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            WORK
            <ChevronIcon open={workOpen} />
          </button>
        </li>

        {/* ABOUT */}
        <li>
          <Link
            href="/about"
            className="global-nav-link flex items-center px-3 py-[6px] text-white/90 hover:bg-white/10 rounded-[4px] transition-colors duration-300"
            style={navLinkStyle}
          >
            ABOUT
          </Link>
        </li>

        {/* CONTACT */}
        <li>
          <button
            onClick={() => setContactOpen(true)}
            className="global-nav-link flex items-center px-3 py-[6px] text-white/90 hover:bg-white/10 rounded-[4px] transition-colors duration-300"
            style={{ ...navLinkStyle, background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.9)" }}
          >
            CONTACT
          </button>
        </li>
      </ul>

      {/*
        Dropdown — sibling of the ul, child of nav.
        Since nav is fixed + centered on the viewport, left:50% + translateX(-50%)
        here centers the dropdown on the viewport regardless of screen size.
        The outer div handles positioning; the inner motion.div handles animation.
      */}
      <AnimatePresence>
        {workOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(380px, calc(100vw - 1.5rem))",
              zIndex: 200,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: "#0e0e0ef5",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                padding: "0.375rem",
                boxShadow: "0 24px 48px rgba(0,0,0,0.6)",
              }}
            >
              {/* Case study list */}
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/${cs.slug}`}
                  onClick={() => setWorkOpen(false)}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="group flex items-center gap-3 rounded-[8px] p-3 transition-colors duration-200 hover:bg-white/[0.06]">
                    {/* Thumbnail */}
                    <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "1px solid rgba(255,255,255,0.08)",
                      backgroundColor: "#191919",
                    }}>
                      <Image
                        src={cs.thumb}
                        alt={cs.title}
                        width={104}
                        height={104}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>

                    {/* Text */}
                    <div style={{ minWidth: 0 }}>
                      <p style={{
                        fontFamily: '"PP Neue Machina", Arial, sans-serif',
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        marginBottom: "3px",
                        lineHeight: 1.2,
                      }}>
                        {cs.title}
                      </p>
                      <p style={{
                        fontFamily: '"PP Neue Machina", Arial, sans-serif',
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.45)",
                        margin: 0,
                        lineHeight: 1.4,
                      }}>
                        {cs.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Browse footer */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", margin: "0.375rem 0.375rem 0" }} />
              <Link
                href="/#work"
                onClick={(e) => { setWorkOpen(false); handleAnchorClick(e, "work"); }}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div className="flex items-center justify-between rounded-[8px] px-3 py-2.5 transition-colors duration-200 hover:bg-white/[0.06]">
                  <p style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--theme-accent, #e76e52)",
                    margin: 0,
                  }}>
                    Browse
                  </p>
                  <p style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "11px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                    margin: 0,
                  }}>
                    See all case studies →
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
