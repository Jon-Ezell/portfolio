"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Outcomes() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Text slides in from outside, ends slightly overlapping the video
  const leftX = useTransform(scrollYProgress, [0, 1], ["-18vw", "6vw"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["18vw", "-6vw"]);

  // Video floats up and grows slightly as you scroll down
  const videoY = useTransform(scrollYProgress, [0, 1], ["80px", "-16px"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [0.88, 1.06]);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#f5f0e8",
        position: "relative",
        overflow: "hidden",
        minHeight: "max(680px, 85vh)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "inherit",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          padding: "clamp(40px, 6vw, 100px) clamp(24px, 5vw, 80px)",
        }}
      >
        {/* Top-left: REAL PRODUCTS — z20 so it sits above video */}
        <motion.div
          style={{ x: leftX, gridColumn: "1", gridRow: "1", alignSelf: "start", zIndex: 20, position: "relative" }}
        >
          <h2
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              lineHeight: 0.92,
              color: "#000",
              margin: 0,
            }}
          >
            REAL
            <br />
            PRODUCTS
          </h2>
        </motion.div>

        {/* Top-right: diamond decoration — larger, shifted ~50px toward center */}
        <div
          style={{
            gridColumn: "2",
            gridRow: "1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingRight: "50px",
            position: "relative",
            zIndex: 20,
          }}
        >
          <Image
            src="/decor-diamond-3d.png"
            alt=""
            width={180}
            height={180}
            style={{ width: "clamp(120px, 14vw, 180px)", height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Bottom-left: Vector decoration */}
        <div
          style={{
            gridColumn: "1",
            gridRow: "2",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            position: "relative",
            zIndex: 20,
          }}
        >
          <Image
            src="/decor-spiral.png"
            alt=""
            width={240}
            height={240}
            style={{ width: "clamp(140px, 17vw, 240px)", height: "auto", objectFit: "contain", opacity: 0.8 }}
          />
        </div>

        {/* Bottom-right: REAL IMPACT — z20 above video */}
        <motion.div
          style={{
            x: rightX,
            gridColumn: "2",
            gridRow: "2",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            zIndex: 20,
            position: "relative",
          }}
        >
          <h2
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              lineHeight: 0.92,
              color: "#000",
              margin: 0,
              textAlign: "right",
            }}
          >
            REAL
            <br />
            IMPACT
          </h2>
        </motion.div>

        {/* Center: looping video — z10, sits behind text */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: "min(420px, 38vw)",
          }}
        >
          <motion.div style={{ y: videoY, scale: videoScale }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", display: "block" }}
            >
              <source src="/looping-hero.mov" type="video/quicktime" />
              <source src="/looping-hero.mov" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
