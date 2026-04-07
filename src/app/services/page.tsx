import Link from "next/link";
import Nav from "@/components/Nav";

const services = [
  {
    name: "CUT",
    price: "Starting at $75",
    desc: "Precision cuts tailored to your texture, face structure, and lifestyle.",
  },
  {
    name: "COLOR",
    price: "Starting at $120",
    desc: "Custom color work from natural enhancement to bold transformation.",
  },
  {
    name: "STYLE",
    price: "Starting at $55",
    desc: "Blowouts, waves, and finishing for any occasion.",
  },
  {
    name: "TREATMENT",
    price: "Starting at $45",
    desc: "Restorative treatments for health, strength, and shine.",
  },
  {
    name: "BRIDAL",
    price: "Starting at $200",
    desc: "Full bridal packages for your most important day.",
  },
];

export default function Services() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen" style={{ backgroundColor: "#EEEFE0" }}>
        <div className="max-w-screen-lg mx-auto px-6 py-16">
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-16"
            style={{ color: "#819A91" }}
          >
            Services
          </p>

          <div>
            {services.map((s, i) => (
              <div key={s.name}>
                {i > 0 && (
                  <div className="h-px" style={{ backgroundColor: "#D1D8BE" }} />
                )}
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                  <div className="md:col-span-1">
                    <h2
                      className="text-4xl md:text-5xl font-normal mb-2"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}
                    >
                      {s.name}
                    </h2>
                    <p
                      className="text-[11px] tracking-[0.15em] uppercase"
                      style={{ color: "#819A91" }}
                    >
                      {s.price}
                    </p>
                  </div>
                  <div className="md:col-span-2 md:flex md:items-center">
                    <p
                      className="text-[15px] leading-relaxed"
                      style={{ color: "rgba(26,26,26,0.65)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-px" style={{ backgroundColor: "#D1D8BE" }} />
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p
              className="text-[13px] tracking-[0.1em] mb-8"
              style={{ color: "rgba(26,26,26,0.5)" }}
            >
              Ready to book your appointment?
            </p>
            <Link
              href="/book"
              className="inline-block px-12 py-4 text-[11px] tracking-[0.3em] uppercase border transition-colors duration-300"
              style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
