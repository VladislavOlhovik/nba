import { Container, Logo, NavLinks } from '@/components';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/icons';

const ContactLinks = [
  {
    href: ``,
    title:
      'Port Maybellmouth,  Montana, 78926 Tia Parkways, 068',
    target: '_blank',
  },
  {
    href: `mailto:sba@sba.com`,
    title: 'sba@sba.com',
    target: '_blank',
  },
  {
    href: 'tel:+16508805109',
    title: '+1 650 880 5109',
    target: '_blank',
  },
];
const SocialMediaLinks = [
  {
    href: '',
    title: (
      <>
        <FacebookIcon className="stroke-white group-hover:stroke-purple-100 group-active:stroke-purple-200" />
      </>
    ),
    ariaLabel: 'Facebook profile of NBA soft',
    target: '_blank',
  },
  {
    href: '',
    title: (
      <>
        <InstagramIcon className="stroke-white group-hover:stroke-purple-100 group-active:stroke-purple-200" />
      </>
    ),
    ariaLabel: 'Instagram profile of NBA soft',
    target: '_blank',
  },
  {
    href: '',
    title: (
      <>
        <LinkedinIcon className="stroke-white group-hover:stroke-purple-100 group-active:stroke-purple-200" />
      </>
    ),
    ariaLabel: 'Linkedin profile of NBA soft',
    target: '_blank',
  },
  {
    href: '',
    title: (
      <>
        <TwitterIcon className="stroke-white group-hover:stroke-purple-100 group-active:stroke-purple-200" />
      </>
    ),
    ariaLabel: 'Twitter profile of NBA soft',
    target: '_blank',
  },
];

export const Footer = () => {
  return (
    <footer className="py-40 bg-[#195FE1] overflow-hidden">
      <Container>
        <Logo />
        <div className="grid mt-6 grid-cols-[1fr_2fr]">
          <div>
            <div className="absolute top-[-140px] rotate-[-164deg] left-0 w-[375px] h-[610px] rounded-full bg-[#5956E6] blur-[72px]"></div>
            <NavLinks className="flex-col gap-4 z-[5] relative" />
          </div>
          <div className="relative">
            <div className="absolute top-[-238px] rotate-[-157deg] rounded-full right-0 w-[535px] h-[610px] bg-[#8D6AF4] blur-[150px]"></div>
            <div className="flex flex-col justify-between h-full z-[5] relative">
              <div className="flex flex-col gap-4">
                {ContactLinks.map(
                  ({ href, target, title }, i) => {
                    return (
                      <a
                        key={i}
                        className="text-body5 hover:text-purple-100 active:text-purple-200"
                        href={href}
                        target={target}
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    );
                  }
                )}
              </div>
              <div className="flex gap-8">
                {SocialMediaLinks.map(
                  (
                    { ariaLabel, href, target, title },
                    i
                  ) => {
                    return (
                      <a
                        key={href}
                        target={target}
                        href={href}
                        aria-label={ariaLabel}
                        className="group"
                      >
                        {title}
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="text-body5 mt-[89px] mx-auto w-fit z-[5] relative">
          © 2024 NBA Soft IT-Company
        </div>
      </Container>
    </footer>
  );
};
