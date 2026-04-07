import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

const editorialImages = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80&grayscale",
];

const services = [
  { name: "CUT", desc: "Precision cuts tailored to your texture, face structure, and lifestyle." },
  { name: "COLOR", desc: "Custom color work from natural enhancement to bold transformation." },
  { name: "STYLE", desc: "Blowouts, waves, and finishing for any occasion." },
  { name: "TREATMENT", desc: "Restorative treatments for health, strength, and shine." },
  { name: "BRIDAL", desc: "Full bridal packages for your most important day." },
];

export default function Home() {
  return (
    <>
      <Nav transparent />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80&grayscale"
          alt="ANOINTED editorial"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(129,154,145,0.5) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            className="text-[clamp(4rem,12vw,10rem)] font-normal leading-none tracking-[0.15em] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#EEEFE0" }}
          >
            ANOINTED
          </h1>
          <p
            className="text-[11px] tracking-[0.3em] uppercase font-medium"
            style={{ color: "rgba(238,239,224,0.8)" }}
          >
            Premium Hair Studio &mdash; Salt Lake City
          </p>
        </div>
      </section>

      {/* Editorial image grid */}
      <section className="grid grid-cols-2 md:grid-cols-3">
        {editorialImages.map((src, i) => (
          <div key={i} className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={src}
              alt="Editorial"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>
        ))}
      </section>

      {/* Manifesto */}
      <section
        className="py-32 px-6 flex items-center justify-center"
        style={{ backgroundColor: "#EEEFE0" }}
      >
        <div className="text-center max-w-2xl">
          <p
            className="text-[clamp(1.75rem,4vw,3rem)] leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}
          >
            We don&rsquo;t style hair.
            <br />
            <em>We craft identity.</em>
          </p>
          <p
            className="mt-6 text-[13px] tracking-[0.15em] uppercase"
            style={{ color: "#819A91" }}
          >
            By appointment only &mdash; Salt Lake City
          </p>
        </div>
      </section>

      {/* Services teaser */}
      <section className="max-w-screen-lg mx-auto px-6 py-20">
        <p
          className="text-[11px] tracking-[0.3em] uppercase mb-12"
          style={{ color: "#819A91" }}
        >
          Services
        </p>
        <div>
          {services.map((s, i) => (
            <div key={s.name}>
              {i > 0 && <div className="h-px" style={{ backgroundColor: "#D1D8BE" }} />}
              <div className="py-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
                <h3
                  className="text-2xl md:text-3xl font-normal md:w-1/3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-[13px] md:w-2/3 leading-relaxed"
                  style={{ color: "rgba(26,26,26,0.6)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/services"
            className="text-[11px] tracking-[0.25em] uppercase border-b pb-0.5 transition-colors"
            style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}
          >
            View all services
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-12 px-6"
        style={{ backgroundColor: "#EEEFE0", borderColor: "#D1D8BE" }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6">
          <Image src="/logo.png" alt="ANOINTED" width={36} height={36} className="object-contain" />
          <div className="flex items-center gap-8">
            {[
              { label: "GALLERY", href: "/gallery" },
              { label: "SERVICES", href: "/services" },
              { label: "BOOK", href: "/book" },
              { label: "ABOUT", href: "/about" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[10px] tracking-[0.2em] transition-colors"
                style={{ color: "rgba(26,26,26,0.5)" }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p
            className="text-[10px] tracking-widest uppercase"
            style={{ color: "rgba(26,26,26,0.3)" }}
          >
            &copy; {new Date().getFullYear()} Anointed. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
