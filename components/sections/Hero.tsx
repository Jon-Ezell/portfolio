"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const phrases = [
  { line1: "COMPLEX PRODUCTS", line2: "FEEL EFFORTLESS" },
  { line1: "DESIGNING INSIDE", line2: "REAL CONSTRAINTS" },
  { line1: "FROM AMBIGUITY TO", line2: "SHIPPED SYSTEMS" },
  { line1: "CLARITY", line2: "AT SCALE" },
];

const INTERVAL = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    // Section is just a full-viewport container — nothing in normal flow
    <section
      className="relative bg-black overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Layer 0 — Tree */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "100px" }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/hero-tree.png"
          alt=""
          width={800}
          height={900}
          className="select-none"
          style={{
            height: "130vh",
            width: "auto",
            maxWidth: "none",
            mixBlendMode: "luminosity",
            opacity: 0.9,
          }}
          priority
        />
      </motion.div>

      {/* Layer 1 — Text carousel, upper third */}
      <div
        className="absolute text-center pointer-events-none"
        style={{
          zIndex: 10,
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "clamp(7rem, 18vw, 16rem)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -48, opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center px-6"
          >
            <h1
              style={{
                fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
                lineHeight: 1,
                letterSpacing: "-0.01em",
                textAlign: "center",
              }}
            >
              <span style={{ color: "#ffffff" }}>{phrases[index].line1}</span>
              <br />
              <span style={{ color: "#e76e52" }}>{phrases[index].line2}</span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Layer 1 — GURU card, pinned to bottom */}
      <motion.div
        className="absolute px-6"
        style={{
          zIndex: 10,
          bottom: "40px",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "420px",
          width: "100%",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-xl px-6 py-5 relative"
          style={{ backgroundColor: "#191919b3", backdropFilter: "blur(8px)" }}
        >
          {/* ae logo mark — top right, inverted to white */}
          <div className="absolute top-4 right-5">
            <Image
              src="/ae-logo.png"
              alt="Jon Ezell"
              width={26}
              height={26}
              className="select-none"
              style={{ width: 26, height: 26, objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* GURU + noun label */}
          <p className="mb-2">
            <span
              style={{
                fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                fontSize: "38px",
                lineHeight: 1,
                color: "#fff",
              }}
            >
              GURU{" "}
            </span>
            <span
              style={{
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "11px",
                fontWeight: 300,
                color: "#e76e52",
                letterSpacing: "0.05em",
              }}
            >
              noun gu·ru
            </span>
          </p>

          {/* Definition */}
          <p
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            A design philosophy guided by clarity and systems awareness —
            aligning human behavior, technical constraints, and business
            goals into coherent product experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
