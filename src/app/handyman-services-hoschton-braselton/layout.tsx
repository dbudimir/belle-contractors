import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Handyman Services in Hoschton & Braselton, GA | Belle Contractors",
  description:
    "Expert handyman services in Hoschton and Braselton, Georgia. From repairs to installations, interior/exterior renovations, and home maintenance. Licensed, insured, and reliable.",
  keywords: [
    "handyman services Hoschton",
    "handyman services Braselton",
    "home repairs Hoschton GA",
    "home maintenance Braselton GA",
    "interior renovations Georgia",
    "exterior repairs Georgia",
    "professional handyman",
    "licensed contractor",
  ],
  openGraph: {
    title: "Professional Handyman Services in Hoschton & Braselton, GA",
    description:
      "Expert handyman services for all your home repair and renovation needs in Hoschton and Braselton, Georgia.",
    url: "https://bellecontractors.com/handyman-services-hoschton-braselton",
    siteName: "Belle Contractors",
    images: [
      {
        url: "/images/construction-4.jpg",
        width: 1200,
        height: 630,
        alt: "Professional handyman services in Hoschton and Braselton",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Handyman Services in Hoschton & Braselton, GA",
    description:
      "Expert handyman services for all your home repair and renovation needs in Hoschton and Braselton, Georgia.",
    images: ["/images/construction-4.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical:
      "https://bellecontractors.com/handyman-services-hoschton-braselton",
  },
};

export default function HandymanServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
