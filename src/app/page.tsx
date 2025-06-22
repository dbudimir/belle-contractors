"use client";

import { Metadata } from "next";
// Import section components
import Nav from "@/components/Nav";
import HeroSection from "@/components/page-sections/hero-section";
import PropertyMaintenanceSection from "@/components/page-sections/property-maintenance-section";
import ContactSection from "@/components/page-sections/contact-section";
import FooterSection from "@/components/page-sections/footer-section";

import {
  RefreshCw,
  CheckCircle,
  Wrench,
  Briefcase,
  ShieldCheck,
  Search,
} from "lucide-react";
import CardSection from "@/components/page-sections/card-section";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";
import InfoSection from "@/components/page-sections/info-section";

const boostRentalRevenueSectionData = {
  imageSrc: "/images/rental-rates.png",
  imageAlt: "Renovated apartment space with new amenities",
  headline: "Boost rental revenue with no out-of-pocket expense",
  points: [
    "We help you make the right improvements, designed to maximize long-term value and increase monthly income.",
    "Make way for the premium amenities renters want.",
    "We reconfigure units to accommodate modern appliances, in-unit laundry, smart home features, and more.",
  ],
  imagePosition: "left" as "left" | "right",
};

const getMoreValueSectionData = {
  imageSrc: "/images/assessments.png",
  imageAlt: "Contractor and engineer reviewing blueprints",
  headline: "Get more value out of property assessments",
  points: [
    "Buying a property? Get a free property assessment and cut down on hidden repair costs.",
    "Make cost-effective decisions that prevent wasteful spending and protect long-term value.",
    "Save money with practical, effective solutions.",
  ],
  buttonText: "Get Free Assessment",
  buttonOnClick: () => scrollToAnchor("contact"),
  imagePosition: "right" as "left" | "right",
};

const cardSectionData = {
  title: "Specialized Property Solutions",
  subtitle:
    "Targeted services to meet the unique needs of property owners and managers.",
  cards: [
    {
      icon: RefreshCw,
      title: "Turnover & Maintenance",
      description:
        "Quick, reliable service to get units rent-ready between tenants.",
    },
    {
      icon: CheckCircle,
      title: "Tenant-Ready Repairs",
      description:
        "Fast fixes and improvements that meet move-in standards and keep tenants happy.",
    },
    {
      icon: Wrench,
      title: "Unit Prep & Repair",
      description:
        "From patching walls to installing fixtures—we handle everything before the next showing.",
    },
    {
      icon: Briefcase,
      title: "Real Estate Support",
      description:
        "End-to-end maintenance tailored for busy realtors and property teams.",
    },
    {
      icon: ShieldCheck,
      title: "Property Upkeep",
      description:
        "Ongoing maintenance to keep your properties in top shape, inside and out.",
    },
    {
      icon: Search,
      title: "Pre-Sale Inspections & Repairs",
      description:
        "Identify and address issues to maximize property value before listing.",
    },
  ],
};

export default function HomePage() {
  return (
    <div>
      <Nav />

      <header>
        <HeroSection />
      </header>

      <main>
        <section aria-label="Boost Rental Revenue">
          <InfoSection {...boostRentalRevenueSectionData} noBottomPadding />
        </section>

        <section aria-label="Get More Value">
          <InfoSection {...getMoreValueSectionData} />
        </section>

        <section aria-label="Property Maintenance Services">
          <PropertyMaintenanceSection />
        </section>

        <section aria-label="Our Services">
          <CardSection {...cardSectionData} />
        </section>

        <section aria-label="Contact Information">
          <ContactSection inquiryType="Property Management" />
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
