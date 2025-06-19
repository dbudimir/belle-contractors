"use client";

// Import section components
import Nav from "@/components/Nav";
import HeroSection from "@/components/page-sections/hero-section";
import PropertyMaintenanceSection from "@/components/page-sections/property-maintenance-section";
import WhatWeDoSection from "@/components/page-sections/what-we-do-section";
import ContactSection from "@/components/page-sections/contact-section";
import FooterSection from "@/components/page-sections/footer-section";
import InfoSections from "@/components/page-sections/info-sections";

export default function ConstructionSitePage() {
  return (
    <div>
      <Nav />

      <main>
        <HeroSection />
        <InfoSections />
        <PropertyMaintenanceSection />
        <WhatWeDoSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
