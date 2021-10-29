import * as React from 'react';

const SvgClose = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="close_svg__icon"
      viewBox="0 0 1045 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path
        d="M282.517 213.376l-45.354 45.163L489.472 512l-252.31 253.461 45.355 45.163 252.096-253.27 252.096 253.27 45.355-45.163-252.288-253.44L832.064 258.54l-45.355-45.163-252.096 253.248-252.096-253.227z"
        fill="#8a8a8a"
      />
    </svg>
  );
};

export default SvgClose;
