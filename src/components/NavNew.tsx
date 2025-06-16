import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";
import Link from "next/link";
import { Phone } from "lucide-react";

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
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 52px;
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

  &:hover {
    color: #232166;
  }
`;

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavContainer $hasBackground={hasBackground}>
      <NavContent>
        <Link href="/">
          <Image
            src="/bell-contractors-logo.png"
            alt="Belle Contractors Logo"
            width={200}
            height={100}
          />
        </Link>

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
          <Phone className="h-4 w-4" />
          <span>270-925-1461</span>
        </PhoneLink>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Button
            text="Contact Us"
            onClick={handleContactClick}
            color="#232166"
            size="sm"
          />

          {/* <MobileMenuButton onClick={toggleMobileMenu}>
            <HamburgerIcon />
          </MobileMenuButton> */}
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
  );
};

export default Nav;
