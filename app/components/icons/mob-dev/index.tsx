import { SVGProps } from 'react';
export const MobileDev = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={88}
    fill="none"
    {...props}
  >
    <g
      stroke="#B8B8B8"
      strokeWidth={3.103}
      clipPath="url(#a)"
    >
      <rect
        width={52.744}
        height={83.769}
        x={1.833}
        y={2.116}
        rx={10.859}
      />
      <path
        strokeLinecap="round"
        d="M21.999 9.872h12.41M17.567 37.795 9.59 47.103M17.567 56.41 9.59 47.104M38.843 37.795l7.978 9.308M38.843 56.41l7.978-9.307M25.546 59.513l5.319-24.82"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v88H0z" />
      </clipPath>
    </defs>
  </svg>
);
