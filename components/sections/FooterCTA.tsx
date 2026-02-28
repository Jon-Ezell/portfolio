"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ui/ContactModal";

interface FooterCTAProps {
  nextProject?: { href: string; label: string };
}

export default function FooterCTA({ nextProject }: FooterCTAProps = {}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    <section
      id="contact"
      style={{
        backgroundColor: "var(--theme-bg)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(32px, 4.5vw, 64px)",
      }}
    >
      {/* Main content row: headline left + circle right */}
      <div
        className="footer-cta-main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(24px, 5vw, 80px)",
          paddingBottom: "clamp(24px, 3vw, 48px)",
        }}
      >
        {/* Headline */}
        <motion.h2
          className="footer-cta-headline-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(2.4rem, 9vw, 9rem)",
            lineHeight: 0.92,
            color: "var(--theme-text)",
            margin: 0,
            flex: 1,
          }}
        >
          LET&apos;S MAKE
          <br />
          SOMETHING
          <br />
          THAT MATTERS.
        </motion.h2>

        {/* Orange circle CTA */}
        <motion.button
          onClick={() => setModalOpen(true)}
          className="footer-cta-circle"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.1, rotate: 12 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(180px, 18vw, 260px)",
            height: "clamp(180px, 18vw, 260px)",
            borderRadius: "50%",
            backgroundColor: "var(--theme-accent)",
            flexShrink: 0,
            marginLeft: "clamp(24px, 4vw, 60px)",
            cursor: "pointer",
            border: "none",
          }}
        >
          <p
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(18px, 2.2vw, 30px)",
              lineHeight: 1.2,
              color: "var(--theme-accent-text)",
              textAlign: "center",
              margin: 0,
            }}
          >
            TAP TO
            <br />
            SAY HELLO
          </p>
        </motion.button>
      </div>

      {/* Next project pill */}
      {nextProject && (
        <div style={{ padding: "0 clamp(24px, 5vw, 80px)", paddingBottom: "clamp(24px, 3vw, 48px)" }}>
          <motion.div
            initial="rest"
            whileHover="hovered"
            animate="rest"
            style={{ display: "inline-block" }}
          >
            <Link
              href={nextProject.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                border: "1px solid var(--theme-divider)",
                borderRadius: "100px",
                padding: "0.55rem 1.2rem 0.55rem 1rem",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <motion.span
                variants={{
                  rest: { color: "var(--theme-muted)", x: 0 },
                  hovered: { color: "var(--theme-accent)", x: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "clamp(10px, 0.9vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                }}
              >
                NEXT PROJECT
              </motion.span>
              <motion.span
                variants={{
                  rest: { x: 0, color: "var(--theme-accent)" },
                  hovered: { x: 5, color: "var(--theme-accent)" },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{ display: "block", lineHeight: 1, fontSize: "clamp(10px, 0.9vw, 13px)" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      )}

      {/* Bottom bar */}
      <div
        className="footer-bottom-bar"
        style={{
          padding: "0 clamp(24px, 5vw, 80px)",
          paddingBottom: "clamp(20px, 3vw, 36px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Contact links */}
        <div className="footer-contact-links" style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 28px)" }}>
          {[
            { label: "EMAIL", href: "mailto:jon@ezell.guru" },
            { label: "PHONE", href: "tel:5128530338" },
            { label: "LINKEDIN", href: "https://linkedin.com/in/jonathan-ezell" },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial="rest"
              whileHover="hovered"
              animate="rest"
              style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 1.2vw, 16px)" }}
            >
              <motion.a
                href={item.href}
                variants={{
                  rest: { x: 0 },
                  hovered: { color: "var(--theme-accent)", x: 5 },
                }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "clamp(10px, 1vw, 13px)",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  color: "var(--theme-text)",
                }}
              >
                {item.label}
              </motion.a>
              {/* Orange play arrow */}
              <motion.svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                variants={{
                  rest: { scale: 1, x: 0 },
                  hovered: { scale: 1.4, x: 5 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <path d="M0 0L10 6L0 12V0Z" style={{ fill: "var(--theme-accent)" }} />
              </motion.svg>
            </motion.div>
          ))}
        </div>

        {/* ae logo — bottom right */}
        <Image
          src="/ae-logo.png"
          alt="Jon Ezell"
          width={56}
          height={56}
          style={{ width: "clamp(40px, 4.5vw, 56px)", height: "auto", objectFit: "contain", filter: "var(--theme-logo-filter)" }}
        />
      </div>

      {/* Rule under links row — full width */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.2)" }} />

      {/* Legal footer */}
      <div
        style={{
          padding: "clamp(14px, 2vw, 22px) clamp(24px, 5vw, 80px)",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: '"PP Neue Machina", Arial, sans-serif',
            fontSize: "clamp(9px, 0.8vw, 11px)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--theme-muted)",
            margin: 0,
          }}
        >
          Designed &amp; built with love in Figma + Cursor with Claude Code
        </p>

        {/* Back to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial="rest"
          whileHover="hovered"
          animate="rest"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <motion.span
            variants={{
              rest: { y: 0 },
              hovered: { color: "var(--theme-accent)", y: -2 },
            }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(9px, 0.8vw, 11px)",
              fontWeight: 300,
              letterSpacing: "0.08em",
              display: "block",
              color: "var(--theme-muted)",
            }}
          >
            BACK TO TOP
          </motion.span>
          <motion.span
            variants={{
              rest: { y: 0 },
              hovered: { color: "var(--theme-accent)", y: -4 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ display: "block", lineHeight: 1, fontSize: "10px", color: "var(--theme-muted)" }}
          >
            ↑
          </motion.span>
        </motion.button>

        <p
          style={{
            fontFamily: '"PP Neue Machina", Arial, sans-serif',
            fontSize: "clamp(9px, 0.8vw, 11px)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--theme-muted)",
            margin: 0,
            textAlign: "right",
          }}
        >
          &copy; 2026 Jon Ezell. All rights reserved.
        </p>
      </div>
    </section>
    </>
  );
}
