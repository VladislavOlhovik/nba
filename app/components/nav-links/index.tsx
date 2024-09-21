'use client';

import { SmRightArrow } from '@/components/icons';
import { useEffect, useState } from 'react';

const navLinks = [
  {
    name: 'Services',
    id: 'services',
  },
  {
    name: 'About us',
    id: 'about',
  },
  {
    name: 'Portfolio',
    id: 'portfolio',
  },
  {
    name: 'Tools',
    id: 'tools',
  },
  {
    name: 'Careers',
    id: 'careers',
  },
  {
    name: 'Contacts',
    id: 'contacts',
  },
];

interface NavLinksProps {
  className?: string;
  screen: 'mobile' | 'desktop';
  handleClick?: () => void;
}

export const NavLinks = ({
  className,
  screen,
  handleClick,
}: NavLinksProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section =>
        observer.unobserve(section)
      );
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return screen === 'desktop' ? (
    <ul className={`text-body4 ${className}`}>
      {navLinks.map(({ name, id }, i) => {
        return (
          <li
            className={`${activeSection === id ? 'text-purple-200' : ''}
            hover:text-purple-100 active:text-purple-200 w-fit cursor-pointer`}
            key={i}
            onClick={() => scrollToSection(id)}
          >
            {name}
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className="flex flex-col gap-6 mb-6">
      {navLinks.map(({ id, name }) => {
        let active = activeSection === id;
        return (
          <li
            key={id}
            className={`flex items-center justify-between text-body2 font-medium 
            px-4 py-2 rounded-[5px] text-dark-400
            ${active ? 'bg-blue-100 text-blue-300' : ''}`}
            onClick={() => {
              scrollToSection(id);
              handleClick && handleClick();
            }}
          >
            {name}{' '}
            <SmRightArrow
              className={
                active
                  ? 'stroke-blue-300'
                  : 'stroke-dark-200'
              }
            />
          </li>
        );
      })}
    </ul>
  );
};
