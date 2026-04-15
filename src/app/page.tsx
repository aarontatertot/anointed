"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const GENERAL_BOOK_URL =
  "https://getsquire.com/discover/barbershop/anointed-studio-north-salt-lake";
const DONAVAN_BOOK_URL =
  "https://getsquire.com/booking/book/anointed-studio-north-salt-lake/barber/donavan-duelas-55/services?utm_source=city-pages&utm_campaign=city-pages&utm_content=barber-card";
const ADLEY_BOOK_URL =
  "https://getsquire.com/booking/book/anointed-studio-north-salt-lake/barber/adley-prescott-2/services?utm_source=city-pages&utm_campaign=city-pages&utm_content=barber-card";

const GALLERY_IMAGES = [
  { src: "/images/studio/barber-chairs-wide.jpg", alt: "Anointed Studio" },
  { src: "/images/studio/barber-chair-single.jpg", alt: "Barber Chair" },
  { src: "/images/studio/portrait-street.jpg", alt: "Portrait" },
  { src: "/images/studio/barber-chair-side.jpg", alt: "Barber Chair Side" },
  { src: "/images/studio/street-scene.jpg", alt: "Street Scene" },
  { src: "/images/studio/barber-chairs-wide.jpg", alt: "Anointed Studio" },
];

const NAV_LINKS = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "SERVICES", id: "services" },
  { label: "TEAM", id: "team" },
  { label: "GALLERY", id: "gallery" },
];

