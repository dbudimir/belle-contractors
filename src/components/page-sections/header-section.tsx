"use client";

import Image from "next/image";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";
import type React from "react";
import styled from "styled-components";

interface HeaderSectionProps {
  title: React.ReactNode;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
  buttonOnClick?: () => void;
}

const HeaderSectionContainer = styled.section`
  position: relative;
  background-color: white;
  color: #3e3fa2;
  padding: 120px 0 80px;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  text-align: center;

  ${(props) => props.theme.mediaQueries.desktop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const HeaderCopyContainer = styled.div`
  z-index: 10;
  max-width: 800px;
  max-width: 550px;

  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSectionAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
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
  object-position: center;
`;

const StyledH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: #3c3744;
  margin-bottom: 1.5rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 2.75rem;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    font-size: 2.25rem;
  }
`;

const StyledSubtitle = styled.p`
  font-size: 1.375rem;
  color: #3c3744;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 1.25rem;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    font-size: 1.125rem;
  }
`;

const ChevronRightIcon = styled(ChevronRight)`
  margin-left: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
`;

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  buttonOnClick,
}) => {
  const handleButtonClick = () => {
    if (buttonOnClick) {
      buttonOnClick();
    } else {
      scrollToAnchor("contact");
    }
  };

  return (
    <HeaderSectionContainer>
      {/* Background Image */}
      <BackgroundImageWrapper>
        <BackgroundImage
          src={backgroundImage}
          alt="Professional handyman services background"
          fill
          priority
        />
      </BackgroundImageWrapper>

      {/* Animation Layer */}
      <HeaderSectionAnimation />

      {/* Content */}
      <HeaderContainer>
        <HeaderCopyContainer>
          <StyledH1>{title}</StyledH1>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <Button onClick={handleButtonClick} text={buttonText} />
        </HeaderCopyContainer>
      </HeaderContainer>
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
