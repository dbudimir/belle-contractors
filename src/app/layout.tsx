import type { Metadata } from "next";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title:
    "Belle Contractors | Professional Construction & Property Maintenance Services in Georgia",
  description:
    "Expert construction, renovation, and property maintenance services in Georgia. Reliable turnover, prep, and repair services for property managers, homeowners, and apartment complexes. Licensed, insured, and trusted.",
  keywords: [
    "construction services Georgia",
    "property maintenance Georgia",
    "home renovation Georgia",
    "property management services",
    "apartment turnover services",
    "construction contractor Georgia",
    "home repair services",
    "professional contractors",
    "licensed contractor Georgia",
    "property renovation",
  ],
  openGraph: {
    title:
      "Belle Contractors | Professional Construction & Property Maintenance Services",
    description:
      "Expert construction, renovation, and property maintenance services in Georgia. Reliable turnover, prep, and repair services for property managers and homeowners.",
    url: "https://bellecontractors.com",
    siteName: "Belle Contractors",
    images: [
      {
        url: "/images/construction-1.jpg",
        width: 1200,
        height: 630,
        alt: "Professional construction and property maintenance services in Georgia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Belle Contractors | Professional Construction & Property Maintenance Services",
    description:
      "Expert construction, renovation, and property maintenance services in Georgia. Reliable turnover, prep, and repair services for property managers and homeowners.",
    images: ["/images/construction-1.jpg"],
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
    canonical: "https://bellecontractors.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
