import { Container, ScrollButton } from '@/components';

export const Main = () => {
  return (
    <section id="main" className="h-screen pt-[200px]">
      <Container>
        <div className="absolute top-[-350px] left-[-250px] rounded-full w-[641px] h-[641px] bg-[#36329E] blur-[147px]"></div>
        <div className="absolute top-[-350px] left-[-250px] rounded-full w-[371px] h-[371px] bg-[#AE67DA] blur-[117px]"></div>
        <div className="relative z-10">
          <div className="text-right flex justify-end">
            <div className="flex flex-col items-end">
              <div className="w-[126px] h-[3px] bg-[#8C7FE3] mb-4"></div>
              <h3 className="w-[200px]">
                We leverage cutting-edge technologies and a
                robust stack to deliver exceptional digital
                solutions
              </h3>
            </div>
          </div>
          <div className="my-[41px] text-center">
            <h2 className="mb-8 text-h2 flex flex-col">
              <span className="text-start">
                Where your ideas{' '}
              </span>
              <span className="text-end">
                meet our solutions
              </span>
            </h2>
            <ScrollButton
              scrollId="contacts"
              title="Contact Us"
              className="py-3 px-8 bg-purple-400"
            />
          </div>
          <div>
            <div>
              <div className="w-[126px] h-[3px] bg-[#8C7FE3] mb-4"></div>
              <h3 className="w-[215px]">
                Our team specializes in creating dynamic,
                scalable, and user-centric applications
                tailored to meet our clients' unique
                business needs
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-50px] right-[-250px] rounded-full w-[441px] h-[443px] bg-[#2B287B] blur-[147px]"></div>
        <div className="absolute bottom-[-50px] right-[-250px] rounded-full w-[238px] h-[238px] bg-[#AE67DA] blur-[100px]"></div>
      </Container>
    </section>
  );
};
