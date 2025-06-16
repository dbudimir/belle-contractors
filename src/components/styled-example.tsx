"use client";

import styled from "styled-components";

// Example styled components
const StyledButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

const StyledTitle = styled.h2`
  color: #2d3748;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const StyledText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
`;

// Example component using styled-components
export function StyledExample() {
  return (
    <StyledCard>
      <StyledTitle>Styled Components Example</StyledTitle>
      <StyledText>
        This is an example component using styled-components. It demonstrates
        how you can create reusable styled components with CSS-in-JS.
      </StyledText>
      <StyledButton onClick={() => alert("Styled Components is working!")}>
        Click Me
      </StyledButton>
    </StyledCard>
  );
}

// Example of styled components with props
const DynamicButton = styled.button<{ variant?: "primary" | "secondary" }>`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "primary"
      ? `
      background: #3182ce;
      color: white;
      &:hover { background: #2c5282; }
    `
      : `
      background: #e2e8f0;
      color: #2d3748;
      &:hover { background: #cbd5e0; }
    `}
`;

export function DynamicStyledExample() {
  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
      <DynamicButton variant="primary">Primary Button</DynamicButton>
      <DynamicButton variant="secondary">Secondary Button</DynamicButton>
    </div>
  );
}
