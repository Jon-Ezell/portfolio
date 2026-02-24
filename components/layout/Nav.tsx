"use client";

import Link from "next/link";

const links = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/#work" },
  { label: "RESUME", href: "/resume" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Nav() {
  return (
    <nav
      className="fixed z-50 left-1/2 -translate-x-1/2"
      style={{ top: "5%" }}
    >
      <ul
        className="flex items-center h-12 px-1 rounded-[7px]"
        style={{ backgroundColor: "#070707e3" }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center px-5 py-[10px] text-white/90 hover:bg-white/10 rounded-[4px] transition-colors duration-300"
              style={{
                fontFamily: '"MD Nichrome", Verdana, sans-serif',
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.5em",
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
