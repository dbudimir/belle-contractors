import styled from "styled-components";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  size?: ButtonSize;
  text: string;
  onClick?: () => void;
  color?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizeConfig = {
  sm: {
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
    cornerWidth: "20px",
    cornerHeight: "10px",
    borderWidth: "2px",
    offset: "4px",
  },
  md: {
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
    cornerWidth: "25px",
    cornerHeight: "12px",
    borderWidth: "3px",
    offset: "6px",
  },
  lg: {
    fontSize: "1.25rem",
    padding: "1rem 2rem",
    cornerWidth: "30px",
    cornerHeight: "15px",
    borderWidth: "4px",
    offset: "8px",
  },
};

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
  transition: all 0.2s ease;
  width: max-content;
  border-radius: 2px;
  border-top-right-radius: ${({ $size }) => sizeConfig[$size].cornerRadius};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 0.6 : 0.9)};
    transform: ${({ $disabled }) => ($disabled ? "none" : "translateY(-1px)")};
    box-shadow: ${({ $disabled }) =>
      $disabled ? "none" : "0 4px 12px rgba(35, 33, 102, 0.3)"};
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
      {text}
    </StyledButton>
  );
}
