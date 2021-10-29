import * as React from 'react';

const SvgWifi = (
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
    className="wifi_svg__icon"
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
      d="M471.04 819.2c-58.027 0-102.4-44.373-102.4-102.4s44.373-102.4 102.4-102.4 102.4 44.373 102.4 102.4-44.373 102.4-102.4 102.4zm0-170.667c-37.547 0-68.267 30.72-68.267 68.267s30.72 68.267 68.267 68.267 68.267-30.72 68.267-68.267-30.72-68.267-68.267-68.267zm180.907-95.573c-3.414 0-10.24 0-13.654-3.413-44.373-44.374-105.813-71.68-167.253-71.68s-122.88 23.893-167.253 71.68c-6.827 6.826-17.067 6.826-23.894 0-6.826-6.827-6.826-17.067 0-23.894 51.2-51.2 119.467-78.506 194.56-78.506s139.947 27.306 194.56 78.506c6.827 6.827 6.827 17.067 0 23.894-10.24 0-13.653 3.413-17.066 3.413zm143.36-112.64c-3.414 0-10.24 0-13.654-3.413-81.92-85.334-194.56-129.707-314.026-129.707s-228.694 44.373-310.614 129.707c-6.826 6.826-20.48 6.826-23.893 0s-6.827-17.067 0-23.894c187.733-187.733 488.107-187.733 675.84 0 6.827 6.827 6.827 17.067 0 23.894-3.413 3.413-10.24 3.413-13.653 3.413z"
      fill="#e74c3c"
    />
    <path
      d="M914.773 320.853c-3.413 0-10.24 0-13.653-3.413-238.933-238.933-628.053-238.933-870.4 0-6.827 6.827-17.067 6.827-23.893 0s-6.827-17.067 0-23.893c252.586-252.587 665.6-252.587 918.186 0 6.827 6.826 6.827 17.066 0 23.893 0 3.413-3.413 3.413-10.24 3.413zM727.04 785.067c-3.413 0-10.24 0-13.653-3.414-6.827-6.826-6.827-17.066 0-23.893L849.92 621.227c6.827-6.827 17.067-6.827 23.893 0s6.827 17.066 0 23.893L737.28 781.653s-3.413 3.414-10.24 3.414z"
      fill="#e74c3c"
    />
    <path
      d="M863.573 785.067c-3.413 0-10.24 0-13.653-3.414L713.387 645.12c-6.827-6.827-6.827-17.067 0-23.893s17.066-6.827 23.893 0L873.813 757.76c6.827 6.827 6.827 17.067 0 23.893 0 0-3.413 3.414-10.24 3.414z"
      fill="#e74c3c"
    />
    <path
      d="M795.307 921.6c-122.88 0-221.867-98.987-221.867-221.867s98.987-221.866 221.867-221.866 221.866 98.986 221.866 221.866S918.187 921.6 795.307 921.6zm0-409.6c-102.4 0-187.734 85.333-187.734 187.733s85.334 187.734 187.734 187.734S983.04 802.133 983.04 699.733 901.12 512 795.307 512z"
      fill="#e74c3c"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SvgWifi);
export default ForwardRef;
