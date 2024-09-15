import { SVGProps } from 'react';

export const Clip = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#B8B8B8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 19.5v-12a6 6 0 1 0-12 0v12a4 4 0 1 0 8 0v-12a2 2 0 1 0-4 0v12"
        className={className}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
