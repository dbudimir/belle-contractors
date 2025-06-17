"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import type React from "react";
import styled from "styled-components";

interface FooterSectionProps {
  scrollToSection: (id: string) => void;
}

const FooterContainer = styled.footer`
  background-color: #3c3744; /* brand-dark-gray-purple */
  color: #fbfff1; /* brand-off-white */
  padding: 3rem 0;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CompanySection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  ${(props) => props.theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
`;

const LogoImage = styled(Image)`
  filter: brightness(0) invert(1); /* Make the logo white */
  margin-bottom: 0rem;
`;

const CompanyContent = styled.div``;

const CompanyTitle = styled.h5`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
`;

const CompanyDescription = styled.p`
  font-size: 0.875rem;
  color: #fbfff1; /* brand-off-white */
`;

const ContactSection = styled.div``;

const ContactTitle = styled.h5`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #b4c5e4; /* brand-light-blue-gray */
    display: flex;
    align-items: center;
  }
`;

const ContactItem = styled.li`
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid #3066be; /* accent-secondary */
  padding-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: #b4c5e4; /* brand-light-blue-gray */
`;

const FooterSection: React.FC<FooterSectionProps> = ({ scrollToSection }) => {
  return (
    <FooterContainer>
      <Container>
        <GridContainer>
          <CompanySection>
            <LogoContainer>
              <LogoImage
                src="/bell-contractors-logomark.png"
                alt="Belle Contractors Logo"
                width={50}
                height={60}
              />
            </LogoContainer>
            <CompanyContent>
              <CompanyTitle>Belle Contractors</CompanyTitle>
              <CompanyDescription>
                Your trusted partner for quality construction and remodeling
                services.
              </CompanyDescription>
            </CompanyContent>
          </CompanySection>
          <ContactSection>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactList>
              <ContactItem>
                <Phone /> 270-925-1461
              </ContactItem>
              <ContactItem>
                <Mail /> info@bellecontractors.com
              </ContactItem>
              <ContactItem>
                <MapPin /> 1470 Grand Brighton View, Hoschton, GA 30548
              </ContactItem>
            </ContactList>
          </ContactSection>
        </GridContainer>
        <BottomSection>
          <p>
            &copy; {new Date().getFullYear()} Belle Contractors. <br /> All
            Rights Reserved. Licensed & Insured.
          </p>
        </BottomSection>
      </Container>
    </FooterContainer>
  );
};

export default FooterSection;
