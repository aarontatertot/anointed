"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const GENERAL_BOOK_URL =
  "https://getsquire.com/discover/barbershop/anointed-studio-north-salt-lake";

const NAV_LINKS = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "TEAM", href: "/#team" },
  { label: "GALLERY", href: "/#gallery" },
];

function SageBar() {
  return <div style={{ width: 40, height: 3, background: "#bda49d", marginBottom: 16 }} />;
}

export default function ContactPage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBookHovered, setNavBookHovered] = useState(false);
  const [infoHoveredIdx, setInfoHoveredIdx] = useState<number | null>(null);
  const [footerBookHovered, setFooterBookHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#0d0d0d", color: "#ebddd9", minHeight: "100vh" }}>

      {/* ── FIXED NAV ───────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 36px",
          background: navScrolled ? "rgba(13,13,13,0.95)" : "rgba(13,13,13,0.85)",
          backdropFilter: "blur(8px)",
          transition: "background 0.3s ease",
        }}
      >
        <Link href="/" style={{ lineHeight: 0 }}>
          <Image src="/logo-new.svg" width={80} height={80} alt="Anointed" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 32, alignItems: "center" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="btn-text"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ebddd9",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-text"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#ebddd9",
              textDecoration: "none",
            }}
          >
            CONTACT
          </Link>
          <a
            href={GENERAL_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            onMouseEnter={() => setNavBookHovered(true)}
            onMouseLeave={() => setNavBookHovered(false)}
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: navBookHovered ? "#bda49d" : "#ebddd9",
              border: navBookHovered ? "1px solid #bda49d" : "1px solid #ebddd9",
              borderRadius: 40,
              padding: "8px 20px",
              textDecoration: "none",
            }}
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
          aria-label="Open menu"
        >
          <span style={{ display: "block", width: 24, height: 2, background: "#bda49d" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#bda49d" }} />
          <span style={{ display: "block", width: 16, height: 2, background: "#bda49d" }} />
        </button>
      </nav>

      {/* ── MOBILE MENU OVERLAY ──────────────────────────────────────────── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            background: "#0d0d0d",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="btn-text"
            style={{
              position: "absolute",
              top: 28,
              right: 36,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#bda49d",
            }}
          >
            CLOSE ✕
          </button>
          <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 48 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="btn-text"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(40px, 8vw, 80px)",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "#bda49d",
                  textDecoration: "none",
                  lineHeight: 1.1,
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-text"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 8vw, 80px)",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#bda49d",
                textDecoration: "none",
                lineHeight: 1.1,
              }}
            >
              CONTACT
            </Link>
          </nav>
          <a
            href={GENERAL_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000",
              background: "#ebddd9",
              borderRadius: 40,
              padding: "14px 32px",
              textDecoration: "none",
            }}
          >
            BOOK NOW
          </a>
        </div>
      )}

      {/* ── CONTACT SECTION ─────────────────────────────────────────────── */}
      <section style={{ padding: "140px 36px 80px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div>
            <SageBar />
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 7vw, 96px)",
                textTransform: "uppercase",
                color: "#bda49d",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: 48,
              }}
            >
              CONTACT
            </h1>

            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 400,
                fontSize: 15,
                color: "#ebddd9",
                marginBottom: 8,
              }}
            >
              640 N Main St, Suite 225
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 400,
                fontSize: 15,
                color: "#ebddd9",
                marginBottom: 32,
              }}
            >
              North Salt Lake, UT 84054
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              {[
                { label: "640 N MAIN ST, SUITE 225", href: "https://maps.google.com/?q=640+N+Main+St+Suite+225+North+Salt+Lake+UT+84054" },
                { label: "NORTH SALT LAKE, UT", href: "https://maps.google.com/?q=640+N+Main+St+Suite+225+North+Salt+Lake+UT+84054" },
                { label: "BY APPOINTMENT", href: GENERAL_BOOK_URL },
              ].map(({ label, href }, idx) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  onMouseEnter={() => setInfoHoveredIdx(idx)}
                  onMouseLeave={() => setInfoHoveredIdx(null)}
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: infoHoveredIdx === idx ? "#bda49d" : "#ebddd9",
                    border: infoHoveredIdx === idx ? "1px solid #bda49d" : "1px solid #ebddd9",
                    borderRadius: 40,
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: 28,
                textTransform: "uppercase",
                color: "#bda49d",
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              SEND US A MESSAGE
            </h2>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 400,
                fontSize: 15,
                color: "#ebddd9",
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Questions, collaborations, or anything else — drop us a line and we&apos;ll get back to you.
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <input
                type="text"
                placeholder="YOUR NAME"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  outline: "none",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ebddd9",
                  padding: "10px 0",
                  width: "100%",
                }}
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  outline: "none",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ebddd9",
                  padding: "10px 0",
                  width: "100%",
                }}
              />
              <textarea
                placeholder="YOUR MESSAGE"
                rows={4}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  outline: "none",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ebddd9",
                  padding: "10px 0",
                  width: "100%",
                  resize: "none",
                }}
              />
              <button
                type="submit"
                className="btn-solid"
                style={{
                  alignSelf: "flex-start",
                  background: "#ebddd9",
                  border: "none",
                  borderRadius: 40,
                  padding: "12px 28px",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── MAPS EMBED ───────────────────────────────────────────────────── */}
      <section style={{ padding: "0 36px 80px" }}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.834!2d-111.9083!3d40.84978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87520c5e7b0e3a5b%3A0x5b8b2f3a4c8e2d1f!2s640+N+Main+St%2C+North+Salt+Lake%2C+UT+84054!5e0!3m2!1sen!2sus!4v1744000000000!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ filter: "grayscale(100%) contrast(1.1)", border: "none", display: "block" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "60px 36px 40px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end" style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ marginBottom: 40, lineHeight: 0 }}>
              <Image
                src="/logo-new.svg"
                width={180}
                height={180}
                alt="Anointed"
                style={{ display: "block" }}
              />
            </div>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400, fontSize: 15, color: "#bda49d", margin: 0, textAlign: "left" }}>
              Equipped with belief.
            </p>
          </div>
          <div
            style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", paddingTop: 92 }}
            className="justify-start md:justify-end"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="btn-text"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ebddd9",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href={GENERAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              onMouseEnter={() => setFooterBookHovered(true)}
              onMouseLeave={() => setFooterBookHovered(false)}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: footerBookHovered ? "#bda49d" : "#ebddd9",
                border: footerBookHovered ? "1px solid #bda49d" : "1px solid #ebddd9",
                borderRadius: 40,
                padding: "8px 20px",
                textDecoration: "none",
              }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 20,
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 400,
            fontSize: 12,
            color: "#ebddd9",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 Anointed Studio · North Salt Lake, UT
        </div>
      </footer>
    </div>
  );
}
