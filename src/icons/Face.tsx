import * as React from "react";

const SvgFace = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="face_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zm0 64c-212.064 0-384 171.936-384 384s171.936 384 384 384 384-171.936 384-384-171.936-384-384-384zm160 544a32 32 0 010 64H352a32 32 0 010-64h320zM352 384a64 64 0 110 128 64 64 0 010-128zm320 0a64 64 0 110 128 64 64 0 010-128z" />
    </svg>
  );
};

export default SvgFace;
