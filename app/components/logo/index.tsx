'use client';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <h1
      onClick={() => {
        const section = document.getElementById('main');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className={`text-body1 relative z-[5] cursor-pointer ${className}`}
    >
      NBA soft
    </h1>
  );
};
