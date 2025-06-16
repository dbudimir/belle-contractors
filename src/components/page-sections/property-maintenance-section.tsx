"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Wrench, Briefcase, UserCheck, CheckCircle } from "lucide-react";
import styled from "styled-components";
import type React from "react";

// Styled Components
const Section = styled.section`
  padding: 4rem 0;
  background-color: #ffffff; /* surface-card */

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #3c3744; /* text-primary */
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280; /* gray-600 */
  max-width: 32rem;
  margin: 0 auto;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled(Card)`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #b4c5e4; /* brand-light-blue-gray */
  color: #3e3fa2; /* accent-primary */
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 12rem;
  width: 100%;
`;

const CardHeader = styled(CardTitle)`
  color: #3e3fa2; /* accent-primary */
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`;

const Description = styled.p`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #6b7280; /* gray-600 */
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280; /* gray-500 */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const CheckIcon = styled(CheckCircle)`
  height: 1rem;
  width: 1rem;
  color: #10b981; /* green-500 */
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const PropertyMaintenanceSection: React.FC = () => {
  const services = [
    {
      image: "/images/construction-2.jpg",
      icon: Wrench,
      title: "On-Demand Repairs",
      description:
        "Quick and efficient solutions for unexpected issues, minimizing downtime and disruption.",
      features: [
        "Minor fixes & emergency response",
        "Appliance repair & installation",
      ],
    },
    {
      image: "/images/construction-3.jpg",
      icon: Briefcase,
      title: "Preventive Maintenance",
      description:
        "Customized plans to keep your property in top condition, preventing costly future repairs.",
      features: ["Regular inspections & upkeep", "Seasonal maintenance tasks"],
    },
    {
      image: "/images/construction-1.jpg",
      icon: UserCheck,
      title: "Tailored Solutions",
      description:
        "Services designed for homeowners, landlords, and property managers with flexible scheduling.",
      features: [
        "Solutions for all property types",
        "Fast response for urgent needs",
      ],
    },
  ];

  return (
    <Section id="property-maintenance">
      <Container>
        <HeaderWrapper>
          <Title>Versatile Contracting Services</Title>
          <Subtitle>
            From minor fixes to ongoing maintenance plans, count on us for
            reliable and efficient property care.
          </Subtitle>
        </HeaderWrapper>
        <Grid>
          {services.map((service, index) => (
            <StyledCard key={index}>
              {/* Icon positioned absolutely in top right */}
              <IconWrapper>
                <service.icon className="w-6 h-6" />
              </IconWrapper>

              {/* Image Section */}
              <ImageWrapper>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </ImageWrapper>

              {/* Card Content */}
              <CardHeader>
                <>{service.title}</>
              </CardHeader>
              <CardContent>
                <Description>{service.description}</Description>
                <FeatureList>
                  {service.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <CheckIcon />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </CardContent>
            </StyledCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default PropertyMaintenanceSection;
