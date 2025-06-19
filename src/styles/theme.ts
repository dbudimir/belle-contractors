export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
} as const;

export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media (max-width: ${breakpoints.desktop}px)`,
} as const;

export const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#7928ca",
    background: "#ffffff",
    text: "#333333",
    accent: "#f81ce5",
  },
  breakpoints,
  mediaQueries,
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  maxWidth: "1200px",
};

export type Theme = typeof theme;
