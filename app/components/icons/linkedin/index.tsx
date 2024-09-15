import { SVGProps } from 'react';

export const LinkedinIcon = ({
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
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM6 9H2v12h4V9ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
