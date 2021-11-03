import * as React from "react";

const SvgKeyboard = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="keyboard_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path d="M896 192H192a64 64 0 00-64 64v448a64 64 0 0064 64h704a64 64 0 0064-64V256a64 64 0 00-64-64zm0 512H192V256h704v448zM704 320h-64v64h64v-64zm-64 128h-64v64h64v-64zm128-128h64v64h-64v-64zm64 256h-64v64h64v-64zm-448 0h320v64H384v-64zm448-128H704v64h128v-64zM512 320h64v64h-64v-64zm0 128h-64v64h64v-64zM256 576h64v64h-64v-64zm0-256h64v64h-64v-64zm192 0h-64v64h64v-64zM256 448h128v64H256v-64z" />
    </svg>
  );
};

export default SvgKeyboard;
