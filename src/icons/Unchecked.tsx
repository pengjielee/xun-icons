import * as React from 'react';

const SvgUnchecked = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="unchecked_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64zm0 832c-212.096 0-384-171.904-384-384s171.904-384 384-384 384 171.904 384 384-171.904 384-384 384z" />
    </svg>
  );
};

export default SvgUnchecked;
