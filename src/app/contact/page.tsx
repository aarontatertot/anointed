export default function ContactPage() {
  return (
    <div style={{ background: "#18181B", color: "#fff", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 36px",
      }}>
        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT", href: "/about" },
            { label: "SERVICES", href: "/services" },
            { label: "TEAM", href: "/team" },
            { label: "CONTACT", href: "/contact" },
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
                color: item.label === "CONTACT" ? "#fff" : "#71717A",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/book"
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

      {/* Two-column section */}
      <section style={{ padding: "40px 36px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "flex-start",
        }}>

          {/* Left column */}
          <div>
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
              marginBottom: "32px",
            }}>
              CONTACT
            </div>

            {/* Giant headline */}
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(52px, 9vw, 120px)",
              textTransform: "uppercase",
              color: "#819A91",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "48px",
              whiteSpace: "pre-line",
            }}>
              {"LET'S TALK\nYOUR STYLE"}
            </h1>

            {/* Info pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              {["640 N MAIN ST, SUITE 225 ↗", "NORTH SALT LAKE, UT ↗", "BY APPOINTMENT ↗"].map((pill) => (
                <a
                  key={pill}
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#A1A1AA",
                    border: "1px solid #3F3F46",
                    borderRadius: "40px",
                    padding: "10px 20px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {pill}
                </a>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              color: "#fff",
              marginBottom: "16px",
            }}>
              Send us a message
            </h2>
            <p style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#A1A1AA",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}>
              Whether you&apos;re booking your first visit, looking to collaborate, or just have a question — we&apos;re here. Reach out and let&apos;s start a conversation.
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {/* Name */}
              <input
                type="text"
                placeholder="YOUR NAME"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #3F3F46",
                  outline: "none",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  padding: "10px 0",
                  width: "100%",
                }}
              />

              {/* Email */}
              <input
                type="email"
                placeholder="YOUR EMAIL"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #3F3F46",
                  outline: "none",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  padding: "10px 0",
                  width: "100%",
                }}
              />

              {/* Message */}
              <textarea
                placeholder="YOUR MESSAGE"
                rows={4}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #3F3F46",
                  outline: "none",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  padding: "10px 0",
                  width: "100%",
                  resize: "none",
                }}
              />

              {/* Submit */}
              <button
                type="submit"
                style={{
                  alignSelf: "flex-start",
                  background: "#819A91",
                  border: "none",
                  borderRadius: "40px",
                  padding: "12px 28px",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section style={{ padding: "0 36px 80px" }}>
        <div style={{
          border: "1px solid #27272A",
          padding: "8px",
          overflow: "hidden",
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.834!2d-111.9083!3d40.84978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87520c5e7b0e3a5b%3A0x5b8b2f3a4c8e2d1f!2s640+N+Main+St%2C+North+Salt+Lake%2C+UT+84054!5e0!3m2!1sen!2sus!4v1744000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ filter: "grayscale(100%) contrast(1.1)", border: "none", display: "block" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#18181B", padding: "60px 36px 32px", borderTop: "1px solid #27272A" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "18px",
            color: "#fff",
            textTransform: "uppercase",
          }}>
            ANOINTED
          </p>
          <p style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "#71717A",
          }}>
            © {new Date().getFullYear()} ANOINTED. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
