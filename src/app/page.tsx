"use client";
import Image from "next/image";
import { useState } from "react";

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
              href="https://squire.com"
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

        {/* Nav */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 36px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}>
          <div style={{ display: "flex", gap: "24px", flexWrap: "nowrap" }}>
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
            <span style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              background: "#fff",
            }} />
            MENU
          </button>
        </nav>

        {/* Giant headline with logo */}
        <div className="flex items-center gap-6 px-9 pt-24 md:pt-28">
          <img
            src="/images/logo-a-mark.png"
            alt="Anointed A mark"
            className="w-16 h-auto object-contain opacity-90 shrink-0"
          />
          <h1 className="text-[clamp(80px,15vw,265px)] font-black font-['Inter'] text-neutral-300 uppercase leading-none tracking-tight">
            ANOINTED
          </h1>
        </div>

        {/* Tagline + pill buttons */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 36px 36px",
        }}>
          <p style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#A1A1AA",
            maxWidth: "400px",
            lineHeight: 1.5,
          }}>
            A home for precision, artistry, and the style that defines you
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            {["BOOK NOW", "GALLERY", "SERVICES"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(" ", "-")}`}
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

        {/* Full-bleed portrait */}
        <div style={{ flex: 1, position: "relative", height: "600px" }}>
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

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "40px" }}>
          {/* Giant left text */}
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(60px, 10vw, 140px)",
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line",
            flexShrink: 0,
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
              Anointed is a premium hair studio built on craft, intention, and artistry. Every appointment is a collaboration. Every style is an expression of who you are — and who you&apos;re becoming.
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

      {/* ── SECTION 3: YELLOW MARQUEE ───────────────────────────────────── */}
      <section style={{
        background: "#819A91",
        padding: "64px 36px",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(48px, 8vw, 96px)",
          textTransform: "uppercase",
          color: "#18181B",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
        }}>
          CRAFT THAT CONNECTS — STYLE THAT MATTERS.
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

        {/* Service cards */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            { name: "CUT", price: "Starting at $75", image: "/images/studio/barber-chairs-wide.jpg" },
            { name: "COLOR", price: "Starting at $120", image: "/images/studio/portrait-street.jpg" },
            { name: "STYLE", price: "Starting at $55", image: "/images/studio/barber-chair-single.jpg" },
          ].map((service) => (
            <div
              key={service.name}
              style={{
                position: "relative",
                width: "384px",
                height: "520px",
                overflow: "hidden",
                flex: "1 1 300px",
                maxWidth: "384px",
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

      {/* ── SECTION 5: TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ background: "#18181B", padding: "80px 36px" }}>
        <div style={{ display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Image left */}
          <div style={{ position: "relative", width: "660px", height: "528px", flexShrink: 0 }}>
            <Image
              src="/images/studio/portrait-street.jpg"
              alt="Client"
              fill
              style={{ objectFit: "cover", filter: "grayscale(100%)" }}
            />
          </div>

          {/* Right column */}
          <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "20px" }}>
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
              marginBottom: "28px",
              alignSelf: "flex-start",
            }}>
              CLIENT STORIES
            </div>

            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 5vw, 60px)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "32px",
            }}>
              CLIENT STORIES
            </h2>

            <blockquote style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "22px",
              color: "#fff",
              lineHeight: 1.4,
              marginBottom: "28px",
            }}>
              &ldquo;Every session is a conversation. Every cut, a statement. Anointed doesn&apos;t just style hair — they shape confidence.&rdquo;
            </blockquote>

            <div>
              <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#fff",
              }}>
                JESSICA M.
              </p>
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#A1A1AA",
                marginTop: "4px",
              }}>
                Regular Client
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: YELLOW SHOWCASE ──────────────────────────────────── */}
      <section style={{ background: "#819A91", padding: "80px 36px", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "60px", alignItems: "flex-start" }}>
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
          <div style={{
            background: "#FAFAF9",
            padding: "40px",
            width: "340px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}>
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

      {/* ── SECTION 7: BOOK ─────────────────────────────────────────────── */}
      <section id="book" style={{ background: "#18181B", padding: "80px 36px 0" }}>
        {/* Top: left label + right body */}
        <div style={{ display: "flex", gap: "60px", marginBottom: "60px", flexWrap: "wrap" }}>
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
              {["SQUIRE", "CALL US", "INSTAGRAM"].map((label) => (
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

        {/* Giant split text with image */}
        <div style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
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
      </section>

      {/* ── SECTION 8: FOOTER ───────────────────────────────────────────── */}
      <footer style={{ background: "#18181B", padding: "80px 36px 0" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "60px", flexWrap: "wrap", gap: "40px" }}>
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
              A home for precision, artistry, and the style that defines you.
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

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          borderTop: "1px solid #27272A",
          marginTop: "8px",
        }}>
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
