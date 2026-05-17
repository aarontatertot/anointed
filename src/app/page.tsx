"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import AnimatedAnointedLogo from "@/components/AnimatedAnointedLogo";

const GENERAL_BOOK_URL =
  "https://getsquire.com/discover/barbershop/anointed-barbershop-north-salt-lake";
const DONAVAN_BOOK_URL =
  "https://getsquire.com/discover/barbershop/anointed-barbershop-north-salt-lake/barber/donavan-duelas-55";
const ADLEY_BOOK_URL =
  "https://getsquire.com/discover/barbershop/anointed-barbershop-north-salt-lake/barber/adley-prescott-2";

const GALLERY_IMAGES = [
  { src: "/images/gallery/gallery-01.webp", alt: "Blue color + fade" },
  { src: "/images/gallery/gallery-02.webp", alt: "Curly top + taper" },
  { src: "/images/gallery/gallery-03.webp", alt: "High fade with part" },
  { src: "/images/gallery/gallery-04.webp", alt: "Platinum side sweep" },
  { src: "/images/gallery/gallery-05.webp", alt: "Blonde curls + fade" },
  { src: "/images/gallery/gallery-06.webp", alt: "Teal color + fade" },
  { src: "/images/gallery/gallery-07.webp", alt: "Galaxy color" },
  { src: "/images/gallery/gallery-08.webp", alt: "Vivid color cut" },
  { src: "/images/gallery/gallery-09.webp", alt: "Curly top + mid fade" },
  { src: "/images/gallery/gallery-10.webp", alt: "Blue teal + star design" },
];

const NAV_LINKS = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "EVENTS", id: "events" },
  { label: "SERVICES", id: "services" },
  { label: "TEAM", id: "team" },
  { label: "GALLERY", id: "gallery" },
];

const HERO_IMAGES = [
  { src: "/images/hero-1-bw.jpg", alt: "Anointed Studio" },
  { src: "/images/hero-2-bw.jpg", alt: "Anointed Studio" },
];

