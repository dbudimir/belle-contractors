"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  RefreshCw,
  CheckCircle,
  Wrench,
  Briefcase,
  ShieldCheck,
  Search,
} from "lucide-react";
import styled from "styled-components";
import type React from "react";

// Styled Components
const Section = styled.section`
  padding: 4rem 0;
  background-color: #b4c5e4; /* brand-light-blue-gray */

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

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled(Card)`
  text-align: center;
  background-color: #ffffff; /* white */
  transition: box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: 1.5rem;
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ffffff; /* brand-white */
  color: #3e3fa2; /* accent-primary */
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #3c3744; /* text-primary */
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: #6b7280; /* gray-600 */
  font-size: 0.875rem;
`;

const ServiceTile = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <StyledCard>
    <StyledCardContent>
      <IconWrapper>
        <Icon className="w-8 h-8" />
      </IconWrapper>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
    </StyledCardContent>
  </StyledCard>
);

const WhatWeDoSection: React.FC = () => {
  return (
    <Section id="what-we-do">
      <Container>
        <HeaderWrapper>
          <Title>Specialized Property Solutions</Title>
          <Subtitle>
            Targeted services to meet the unique needs of property owners and
            managers.
          </Subtitle>
        </HeaderWrapper>
        <Grid>
          <ServiceTile
            icon={RefreshCw}
            title="Turnover & Maintenance"
            description="Quick, reliable service to get units rent-ready between tenants."
          />
          <ServiceTile
            icon={CheckCircle}
            title="Tenant-Ready Repairs"
            description="Fast fixes and improvements that meet move-in standards and keep tenants happy."
          />
          <ServiceTile
            icon={Wrench}
            title="Unit Prep & Repair"
            description="From patching walls to installing fixtures—we handle everything before the next showing."
          />
          <ServiceTile
            icon={Briefcase}
            title="Real Estate Support"
            description="End-to-end maintenance tailored for busy realtors and property teams."
          />
          <ServiceTile
            icon={ShieldCheck}
            title="Property Upkeep"
            description="Ongoing maintenance to keep your properties in top shape, inside and out."
          />
          <ServiceTile
            icon={Search}
            title="Pre-Sale Inspections & Repairs"
            description="Identify and address issues to maximize property value before listing."
          />
        </Grid>
      </Container>
    </Section>
  );
};

export default WhatWeDoSection;
