import { Container, ScrollButton } from '@/components';
import { ToolItem } from './tool-item';

const toolsDescriptions = [
  {
    category: 'Mobile',
    description:
      'Our mobile development toolkit includes a range of powerful technologies to build robust, high-performance applications for both iOS and Android. From native development with Swift and Kotlin to cross-platform solutions with React Native and Flutter, we ensure seamless and engaging user experiences.',
  },
  {
    category: 'Web',
    description:
      'Our web development stack is built on cutting-edge technologies that enable the creation of dynamic, responsive, and SEO-friendly websites. Leveraging frameworks like React, Next.js, and Vue.js, we deliver fast-loading, visually stunning, and highly interactive web applications.',
  },
  {
    category: 'DevOps',
    description:
      'Our DevOps tools streamline the software development lifecycle, enabling continuous integration and continuous delivery (CI/CD). By utilizing tools like Docker, Kubernetes, Jenkins, and Terraform, we ensure reliable deployment, scaling, and monitoring of applications across various environments.',
  },
  {
    category: 'Backend',
    description:
      'Our backend development expertise covers a wide range of technologies to build scalable, secure, and efficient server-side applications. Whether using Node.js for fast and asynchronous applications, Python for data-heavy projects, or Java for enterprise-level solutions, we have the right tools for every need.',
  },
  {
    category: 'Language',
    description:
      'Our language arsenal includes a versatile selection of programming languages tailored to meet the specific demands of each project. From the flexibility of JavaScript and Python to the performance of Rust and Go, we choose the best language for the job to ensure high-quality and efficient code.',
  },
  {
    category: 'Framework',
    description:
      'Our framework library includes industry-leading tools that provide structure and efficiency to our development process. Whether using Django for Python web applications, Spring Boot for Java, or Express.js for Node.js, we build scalable and maintainable applications tailored to your business needs.',
  },
];

export const Tools = () => {
  return (
    <section id="tools" className="pt-32">
      <Container>
        <h2 className="text-body1 md:text-h5 xl:text-h3 mb-[38px] md:mb-[62px] xl:mb-[70px]">
          Our experts build the future
          <br /> with these powerful tools
        </h2>
        <div className="flex justify-between">
          <div className="md:max-w-[360px] xl:max-w-[578px]">
            {toolsDescriptions.map(item => {
              return (
                <ToolItem key={item.category} item={item} />
              );
            })}
          </div>
          <div className="hidden md:block md:max-w-[224px] xl:max-w-[324px]">
            <p className="md:text-body6 xl:text-body2 mb-8">
              Let our specialists identify the most
              effective solution for you
            </p>
            <ScrollButton
              scrollId="contacts"
              title="Order a consultation"
              className="bg-purple-300 md:px-[25px] md:py-[12px] xl:px-[52px] xl:py-[14px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
