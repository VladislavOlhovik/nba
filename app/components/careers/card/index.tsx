import { LinkButton } from '@/components/buttons';

interface CardProps {
  title: string;
  type: string;
  experience: string;
  description: string;
  link: string;
}

export const Card = ({
  description,
  experience,
  link,
  title,
  type,
}: CardProps) => {
  return (
    <div className="py-6 px-4 bg-gradient-to-b from-[#151618] to-[#0A0B0D] rounded-[23px] border border-[1px] border-solid border-grey-300">
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="text-body1">{title}</h3>
        <h4 className="text-body3">{type}</h4>
        <h4 className="text-body3">{experience}</h4>
      </div>
      <p className="text-body3 mb-8 h-44 overflow-scroll">
        {description}
      </p>
      <LinkButton
        title="Apply"
        href={link}
        className="bg-purple-300 block text-center"
      />
    </div>
  );
};
