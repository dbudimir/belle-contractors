"use client";

import Image from "next/image";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";

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
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;

  ${(props) => props.theme.mediaQueries.desktop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const HeroCopyContainer = styled.div`
  z-index: 10;
  max-width: 600px;
  position: relative;
`;

const HeroSectionAnimation = styled.div`
  position: absolute;
  top: 45%;
  left: 25%;
  height: 40vw;
  min-height: 500px;
  background-color: rgba(255, 255, 255, 0.75);
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 200vw;
  z-index: 2;
  backdrop-filter: blur(2px);
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
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 1;
  color: #3c3744; /* text-brand-dark-gray-purple */
  margin-bottom: 1rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 3.5rem;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    font-size: 2.5rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.25rem;
  color: #3e3fa2; /* text-accent-primary */
  max-width: 75%;
  margin-bottom: 1.5rem;
  font-weight: 400;
  font-family: Helvetica, Arial, sans-serif;
  color: #3c3744; /* text-brand-dark-gray-purple */

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 1.125rem;
  }
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

const FlexHeroSection: React.FC = () => {
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
          <StyledH1>Drive property value</StyledH1>
          <StyledP>
            Reliable repair and renovation services that boost rental income,
            create value and reduce long-term maintenance.
          </StyledP>
          <Button
            onClick={() => scrollToAnchor("contact")}
            text="Contact Us"
            rightIcon={<ChevronRightIcon />}
          />
        </HeroCopyContainer>
      </HeroContainer>
    </FlexHeroSectionContainer>
  );
};

export default FlexHeroSection;
