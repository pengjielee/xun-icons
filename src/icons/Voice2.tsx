import * as React from "react";

const SvgVoice2 = (props: React.SVGProps<SVGSVGElement>) => {
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
      <rect
        x={17}
        y={4}
        width={14}
        height={27}
        rx={7}
        stroke="#8a8a8a"
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <path
        d="M9 23c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15M24 38v6"
        stroke="#8a8a8a"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgVoice2;
