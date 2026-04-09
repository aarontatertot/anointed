import Image from "next/image";

const DONOVAN_BOOK_URL = "https://getsquire.com/booking/book/anointed-studio-north-salt-lake/barber/donavan-duelas-55/services?utm_source=city-pages&utm_campaign=city-pages&utm_content=barber-card";
const ADLEY_BOOK_URL = "https://getsquire.com/booking/book/anointed-studio-north-salt-lake/barber/adley-prescott-2/services?utm_source=city-pages&utm_campaign=city-pages&utm_content=barber-card";
const GENERAL_BOOK_URL = "https://getsquire.com/discover/barbershop/anointed-studio-north-salt-lake";

export default function TeamPage() {
  const team = [
    {
      image: "/images/studio/barber-chair-single.jpg",
      name: "DONAVAN",
      role: "BARBER · COLOR SPECIALIST",
      bio: "10 years crafting precision fades and tapered cuts. Specializes in textured hair and editorial styling.",
      bookLabel: "BOOK WITH DONAVAN",
      bookHref: DONOVAN_BOOK_URL,
    },
    {
      image: "/images/studio/barber-chairs-wide.jpg",
      name: "ADLEY",
      role: "BARBER",
      bio: "Expert colorist with a background in fashion. Known for seamless blends and bold transformations.",
      bookLabel: "BOOK WITH ADLEY",
      bookHref: ADLEY_BOOK_URL,
    },
  ];

  return (
    <div style={{ background: "#18181B", color: "#fff", minHeight: "100vh" }}>

      {/* Nav */}
      <nav
        style={{ display: "flex", alignItems: "center", padding: "28px 36px" }}
        className="justify-end md:justify-between"
      >
        <div className="hidden md:flex" style={{ gap: "32px" }}>
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

        {/* Two profile cards — 1 col on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                href={person.bookHref}
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
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
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
