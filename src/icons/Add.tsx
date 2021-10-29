import * as React from 'react';

const SvgAdd = (
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
    className="add_svg__icon"
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
      d="M863.328 482.56l-317.344-1.12V162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32v318.4l-322.368-1.152h-.096c-17.632 0-31.936 14.24-32 31.904-.096 17.664 14.208 32.032 31.872 32.096l322.592 1.152v319.168c0 17.696 14.336 32 32 32s32-14.304 32-32V545.44l317.088 1.12h.128c17.632 0 31.936-14.24 32-31.904.064-17.664-14.24-32.032-31.872-32.096z"
      fill="#bfbfbf"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgAdd);
export default ForwardRef;
