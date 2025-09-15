interface FacebookIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: "black" | "white";
}

const FacebookIcon = ({
  width = 29,
  height = 29,
  className = "",
  color = "black",
}: FacebookIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 29"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_26_912)">
        <path
          d="M14.2125 0.218628C6.48397 0.218628 0.218658 6.48394 0.218658 14.2125C0.218658 21.941 6.48397 28.2064 14.2125 28.2064C21.9411 28.2064 28.2064 21.941 28.2064 14.2125C28.2064 6.48394 21.9411 0.218628 14.2125 0.218628ZM19.5696 7.7622H16.9457C16.2212 7.7622 15.6338 8.34961 15.6338 9.07412V11.698H19.5696L19.1322 15.1964H15.6338V23.9426H12.1353V15.1964H8.96482V11.698H12.1353V9.00328C12.1353 6.43201 14.2998 4.39099 16.8667 4.54208L19.5696 4.70104V7.7622Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_26_912">
          <rect width="28.425" height="28.425" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
