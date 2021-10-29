import * as React from 'react';

const SvgLocation = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="location_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path
        d="M512 67.84c97.92 0 190.72 38.4 259.84 107.52C841.6 245.12 880 337.28 880 435.2c0 98.56-37.76 190.72-107.52 260.48L512 956.16 251.52 695.68c-143.36-143.36-143.36-376.96 0-520.32C321.28 106.24 413.44 67.84 512 67.84zm0 64c-81.28 0-157.44 31.36-215.04 88.96-118.4 118.4-118.4 311.68 0 430.08L512 865.92l215.04-215.04C784 593.28 816 517.12 816 435.84S784.64 278.4 727.04 220.8A301.536 301.536 0 00512 131.84zm63.36 181.76l45.44 45.44-63.36 63.36 63.36 63.36-45.44 44.8L512 467.2l-63.36 63.36-45.44-44.8 63.36-63.36-63.36-63.36 45.44-45.44L512 376.96l63.36-63.36z"
        fill="#e74c3c"
      />
    </svg>
  );
};

export default SvgLocation;
