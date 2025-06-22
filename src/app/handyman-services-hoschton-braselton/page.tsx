"use client";

import HeaderSection from "@/components/page-sections/header-section";
import InfoSection from "@/components/page-sections/info-section";
import CardSection from "@/components/page-sections/card-section";
import ContactSection from "@/components/page-sections/contact-section";
import {
  Hammer,
  Wrench,
  Paintbrush,
  Home,
  Settings,
  Layers,
} from "lucide-react";
import FooterSection from "@/components/page-sections/footer-section";
import Nav from "@/components/Nav";

const handymanInteriorSectionData = {
  imageSrc: "/images/construction-3.jpg", // placeholder
  imageAlt: "Professional handyman working on interior renovations in Hoschton",
  headline: "Interior renovation & remodeling excellence",
  subHeadline:
    "From minor fixes to major improvements, we solve the problems that come with homeownership in Hoschton and Braselton.",
  points: [
    "Complete interior renovations including kitchen and bathroom remodeling, flooring installation, and custom carpentry work",
    "Professional drywall repair, painting, and finishing work to refresh any space in your home",
    "Skilled electrical and plumbing installations including fixture upgrades, outlet installation, and minor repairs",
    "Custom storage solutions, built-in shelving, and space optimization for better home organization",
  ],
  imagePosition: "left" as "left" | "right",
};

const handymanExteriorSectionData = {
  imageSrc: "/images/construction-5.png",
  imageAlt: "Professional handyman working on exterior home improvements",
  headline: "Exterior improvements & emergency services",
  subHeadline:
    "Protect your home with reliable exterior maintenance and emergency services when problems can't wait.",
  points: [
    "Deck repairs, fence fixes, siding touch-ups, and exterior cleaning services",
    "Emergency repairs for urgent issues that need immediate attention",
  ],
  imagePosition: "right" as "left" | "right",
  buttonText: "Schedule service today",
};

const handymanCardSectionData = {
  title: "Comprehensive Handyman Solutions",
  subtitle:
    "From quick fixes to complete renovations, we handle every aspect of home maintenance and improvement with professional expertise for Hoschton and Braselton residents.",
  cards: [
    {
      icon: Hammer,
      title: "General Repairs",
      description:
        "Drywall patching, door and window repairs, cabinet adjustments, and fixing leaky faucets or running toilets.",
    },
    {
      icon: Settings,
      title: "Installation Services",
      description:
        "TV mounting, shelf installation, light fixtures, ceiling fans, appliance hookups, and smart home device setup.",
    },
    {
      icon: Paintbrush,
      title: "Painting & Touch-ups",
      description:
        "Interior wall painting, baseboard and trim work, deck staining, and professional color consultation.",
    },
    {
      icon: Home,
      title: "Home Maintenance",
      description:
        "Gutter cleaning, power washing, HVAC filter replacement, caulking, weatherproofing, and seasonal upkeep.",
    },
    {
      icon: Wrench,
      title: "Assembly Services",
      description:
        "Furniture assembly, grills, playground sets, exercise equipment, and any complex item installation.",
    },
    {
      icon: Layers,
      title: "Flooring & Exterior",
      description:
        "Tile repair, vinyl and laminate installation, fence repair, deck maintenance, and minor landscaping.",
    },
  ],
};

export default function HandymanServicesPage() {
  return (
    <div>
      <Nav />
      <main>
        <HeaderSection
          title={
            <>
              Professional
              <br />
              Handyman Services
            </>
          }
          subtitle="Serving Hoschton, Braselton & Surrounding Areas"
          buttonText="Schedule Service Today"
          backgroundImage="/images/handyman-50-50.jpg" // placeholder
        />

        <InfoSection {...handymanInteriorSectionData} noBottomPadding />

        <InfoSection {...handymanExteriorSectionData} />

        <CardSection {...handymanCardSectionData} />

        <ContactSection
          title="Let's get it done."
          description="Whether you're planning a home renovation, need regular home maintenance, we're here to help."
          backgroundImageUrl="/images/construction-4.jpg"
          formPosition="left"
          inquiryType="Handyman Services"
        />
      </main>
      <FooterSection />
    </div>
  );
}
