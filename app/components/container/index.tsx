interface ContainersProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
  ...props
}: ContainersProps) => {
  return (
    <div
      className={`relative mx-auto max-w-[344px] md:max-w-[704px] xl:max-w-[1004px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
