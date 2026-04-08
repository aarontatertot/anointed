import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      {/* Fixed header — overlays everything */}
      <SiteHeader />

      {/* Main content pushed below fixed header */}
      <main style={{ paddingTop: "50px" }}>
        {/* Hero: slideshow + brand panels */}
        <HeroSection />

        {/* Product grid: NEW ARRIVALS */}
        <ProductGrid />
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
