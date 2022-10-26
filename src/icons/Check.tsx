import * as React from "react";

const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M24 44a19.937 19.937 0 0014.142-5.858A19.937 19.937 0 0044 24a19.938 19.938 0 00-5.858-14.142A19.937 19.937 0 0024 4 19.938 19.938 0 009.858 9.858 19.938 19.938 0 004 24a19.937 19.937 0 005.858 14.142A19.938 19.938 0 0024 44z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M16 24l6 6 12-12"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgCheck;
