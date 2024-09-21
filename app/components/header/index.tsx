'use client';

import { useCallback, useEffect, useState } from 'react';

import { Container, Logo, NavLinks } from '@/components';

import { SideNavBar } from './side-navbar';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<
    'transparent' | 'blur'
  >('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setTheme('blur');
      } else {
        setTheme('transparent');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-6 md:py-12 z-[50] 
      ${theme === 'blur' ? 'bg-[rgba(10,11,13,0.10)] backdrop-blur-[10.05px]' : ''}`}
    >
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="md:hidden">
          <SideNavBar
            handleClick={handleClick}
            isOpen={isOpen}
          />
        </div>
        <NavLinks
          screen="desktop"
          className="hidden justify-between md:flex md:w-[543px] xl:w-[623px]"
        />
      </Container>
    </header>
  );
};
