import Image from "next/image";
import Nav from "@/components/Nav";

const images = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=80&grayscale",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80&grayscale",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&grayscale",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&grayscale",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&grayscale",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&grayscale",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80&grayscale",
];

export default function Gallery() {
  return (
    <>
      <Nav />
      <main className="pt-20" style={{ backgroundColor: "#EEEFE0" }}>
        <div className="px-6 py-10">
          <p
            className="text-[11px] tracking-[0.4em] uppercase"
            style={{ color: "#819A91" }}
          >
            Gallery
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
              style={{ aspectRatio: i % 5 === 0 ? "3/4" : "2/3" }}
            >
              <Image
                src={src}
                alt="Gallery"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              {/* Sage overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: "rgba(129,154,145,0.25)" }}
              />
            </div>
          ))}
        </div>

        <div className="h-20" />
      </main>
    </>
  );
}
