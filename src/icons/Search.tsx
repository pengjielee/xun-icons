import * as React from 'react';

const SvgSearch = (
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
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
      d="M991.39 916.394L776.428 701.429c55.825-71.834 89.093-162.097 89.093-260.135 0-234.275-189.93-424.227-424.227-424.227-234.297-.001-424.226 189.95-424.226 424.226 0 234.297 189.93 424.227 424.228 424.227 98.035 0 188.298-33.27 260.133-89.094L916.393 991.39c20.724 20.723 54.295 20.723 74.998 0 20.722-20.703 20.722-54.275 0-74.997zM123.139 441.293c0-175.712 142.443-318.173 318.156-318.173 175.71 0 318.175 142.46 318.175 318.173 0 175.714-142.464 318.176-318.175 318.176-175.713 0-318.156-142.461-318.156-318.176z"
      fill="#8a8a8a"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgSearch);
export default ForwardRef;