import * as React from "react";

const SvgStar = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="star_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path d="M0 384h1024l-832 640L512 0l320 1024z" fill="#dbdbdb" />
    </svg>
  );
};

export default SvgStar;
