import * as React from 'react';

const SvgInfo = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="info_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path
        d="M480 437.344h-64v64h64v245.312h64V437.344h-64zM512 64c246.4 0 448 201.6 448 448S758.4 960 512 960 64 758.4 64 512 265.6 64 512 64zm0 224a53.344 53.344 0 100 106.656A53.344 53.344 0 00512 288z"
        fill="#3498db"
      />
    </svg>
  );
};

export default SvgInfo;
