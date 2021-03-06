import * as React from "react";

const SvgArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="arrow-right_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path d="M593.45 512.128L360.065 278.613l45.29-45.226 278.614 278.762-278.635 278.464-45.226-45.269z" />
    </svg>
  );
};

export default SvgArrowRight;
