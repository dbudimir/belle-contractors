import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { scrollToAnchor } from "@/helpers/scrollToAnchor";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

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
  background-color: #3c3744;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1001;
  display: block;

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 0.5rem 1rem;
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
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    max-height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const NavContainer = styled.nav<{ $hasBackground: boolean }>`
  position: sticky;
  top: 40px; /* Height of phone bar */
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
  min-height: 42px;
  gap: 2rem;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    display: none;
  }
`;

const NavItem = styled.a<{ $isActive?: boolean }>`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;

  ${(props) =>
    props.$isActive &&
    `
    color: #232166;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #232166;
      border-radius: 1px;
    }
  `}

  &:hover {
    color: #232166;
    transform: translateY(-1px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;
  transition: all 0.3s ease;

  ${(props) => props.theme.mediaQueries.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #232166;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
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
    padding: 1rem 2rem 3rem;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const MobileNavItem = styled.a<{ $isActive?: boolean }>`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$isActive &&
    `
    color: #232166;
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #232166;
      border-radius: 1px;
    }
  `}

  &:hover {
    color: #232166;
    padding-left: 0.5rem;
    background-color: rgba(35, 33, 102, 0.05);
  }

  &:active {
    background-color: rgba(35, 33, 102, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const MobileNavSection = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const MobileNavSectionTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
`;

interface NavItemType {
  label: string;
  url: string;
}

interface NavSectionType {
  title: string;
  items: NavItemType[];
}

const navSections: NavSectionType[] = [
  {
    title: "Services",
    items: [
      {
        label: "Handyman Services",
        url: "/handyman-services-hoschton-braselton",
      },
    ],
  },
  {
    title: "Property Solutions",
    items: [
      {
        label: "Property Management",
        url: "/",
      },
    ],
  },
];

const Nav: React.FC = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasBackground(scrollTop > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

          <div style={{ flexGrow: 1 }} />

          <NavItems>
            {navSections.map((section, sectionIndex) => (
              <NavSection key={sectionIndex}>
                {section.items.map((item, itemIndex) => (
                  <NavItem
                    key={itemIndex}
                    href={item.url}
                    $isActive={pathname === item.url}
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
              </NavSection>
            ))}
          </NavItems>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Button
              text="Contact Us"
              onClick={handleContactClick}
              color="#3e3fa2"
              size="sm"
            />
          </div>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </MobileMenuButton>
        </NavContent>

        <MobileMenu $isOpen={isMobileMenuOpen}>
          {navSections.map((section, sectionIndex) => (
            <MobileNavSection key={sectionIndex}>
              <MobileNavSectionTitle>{section.title}</MobileNavSectionTitle>
              {section.items.map((item, itemIndex) => (
                <MobileNavItem
                  key={`${item.label}-${itemIndex}`}
                  href={item.url}
                  $isActive={pathname === item.url}
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
            </MobileNavSection>
          ))}
        </MobileMenu>
      </NavContainer>
    </>
  );
};

export default Nav;
