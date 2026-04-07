import Image from "next/image";
import Nav from "@/components/Nav";

const team = [
  {
    name: "Jordan A.",
    role: "Founder & Lead Stylist",
    img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&grayscale",
  },
  {
    name: "Taylor R.",
    role: "Color Specialist",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80&grayscale",
  },
  {
    name: "Morgan S.",
    role: "Texture & Care Expert",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&grayscale",
  },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-20" style={{ backgroundColor: "#EEEFE0" }}>

        {/* Split hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
          <div className="relative h-[60vh] md:h-auto overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&grayscale"
              alt="About Anointed"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
          <div className="flex flex-col justify-center px-10 md:px-16 py-16">
            <p
              className="text-[11px] tracking-[0.4em] uppercase mb-8"
              style={{ color: "#819A91" }}
            >
              About
            </p>
            <h1
              className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}
            >
              More than a salon.
            </h1>
            <p
              className="text-[15px] leading-[1.8] mb-6"
              style={{ color: "rgba(26,26,26,0.65)" }}
            >
              Anointed is a premium hair studio built on craft, intention, and artistry.
              Every service is an expression of who you are &mdash; and who you want to
              become. We work with a select clientele who understand that hair is identity.
            </p>
            <p
              className="text-[15px] leading-[1.8]"
              style={{ color: "rgba(26,26,26,0.65)" }}
            >
              Located in Salt Lake City. By appointment only.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-screen-lg mx-auto px-6 py-24">
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-16"
            style={{ color: "#819A91" }}
          >
            Meet the artists
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative w-full overflow-hidden mb-5" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                </div>
                <p
                  className="text-[17px] font-normal mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}
                >
                  {member.name}
                </p>
                <p
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ color: "#819A91" }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
