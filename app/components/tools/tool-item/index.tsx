'use client';

import { useState } from 'react';

import { DownArrow } from '@/components/icons';

type PracticeAreaItemProps = {
  item: {
    category: string;
    description: string;
  };
};
export const ToolItem = ({
  item: { category, description },
}: PracticeAreaItemProps) => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setExpand(prev => !prev);
        }}
        className={`flex justify-between items-center border-b-[1px] border-white py-5
        hover:text-purple-100 active:text-purple-200 group cursor-pointer
        ${expand ? 'text-purple-200' : ''}`}
      >
        <h3 className="text-h4">{category}</h3>
        <div
          className={`transition-all duration-500 ease-in-out 
        ${expand ? 'rotate-x-180' : ''}`}
        >
          <DownArrow
            className={`group-hover:stroke-purple-100 
        group-active:stroke-purple-200 
        ${expand ? 'stroke-purple-200' : ''}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expand
            ? 'max-h-[600px] sm:max-h-[600px]'
            : 'max-h-0'
        }`}
      >
        <p className="py-5 text-body2 border-b-[1px] border-white">
          {description}
        </p>
      </div>
    </div>
  );
};
