import * as React from "react";

const SvgAdd2 = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"
        stroke="#8a8a8a"
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <path
        d="M24 16v16M16 24h16"
        stroke="#8a8a8a"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgAdd2;
