import * as React from 'react';

const SvgDatabase = (
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
    className="database_svg__icon"
    viewBox="0 0 1087 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fontSize={size || 32}
    fill={fill || 'currentColor'}
    style={style}
    ref={svgRef}
  >
    <path
      d="M127.936 154.867a411.314 154.867 0 10822.629 0 411.314 154.867 0 10-822.629 0z"
      fill="#e74c3c"
    />
    <path
      d="M676.462 756.87l64.863-64.8c-59.554 10.17-127.744 16.696-199.964 16.696-224.911 0-412.401-62.689-412.401-104.652v209.111c0 75.994 184.675 137.276 412.401 137.276a1145.027 1145.027 0 00166.637-11.77l75.226-75.227L676.462 756.87zM543.344 634.499c227.79 0 412.402-62.817 412.402-140.474V279.988c0 42.987-187.554 107.082-412.402 107.082s-412.401-64.095-412.401-107.082v214.037c0 77.657 184.675 140.474 412.401 140.474z"
      fill="#e74c3c"
    />
    <path
      d="M1086.88 754.759l-52.197-52.198-108.874 108.937L819.11 704.864l-52.133 52.006 106.698 106.698-107.786 107.85 52.07 52.198 107.914-107.914 108.874 108.938 52.134-52.07-108.938-108.874 108.938-108.937z"
      fill="#e74c3c"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgDatabase);
export default ForwardRef;
