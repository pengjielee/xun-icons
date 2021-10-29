import * as React from 'react';

const SvgBack = (
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
    className="back_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fontSize={size || 32}
    fill={fill || 'currentColor'}
    style={style}
    ref={svgRef}
  >
    <path
      d="M608 736c-6.4 0-19.2 0-25.6-6.4l-192-192c-6.4-12.8-6.4-38.4 0-51.2l192-192c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L460.8 512l166.4 166.4c12.8 12.8 12.8 32 0 44.8 0 12.8-12.8 12.8-19.2 12.8z"
      fill="#707070"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgBack);
export default ForwardRef;
