import * as React from 'react';

const SvgSuccess = (
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
    className="success_svg__icon"
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
      d="M512 958C265.681 958 66 758.319 66 512S265.681 66 512 66s446 199.681 446 446-199.681 446-446 446zm-21.976-285.027l292.547-292.547L740.145 338 447.598 630.547 284.426 467.375 242 509.802 447.768 715.57l42.426-42.427-.17-.17z"
      fill="#07bc0c"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgSuccess);
export default ForwardRef;