import { HamburgerButton } from '@/components';

import { Logo, NavLinks } from '@/components';

type SideNavBarProps = {
  isOpen: boolean;
  handleClick: () => void;
};

export const SideNavBar = ({
  isOpen,
  handleClick,
}: SideNavBarProps) => {
  return (
    <>
      <HamburgerButton
        isOpen={isOpen}
        onClick={handleClick}
      />
      <div
        className={`fixed top-0 right-0 bg-white w-full md:max-w-[440px] z-50 px-8 h-screen 
          transition-transform duration-300 ease-in-out transform 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between gap-6 py-7">
          <div onClick={handleClick}>
            <Logo className="text-dark-400" />
          </div>
          <HamburgerButton
            isOpen={isOpen}
            onClick={handleClick}
          />
        </div>
        <NavLinks
          screen="mobile"
          handleClick={handleClick}
        />
      </div>
    </>
  );
};
