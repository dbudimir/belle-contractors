"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Users, RefreshCw, ThumbsUp, ChevronRight } from "lucide-react"
import type React from "react"

interface RemodelingServicesSectionProps {
  scrollToSection: (id: string) => void
}

const RemodelingServicesSection: React.FC<RemodelingServicesSectionProps> = ({ scrollToSection }) => {
  return (
    <section
      id="remodeling-services"
      className="relative bg-brand-dark-gray-purple text-brand-off-white py-20 md:py-32"
    >
      <Image
        src="/placeholder.svg?height=800&width=1200"
        alt="Modern home renovation background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Reliable, End-to-End Remodeling Services
        </h2>
        <p className="text-lg sm:text-xl text-brand-off-white max-w-3xl mx-auto mb-8">
          We manage every phase of your remodeling project with precision and care, from initial design to final
          walkthrough.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-4xl mx-auto mb-10">
          {[
            { icon: Home, text: "Kitchen, bathroom, and whole-home renovations" },
            { icon: Users, text: "Licensed, insured, and experienced teams" },
            { icon: RefreshCw, text: "Clear timelines and proactive project updates" },
            { icon: ThumbsUp, text: "Commitment to quality craftsmanship and satisfaction" },
          ].map((item) => (
            <div key={item.text} className="flex items-start space-x-3 p-4 bg-accent-primary bg-opacity-50 rounded-lg">
              <item.icon className="h-6 w-6 text-brand-light-blue-gray mt-1 flex-shrink-0" />
              <span className="text-brand-off-white">{item.text}</span>
            </div>
          ))}
        </div>
        <Button
          size="lg"
          onClick={() => scrollToSection("contact")}
          className="bg-brand-white text-accent-primary hover:bg-brand-light-blue-gray"
        >
          Start Your Remodel <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
export default RemodelingServicesSection
