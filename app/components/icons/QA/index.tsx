import { SVGProps } from 'react';
export const QAIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={88}
    height={76}
    fill="none"
    {...props}
  >
    <rect
      width={84.857}
      height={72.857}
      x={1.571}
      y={1.571}
      stroke="#B8B8B8"
      strokeWidth={3.143}
      rx={11}
    />
    <path
      stroke="#B8B8B8"
      strokeWidth={3.143}
      d="M3.143 23.763h81.714"
    />
    <ellipse
      cx={12.572}
      cy={12.667}
      fill="#B8B8B8"
      rx={3.143}
      ry={3.167}
    />
    <ellipse
      cx={22}
      cy={12.667}
      fill="#B8B8B8"
      rx={3.143}
      ry={3.167}
    />
    <path
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeWidth={3.143}
      d="M15.715 38h31.428M15.715 57h31.428M53.715 57.001 60 63.334M69.43 50.667 60 63.334M53.715 38 60 44.333M69.43 31.667 60 44.334"
    />
  </svg>
);
