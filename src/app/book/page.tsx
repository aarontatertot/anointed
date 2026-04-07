import Nav from "@/components/Nav";

export default function Book() {
  return (
    <>
      <Nav />
      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundColor: "#EEEFE0" }}
      >
        <p
          className="text-[11px] tracking-[0.4em] uppercase mb-8"
          style={{ color: "#819A91" }}
        >
          Appointments
        </p>
        <h1
          className="text-[clamp(2.5rem,7vw,6rem)] font-normal leading-tight mb-6 max-w-2xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}
        >
          Book Your Appointment
        </h1>
        <p
          className="text-[14px] leading-relaxed mb-12 max-w-md"
          style={{ color: "rgba(26,26,26,0.55)" }}
        >
          We use Squire for booking &mdash; you will be redirected to our booking page to
          select your service, stylist, and preferred time.
        </p>
        <a
          href="https://squire.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-16 py-5 text-[11px] tracking-[0.35em] uppercase border transition-all duration-300 hover:bg-ink hover:text-cream"
          style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
        >
          Book Now
        </a>
        <p
          className="mt-8 text-[11px] tracking-[0.15em] uppercase"
          style={{ color: "rgba(26,26,26,0.35)" }}
        >
          By appointment only
        </p>
      </main>
    </>
  );
}
