"use client";

// Import section components
import Nav from "@/components/Nav";
import HeroSection from "@/components/page-sections/hero-section";
import PropertyMaintenanceSection from "@/components/page-sections/property-maintenance-section";
import WhatWeDoSection from "@/components/page-sections/what-we-do-section";
import ContactSection from "@/components/page-sections/contact-section";
import FooterSection from "@/components/page-sections/footer-section";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";

export default function ConstructionSitePage() {
  return (
    <div>
      <Nav />

      <main>
        <HeroSection scrollToSection={scrollToAnchor} />
        <PropertyMaintenanceSection />
        <WhatWeDoSection />
        <ContactSection />
      </main>

      <FooterSection scrollToSection={scrollToAnchor} />
    </div>
  );
}
