'use client';

export const Logo = () => {
  return (
    <h1
      onClick={() => {
        const section = document.getElementById('main');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="text-body1 relative z-[5] cursor-pointer"
    >
      NBA soft
    </h1>
  );
};
