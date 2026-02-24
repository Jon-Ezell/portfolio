"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Placeholder from "@/components/ui/Placeholder";

interface MediaSectionProps {
  label?: string;
  caption?: string;
  aspectRatio?: string;
  dark?: boolean;
  columns?: 1 | 2;
  src?: string;
  src2?: string;
}

export default function MediaSection({
  label = "Project image",
  caption,
  aspectRatio = "16/9",
  dark = false,
  columns = 1,
  src,
  src2,
}: MediaSectionProps) {
  const bg = dark ? "#191919" : "#f8f3ec";

  const renderMedia = (imgSrc: string | undefined, imgLabel: string) => {
    if (imgSrc) {
      return (
        <div className="rounded-xl overflow-hidden w-full" style={{ aspectRatio }}>
          <Image
            src={imgSrc}
            alt={imgLabel}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    return <Placeholder label={imgLabel} aspectRatio={aspectRatio} />;
  };

  return (
    <section className="px-8 py-16" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={columns === 2 ? "grid grid-cols-2 gap-4" : ""}
        >
          {renderMedia(src, label)}
          {columns === 2 && renderMedia(src2 ?? src, label)}
        </motion.div>
        {caption && (
          <p
            className="mt-4"
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "12px",
              fontWeight: 300,
              color: "#8a8a8a",
            }}
          >
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
