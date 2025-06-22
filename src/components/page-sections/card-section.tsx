"use client";

import styled from "styled-components";
import type React from "react";

interface CardData {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CardSectionProps {
  title: string;
  subtitle: string;
  cards: CardData[];
  backgroundColor?: string;
}

// Styled Components
const Section = styled.section<{ $bgColor?: string }>`
  padding: 6rem 0;
  background-color: ${({ $bgColor }) => $bgColor || "#f5f5f5"};

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
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #3c3744; /* text-primary */
  margin-bottom: 0.5rem;
  line-height: 1.2;

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

  ${(props) => props.theme.mediaQueries.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledCard = styled.div`
  text-align: center;
  background-color: #ffffff; /* white */
  transition: box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const StyledCardContent = styled.div`
  padding: 1.5rem;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ffffff; /* brand-white */
  color: #3e3fa2; /* accent-primary */
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  @keyframes iconRotateSpring {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  ${StyledCard}:hover & {
    animation: iconRotateSpring 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
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
        <Icon />
      </IconWrapper>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
    </StyledCardContent>
  </StyledCard>
);

const CardSection: React.FC<CardSectionProps> = ({
  title,
  subtitle,
  cards,
  backgroundColor,
}) => {
  return (
    <Section $bgColor={backgroundColor}>
      <Container>
        <HeaderWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </HeaderWrapper>
        <Grid>
          {cards.map((card, index) => (
            <ServiceTile
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default CardSection;
