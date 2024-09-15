import { SVGProps } from 'react';

export const InstagramIcon = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#F5F5F5"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"
    />
    <path
      stroke="#F5F5F5"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11.37a4 4 0 1 1-7.913 1.173A4 4 0 0 1 16 11.37Z"
    />
    <path
      stroke="#F5F5F5"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 6.5h.01"
    />
  </svg>
);
