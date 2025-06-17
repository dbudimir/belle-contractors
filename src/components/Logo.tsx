import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  alt = "Belle Contractors Logo",
}) => {
  const getDimensions = () => {
    const aspectRatio = 1356 / 423; // ~3.206

    switch (size) {
      case "sm":
        return { width: 100, height: Math.round(100 / aspectRatio) }; // 100 x 31
      case "md":
        return { width: 150, height: Math.round(150 / aspectRatio) }; // 150 x 47
      case "lg":
        return { width: 200, height: Math.round(200 / aspectRatio) }; // 200 x 62
      default:
        return { width: 150, height: Math.round(150 / aspectRatio) };
    }
  };

  const { width, height } = getDimensions();

  return (
    <Image
      src="/bell-contractors-logo.png"
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Logo;
