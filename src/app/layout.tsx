"use client";

import type { Metadata } from "next";
import { Archivo_Black, Archivo } from "next/font/google";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import StyledComponentsRegistry from "@/app/registry";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
  weight: "400",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const metadata: Metadata = {
  title: "Bell Contractors",
  description:
    "Reliable turnover, prep, and repair services for property managers, home and apartment owners, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${archivoBlack.className} ${archivo.variable} ${archivo.className}`}
      >
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
