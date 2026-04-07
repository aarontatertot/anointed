"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const isTransparent = transparent && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isTransparent ? "transparent" : "#EEEFE0",
        borderBottom: isTransparent ? "none" : "1px solid #D1D8BE",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ANOINTED"
            width={40}
            height={40}
            className="object-contain"
            style={{ filter: isTransparent ? "invert(1) brightness(2)" : "none" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "GALLERY", href: "/gallery" },
            { label: "SERVICES", href: "/services" },
            { label: "BOOK", href: "/book" },
            { label: "ABOUT", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[11px] tracking-[0.2em] font-medium transition-colors duration-300 hover:text-sage"
              style={{ color: isTransparent ? "#EEEFE0" : "#1a1a1a" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-colors duration-300"
              style={{ backgroundColor: isTransparent ? "#EEEFE0" : "#1a1a1a" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-sage-lighter px-6 py-6 flex flex-col gap-6">
          {[
            { label: "GALLERY", href: "/gallery" },
            { label: "SERVICES", href: "/services" },
            { label: "BOOK", href: "/book" },
            { label: "ABOUT", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.2em] font-medium text-ink hover:text-sage transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
