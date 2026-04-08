import Image from "next/image";

export default function TeamPage() {
  const team = [
    {
      image: "/images/studio/barber-chair-single.jpg",
      name: "DONOVAN",
      role: "MASTER BARBER",
      bio: "10 years crafting precision fades and tapered cuts. Specializes in textured hair and editorial styling.",
      bookLabel: "BOOK WITH DONOVAN",
    },
    {
      image: "/images/studio/barber-chairs-wide.jpg",
      name: "ADLEY",
      role: "COLOR SPECIALIST",
      bio: "Expert colorist with a background in fashion. Known for seamless blends and bold transformations.",
      bookLabel: "BOOK WITH ADLEY",
    },
  ];

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
            { label: "ABOUT", href: "/#about" },
            { label: "SERVICES", href: "/#services" },
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
                color: item.label === "TEAM" ? "#fff" : "#71717A",
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

      {/* Main content */}
      <section style={{ padding: "40px 36px 80px" }}>
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
          THE ARTISTS
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(60px, 12vw, 160px)",
          textTransform: "uppercase",
          color: "#fff",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "64px",
          whiteSpace: "pre-line",
        }}>
          {"MEET THE\nTEAM"}
        </h1>

        {/* Two profile cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
        }}>
          {team.map((person) => (
            <div key={person.name}>
              {/* Portrait image */}
              <div style={{ position: "relative", aspectRatio: "1 / 1", width: "100%", overflow: "hidden" }}>
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  style={{ objectFit: "cover", filter: "grayscale(100%)" }}
                />
              </div>

              {/* Name */}
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "36px",
                textTransform: "uppercase",
                color: "#fff",
                marginTop: "16px",
                letterSpacing: "-0.01em",
              }}>
                {person.name}
              </h2>

              {/* Role */}
              <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: "12px",
                textTransform: "uppercase",
                color: "#A1A1AA",
                letterSpacing: "0.15em",
                marginTop: "4px",
              }}>
                {person.role}
              </p>

              {/* Bio */}
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#A1A1AA",
                lineHeight: 1.6,
                marginTop: "16px",
                maxWidth: "440px",
              }}>
                {person.bio}
              </p>

              {/* Booking link */}
              <a
                href="https://squire.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#819A91",
                  border: "1px solid #819A91",
                  borderRadius: "40px",
                  padding: "12px 24px",
                  textDecoration: "none",
                }}
              >
                {person.bookLabel}
              </a>
            </div>
          ))}
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
