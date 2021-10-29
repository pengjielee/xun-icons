import * as React from 'react';

const SvgShop = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="shop_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path d="M984 210.85H212.35L188.84 93.3a40.1 40.1 0 00-39.22-32.16H20a20 20 0 000 40h129.62l21.94 109.71 25.91 129.55L241.38 560l8 40 23.51 117.55a40.11 40.11 0 0039.22 32.16h551.95a20 20 0 000-40H312.11L290.17 600h590.76a40 40 0 0038-27.35l103-309.12A40 40 0 00984 210.85zM880.93 560H282.17l-61.82-309.15H984zM315.82 885.04a77.82 77.82 0 10155.64 0 77.82 77.82 0 10-155.64 0zM706.52 885.04a77.82 77.82 0 10155.64 0 77.82 77.82 0 10-155.64 0z" />
    </svg>
  );
};

export default SvgShop;
