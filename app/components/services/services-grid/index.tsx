'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const developmentDescriptions = [
  {
    category: 'Web Development',
    icon: (
      <Image
        alt="web-dev"
        src={'/web-dev.png'}
        width={88}
        height={76}
      />
    ),
    overview:
      "We're passionate about crafting exceptional web experiences. We leverage the power of web development to help businesses achieve their goals and thrive online.",
    technologies: [
      {
        name: 'JavaScript',
        description:
          'Injects interactivity into web pages, transforming them from static displays to engaging experiences.',
      },
      {
        name: 'TypeScript',
        description:
          'Adds optional static typing to JavaScript, improving code maintainability and catching errors early in the development process.',
      },
      {
        name: 'React',
        description:
          'Simplifies building complex user interfaces with reusable components, making web development faster and more maintainable.',
      },
      {
        name: 'Next.js',
        description:
          'Simplifies building high-performance and SEO-friendly web applications with React.',
      },
      {
        name: 'CSS',
        description:
          'Allows styling your website, separating presentation from content for a clean and maintainable design.',
      },
      {
        name: 'HTML',
        description:
          'Provides the foundation for web pages, structuring content and defining its meaning for browsers.',
      },
      {
        name: 'Node.js',
        description:
          'Node.js allows you to use JavaScript for both front-end and back-end development, streamlining web application creation.',
      },
    ],
  },
  {
    category: 'Mobile Development',
    icon: (
      <Image
        alt="mobile-dev"
        src={'/mobile-dev.png'}
        width={56}
        height={88}
      />
    ),
    overview:
      'Our team possesses extensive experience in both native mobile development and cross-platform solutions.',
    technologies: [
      {
        name: 'Swift',
        description:
          "Swift's focus on safety and speed makes it ideal for building high-performance and reliable applications for Apple devices.",
      },
      {
        name: 'Kotlin',
        description:
          'Offers concise and readable code for Android development, improving developer productivity and code maintainability.',
      },
      {
        name: 'React Native',
        description:
          'Let us build native-looking mobile apps for iOS and Android using a single JavaScript codebase.',
      },
    ],
  },
  {
    category: 'Testing & Quality Assurance',
    icon: (
      <Image
        alt="QA"
        src={'/QA.png'}
        width={88}
        height={76}
      />
    ),
    overview:
      'Quality is at the core of our development process. We are experienced in writing and maintaining unit tests to preserve code integrity throughout the development lifecycle.',
    technologies: [
      {
        name: 'End-to-End Testing (E2E)',
        description:
          'Verifies the entire user journey of your application, ensuring a smooth and consistent experience.',
      },
      {
        name: 'A/B Testing',
        description:
          'Helps to discover the website or app version that resonates most with your audience by systematically comparing variations and allows us to optimize user experiences based on real user data.',
      },
    ],
  },
  {
    category: 'Blockchain Development',
    icon: (
      <Image
        alt="chai-dev"
        src={'/chain-dev.png'}
        width={76}
        height={76}
      />
    ),
    overview:
      'We offer innovative solutions that tap into the potential of decentralized networks and smart contracts, ensuring transparency, security, and efficiency.',
    technologies: [
      {
        name: 'Solidity',
        description:
          'Provides the tools for programmers to build secure and automated applications on the blockchain, enabling a wide range of innovative use cases.',
      },
      {
        name: 'Ethereum',
        description:
          'Allows for the creation of secure, automated applications (dApps) and agreements (smart contracts) without a central authority.',
      },
    ],
  },
];

export const ServicesGrid = () => {
  const circleWidth = 200;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [circlePossition, setCirclePossition] = useState({
    dX: 0,
    dY: 0,
  });
  const [containerInfo, setContainerInfo] = useState({
    width: 0,
    startPosY: 0,
    endPosY: 0,
  });

  useEffect(() => {
    const updateContainerInfo = () => {
      if (containerRef.current) {
        const rect =
          containerRef.current.getBoundingClientRect();
        setContainerInfo({
          width: rect.width,
          startPosY:
            rect.top +
            window.scrollY -
            window.screen.height / 2 +
            100,
          endPosY:
            rect.bottom +
            window.scrollY -
            window.screen.height / 2 +
            100,
        });
      }
    };
    updateContainerInfo();
    window.addEventListener('resize', updateContainerInfo);
    return () =>
      window.removeEventListener(
        'resize',
        updateContainerInfo
      );
  }, []);

  useEffect(() => {
    const amplitude = containerInfo.width / 2;
    const wavelength = Math.PI / 8;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (
        scrollY > containerInfo.startPosY &&
        scrollY < containerInfo.endPosY
      ) {
        const yPosition = scrollY - containerInfo.startPosY;
        const xPosition =
          containerInfo.width / 2 +
          (Math.sin(
            (2 * yPosition * wavelength) / 100 - Math.PI / 2
          ) > 0
            ? (amplitude - circleWidth) *
              Math.sin(
                (2 * yPosition * wavelength) / 100 -
                  Math.PI / 2
              )
            : amplitude *
              Math.sin(
                (2 * yPosition * wavelength) / 100 -
                  Math.PI / 2
              ));
        setCirclePossition({
          dX: xPosition,
          dY: yPosition,
        });
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerInfo]);

  return (
    <div ref={containerRef} className="relative">
      <div
        style={{
          transform: `translate(${circlePossition.dX}px, ${circlePossition.dY}px)`,
        }}
        className={'absolute top-0 left-0'}
      >
        <div
          style={{
            WebkitBackdropFilter: 'blur(40px)',
            backdropFilter: 'blur(40px)',
            filter: 'blur(40px)',
            width: `${circleWidth}px`,
          }}
          className="rounded-full h-[160px] bg-[#195FE1]"
        ></div>
        <div className="absolute blur-[40px] top-0 left-0 rounded-full w-[120px] h-[120px] bg-[#AE67DA]"></div>
      </div>
      {developmentDescriptions.map(
        ({ category, overview, technologies, icon }, i) => {
          return (
            <div className="relative z-20" key={category}>
              <div
                className={`absolute ${i === 0 ? 'top-[125px]' : 'top-[105px]'} w-full h-[1px] bg-white`}
              ></div>
              <div className="hidden md:block absolute md:left-[240px] xl:left-[340px] h-full w-[1px] bg-white"></div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                {i % 2 !== 0 ? (
                  <h3 className="text-h5 text-end text-purple-300">
                    {category}
                  </h3>
                ) : (
                  <div className="hidden md:flex justify-end items-end">
                    {icon}
                  </div>
                )}
                {i % 2 === 0 ? (
                  <h3
                    className={`flex items-end md:w-[400px] text-h5 text-start text-purple-300 ${i === 0 ? 'pt-16' : ''}`}
                  >
                    {category}
                  </h3>
                ) : (
                  <div className="hidden md:flex items-end">
                    {icon}
                  </div>
                )}
                <p className="hidden md:block text-end text-body3">
                  {overview}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
                  {technologies.map(
                    ({ description, name }) => {
                      return (
                        <div key={name}>
                          <h4 className="text-h5 text-purple-300">
                            {name}
                          </h4>
                          <p className="text-body3">
                            {description}
                          </p>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
