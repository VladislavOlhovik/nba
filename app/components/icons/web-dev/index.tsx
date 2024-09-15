import { SVGProps } from 'react';

export const WebDev = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={88}
    height={76}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#B8B8B8"
        strokeLinecap="round"
        strokeWidth={3.114}
        d="m28.719 35.237-9.342 10.51M28.719 56.256l-9.342-10.51M59.858 35.237l9.342 10.51M59.858 56.256l9.342-10.51M41.175 59.76l6.228-28.026"
      />
      <rect
        width={84.077}
        height={71.621}
        x={2.249}
        y={2.15}
        stroke="#B8B8B8"
        strokeWidth={3.114}
        rx={10.899}
      />
      <path
        stroke="#B8B8B8"
        strokeWidth={3.114}
        d="M3.807 23.948H84.77"
      />
      <circle
        cx={13.148}
        cy={13.05}
        r={3.114}
        fill="#B8B8B8"
      />
      <circle
        cx={22.49}
        cy={13.05}
        r={3.114}
        fill="#B8B8B8"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h88v76H0z" />
      </clipPath>
    </defs>
  </svg>
);
