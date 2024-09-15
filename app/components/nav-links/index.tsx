'use client';

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
}

export const NavLinks = ({ className }: NavLinksProps) => {
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

  return (
    <ul className={`flex text-body4 ${className}`}>
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
  );
};
