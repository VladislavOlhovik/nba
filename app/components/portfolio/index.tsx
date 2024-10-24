import { Container } from '@/components';

const jobExamples = [
  {
    imgUrl: '/circlek.png',
    url: 'https://www.circlek.com/',
  },
  {
    imgUrl: '/flipsidegroup.png',
    url: 'https://flipsidegroup.com/',
  },
  {
    imgUrl: '/hd.png',
    url: 'https://www.harley-davidson.com/us/en/index.html',
  },
  {
    imgUrl: '/GoCatch.png',
    url: 'https://www.gocatch.fish/',
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
    <section
      id="portfolio"
      className="py-20 md:pt-32 xl:min-h-screen xl:py-32"
    >
      <Container>
        <h2 className="text-button md:text-h5 xl:text-h3 py-[18px] px-[30px] md:px-[64px] xl:px-[31px] md:py-[43px] bg-gray-200 rounded-[70px] w-fit mx-auto mb-[40px] xl:mb-[120px]">
          Made by NBA Soft
        </h2>
        <div className="grid grid-cols-3 gap-1 md:gap-4 xl:gap-8">
          {jobExamples.map(({ imgUrl, url }, i) => {
            return (
              <a key={i} href={url} target="_blank">
                <div
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                  }}
                  className={`w-[104px] h-[84px] md:w-[224px] md:h-[194px] xl:w-[314px] xl:h-[322px] rounded-[12px] md:rounded-[20px] bg-cover bg-center
                    ${(i - 1) % 3 === 0 ? 'relative top-4 md:top-[32px] xl:top-[63px]' : ''}`}
                ></div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
