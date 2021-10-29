import * as React from 'react';

const SvgUncheckedSquare = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="unchecked-square_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || 'currentColor'}
      style={style}
    >
      <path d="M806.4 213.333H217.6a3.84 3.84 0 00-4.267 4.267v588.8a3.84 3.84 0 004.267 4.267h588.8a3.84 3.84 0 004.267-4.267V217.6a3.84 3.84 0 00-4.267-4.267zm46.933 635.734a4.693 4.693 0 01-4.693 4.693H174.933a4.693 4.693 0 01-4.693-4.693V174.933a4.693 4.693 0 015.12-4.266h673.707a4.693 4.693 0 014.693 4.693z" />
    </svg>
  );
};

export default SvgUncheckedSquare;
