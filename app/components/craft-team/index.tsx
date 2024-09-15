import { Container } from '@/components';

export const CraftTeam = () => {
  return (
    <section id="team">
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <div className="absolute top-[160px] left-[-200px] rounded-full w-[437px] h-[437px] bg-[#2B287B] blur-[147px]"></div>
        <div className="absolute top-[160px] left-[-200px] rounded-full w-[227px] h-[200px] bg-[#AE67DA] blur-[100px]"></div>
        <div className="w-full mb-[72px]">
          <h2 className="mb-8 text-h3 flex flex-col z-10 relative">
            <span className="text-start">
              Craft the perfect team{' '}
            </span>
            <span className="text-end">
              for your unique needs.
            </span>
          </h2>
        </div>
        <div className="flex justify-end w-full">
          <p className="text-body2 text-end w-[500px]">
            Our pre-vetted developers bring a diverse range
            of expertise to the table, ensuring a custom
            software solution that aligns seamlessly with
            your vision
          </p>
        </div>
      </Container>
    </section>
  );
};