function SageBar() {
  return <div style={{ width: 40, height: 3, background: "#bda49d", marginBottom: 16 }} />;
}

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [navBookHovered, setNavBookHovered] = useState(false);
  const [heroGalleryHovered, setHeroGalleryHovered] = useState(false);
  const [teamHoveredIdx, setTeamHoveredIdx] = useState<number | null>(null);
  const [footerBookHovered, setFooterBookHovered] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
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
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

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
          <AnimatedAnointedLogo size={80} />
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
                color: "#ebddd9",
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
                  color: "#bda49d",
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
        {/* Slideshow background */}
        <div style={{ position: "absolute", inset: 0 }}>
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={img.src}
              style={{
                position: "absolute",
                inset: 0,
                opacity: heroIndex === idx ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority={idx === 0}
              />
            </div>
          ))}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
        </div>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, paddingLeft: "clamp(16px, 5vw, 60px)", paddingRight: "clamp(20px, 6vw, 60px)", boxSizing: "border-box", width: "100%" }}>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(72px, 18vw, 180px)",
              textTransform: "uppercase",
              color: "#bda49d",
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
              color: "#ebddd9",
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
                background: "#ebddd9",
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
              onMouseEnter={() => setHeroGalleryHovered(true)}
              onMouseLeave={() => setHeroGalleryHovered(false)}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: heroGalleryHovered ? "#bda49d" : "#ebddd9",
                background: "rgba(0,0,0,0.3)",
                border: heroGalleryHovered ? "1px solid #bda49d" : "1px solid #ebddd9",
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
                color: "#bda49d",
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
                color: "#ebddd9",
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              Built with purpose. Craft taken seriously. Standards that don&apos;t slip. Bringing a level of precision to Utah that the culture deserves.
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
                background: "#ebddd9",
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
      <section style={{ background: "#bda49d", padding: "32px 0", textAlign: "center" }}>
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

      {/* ── SECTION 3b: EVENTS (id="events") ─────────────────────────────── */}
      <section id="events" style={{ background: "#0d0d0d", padding: "100px 36px" }}>
        <SageBar />
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 7vw, 96px)",
            textTransform: "uppercase",
            color: "#bda49d",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          EVENTS
        </h2>
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 400,
            fontSize: 16,
            color: "#ebddd9",
            marginBottom: 56,
            maxWidth: 560,
          }}
        >
          Upcoming classes, demos, and events. Reserve your spot.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              headline: "Barbering Masterclass",
              date: "June 14, 2026",
              time: "2:00 PM – 5:00 PM",
              description: "A hands-on demo session covering advanced clipper techniques and fade transitions.",
            },
            {
              headline: "Open Shop Night",
              date: "June 28, 2026",
              time: "6:00 PM – 9:00 PM",
              description: "Come through, meet the team, watch live demos, and grab a complimentary trim.",
            },
          ].map((event) => (
            <div key={event.headline} style={{ background: "#18181B", border: "1px solid rgba(255,255,255,0.08)" }}>
              {/* Placeholder image */}
              <div
                style={{
                  width: "100%",
                  height: 200,
                  background: "#2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase" }}>Image Coming Soon</span>
              </div>
              <div style={{ padding: "24px 28px 28px" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: 24,
                    textTransform: "uppercase",
                    color: "#ebddd9",
                    margin: "0 0 8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {event.headline}
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#bda49d",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 4px",
                  }}
                >
                  {event.date}
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#bda49d",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 16px",
                  }}
                >
                  {event.time}
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#ebddd9",
                    lineHeight: 1.6,
                    margin: "0 0 24px",
                  }}
                >
                  {event.description}
                </p>
                <a
                  href={GENERAL_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#000",
                    background: "#bda49d",
                    borderRadius: 40,
                    padding: "10px 24px",
                    textDecoration: "none",
                  }}
                >
                  RESERVE SPOT
                </a>
              </div>
            </div>
          ))}
        </div>
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
            color: "#bda49d",
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
            color: "#ebddd9",
            marginBottom: 48,
            maxWidth: 560,
          }}
        >
          Every service is executed with intention. No shortcuts. No compromises.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "HAIRCUTS", price: "Starting at $70", image: "/images/service-haircuts.jpg", grayscale: true },
            { name: "SHAVES", price: "Starting at $50", image: "/images/service-shave.jpg", grayscale: true },
            { name: "COLOR", price: "Starting at $80", image: "/images/service-color.jpg", grayscale: false },
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
                style={{ objectFit: "cover", filter: service.grayscale ? "grayscale(100%)" : "none" }}
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
                    color: "#ebddd9",
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
                    color: "#ebddd9",
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
            color: "#bda49d",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          MEET THE TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              name: "DONAVAN",
              role: "FOUNDER · BARBER 20 YEARS BEHIND THE CHAIR",
              bio: "Bred in LA. Here to set a standard Utah's hair culture has never seen.",
              image: "/images/donavan-headshot-new.png",
              bookLabel: "BOOK WITH DONAVAN",
              bookHref: DONAVAN_BOOK_URL,
            },
            {
              name: "ADLEY",
              role: "BARBER • 5+ YEARS BEHIND THE CHAIR",
              bio: "Utah-raised, detail-driven, and focused on one thing — a consistent, top-tier experience every time you sit down.",
              image: "/images/adley-headshot.jpg",
              bookLabel: "BOOK WITH ADLEY",
              bookHref: ADLEY_BOOK_URL,
            },
          ].map((artist, idx) => (
            <div key={artist.name}>
              <div
                style={{
                  position: "relative",
                  height: 320,
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
                  color: "#bda49d",
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
                  color: "#ebddd9",
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
                  color: "#ebddd9",
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
                onMouseEnter={() => setTeamHoveredIdx(idx)}
                onMouseLeave={() => setTeamHoveredIdx(null)}
                style={{
                  display: "inline-block",
                  border: teamHoveredIdx === idx ? "1px solid #bda49d" : "1px solid #ebddd9",
                  borderRadius: 40,
                  padding: "10px 24px",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: teamHoveredIdx === idx ? "#bda49d" : "#ebddd9",
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
            color: "#bda49d",
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
            color: "#ebddd9",
            marginBottom: 48,
            maxWidth: 600,
          }}
        >
          The work speaks. Browse the latest from the chair.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          {GALLERY_IMAGES.slice(0, 6).map((img, idx) => (
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
              color: "#ebddd9",
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
              color: "#ebddd9",
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
                border: "1px solid #ebddd9",
                borderRadius: "50%",
                width: 48,
                height: 48,
                cursor: "pointer",
                color: "#ebddd9",
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
                border: "1px solid #ebddd9",
                borderRadius: "50%",
                width: 48,
                height: 48,
                cursor: "pointer",
                color: "#ebddd9",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end" style={{ marginBottom: 48 }}>
          {/* Left */}
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
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 400,
                fontSize: 15,
                color: "#bda49d",
                margin: 0,
                textAlign: "left",
              }}
            >
              Equipped with belief.
            </p>
          </div>

          {/* Right nav */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", paddingTop: 92 }}
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
                    color: "#ebddd9",
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
                  color: "#ebddd9",
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
