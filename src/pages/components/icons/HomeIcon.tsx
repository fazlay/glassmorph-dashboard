import * as React from "react";

interface IconProps {
  width?: string | number;
  height?: string | number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
}

const HomeIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  strokeColor = "currentColor",
  strokeWidth = 1.5,
  className = "size-6",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    stroke={strokeColor}
    width={width}
    height={height}
    className={className}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
    />
  </svg>
);

export default HomeIcon;
