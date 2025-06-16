"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import type React from "react";

const TestimonialCard = ({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) => (
  <Card className="bg-surface-card p-6 h-full flex flex-col">
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <blockquote className="text-gray-700 italic mb-4 flex-grow">
      "{quote}"
    </blockquote>
    <div>
      <p className="font-semibold text-text-primary">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </Card>
);

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Bell Contractors transformed our outdated kitchen into a dream space. Their professionalism and attention to detail were outstanding from start to finish.",
      name: "Sarah L.",
      role: "Homeowner",
    },
    {
      quote:
        "As a property manager, I rely on prompt and quality service. Bell Contractors consistently delivers for all our maintenance and turnover needs. Highly recommended!",
      name: "John B.",
      role: "Property Manager",
    },
    {
      quote:
        "The team handled our full home renovation with expertise. They stayed on schedule, communicated clearly, and the results are stunning. We couldn't be happier.",
      name: "Emily & Mark T.",
      role: "Homeowners",
    },
  ];
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-brand-light-blue-gray"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Don't take our word for it.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
