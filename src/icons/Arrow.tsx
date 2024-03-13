import * as React from "react";

const SvgArrow = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="arrow_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path d="M290.91 983.273a29.09 29.09 0 01-20.597-49.571L689.92 512 271.01 90.298a29.09 29.09 0 0141.31-40.96L751.825 491.52a29.09 29.09 0 010 40.96L312.32 974.662a28.975 28.975 0 01-21.41 8.61z" />
    </svg>
  );
};

export default SvgArrow;
