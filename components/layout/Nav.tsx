"use client";

import Link from "next/link";

const links = [
  { label: "HOME", href: "/", anchor: null, external: false },
  { label: "WORK", href: "/#work", anchor: "work", external: false },
  { label: "RESUME", href: "/Jon_Ezell_Resume_26.pdf", anchor: null, external: true },
  { label: "CONTACT", href: "/#contact", anchor: "contact", external: false },
];

function handleAnchorClick(e: React.MouseEvent, anchor: string) {
  e.preventDefault();
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  // If el not found (different page), PageTransition's global listener
  // handles the full transition + navigation to the href.
}

export default function Nav() {
  return (
    <nav
      className="fixed z-50 left-1/2 -translate-x-1/2"
      style={{ top: "calc(5% - 15px)" }}
    >
      <ul
        className="flex items-center h-9 px-0.5 rounded-[6px]"
        style={{ backgroundColor: "#070707e3" }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={link.anchor ? (e) => handleAnchorClick(e, link.anchor!) : undefined}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center px-3 py-[6px] text-white/90 hover:bg-white/10 rounded-[4px] transition-colors duration-300"
              style={{
                fontFamily: '"MD Nichrome", Verdana, sans-serif',
                fontSize: "clamp(9px, 1vw, 11px)",
                fontWeight: 300,
                letterSpacing: "0.4em",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
