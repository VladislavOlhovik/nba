import { SVGProps } from 'react';

export const BgGradient = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={243}
    height={122}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="M99 58c0 20.987-17.685 38-39.5 38S20 78.987 20 58s17.685-38 39.5-38S99 37.013 99 58Z"
      />
    </g>
    <g filter="url(#c)">
      <path
        fill="url(#d)"
        d="M161 58c0 20.987-17.685 38-39.5 38S82 78.987 82 58s17.685-38 39.5-38S161 37.013 161 58Z"
      />
    </g>
    <g filter="url(#e)">
      <path
        fill="url(#f)"
        d="M223 58c0 20.987-17.685 38-39.5 38S144 78.987 144 58s17.685-38 39.5-38S223 37.013 223 58Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={59.5}
        x2={59.5}
        y1={20}
        y2={96}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BA5AF4" />
        <stop offset={1} stopColor="#5271D8" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={121.5}
        x2={121.5}
        y1={20}
        y2={96}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5271D8" />
        <stop offset={1} stopColor="#AE67DA" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={183.5}
        x2={183.5}
        y1={20}
        y2={96}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BA5AF4" />
        <stop offset={1} stopColor="#5271D8" />
      </linearGradient>
      <filter
        id="a"
        width={130.4}
        height={127.4}
        x={-5.7}
        y={-5.7}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood
          floodOpacity={0}
          result="BackgroundImageFix"
        />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_323_925"
          stdDeviation={12.85}
        />
      </filter>
      <filter
        id="c"
        width={130.4}
        height={127.4}
        x={56.3}
        y={-5.7}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood
          floodOpacity={0}
          result="BackgroundImageFix"
        />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_323_925"
          stdDeviation={12.85}
        />
      </filter>
      <filter
        id="e"
        width={130.4}
        height={127.4}
        x={118.3}
        y={-5.7}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood
          floodOpacity={0}
          result="BackgroundImageFix"
        />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_323_925"
          stdDeviation={12.85}
        />
      </filter>
    </defs>
  </svg>
);
