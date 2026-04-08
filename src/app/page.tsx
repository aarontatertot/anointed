"use client";
import Image from "next/image";
import { useState } from "react";

const GENERAL_BOOK_URL = "https://getsquire.com/discover/barbershop/anointed-studio-north-salt-lake";
const DONOVAN_BOOK_URL = "https://getsquire.com/booking/book/anointed-studio-north-salt-lake/barber/donavan-duelas-55/services?utm_source=city-pages&utm_campaign=city-pages&utm_content=barber-card";
const ADLEY_BOOK_URL = "https://getsquire.com/booking/book/anointed-studio-north-salt-lake/barber/adley-prescott-2/services?utm_source=city-pages&utm_campaign=city-pages&utm_content=barber-card";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "#18181B", color: "#fff", minHeight: "100vh" }}>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "#18181B", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Full-screen menu overlay */}
        {menuOpen && (
          <div style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            background: "#18181B",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: "28px",
                right: "36px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#71717A",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ display: "inline-block", width: "12px", height: "12px", background: "#fff" }} />
              CLOSE
            </button>

            {/* Nav links */}
            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              {[
                { label: "HOME", href: "/" },
                { label: "ABOUT", href: "#about" },
                { label: "SERVICES", href: "#services" },
                { label: "TEAM", href: "/team" },
                { label: "HOME V.2", href: "/home-v2" },
                { label: "CONTACT", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(40px, 8vw, 80px)",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    color: "#D4D4D8",
                    textDecoration: "none",
                    lineHeight: 1.1,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Book Now CTA */}
            <a
              href={GENERAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#fff",
                background: "#819A91",
                borderRadius: "40px",
                padding: "14px 32px",
                textDecoration: "none",
              }}
            >
              BOOK NOW
            </a>
          </div>
        )}

        {/* Nav — items hidden on mobile, MENU always visible on right */}
        <nav
          style={{ display: "flex", alignItems: "center", padding: "28px 36px", position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}
          className="justify-end md:justify-between"
        >
          <div className="hidden md:flex" style={{ gap: "24px" }}>
            {[
              { label: "HOME", href: "#home" },
              { label: "ABOUT", href: "#about" },
              { label: "SERVICES", href: "#services" },
              { label: "TEAM", href: "/team" },
              { label: "HOME V.2", href: "/home-v2" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#71717A",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#71717A",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span style={{ display: "inline-block", width: "12px", height: "12px", background: "#fff" }} />
            MENU
          </button>
        </nav>

        {/* Nav spacer — pushes content below the absolute nav */}
        <div style={{ height: "80px" }} />

        {/* Giant headline */}
        <div style={{ paddingLeft: "36px", paddingRight: "36px", paddingTop: "32px" }}>
          <h1 className="text-[clamp(80px,15vw,265px)] font-black font-['Inter'] text-neutral-300 uppercase leading-none tracking-tight">
            ANOINTED
          </h1>
        </div>

        {/* Tagline + pill buttons — stacks on mobile */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center px-9 pb-9 pt-6">
          <p style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#A1A1AA",
            lineHeight: 1,
          }}>
            Equipped with belief.
          </p>
          <div className="flex gap-2 flex-wrap">
            <a
              href={GENERAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#D4D4D8",
                border: "1px solid #A1A1AA",
                borderRadius: "40px",
                padding: "8px 20px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              BOOK NOW
            </a>
            {["GALLERY", "SERVICES"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#D4D4D8",
                  border: "1px solid #A1A1AA",
                  borderRadius: "40px",
                  padding: "8px 20px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Full-bleed portrait — responsive height */}
        <div style={{ flex: 1, position: "relative" }} className="min-h-[260px] sm:min-h-[400px] md:min-h-[600px]">
          <Image
            src="/images/studio/barber-chairs-wide.jpg"
            alt="Anointed hair studio"
            fill
            style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(100%)" }}
            priority
          />
        </div>
      </section>

      {/* ── SECTION 2: ABOUT ────────────────────────────────────────────── */}
      <section id="about" style={{ background: "#18181B", padding: "80px 36px" }}>
        {/* Label chip */}
        <div style={{
          display: "inline-block",
          background: "#fff",
          color: "#18181B",
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: 500,
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "6px 12px",
          marginBottom: "32px",
        }}>
          ABOUT ANOINTED
        </div>

        {/* Stacks on mobile, side-by-side on desktop */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(60px, 10vw, 140px)",
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line",
          }}>
            {"ABOUT\nANOINTED"}
          </h2>

          {/* Right column */}
          <div style={{ maxWidth: "420px" }}>
            <p style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: "14px",
              color: "#A1A1AA",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}>
              Anointed Studio. &quot;Equipped with belief.&quot; Anointed Studio was built with purpose. Craft taken seriously. Standards that don&apos;t slip. Bringing a level of precision to Utah that the culture deserves. Find out about our barbers, services, address, and working hours.
            </p>
            <a
              href="#about"
              style={{
                display: "inline-block",
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#18181B",
                background: "#A1A1AA",
                borderRadius: "40px",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MARQUEE ───────────────────────────────────────────── */}
      <section style={{
        background: "#819A91",
        padding: "64px 36px",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(32px, 6vw, 96px)",
          textTransform: "uppercase",
          color: "#18181B",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}>
          EQUIPPED WITH BELIEF.
        </p>
      </section>

      {/* ── SECTION 4: SERVICES ─────────────────────────────────────────── */}
      <section id="services" style={{ background: "#18181B", padding: "80px 36px" }}>
        {/* Label */}
        <div style={{
          display: "inline-block",
          background: "#fff",
          color: "#18181B",
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: 500,
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "6px 12px",
          marginBottom: "24px",
        }}>
          OUR SERVICES
        </div>

        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(56px, 8vw, 96px)",
          textTransform: "uppercase",
          color: "#fff",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "20px",
        }}>
          WHAT WE DO
        </h2>

        <p style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          color: "#A1A1AA",
          marginBottom: "48px",
          maxWidth: "560px",
        }}>
          From precision cuts to transformative color work, every service is delivered with intention.
        </p>

        {/* Service cards — 1 col on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "CUT", price: "Starting at $75", image: "/images/studio/barber-chairs-wide.jpg" },
            { name: "COLOR", price: "Starting at $120", image: "/images/studio/portrait-street.jpg" },
            { name: "STYLE", price: "Starting at $55", image: "/images/studio/barber-chair-single.jpg" },
          ].map((service) => (
            <div
              key={service.name}
              style={{
                position: "relative",
                height: "520px",
                overflow: "hidden",
              }}
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
              {/* Overlay */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 24px",
                backdropFilter: "blur(8px)",
                background: "rgba(0,0,0,0.5)",
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "28px",
                  textTransform: "uppercase",
                  color: "#fff",
                  lineHeight: 1,
                }}>
                  {service.name}
                </p>
                <p style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#A1A1AA",
                  letterSpacing: "0.08em",
                  marginTop: "4px",
                }}>
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: GALLERY SHOWCASE ─────────────────────────────────── */}
      <section style={{ background: "#819A91", padding: "80px 36px", overflow: "hidden" }}>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 md:items-start">
          {/* Left */}
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(60px, 10vw, 140px)",
              textTransform: "uppercase",
              color: "#18181B",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: "32px",
            }}>
              GALLERY SHOWCASE
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "22px",
              color: "#18181B",
              lineHeight: 1.4,
              maxWidth: "480px",
            }}>
              Catch up on our latest work. From editorial cuts to color transformations, discover the artistry behind every appointment.
            </p>
          </div>

          {/* Right floating card */}
          <div
            style={{
              background: "#FAFAF9",
              padding: "40px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
            className="w-full md:w-[340px]"
          >
            {[
              { label: "Editorial Cut", image: "/images/studio/barber-chairs-wide.jpg" },
              { label: "Color Transform", image: "/images/studio/portrait-street.jpg" },
              { label: "Signature Style", image: "/images/studio/barber-chair-single.jpg" },
            ].map((item) => (
              <div key={item.label} style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  style={{ objectFit: "cover", filter: "grayscale(100%)" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "10px 14px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}>
                  <p style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM SECTION ─── */}
      <section id="team" style={{ background: "#18181B", padding: "80px 36px" }}>
        <div style={{
          display: "inline-block",
          background: "#fff",
          color: "#18181B",
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: 500,
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "6px 12px",
          marginBottom: "32px",
        }}>
          THE ARTISTS
        </div>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(60px, 10vw, 140px)",
          textTransform: "uppercase",
          color: "#fff",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "60px",
        }}>
          MEET THE<br />TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "DONOVAN",
              role: "BARBER · COLOR SPECIALIST",
              bio: "10 years crafting precision fades and tapered cuts. Specializes in textured hair and editorial styling.",
              image: "/images/studio/barber-chair-single.jpg",
              bookLabel: "BOOK WITH DONOVAN",
              bookHref: DONOVAN_BOOK_URL,
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
              <img
                src={artist.image}
                alt={artist.name}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  display: "block",
                  marginBottom: "24px",
                }}
              />
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "32px",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "6px",
              }}>{artist.name}</p>
              <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#71717A",
                marginBottom: "16px",
              }}>{artist.role}</p>
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#A1A1AA",
                lineHeight: 1.6,
                marginBottom: "28px",
                maxWidth: "360px",
              }}>{artist.bio}</p>
              <a
                href={artist.bookHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  border: "1px solid #819A91",
                  borderRadius: "40px",
                  padding: "10px 24px",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
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

      {/* ── SECTION 7: BOOK ─────────────────────────────────────────────── */}
      <section id="book" style={{ background: "#18181B", padding: "80px 36px 0" }}>
        {/* Top: left label + right body */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 mb-16">
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div style={{
              display: "inline-block",
              background: "#fff",
              color: "#18181B",
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "6px 12px",
            }}>
              BOOK NOW
            </div>
          </div>
          <div style={{ flex: 2, minWidth: "300px" }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "22px",
              color: "#fff",
              lineHeight: 1.4,
              marginBottom: "28px",
              maxWidth: "560px",
            }}>
              Never miss the appointment that changes everything. Book your next session and experience the Anointed difference.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href={GENERAL_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#D4D4D8",
                  border: "1px solid #A1A1AA",
                  borderRadius: "40px",
                  padding: "10px 24px",
                  textDecoration: "none",
                }}
              >
                SQUIRE
              </a>
              {["CALL US", "INSTAGRAM"].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#D4D4D8",
                    border: "1px solid #A1A1AA",
                    borderRadius: "40px",
                    padding: "10px 24px",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant split text — desktop only (would overflow on mobile) */}
        <div className="hidden md:flex items-center overflow-hidden">
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(60px, 12vw, 180px)",
            textTransform: "uppercase",
            color: "#D4D4D8",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            BOOK YOUR
          </span>

          <div style={{
            position: "relative",
            width: "220px",
            height: "160px",
            margin: "0 24px",
            flexShrink: 0,
          }}>
            <Image
              src="/images/studio/barber-chair-single.jpg"
              alt="Book appointment"
              fill
              style={{ objectFit: "cover", filter: "grayscale(100%)" }}
            />
          </div>

          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(60px, 12vw, 180px)",
            textTransform: "uppercase",
            color: "#D4D4D8",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            APPOINTMENT
          </span>
        </div>

        {/* Mobile-only: stacked large text */}
        <div className="md:hidden overflow-hidden pb-8">
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 14vw, 96px)",
            textTransform: "uppercase",
            color: "#D4D4D8",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}>
            BOOK YOUR<br />APPOINTMENT
          </p>
        </div>
      </section>

      {/* ── SECTION 8: FOOTER ───────────────────────────────────────────── */}
      <footer style={{ background: "#18181B", padding: "80px 36px 0" }}>
        {/* Top row — stacks on mobile */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between mb-16">
          {/* Tagline */}
          <div style={{ maxWidth: "400px" }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "24px",
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              ANOINTED
            </p>
            <p style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#A1A1AA",
              lineHeight: 1.6,
            }}>
              Equipped with belief.
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            {[
              { heading: "NAVIGATE", links: ["Home", "Home V.2", "About", "Services", "Gallery", "Team"] },
              { heading: "CONNECT", links: ["Book Now", "Instagram", "Squire", "Call Us"] },
            ].map((col) => (
              <div key={col.heading}>
                <p style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#71717A",
                  marginBottom: "16px",
                }}>
                  {col.heading}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      display: "block",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#A1A1AA",
                      marginBottom: "10px",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Giant ANOINTED */}
        <div style={{ overflow: "hidden" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(80px, 18vw, 260px)",
            textTransform: "uppercase",
            color: "#A1A1AA",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            opacity: 0.3,
          }}>
            ANOINTED
          </p>
        </div>

        {/* Bottom bar — stacks on mobile */}
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center py-5 border-t border-zinc-800 mt-2">
          <p style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "#71717A",
          }}>
            © {new Date().getFullYear()} ANOINTED. ALL RIGHTS RESERVED.
          </p>
          <p style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#71717A",
          }}>
            SALT LAKE CITY
          </p>
        </div>
      </footer>

    </div>
  );
}
