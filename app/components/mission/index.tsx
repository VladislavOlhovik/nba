import { Container } from '@/components';

export const Mission = () => {
  return (
    <section
      id="mission"
      className="py-20 md:py-0 md:h-screen flex items-center justify-center"
    >
      <Container>
        <h2 className="text-h3">Our mission</h2>
        <div className="relative mt-12">
          <div
            className={`absolute top-[90px] md:top-[205px] -left-10 md:left-0 w-[380px] md:w-full h-[1px] bg-white`}
          ></div>
          <div className="absolute -left-2 md:left-[345px] h-full w-[1px] bg-white"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-8">
            <p className="text-body5 md:text-body3 xl:text-body2 text-start md:text-end">
              To empower businesses with cutting-edge
              software solutions that drive growth,
              efficiency, and innovation.
            </p>
            <div></div>
            <div></div>
            <p className="text-start text-body5 md:text-body3 xl:text-body2">
              We believe that transformative power of
              technology and its potential can solve complex
              challenges, enhance operations, and connect
              people around the globe.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
