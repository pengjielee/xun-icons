import * as React from "react";

const SvgVoice = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path
        fill="#fff"
        fillOpacity={0.01}
        fillRule="evenodd"
        d="M0 0h48v48H0z"
      />
      <g transform="translate(4 4)">
        <circle
          stroke="#8a8a8a"
          strokeWidth={3}
          fill="none"
          strokeLinejoin="round"
          cx={20}
          cy={20}
          r={20}
        />
        <g transform="translate(11 10)">
          <circle fill="#8a8a8a" cx={2} cy={9.899} r={2} fillRule="evenodd" />
          <path
            d="M6.95 14.85A6.978 6.978 0 009 9.9a6.978 6.978 0 00-2.05-4.95M11.9 19.799a13.956 13.956 0 004.1-9.9C16 6.034 14.433 2.534 11.9 0"
            stroke="#8a8a8a"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
};

export default SvgVoice;
