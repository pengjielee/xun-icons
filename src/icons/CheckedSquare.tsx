import * as React from 'react';

const SvgCheckedSquare = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="checked-square_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path d="M128 185.6c0-31.83 25.77-57.6 57.6-57.6h652.8c31.83 0 57.6 25.77 57.6 57.6v652.8a57.6 57.6 0 01-57.6 57.6H185.6a57.6 57.6 0 01-57.6-57.6V185.6zm611.84 216.064a28.8 28.8 0 10-42.88-38.528L458.539 628.523l-151.766-152.15a28.8 28.8 0 00-40.746 40.704l173.226 173.654a28.8 28.8 0 0041.814-1.067l258.773-288z" />
    </svg>
  );
};

export default SvgCheckedSquare;
