import * as React from "react";

const SvgClose2 = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      data-spm-anchor-id="a313x.7781069.0.i0"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path d="M810.667 273.493l-60.16-60.16L512 451.84 273.493 213.333l-60.16 60.16L451.84 512 213.333 750.507l60.16 60.16L512 572.16l238.507 238.507 60.16-60.16L572.16 512z" />
    </svg>
  );
};

export default SvgClose2;
