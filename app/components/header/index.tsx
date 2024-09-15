'use client';

import { useEffect, useState } from 'react';

import { Container, Logo, NavLinks } from '@/components';

export const Header = () => {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-12 z-[50] 
      ${theme === 'blur' ? 'bg-[rgba(10,11,13,0.10)] backdrop-blur-[10.05px]' : ''}`}
    >
      <Container className="flex items-center justify-between">
        <Logo />
        <NavLinks className="w-[623px] justify-between" />
      </Container>
    </header>
  );
};
