"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "PORTFOLIO", href: "/Spacestation-Website/our-portfolio" },
  { label: "THESIS", href: "/Spacestation-Website/#thesis" },
  { label: "TEAM", href: "/Spacestation-Website/#team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100" style={{ backgroundColor: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 relative">
        <Link href="/Spacestation-Website/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Spacestation-Website/images/spacestation_logo.svg"
            alt="Spacestation Investments"
            width={160}
            height={40}
          />
        </Link>

        {/* Desktop nav — links centered, button on the right */}
        <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-black hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/Spacestation-Website/contact"
          className="hidden md:block text-xs font-semibold tracking-widest bg-black text-white px-5 py-2 rounded hover:opacity-80 transition-opacity"
        >
          CONTACT US
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-semibold tracking-widest text-black hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/Spacestation-Website/contact"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-semibold tracking-widest bg-black text-white px-5 py-2 rounded text-center hover:opacity-80 transition-opacity"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
