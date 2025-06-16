"use client";

// Import section components
import Nav, { navLinks } from "@/components/nav";
import NavNew from "@/components/NavNew";
import HeroSection from "@/components/page-sections/hero-section";
import PropertyMaintenanceSection from "@/components/page-sections/property-maintenance-section";
import WhatWeDoSection from "@/components/page-sections/what-we-do-section";
import ContactSection from "@/components/page-sections/contact-section";
import FooterSection from "@/components/page-sections/footer-section";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";

// Smooth scroll utility
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ConstructionSitePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <NavNew scrollToSection={scrollToAnchor} />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <PropertyMaintenanceSection />
        <WhatWeDoSection />

        {/* coming soon */}
        {/* <PortfolioSection />
        <TestimonialsSection /> */}
        <ContactSection />
      </main>

      <FooterSection scrollToSection={scrollToAnchor} />
    </div>
  );
}
