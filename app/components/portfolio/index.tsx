import { Container } from '@/components';

const jobExamples = [
  {
    imgUrl: '/example1.png',
    url: '',
  },
  {
    imgUrl: '/example2.png',
    url: '',
  },
  {
    imgUrl: '/example3.png',
    url: '',
  },
  {
    imgUrl: '/example4.png',
    url: '',
  },
  {
    imgUrl: '/example5.png',
    url: '',
  },
  {
    imgUrl: '/example6.png',
    url: '',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen py-32">
      <Container>
        <h2 className="text-h3 px-[31px] py-[43px] bg-gray-200 rounded-[70px] w-fit mx-auto mb-[120px]">
          Made by NBA Soft
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {jobExamples.map(({ imgUrl, url }, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
                className={`w-[314px] h-[322px] rounded-[20px] bg-cover bg-center
                  ${(i - 1) % 3 === 0 ? 'relative top-[63px]' : ''}`}
              ></div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
