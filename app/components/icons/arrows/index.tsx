type ArrowType = {
  className: string;
};

export const DownArrow = ({
  className,
  ...props
}: ArrowType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={20}
    fill="none"
    {...props}
  >
    <path
      className={className}
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeWidth={3}
      d="m2 2 15.611 16M34 2.499l-16.389 15.5"
    />
  </svg>
);

type SmArrowType = {
  className: string;
};

export const SmRightArrow = ({
  className,
  ...props
}: SmArrowType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={19}
    fill="none"
    {...props}
    className={className}
  >
    <path
      className={className}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m1 17.5 9-7.99M1 1.5l9 7.99"
    />
  </svg>
);
