"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "var(--theme-surface-hover)",
  border: "1px solid var(--theme-divider)",
  borderRadius: "10px",
  padding: "14px 16px",
  fontFamily: '"PP Neue Machina", Arial, sans-serif',
  fontSize: "14px",
  fontWeight: 300,
  color: "var(--theme-text)",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  fontFamily: '"PP Neue Machina", Arial, sans-serif',
  fontSize: "11px",
  fontWeight: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "var(--theme-muted)",
  display: "block",
  marginBottom: "8px",
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const reset = () => {
    setName(""); setEmail(""); setSubject(""); setMessage(""); setStatus("idle");
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(6px)",
              zIndex: 9998,
            }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "24px",
              pointerEvents: "none",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                pointerEvents: "all",
                backgroundColor: "var(--theme-bg)",
                border: "1px solid var(--theme-divider)",
                borderRadius: "20px",
                padding: "clamp(28px, 4vw, 48px)",
                width: "100%",
                maxWidth: "520px",
                position: "relative",
              }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "none",
                  border: "1px solid var(--theme-divider)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--theme-muted)",
                  fontSize: "16px",
                  lineHeight: 1,
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                ×
              </button>

              {status === "success" ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: "center", padding: "24px 0" }}
                >
                  <p style={{
                    fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    color: "var(--theme-text)",
                    margin: "0 0 12px",
                  }}>
                    Message sent!
                  </p>
                  <p style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "var(--theme-muted)",
                    margin: "0 0 32px",
                  }}>
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={handleClose}
                    style={{
                      fontFamily: '"PP Neue Machina", Arial, sans-serif',
                      fontSize: "12px",
                      fontWeight: 400,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--theme-accent-text)",
                      backgroundColor: "var(--theme-accent)",
                      border: "none",
                      borderRadius: "999px",
                      padding: "12px 28px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit}>
                  <p style={{
                    fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                    fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                    color: "var(--theme-text)",
                    margin: "0 0 28px",
                    paddingRight: "40px",
                  }}>
                    Say Hello
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Name + Email row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label style={labelStyle}>Name</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label style={labelStyle}>Subject <span style={{ color: "var(--theme-accent)" }}>*</span></label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        style={inputStyle}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Message <span style={{ color: "var(--theme-accent)" }}>*</span></label>
                      <textarea
                        placeholder="Tell me about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <p style={{
                        fontFamily: '"PP Neue Machina", Arial, sans-serif',
                        fontSize: "12px",
                        color: "#e76e52",
                        margin: 0,
                      }}>
                        Something went wrong — try emailing directly at jon@ezell.guru
                      </p>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                      whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                      style={{
                        fontFamily: '"PP Neue Machina", Arial, sans-serif',
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--theme-accent-text)",
                        backgroundColor: status === "sending" ? "var(--theme-muted)" : "var(--theme-accent)",
                        border: "none",
                        borderRadius: "999px",
                        padding: "14px 32px",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        transition: "background-color 0.2s",
                        alignSelf: "flex-start",
                      }}
                    >
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
