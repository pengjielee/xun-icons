import * as React from "react";

const SvgZoomIn = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill={fill || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      fontSize={size || 32}
      style={style}
    >
      <path
        d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M21 15v12M15.016 21.016L27 21M33.222 33.222l8.485 8.485"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgZoomIn;
