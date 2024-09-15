import { Container } from '@/components';

export const Mission = () => {
  return (
    <section
      id="mission"
      className="h-screen flex items-center justify-center"
    >
      <Container>
        <h2 className="text-h3">Our mission</h2>
        <div className="relative mt-12">
          <div
            className={`absolute top-[205px] w-full h-[1px] bg-white`}
          ></div>
          <div className="absolute left-[345px] h-full w-[1px] bg-white"></div>
          <div className="grid grid-cols-[1fr_2fr] gap-16 py-8">
            <p className="text-body2 text-end">
              To empower businesses with cutting-edge
              software solutions that drive growth,
              efficiency, and innovation.
            </p>
            <div></div>
            <div></div>
            <p className="text-start text-body2">
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
