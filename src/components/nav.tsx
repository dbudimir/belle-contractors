import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";
import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "./Logo";

const StyledLink = styled(Link)`
  display: inline-block;
  line-height: 0;
  text-decoration: none;
  border: none;
  padding: 0;
  margin: 0;
  height: auto;
`;

const MobilePhoneBar = styled.div`
  display: none;
  background-color: #3c3744;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1001;

  ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;

const MobilePhoneContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const MobilePhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b4c5e4;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.3s ease;

  svg {
    max-height: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const NavContainer = styled.nav<{ $hasBackground: boolean }>`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: ${(props) => (props.$hasBackground ? "blur(10px)" : "none")};
  box-shadow: ${(props) =>
    props.$hasBackground ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none"};

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 1rem;
    top: 40px; /* Height of mobile phone bar */
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 42px;
  gap: 2rem;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    display: none;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #232166;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;

  ${(props) => props.theme.mediaQueries.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  ${(props) => props.theme.mediaQueries.tablet} {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem 2rem 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const MobileNavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #232166;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  width: 100%;
  max-width: max-content;

  svg {
    max-height: 18px;
  }

  &:hover {
    color: #232166;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    display: none;
  }
`;

interface NavItemType {
  label: string;
  url: string;
}

const navItems: NavItemType[] = [];

const Nav: React.FC = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasBackground(scrollTop > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContactClick = () => {
    scrollToAnchor("contact");
  };

  return (
    <>
      <MobilePhoneBar>
        <MobilePhoneContent>
          <MobilePhoneLink href="tel:270-925-1461">
            <Phone />
            <span>270-925-1461</span>
          </MobilePhoneLink>
        </MobilePhoneContent>
      </MobilePhoneBar>

      <NavContainer $hasBackground={hasBackground}>
        <NavContent>
          <StyledLink href="/">
            <Logo size={isMobile ? "sm" : "md"} />
          </StyledLink>

          <div style={{ width: "100%", flexGrow: 1 }} />

          <NavItems>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.url}
                onClick={(e) => {
                  if (item.url.startsWith("#")) {
                    e.preventDefault();
                    scrollToAnchor(item.url.substring(1));
                  }
                }}
              >
                {item.label}
              </NavItem>
            ))}
          </NavItems>

          <PhoneLink href="tel:270-925-1461">
            <Phone />
            <span>270-925-1461</span>
          </PhoneLink>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Button
              text="Contact Us"
              onClick={handleContactClick}
              color="#3e3fa2"
              size="sm"
            />
          </div>
        </NavContent>

        <MobileMenu $isOpen={isMobileMenuOpen}>
          {navItems.map((item, index) => (
            <MobileNavItem
              key={`${item.label}-${index}`}
              href={item.url}
              onClick={(e) => {
                if (item.url.startsWith("#")) {
                  e.preventDefault();
                  scrollToAnchor(item.url.substring(1));
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </MobileNavItem>
          ))}
        </MobileMenu>
      </NavContainer>
    </>
  );
};

export default Nav;
