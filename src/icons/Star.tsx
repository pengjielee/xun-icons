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
      <path
        d="M620.16 409.696L512 76.96 403.808 409.696H51.392l285.6 204.704-109.664 332.64L512 740.704 796.64 947.04 687.008 614.4l285.6-204.704H620.16zm34.464 215.392l76.608 232.352-219.2-158.88L292.8 857.44l84.48-256.16-20.384-14.592L157.6 443.84h271.072l83.392-256.512 83.36 256.512h271.072L646.848 601.28l7.84 23.808z"
        fill="#bfbfbf"
      />
    </svg>
  );
};

export default SvgStar;
