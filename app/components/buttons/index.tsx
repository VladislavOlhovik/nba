import React, { LegacyRef } from 'react';
import { BgGradient } from '../icons';

interface ScrollButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  scrollId: string;
  pending?: boolean;
}

export const ScrollButton = ({
  title,
  className,
  scrollId,
  ...props
}: ScrollButtonProps) => {
  return (
    <button
      onClick={() => {
        const section = document.getElementById(scrollId);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }}
      {...props}
      className={`relative overflow-hidden rounded-full text-button bg-transperent group ${className}`}
    >
      <span className="relative z-10 group-active:text-purple-400">
        {title}
      </span>
      <BgGradient className="absolute top-[-35px] left-0 invisible group-hover:visible" />
      <BgGradient className="absolute top-[-35px] right-0 invisible group-hover:visible" />
    </button>
  );
};
export const StyledButton = React.forwardRef<
  HTMLButtonElement,
  Omit<ScrollButtonProps, 'scrollId'>
>(({ title, className, pending, ...props }, ref) => {
  return (
    <button
      ref={ref}
      aria-label="Form submission button"
      disabled={pending}
      className={`flex justify-center relative w-[203px] overflow-hidden rounded-full text-button py-3 px-8 group ${className}`}
      {...props}
    >
      {pending ? (
        <>
          <div className="flex justify-around items-center h-6 w-[100px]">
            <div className="w-4 h-4 bg-purple-100 rounded-full animate-dot1"></div>
            <div className="w-4 h-4 bg-purple-100 rounded-full animate-dot2"></div>
            <div className="w-4 h-4 bg-purple-100 rounded-full animate-dot3"></div>
          </div>
        </>
      ) : (
        <>
          <span className="relative z-10 group-active:text-purple-400">
            {title}
          </span>
          <BgGradient className="absolute top-[-35px] left-0 invisible group-hover:visible" />
          <BgGradient className="absolute top-[-35px] right-0 invisible group-hover:visible" />
        </>
      )}
    </button>
  );
});

StyledButton.displayName = 'StyledButton';

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

export const LinkButton = ({
  title,
  className,
  href,
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      className={`relative overflow-hidden rounded-full text-button py-3 bg-transperent group ${className}`}
    >
      <span className="relative z-10 group-active:text-purple-400">
        {title}
      </span>
      <BgGradient className="absolute top-[-35px] left-0 invisible group-hover:visible" />
      <BgGradient className="absolute top-[-35px] right-0 invisible group-hover:visible" />
    </a>
  );
};
