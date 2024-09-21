import { Container, Logo, NavLinks } from '@/components';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/icons';
import { CONTACT_INFO } from '@/lib/definitions';

const {
  ADDRESS,
  ADDRESS_LINK,
  EMAIL,
  FACEBOOK_LINK,
  FORMATTED_PHONE,
  INSTAGRAM_LINK,
  PHONE,
  LINKEDIN_LIMK,
  TWITTER_LINK,
} = CONTACT_INFO;

const ContactLinks = [
  {
    href: ADDRESS_LINK,
    title: ADDRESS,
    target: '_blank',
  },
  {
    href: `mailto:${EMAIL}`,
    title: EMAIL,
    target: '_blank',
  },
  {
    href: `tel:${PHONE}`,
    title: FORMATTED_PHONE,
    target: '_blank',
  },
];
const SocialMediaLinks = [
  {
    href: FACEBOOK_LINK,
    title: (
      <>
        <FacebookIcon className="stroke-white group-hover:stroke-purple-100 group-active:stroke-purple-200" />
      </>
    ),
    ariaLabel: 'Facebook profile of NBA soft',
    target: '_blank',
  },
  {
    href: INSTAGRAM_LINK,
    title: (
      <>
        <InstagramIcon className="stroke-white group-hover:stroke-purple-100 group-active:stroke-purple-200" />
      </>
    ),
    ariaLabel: 'Instagram profile of NBA soft',
    target: '_blank',
  },
  {
    href: LINKEDIN_LIMK,
    title: (
      <>
        <LinkedinIcon className="stroke-white group-hover:stroke-purple-100 group-active:stroke-purple-200" />
      </>
    ),
    ariaLabel: 'Linkedin profile of NBA soft',
    target: '_blank',
  },
  {
    href: TWITTER_LINK,
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
    <footer className="py-6 md:py-40 bg-[#195FE1] overflow-hidden">
      <Container>
        <Logo />
        <div className="grid mt-4 md:mt-6 grid-cols-1 md:grid-cols-[1fr_2fr]">
          <div className="mb-[49px] md:mb-0">
            <div className="absolute top-[-140px] rotate-[-164deg] left-40 md:-left-[300px] xl:left-0 w-[375px] h-[610px] rounded-full bg-[#5956E6] blur-[72px]"></div>
            <NavLinks
              screen="desktop"
              className="flex flex-col gap-4 z-[5] relative"
            />
          </div>
          <div className="relative">
            <div className="absolute hidden md:block top-[-238px] rotate-[-157deg] rounded-full md:-right-40 xl:right-0 w-[535px] h-[610px] bg-[#8D6AF4] blur-[150px]"></div>
            <div className="flex flex-col gap-4 flex-col-reverse md:justify-between h-full z-[5] relative">
              <div className="flex flex-col gap-2 md:gap-4">
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
                        key={i}
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
        <div className="text-body5 mt-[26px] md:mt-[89px] mx-auto w-fit z-[5] relative">
          © 2024 NBA Soft IT-Company
        </div>
      </Container>
    </footer>
  );
};
