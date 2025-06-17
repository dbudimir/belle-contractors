"use client";

import Image from "next/image";
import { Wrench, Briefcase, UserCheck, CheckCircle } from "lucide-react";
import styled from "styled-components";
import type React from "react";

// Styled Components
const Section = styled.section`
  padding: 6rem 0;
  background-color: #ffffff; /* surface-card */

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  ${(props) => props.theme.mediaQueries.desktop} {
    padding: 0 1.5rem;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 0 1rem;
  }
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #3c3744; /* text-primary */
  margin-bottom: 1rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 1.875rem;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledCard = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s ease;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;

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

const CardHeader = styled.h3`
  color: #3e3fa2; /* accent-primary */
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CardContent = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
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
                <service.icon />
              </IconWrapper>

              {/* Image Section */}
              <ImageWrapper>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </ImageWrapper>

              {/* Card Content */}
              <CardHeader>{service.title}</CardHeader>
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
