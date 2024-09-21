import { Container } from '@/components';

import { ServicesGrid } from './services-grid';

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen pt-20 md:pt-32"
    >
      <Container>
        <h2 className="flex md:mb-16 flex-col text-center text-h3 md:text-h1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
          <span className="text-start xl:pl-40">
            Services
          </span>
          <span>We</span>
          <span className="text-end xl:pr-44">
            {' '}
            Provide
          </span>
        </h2>
        <ServicesGrid />
      </Container>
    </section>
  );
};