function SageBar() {
  return <div style={{ width: 40, height: 3, background: "#819A91", marginBottom: 16 }} />;
}

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft")
        setModalIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      if (e.key === "ArrowRight")
        setModalIndex((i) => (i + 1) % GALLERY_IMAGES.length);
    },
    [modalOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <div style={{ background: "#0d0d0d", color: "#fff", minHeight: "100vh" }}>

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
          padding: "20px 36px",
          background: navScrolled ? "rgba(13,13,13,0.95)" : "transparent",
          backdropFilter: navScrolled ? "blur(8px)" : "none",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
          aria-label="Go to top"
        >
          <Image src="/images/logo-a-mark-light.png" width={40} height={40} alt="Anointed" />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 32, alignItems: "center" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              className="btn-text"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#A1A1AA",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {label}
            </button>
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
              color: "#A1A1AA",
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
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#819A91",
              border: "1px solid #819A91",
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
          <span style={{ display: "block", width: 24, height: 2, background: "#889992" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#889992" }} />
          <span style={{ display: "block", width: 16, height: 2, background: "#889992" }} />
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
              color: "#71717A",
            }}
          >
            CLOSE ✕
          </button>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              marginBottom: 48,
            }}
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={label}
                onClick={() => scrollTo(id)}
                className="btn-text"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(40px, 8vw, 80px)",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "#889992",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  lineHeight: 1.1,
                }}
              >
                {label}
              </button>
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
                color: "#889992",
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
              background: "#819A91",
              borderRadius: 40,
              padding: "14px 32px",
              textDecoration: "none",
            }}
          >
            BOOK NOW
          </a>
        </div>
      )}

      {/* ── SECTION 1: HERO (id="home") ─────────────────────────────────── */}
      <section
        id="home"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/studio/barber-chairs-wide.jpg"
            alt="Anointed Studio"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        </div>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 1, paddingLeft: 60, paddingRight: 36 }}>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(80px, 12vw, 180px)",
              textTransform: "uppercase",
              color: "#889992",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            ANOINTED
          </h1>
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 400,
              fontSize: 18,
              color: "#819A91",
              marginTop: 8,
            }}
          >
            Equipped with belief.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <a
              href={GENERAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#000",
                background: "#819A91",
                borderRadius: 40,
                padding: "12px 24px",
                textDecoration: "none",
              }}
            >
              BOOK NOW
            </a>
            <button
              onClick={() => scrollTo("gallery")}
              className="btn-outline"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#819A91",
                background: "transparent",
                border: "1px solid #819A91",
                borderRadius: 40,
                padding: "12px 24px",
                cursor: "pointer",
              }}
            >
              GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT (id="about") ───────────────────────────────── */}
      <section id="about" style={{ background: "#0d0d0d", padding: "100px 36px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SageBar />
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 7vw, 96px)",
                textTransform: "uppercase",
                color: "#889992",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              ABOUT
              <br />
              ANOINTED
            </h2>
          </div>

          {/* Right */}
          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 400,
                fontSize: 16,
                color: "#A1A1AA",
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              Anointed Studio. &quot;Equipped with belief.&quot; Anointed Studio was built with purpose.
              Craft taken seriously. Standards that don&apos;t slip. Bringing a level of precision to Utah
              that the culture deserves. Find out about our barbers, services, address, and working hours.
            </p>
            <a
              href={GENERAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid"
              style={{
                display: "inline-block",
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#000",
                background: "#889992",
                borderRadius: 40,
                padding: "12px 24px",
                textDecoration: "none",
              }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MARQUEE ───────────────────────────────────────────── */}
      <section style={{ background: "#819A91", padding: "32px 0", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 64px)",
            textTransform: "uppercase",
            color: "#0d0d0d",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          EQUIPPED WITH BELIEF.
        </p>
      </section>

      {/* ── SECTION 4: SERVICES (id="services") ─────────────────────────── */}
      <section id="services" style={{ background: "#0d0d0d", padding: "100px 36px" }}>
        <SageBar />
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 7vw, 96px)",
            textTransform: "uppercase",
            color: "#889992",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          WHAT WE DO
        </h2>
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 400,
            fontSize: 16,
            color: "#A1A1AA",
            marginBottom: 48,
            maxWidth: 560,
          }}
        >
          From precision cuts to transformative color work, every service is delivered with intention.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "HAIRCUTS", price: "Starting at $70", image: "/images/studio/barber-chair-single.jpg" },
            { name: "SHAVES", price: "Starting at $50", image: "/images/studio/portrait-street.jpg" },
            { name: "COLOR", price: "Starting at $80", image: "/images/studio/street-scene.jpg" },
          ].map((service) => (
            <div
              key={service.name}
              style={{
                position: "relative",
                height: 320,
                overflow: "hidden",
              }}
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: 28,
                    textTransform: "uppercase",
                    color: "#889992",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {service.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: 13,
                    color: "#A1A1AA",
                    margin: "4px 0 0",
                  }}
                >
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: TEAM (id="team") ──────────────────────────────────── */}
      <section id="team" style={{ background: "#0d0d0d", padding: "100px 36px" }}>
        <SageBar />
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 7vw, 96px)",
            textTransform: "uppercase",
            color: "#889992",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          MEET THE TEAM
        </h2>
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 400,
            fontSize: 16,
            color: "#A1A1AA",
            marginBottom: 60,
            maxWidth: 560,
          }}
        >
          Brief description of the team goes in this section, should be about this long.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              name: "DONAVAN",
              role: "BARBER · COLOR SPECIALIST",
              bio: "10 years crafting precision fades and tapered cuts. Specializes in textured hair and editorial styling.",
              image: "/images/studio/barber-chair-single.jpg",
              bookLabel: "BOOK WITH DONAVAN",
              bookHref: DONAVAN_BOOK_URL,
            },
            {
              name: "ADLEY",
              role: "BARBER",
              bio: "Expert colorist with a background in fashion. Known for seamless blends and bold transformations.",
              image: "/images/studio/portrait-street.jpg",
              bookLabel: "BOOK WITH ADLEY",
              bookHref: ADLEY_BOOK_URL,
            },
          ].map((artist) => (
            <div key={artist.name}>
              <div
                style={{
                  position: "relative",
                  height: 200,
                  overflow: "hidden",
                  marginBottom: 24,
                }}
              >
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  style={{ objectFit: "cover", filter: "grayscale(100%)" }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: 32,
                  textTransform: "uppercase",
                  color: "#889992",
                  margin: "0 0 6px",
                }}
              >
                {artist.name}
              </p>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#A1A1AA",
                  margin: "0 0 16px",
                }}
              >
                {artist.role}
              </p>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: 15,
                  color: "#A1A1AA",
                  lineHeight: 1.6,
                  margin: "0 0 24px",
                  maxWidth: 360,
                }}
              >
                {artist.bio}
              </p>
              <a
                href={artist.bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  display: "inline-block",
                  border: "1px solid #819A91",
                  borderRadius: 40,
                  padding: "10px 24px",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#819A91",
                  textDecoration: "none",
                }}
              >
                {artist.bookLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: GALLERY (id="gallery") ───────────────────────────── */}
      <section id="gallery" style={{ background: "#0d0d0d", padding: "100px 36px" }}>
        <SageBar />
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 7vw, 96px)",
            textTransform: "uppercase",
            color: "#889992",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          GALLERY
        </h2>
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 400,
            fontSize: 16,
            color: "#A1A1AA",
            marginBottom: 48,
            maxWidth: 600,
          }}
        >
          Catch up on our latest work. From editorial cuts to color transformations, discover the
          artistry behind every appointment.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={idx}
              onClick={() => openModal(idx)}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
                display: "block",
                cursor: "pointer",
                background: "#141414",
                border: "none",
                padding: 0,
                width: "100%",
              }}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── GALLERY MODAL ────────────────────────────────────────────────── */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setModalOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setModalOpen(false)}
            className="btn-text"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#889992",
              fontSize: 24,
              zIndex: 51,
              lineHeight: 1,
            }}
            aria-label="Close gallery"
          >
            ✕
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              top: 28,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 400,
              fontSize: 13,
              color: "#A1A1AA",
              letterSpacing: "0.1em",
              zIndex: 51,
            }}
          >
            {modalIndex + 1} / {GALLERY_IMAGES.length}
          </div>

          {/* Arrows + image row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              zIndex: 51,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
              }}
              className="btn-text"
              style={{
                flexShrink: 0,
                background: "none",
                border: "1px solid #889992",
                borderRadius: "50%",
                width: 48,
                height: 48,
                cursor: "pointer",
                color: "#889992",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Previous image"
            >
              ←
            </button>

            {/* Image container */}
            <div
              style={{
                position: "relative",
                width: "60vw",
                height: "65vh",
              }}
            >
              <Image
                src={GALLERY_IMAGES[modalIndex].src}
                alt={GALLERY_IMAGES[modalIndex].alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalIndex((i) => (i + 1) % GALLERY_IMAGES.length);
              }}
              className="btn-text"
              style={{
                flexShrink: 0,
                background: "none",
                border: "1px solid #889992",
                borderRadius: "50%",
                width: 48,
                height: 48,
                cursor: "pointer",
                color: "#889992",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0d0d0d", padding: "80px 36px 40px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" style={{ marginBottom: 48 }}>
          {/* Left */}
          <div>
            <div style={{ marginBottom: 16, opacity: 0.4, lineHeight: 0 }}>
              <Image src="/images/logo-a-mark-light.png" width={60} height={60} alt="Anointed" />
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 400,
                fontSize: 15,
                color: "#71717A",
              }}
            >
              Equipped with belief.
            </p>
          </div>

          {/* Right nav */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}
            className="md:items-end"
          >
            <div
              style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
              className="justify-start md:justify-end"
            >
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(id)}
                  className="btn-text"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#A1A1AA",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {label}
                </button>
              ))}
              <Link
                href="/contact"
                className="btn-text"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#A1A1AA",
                  textDecoration: "none",
                }}
              >
                CONTACT
              </Link>
            </div>
            <a
              href={GENERAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#819A91",
                border: "1px solid #819A91",
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
            color: "#52525B",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 Anointed Studio · North Salt Lake, UT
        </div>
      </footer>
    </div>
  );
}
