import { Container } from '@/components';

export const About = () => {
  return (
    <section
      id="about"
      className="md:min-h-screen pt-20 md:pt-32"
    >
      <Container>
        <div>
          <h3 className="text-h3 mb-10 md:mb-12">
            About us
          </h3>
          <p className="text-body5 md:text-body2">
            Founded on principles of
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="flex items-center justify-center transition-transform duration-300 ease-in-out transform translate-y-8 md:translate-y-28 group-hover:-translate-y-0 md:group-hover:-translate-y-5 rounded-full w-[134px] h-[134px] md:w-[437px] md:h-[437px] bg-gradient-to-b from-[rgba(174,103,218,0.00)] to-[rgba(174,103,218,0.50)]">
            <h2 className="text-body4 md:text-h4">
              Precision
            </h2>
          </div>
          <div className="relative flex flex-row">
            <h1 className="absolute top-4 md:top-16 left-1/2 transform -translate-x-1/2 w-max text-body1 md:text-h4 transition-opacity ease-in-out duration-1000 opacity-0 group-hover:opacity-100 ">
              NBA Soft
            </h1>
            <div className="flex items-center justify-center rotate-[45deg] transition-transform duration-300 ease-in-out transform translate-x-3 md:translate-x-10 group-hover:-translate-x-10 group-hover:translate-y-5 md:group-hover:-translate-x-20 md:group-hover:translate-y-10 rounded-full w-[134px] h-[134px] md:w-[437px] md:h-[437px] bg-gradient-to-b from-[rgba(80,208,225,0.50)] to-[rgba(80,208,225,0.00)]">
              <h2 className="text-body4 md:text-h4 rotate-[-45deg]">
                Innovation
              </h2>
            </div>
            <div className="flex items-center transition-transform duration-300 ease-in-out transform -translate-x-3 md:-translate-x-10 group-hover:translate-x-10 group-hover:translate-y-5 md:group-hover:translate-x-20 md:group-hover:translate-y-10 justify-center rotate-[-45deg] rounded-full w-[134px] h-[134px] md:w-[437px] md:h-[437px] bg-gradient-to-b from-[rgba(89,86,230,0.50)] to-[rgba(89,86,230,0.00)]">
              <h2 className="text-body4 md:text-h4 rotate-[45deg]">
                Integrity
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-24 flex justify-end">
          <p className="text-body5 w-[288px] text-right md:text-body2 md:w-[500px]">
            We strive to deliver services that exceed
            expectations and set new standards in the tech
            industry.
          </p>
        </div>
      </Container>
    </section>
  );
};
