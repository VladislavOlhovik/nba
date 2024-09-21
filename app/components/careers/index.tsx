import { Container } from '../container';
import { Card } from './card';

const jobCards = [
  {
    title: 'Mobile App Developer',
    type: 'Remote Job',
    experience: '4-5 years',
    description:
      'We are seeking a highly skilled Mobile App Developer to join our talented development team. As a Mobile App Developer, you will be responsible for designing, developing, and maintaining innovative mobile applications for various platforms.',
    link: 'https://example.com/mobile-app-developer',
  },
  {
    title: 'Frontend Developer',
    type: 'Full-Time Job',
    experience: '2-3 years',
    description:
      "Join our creative team as a Frontend Developer. You'll work with designers and back-end developers to create beautiful, responsive web applications that offer exceptional user experiences.",
    link: 'https://example.com/frontend-developer',
  },
  {
    title: 'Backend Developer',
    type: 'Remote Job',
    experience: '5-6 years',
    description:
      'We are looking for a Backend Developer to design and develop server-side logic, ensure high performance and responsiveness, and integrate with front-end elements built by your colleagues.',
    link: 'https://example.com/backend-developer',
  },
  {
    title: 'Full Stack Developer',
    type: 'Contract Job',
    experience: '3-4 years',
    description:
      'Looking for a versatile Full Stack Developer who can handle both front-end and back-end development tasks. The ideal candidate should be comfortable working on various layers of the application stack.',
    link: 'https://example.com/full-stack-developer',
  },
  {
    title: 'DevOps Engineer',
    type: 'Part-Time Job',
    experience: '3-5 years',
    description:
      "Join us as a DevOps Engineer and help streamline our software development process. You'll manage and improve our CI/CD pipelines and ensure our applications are running smoothly and efficiently.",
    link: 'https://example.com/devops-engineer',
  },
  {
    title: 'Data Scientist',
    type: 'Remote Job',
    experience: '4-6 years',
    description:
      'We are in search of a Data Scientist to analyze complex datasets and provide actionable insights. You will work closely with cross-functional teams to build data-driven solutions and drive business growth.',
    link: 'https://example.com/data-scientist',
  },
];

export const Careers = () => {
  return (
    <section id="careers" className="pt-32">
      <Container>
        <h2 className="text-h5 md:text-h3 xl:text-h2 mb-[40px] flex flex-col">
          <span className="text-start">
            Join Us on Our Journey
          </span>
          <span className="text-end">At NBA Soft</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {jobCards.map(item => {
            return <Card key={item.title} {...item} />;
          })}
        </div>
      </Container>
    </section>
  );
};
