"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import type React from "react";

interface NavLink {
  href: string;
  label: string;
}

interface FooterSectionProps {
  scrollToSection: (id: string) => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-brand-dark-gray-purple text-brand-off-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[3fr_1fr] gap-8 mb-8">
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">
              Bell Contractors
            </h5>
            <p className="text-sm text-brand-off-white">
              Your trusted partner for quality construction and remodeling
              services.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h5>
            <ul className="space-y-2 text-sm text-brand-light-blue-gray">
              <li>
                <Phone className="inline h-4 w-4 mr-2" /> (555) 010-2030
              </li>
              <li>
                <Mail className="inline h-4 w-4 mr-2" />{" "}
                contact@bellcontractors.com
              </li>
              <li>
                <MapPin className="inline h-4 w-4 mr-2" /> 123 Construction Ave,
                Buildtown
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accent-secondary pt-8 text-center text-sm text-brand-light-blue-gray">
          <p>
            &copy; {new Date().getFullYear()} Bell Contractors. All Rights
            Reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
