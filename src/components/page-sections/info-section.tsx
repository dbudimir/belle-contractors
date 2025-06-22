"use client";

import type React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CheckCircle } from "lucide-react"; // Using Lucide for icons
import Button from "@/components/Button";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";

interface InfoSectionProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  subHeadline?: string | React.ReactNode;
  points: string[];
  imagePosition: "left" | "right";
  customContent?: React.ReactNode;
  backgroundColor?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  noBottomPadding?: boolean;
}

const SectionWrapper = styled.section<{
  $bgColor?: string;
  $noBottomPadding?: boolean;
}>`
  padding: 6rem 2rem
    ${({ $noBottomPadding }) => ($noBottomPadding ? "0" : "6rem")} 2rem;
  background-color: ${({ $bgColor, theme }) =>
    $bgColor || theme.colors.background};

  &:nth-child(even) {
    background-color: ${({ $bgColor, theme }) =>
      $bgColor || theme.colors.background};
  }
`;

const ContentContainer = styled.div<{ $imagePosition: "left" | "right" }>`
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  gap: 3rem;
  flex-direction: ${({ $imagePosition }) =>
    $imagePosition === "left" ? "row" : "row-reverse"};

  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px; /* Ensure image has some base width */

  img {
    width: 100%;
    max-width: 600px;
    max-height: 400px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    max-width: 400px;
    margin-bottom: 1.5rem;
  }
`;

const TextWrapper = styled.div`
  flex: 1.2; /* Give text a bit more space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  ${({ theme }) => theme.mediaQueries.tablet} {
    align-items: center;
  }
`;

const Headline = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.15;
  max-width: 440px;

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 0 auto 1.5rem auto;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 1.75rem;
  }
`;

const SubHeadline = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const PointList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  max-width: 500px;
`;

const PointItem = styled.li`
  display: flex;
  align-items: flex-start;
  text-align: left;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  line-height: 1.6;

  svg {
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 0.75rem;
    margin-top: 0.2em; /* Align icon better with text */
    flex-shrink: 0; /* Prevent icon from shrinking */
  }
`;

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  imageAlt,
  headline,
  subHeadline,
  points,
  imagePosition,
  backgroundColor,
  buttonText,
  buttonOnClick,
  noBottomPadding,
}) => {
  return (
    <SectionWrapper
      $bgColor={backgroundColor}
      $noBottomPadding={noBottomPadding}
    >
      <ContentContainer $imagePosition={imagePosition}>
        <ImageWrapper>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={350}
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>
        <TextWrapper>
          <Headline>{headline}</Headline>
          {subHeadline && <SubHeadline>{subHeadline}</SubHeadline>}
          <PointList>
            {points.map((point, index) => (
              <PointItem key={index}>
                <CheckCircle size={20} />
                {point}
              </PointItem>
            ))}
          </PointList>
          {buttonText && (
            <Button
              text={buttonText}
              onClick={buttonOnClick || (() => scrollToAnchor("contact"))}
            />
          )}
        </TextWrapper>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default InfoSection;
