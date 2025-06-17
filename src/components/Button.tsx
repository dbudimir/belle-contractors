import styled from "styled-components";
import { ReactElement } from "react";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  size?: ButtonSize;
  text: string;
  onClick?: () => void;
  color?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

const sizeConfig = {
  sm: {
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
    cornerWidth: "20px",
    cornerHeight: "10px",
    borderWidth: "2px",
    offset: "4px",
    iconSize: "16px",
    iconSpacing: "0.5rem",
  },
  md: {
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
    cornerWidth: "25px",
    cornerHeight: "12px",
    borderWidth: "3px",
    offset: "6px",
    iconSize: "18px",
    iconSpacing: "0.75rem",
  },
  lg: {
    fontSize: "1.25rem",
    padding: "1rem 2rem",
    cornerWidth: "30px",
    cornerHeight: "15px",
    borderWidth: "4px",
    offset: "8px",
    iconSize: "20px",
    iconSpacing: "1rem",
  },
};

const IconWrapper = styled.div<{ $size: ButtonSize }>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    width: ${({ $size }) => sizeConfig[$size].iconSize};
    height: ${({ $size }) => sizeConfig[$size].iconSize};
    flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const StyledButton = styled.button<{
  $size: ButtonSize;
  $color: string;
  $disabled?: boolean;
}>`
  font-family: "Helvetica", Arial, sans-serif;
  font-size: ${({ $size }) => sizeConfig[$size].fontSize};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;

  background: ${({ $color, $disabled }) => ($disabled ? "#9ca3af" : $color)};
  color: white;
  border: none;
  padding: ${({ $size }) => sizeConfig[$size].padding};
  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "pointer"} !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: max-content;
  border-radius: 2px;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 0.6 : 0.9)};
    transform: ${({ $disabled }) =>
      $disabled ? "none" : "translate3d(0, -1px, 0)"};
    box-shadow: ${({ $disabled }) =>
      $disabled ? "none" : "0 4px 12px rgba(35, 33, 102, 0.3)"};

    ${IconWrapper} {
      svg,
      img {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
  }

  &:active {
    transform: ${({ $disabled }) => ($disabled ? "none" : "translateY(0)")};
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 0.9em;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    font-size: 0.8em;
  }
`;

export default function Button({
  size = "md",
  text,
  onClick,
  color = "#3e3fa2",
  type = "button",
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <StyledButton
      $size={size}
      $color={color}
      $disabled={disabled}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {leftIcon && <IconWrapper $size={size}>{leftIcon}</IconWrapper>}
      {text}
      {rightIcon && <IconWrapper $size={size}>{rightIcon}</IconWrapper>}
    </StyledButton>
  );
}
