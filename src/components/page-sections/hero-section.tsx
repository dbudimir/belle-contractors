"use client";

import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";
import type React from "react";
import styled from "styled-components";

const HeroSectionContainer = styled.section`
  position: relative;
  background-color: white;
  color: #3e3fa2;
  padding: 20px 0;
  min-height: 600px;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const HeroCopyContainer = styled.div`
  z-index: 10;
  max-width: 700px;
  position: relative;
`;

const HeroSectionAnimation = styled.div`
  position: absolute;
  top: 40%;
  left: 25%;
  height: 40vw;
  min-height: 500px;
  background-color: rgba(255, 255, 255, 0.75);
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 200vw;
  z-index: 2;
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;

const BackgroundImage = styled(Image)`
  position: absolute !important;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  top: -5%;
  height: 110%;
  object-position: 50% 45%;
`;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  @media (min-width: 640px) {
    font-size: 3.5rem;
  }
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  font-weight: 600;
  line-height: 1;
  color: #3c3744; /* text-brand-dark-gray-purple */
  margin-bottom: 0.5rem;
`;

const StyledH2 = styled.h2`
  font-size: 1.25rem;
  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  margin-bottom: 1.25rem;
  color: #3c3744; /* text-brand-dark-gray-purple */
  font-weight: 400;
  line-height: 1;
`;

const StyledP = styled.p`
  font-size: 1.125rem;
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
  color: #3e3fa2; /* text-accent-primary */
  max-width: 36rem;
  margin-bottom: 1.5rem;
  font-family: Helvetica, Arial, sans-serif;
  color: #3c3744; /* text-brand-dark-gray-purple */
`;

const ChevronRightIcon = styled(ChevronRight)`
  margin-left: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
`;

const FlexHeroSectionContainer = styled(HeroSectionContainer)`
  display: flex;
  align-items: center;
`;

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const FlexHeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <FlexHeroSectionContainer id="hero">
      {/* Background Image */}
      <BackgroundImageWrapper>
        <BackgroundImage
          src="/images/construction-4.jpg"
          alt="Construction background"
          fill
          priority
        />
      </BackgroundImageWrapper>

      {/* Animation Layer */}
      <HeroSectionAnimation />

      {/* Content */}
      <HeroContainer>
        <HeroCopyContainer>
          <StyledH1>Keep units moving</StyledH1>
          <StyledH2>We'll handle the rest</StyledH2>
          <StyledP>
            Reliable turnover, prep, and repair services for property managers,
            home and apartment owners, and more.
          </StyledP>
          <Button onClick={() => scrollToSection("contact")} text="Contact Us">
            Contact Us
            <ChevronRightIcon />
          </Button>
        </HeroCopyContainer>
      </HeroContainer>
    </FlexHeroSectionContainer>
  );
};

export default FlexHeroSection;
