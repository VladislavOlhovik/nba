import { Container } from '@/components';

const companyValues = [
  {
    title: 'Transparency',
    description:
      'Honesty and clarity in all our interactions form the foundation of our business relationships.',
  },
  {
    title: 'Excellence',
    description:
      'We are committed to excellence in everything we do, from the code we write to the support we provide.',
  },
  {
    title: 'Innovation',
    description:
      'We constantly explore new technologies and approaches to deliver solutions that are not just effective but also future-proof.',
  },
  {
    title: 'Collaboration',
    description:
      'We believe in the power of teamwork, both within our organization and in partnership with our clients, to achieve outstanding results.',
  },
];

const backgroundColors = [
  'bg-[linear-gradient(108deg,rgba(89,86,230,0.00)_49.65%,rgba(89,86,230,0.20)_60.47%),linear-gradient(90deg,rgba(89,86,230,0.00)_0.01%,rgba(89,86,230,0.50)_71.13%)]',
  'bg-[linear-gradient(108deg,rgba(80,208,225,0.00)_49.65%,rgba(80,208,225,0.20)_60.47%),linear-gradient(90deg,rgba(80,208,225,0.00)_0.01%,rgba(80,208,225,0.50)_71.13%)]',
  'bg-[linear-gradient(108deg,rgba(174,103,218,0.00)_49.65%,rgba(174,103,218,0.20)_60.47%),linear-gradient(90deg,rgba(174,103,218,0.00)_0.01%,rgba(174,103,218,0.50)_71.13%)]',
];

interface ValueCardProps {
  title: string;
  description: string;
  width: number;
  bg: string;
}

const ValueCard = ({
  title,
  description,
  width,
  bg,
}: ValueCardProps) => (
  <div
    style={{ width: `${width}%` }}
    className={`py-[42px] px-[85px] rounded-r-full ${bg}`}
  >
    <h3 className="text-h5 mb-4">{title}</h3>
    <p className="text-body2">{description}</p>
  </div>
);

export const Values = () => {
  return (
    <section id="values" className="min-h-screen pt-32">
      <Container>
        <h2 className="text-h3 mb-[48px]">Our values</h2>
        <div className="flex flex-col gap-8">
          {companyValues.map(
            ({ description, title }, i) => (
              <ValueCard
                bg={
                  backgroundColors[
                    i % backgroundColors.length
                  ]
                }
                key={title}
                title={title}
                description={description}
                width={
                  100 - 10 * (companyValues.length - 1 - i)
                }
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};
