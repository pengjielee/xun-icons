import * as React from 'react';

const SvgChecked = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="checked_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path
        d="M512.456 57.344c251.35 0 455.111 203.76 455.111 455.112 0 251.35-203.76 455.111-455.111 455.111S57.344 763.807 57.344 512.456 261.104 57.344 512.456 57.344zM784.9 346.221c-5.843-5.446-16.215-5.954-22.996-1.075l-.315.233-301.232 228.097c-5.516 4.177-15.602 4.72-21.656 1.187l-.32-.194-114-71.015c-7.031-4.381-16.936-2.898-22.39 3.22l-.246.28-13.17 15.498c-5.553 6.533-4.628 15.625 1.52 21.587l.271.258L431.3 675.639c10.247 9.551 26.53 10.052 36.615.973l.313-.287 323.31-301.31c6.68-6.224 7.226-15.607 1.037-21.638l-.255-.241-7.42-6.915z"
        data-spm-anchor-id="a313x.7781069.0.i7"
        className="checked_svg__selected"
      />
    </svg>
  );
};

export default SvgChecked;
