import * as React from 'react';

const SvgError = (
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
    className="error_svg__icon"
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
      d="M512 64.304C264.744 64.304 64.304 264.744 64.304 512c0 247.254 200.44 447.696 447.696 447.696S959.696 759.256 959.696 512 759.256 64.304 512 64.304zm198.492 600.963c12.491 12.491 12.49 32.73-.002 45.22-6.247 6.247-14.43 9.371-22.612 9.371s-16.364-3.121-22.61-9.366L512 557.223 358.73 710.492c-6.246 6.246-14.43 9.366-22.612 9.366s-16.366-3.125-22.612-9.37c-12.491-12.492-12.491-32.73 0-45.221L466.775 512 313.507 358.73c-12.491-12.491-12.49-32.73.002-45.22s32.73-12.496 45.221-.005L512 466.774l153.269-153.269c12.491-12.491 32.73-12.487 45.22.004s12.494 32.73.003 45.221L557.225 512l153.267 153.267z"
      fill="#e74c3c"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgError);
export default ForwardRef;