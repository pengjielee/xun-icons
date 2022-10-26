import * as React from "react";

const SvgWechat = (props: React.SVGProps<SVGSVGElement>) => {
  const { size, fill, style } = props;
  return (
    <svg
      {...props}
      className="wechat_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fontSize={size || 32}
      fill={fill || "currentColor"}
      style={style}
    >
      <path
        d="M368.832 374.816a26.656 26.656 0 00.128 53.28 26.656 26.656 0 00-.128-53.28m133.248 53.28a26.592 26.592 0 10-.288-53.248 26.656 26.656 0 00.32 53.248m64.288 85.792a22.24 22.24 0 00-22.08 22.336 22.048 22.048 0 0022.08 22.016 21.984 21.984 0 0022.08-22.272 22.144 22.144 0 00-22.08-22.08m221.76 74.592c-1.76 25.728-11.36 48.384-27.2 68.48a150.112 150.112 0 01-28.576 27.68c-5.952 4.448-7.104 7.68-5.216 14.848 2.496 9.44 4.992 18.848 7.584 28.288.736 2.72.64 5.216-1.792 7.04-2.336 1.888-4.736 1.28-7.072-.096-11.648-6.752-23.36-13.44-34.912-20.224a19.712 19.712 0 00-16.256-2.08c-44.992 12.128-89.088 9.6-131.744-9.408-31.04-13.824-56.096-34.784-72.736-64.864a116.704 116.704 0 01-14.752-63.136c1.344-27.584 11.52-51.84 29.024-72.992 21.824-26.368 49.984-43.136 82.528-52.8a196.192 196.192 0 0158.72-7.68 183.744 183.744 0 0181.6 19.712c29.92 15.04 53.76 36.576 68.8 66.88 9.44 19.04 13.44 39.264 12 60.384m-344.224 33.152a237.408 237.408 0 01-73.472-8.96 20.8 20.8 0 00-16.8 2.208L311.712 639.2l-1.696.96c-2.72 1.6-5.44 1.792-8.032-.32-2.592-1.984-2.912-4.8-2.144-7.744.96-3.744 2.048-7.424 3.04-11.136 2.176-8.064 4.352-16.128 6.464-24.224 1.92-7.392.288-11.968-5.856-16.544a182.176 182.176 0 01-31.264-29.12c-18.432-21.888-30.72-46.656-35.008-75.072a139.52 139.52 0 0114.72-87.264c16.512-31.68 41.44-55.136 72.32-72.544a219.488 219.488 0 0180.384-26.24c10.24-1.28 20.576-2.016 30.912-1.952a226.464 226.464 0 0193.92 19.648c35.744 16.128 65.088 39.776 85.408 73.792 8.256 13.856 14.048 28.672 17.28 44.48.64 2.784.608 2.784-2.24 2.688a211.072 211.072 0 00-78.4 11.648c-34.24 12.128-63.264 31.584-85.056 61.024a131.84 131.84 0 00-26.272 68.736 124.32 124.32 0 005.568 49.056c.64 2.016.448 2.528-1.824 2.56M512 64C264.576 64 64 264.576 64 512c0 247.456 200.576 448 448 448s448-200.544 448-448c0-247.424-200.576-448-448-448m165.408 449.888a22.304 22.304 0 00-22.144 22.08 22.112 22.112 0 1044.256.256 22.304 22.304 0 00-22.112-22.336"
        fill="#5FB85F"
      />
    </svg>
  );
};

export default SvgWechat;
