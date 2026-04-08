import Image from "next/image";

const GENERAL_BOOK_URL = "https://getsquire.com/discover/barbershop/anointed-studio-north-salt-lake";

export default function HomeV2Page() {
  return (
    <div style={{ background: "#18181B", color: "#fff", minHeight: "100vh" }}>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav
        style={{ display: "flex", alignItems: "center", padding: "28px 36px" }}
        className="justify-end md:justify-between"
      >
        <div className="hidden md:flex" style={{ gap: "32px" }}>
          {[
            { label: "HOME", href: "/" },
            { label: "HOME V.2", href: "/home-v2" },
            { label: "ABOUT", href: "/about" },
            { label: "SERVICES", href: "/services" },
            { label: "TEAM", href: "/team" },
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
                color: item.label === "HOME V.2" ? "#fff" : "#71717A",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={GENERAL_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 500,
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#819A91",
            border: "1px solid #819A91",
            borderRadius: "40px",
            padding: "8px 20px",
            textDecoration: "none",
          }}
        >
          BOOK NOW
        </a>
      </nav>

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section style={{ padding: "40px 36px 80px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: tagline */}
          <div>
            <p style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: "clamp(13px, 1.5vw, 16px)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#A1A1AA",
              lineHeight: 1.9,
              maxWidth: "480px",
            }}>
              A HOME FOR PRECISION ARTISTRY AND THE STYLE THAT DEFINES YOU
            </p>
          </div>

          {/* Right: floating info card */}
          <div style={{
            background: "#1F1F23",
            border: "1px solid #27272A",
            padding: "32px",
          }}>
            <div style={{ position: "relative", height: "220px", marginBottom: "24px", overflow: "hidden" }}>
              <Image
                src="/images/studio/barber-chairs-wide.jpg"
                alt="Anointed Studio"
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </div>
            <p style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#819A91",
              marginBottom: "12px",
            }}>
              ABOUT ANOINTED STUDIO
            </p>
            <p style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#A1A1AA",
              lineHeight: 1.7,
            }}>
              Anointed is a premium hair studio built on craft, intention, and artistry. Every appointment is a collaboration — every style, an expression of who you are.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: FRESH SERVICES HEADING ───────────────────────────── */}
      <section style={{ padding: "0 36px 24px" }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(60px, 12vw, 160px)",
          textTransform: "uppercase",
          color: "#fff",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          whiteSpace: "pre-line",
        }}>
          {"FRESH\nSERVICES"}
        </h2>
        <p style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          color: "#A1A1AA",
          maxWidth: "520px",
          lineHeight: 1.6,
          marginTop: "20px",
        }}>
          Explore our most requested treatments and signature services. Delivered with intention, every time.
        </p>
      </section>

      {/* ── SECTION 3: SERVICE ROWS ──────────────────────────────────────── */}
      <section style={{ padding: "48px 36px 80px" }}>
        {[
          { name: "PRECISION CUT", image: "/images/studio/barber-chairs-wide.jpg" },
          { name: "COLOR WORK", image: "/images/studio/portrait-street.jpg" },
          { name: "EDITORIAL STYLE", image: "/images/studio/barber-chair-single.jpg" },
        ].map((service, i) => (
          <div
            key={service.name}
            style={{
              borderTop: i === 0 ? "1px solid #27272A" : "none",
              borderBottom: "1px solid #27272A",
            }}
          >
            {/* Row header */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "28px 0",
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 5vw, 64px)",
                textTransform: "uppercase",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                {service.name}
              </span>
              <a
                href="/services"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#819A91",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                EXPLORE →
              </a>
            </div>

            {/* Image */}
            <div style={{ position: "relative", height: "320px", overflow: "hidden", marginBottom: "0" }}>
              <Image
                src={service.image}
                alt={service.name}
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* ── SECTION 4: LATEST SERVICES SHOWCASE ─────────────────────────── */}
      <section style={{ padding: "0 36px 80px" }}>
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
          marginBottom: "48px",
        }}>
          LATEST SERVICES SHOWCASE
        </div>

        {[
          {
            name: "PRECISION CUT",
            desc: "Tailored fades, tapers, and crop cuts executed with surgical precision. Every line matters.",
            price: "Starting at $75",
          },
          {
            name: "COLOR WORK",
            desc: "Seamless blends, vivid transformations, and tonal depth. Crafted for your vision.",
            price: "Starting at $120",
          },
          {
            name: "EDITORIAL STYLE",
            desc: "High-fashion finishing for shoots, events, or simply stepping out with intention.",
            price: "Starting at $55",
          },
          {
            name: "HAIR TREATMENT",
            desc: "Deep conditioning, scalp care, and restoration work to keep your hair performing at its best.",
            price: "Starting at $45",
          },
        ].map((service, i) => (
          <div
            key={service.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px 0",
              borderTop: i === 0 ? "1px solid #819A91" : "none",
              borderBottom: "1px solid #27272A",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "220px" }}>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(24px, 3vw, 40px)",
                textTransform: "uppercase",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.01em",
                marginBottom: "10px",
              }}>
                {service.name}
              </h3>
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#A1A1AA",
                lineHeight: 1.6,
                maxWidth: "480px",
              }}>
                {service.desc}
              </p>
              <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.1em",
                color: "#819A91",
                marginTop: "8px",
              }}>
                {service.price}
              </p>
            </div>
            <a
              href={GENERAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#819A91",
                border: "1px solid #819A91",
                borderRadius: "40px",
                padding: "10px 24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              BOOK →
            </a>
          </div>
        ))}
      </section>

      {/* ── SECTION 5: BOOK CTA ──────────────────────────────────────────── */}
      <section style={{ background: "#819A91", padding: "80px 36px", textAlign: "center" }}>
        <p style={{
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: 500,
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#18181B",
          marginBottom: "16px",
        }}>
          READY WHEN YOU ARE
        </p>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(48px, 8vw, 96px)",
          textTransform: "uppercase",
          color: "#18181B",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "36px",
        }}>
          BOOK YOUR SESSION
        </h2>
        <a
          href={GENERAL_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#819A91",
            background: "#18181B",
            borderRadius: "40px",
            padding: "14px 36px",
            textDecoration: "none",
          }}
        >
          BOOK NOW
        </a>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: "#18181B", padding: "80px 36px 0" }}>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between mb-16">
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

          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            <div>
              <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#71717A",
                marginBottom: "16px",
              }}>
                NAVIGATE
              </p>
              {[
                { label: "Home", href: "/" },
                { label: "Home V.2", href: "/home-v2" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
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
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#71717A",
                marginBottom: "16px",
              }}>
                CONNECT
              </p>
              {["Book Now", "Instagram", "Squire", "Call Us"].map((link) => (
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
            NORTH SALT LAKE
          </p>
        </div>
      </footer>
    </div>
  );
}
