import { strict } from 'assert';
import { BgGradient } from '../icons';

interface ScrollButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  scrollId: string;
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
export const SubmitButton = ({
  title,
  className,
}: Omit<ScrollButtonProps, 'scrollId'>) => {
  return (
    <button
      type="submit"
      className={`relative overflow-hidden rounded-full text-button bg-transperent py-3 px-8 group ${className}`}
    >
      <span className="relative z-10 group-active:text-purple-400">
        {title}
      </span>
      <BgGradient className="absolute top-[-35px] left-0 invisible group-hover:visible" />
      <BgGradient className="absolute top-[-35px] right-0 invisible group-hover:visible" />
    </button>
  );
};

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
