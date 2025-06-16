"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import type React from "react"

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      src: "/placeholder.svg?height=300&width=400",
      title: "Modern Kitchen Overhaul",
      type: "Kitchen Remodel",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      title: "Luxury Bathroom Upgrade",
      type: "Bathroom Renovation",
    },
    { src: "/placeholder.svg?height=300&width=400", title: "Spacious Home Addition", type: "Whole Home" },
    { src: "/placeholder.svg?height=300&width=400", title: "Office Space Fit-out", type: "Commercial" },
    {
      src: "/placeholder.svg?height=300&width=400",
      title: "Apartment Unit Turnover",
      type: "Property Maintenance",
    },
    { src: "/placeholder.svg?height=300&width=400", title: "Exterior Home Repaint", type: "Painting" },
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-surface-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Built on Trust, Proven by Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our portfolio showcases successful remodels and upgrades, reflecting our commitment to quality and client
            satisfaction.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src={project.src || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-accent-primary mb-1">{project.title}</h3>
                <p className="text-sm text-accent-secondary">{project.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-accent-primary text-accent-primary hover:bg-brand-light-blue-gray hover:text-accent-secondary"
            size="lg"
          >
            View Full Project Gallery <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500">
          * Project gallery can feature before-and-after images in a slider or masonry grid.
        </p>
      </div>
    </section>
  )
}
export default PortfolioSection
