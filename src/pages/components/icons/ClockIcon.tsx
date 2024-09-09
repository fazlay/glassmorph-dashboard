import * as React from "react";

interface IconProps {
  width?: string | number;
  height?: string | number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
}

const ClockIcon: React.FC<IconProps> = ({
  width = 15,
  height = 15,
  strokeColor = "currentColor",
  strokeWidth = 1.5,
  className = "size-2",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#00FFBE"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ClockIcon;
