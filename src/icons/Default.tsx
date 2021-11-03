import * as React from "react";

const SvgDefault = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="default_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path d="M511.573 100.267c227.627 0 412.16 184.405 412.16 411.733 0 223.403-178.218 405.333-400.426 411.563l-11.734.17c-227.2 0-411.306-184.362-411.306-411.733 0-223.445 177.834-405.333 399.616-411.563l11.69-.17zm0 55.466c-196.522 0-355.84 159.488-355.84 356.267s159.318 356.267 355.84 356.267c196.992 0 356.694-159.574 356.694-356.267 0-196.693-159.702-356.267-356.694-356.267z" />
      <path d="M539.733 631.765v55.467h-55.466v-55.467zm0-290.432v247.894h-55.466V341.333z" />
    </svg>
  );
};

export default SvgDefault;
